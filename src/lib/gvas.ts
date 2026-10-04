// Minimal GVAS binary <-> document codec for Tokyo Xtreme Racer saves.
// UE5.4+ property-tag format (complete type names in Node trees).
// Verified by exhaustive dissection of OptionData + UserData saves.
// Unknown property types fall back to raw-byte echo so saves never brick.

import type { Prop, SaveDoc, SaveHeader, TagData, TagNode, Value } from "./types.ts";

const FLAG_ARRAY_INDEX = 0x01;
const FLAG_GUID = 0x02;
const FLAG_EXTENSIONS = 0x04;
const FLAG_RAW = 0x08;
const FLAG_BOOL_TRUE = 0x10;

/** Fixed-size engine structs: path -> byte size. */
const FIXED_STRUCTS: Record<string, number> = {
  "/Script/CoreUObject.Vector": 24, // 3 x f64 (UE5 large-world)
  "/Script/CoreUObject.Rotator": 24, // 3 x f64
  "/Script/CoreUObject.Quat": 32, // 4 x f64
  "/Script/CoreUObject.LinearColor": 16, // 4 x f32
  "/Script/CoreUObject.DateTime": 8, // u64
  "/Script/CoreUObject.Guid": 16, // 4 x u32
};

const SCALAR_SIZES: Record<string, number> = {
  IntProperty: 4,
  Int64Property: 8,
  FloatProperty: 4,
  DoubleProperty: 8,
  Int8Property: 1,
  Int16Property: 2,
  UInt8Property: 1,
  UInt16Property: 2,
  UInt32Property: 4,
  UInt64Property: 8,
};

class Reader {
  pos = 0;
  view: DataView;
  bytes: Uint8Array;
  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
    this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
  }
  eof(): boolean {
    return this.pos >= this.bytes.length;
  }
  u8(): number {
    return this.view.getUint8(this.pos++);
  }
  u16(): number {
    const v = this.view.getUint16(this.pos, true);
    this.pos += 2;
    return v;
  }
  u32(): number {
    const v = this.view.getUint32(this.pos, true);
    this.pos += 4;
    return v;
  }
  i32(): number {
    const v = this.view.getInt32(this.pos, true);
    this.pos += 4;
    return v;
  }
  i64(): number {
    const v = this.view.getBigInt64(this.pos, true);
    this.pos += 8;
    if (v > BigInt(Number.MAX_SAFE_INTEGER) || v < BigInt(Number.MIN_SAFE_INTEGER)) {
      throw new Error(`Int64 out of safe range: ${v}`);
    }
    return Number(v);
  }
  f32(): number {
    const v = this.view.getFloat32(this.pos, true);
    this.pos += 4;
    return v;
  }
  f64(): number {
    const v = this.view.getFloat64(this.pos, true);
    this.pos += 8;
    return v;
  }
  take(n: number): Uint8Array {
    const s = this.bytes.slice(this.pos, this.pos + n);
    if (s.length !== n) throw new Error(`truncated read at ${this.pos}`);
    this.pos += n;
    return s;
  }
  fstr(): string {
    const len = this.i32();
    if (len === 0) return "";
    if (len < 0) {
      const n = -len;
      const raw = this.take(n * 2);
      let s = "";
      for (let i = 0; i < n; i++) {
        s += String.fromCharCode(raw[i * 2] | (raw[i * 2 + 1] << 8));
      }
      return s.replace(/\0+$/, "");
    }
    const raw = this.take(len);
    let s = "";
    for (let i = 0; i < len - 1; i++) s += String.fromCharCode(raw[i]);
    return s;
  }
  guid(): string {
    const a = this.u32();
    const b = this.u32();
    const c = this.u32();
    const d = this.take(4);
    const hx = (v: number, w: number) => v.toString(16).padStart(w, "0");
    const bx = Array.from(d)
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
    return `${hx(a, 8)}-${hx(b >>> 16, 4)}-${hx(b & 0xffff, 4)}-${hx(c >>> 16, 4)}-${hx(c & 0xffff, 4)}${bx}`;
  }
}

class Writer {
  private chunks: Uint8Array[] = [];
  private len = 0;
  bytes: Uint8Array = new Uint8Array(0);
  private buf = new Uint8Array(1024);
  private pos = 0;
  private commit() {
    if (this.pos > 0) {
      this.chunks.push(this.buf.slice(0, this.pos));
      this.len += this.pos;
      this.pos = 0;
    }
  }
  private need(n: number) {
    if (this.pos + n > this.buf.length) {
      this.commit();
      this.buf = new Uint8Array(Math.max(n, this.buf.length * 2));
    }
  }
  private view(): DataView {
    return new DataView(this.buf.buffer, this.buf.byteOffset);
  }
  u8(v: number) {
    this.need(1);
    this.buf[this.pos++] = v & 0xff;
  }
  i8(v: number) {
    this.need(1);
    this.view().setInt8(this.pos, v);
    this.pos += 1;
  }
  i16(v: number) {
    this.need(2);
    this.view().setInt16(this.pos, v, true);
    this.pos += 2;
  }
  u16(v: number) {
    this.need(2);
    this.view().setUint16(this.pos, v, true);
    this.pos += 2;
  }
  u32(v: number) {
    this.need(4);
    this.view().setUint32(this.pos, v >>> 0, true);
    this.pos += 4;
  }
  u64(v: number) {
    this.need(8);
    this.view().setBigUint64(this.pos, BigInt(v), true);
    this.pos += 8;
  }
  i32(v: number) {
    this.need(4);
    this.view().setInt32(this.pos, v, true);
    this.pos += 4;
  }
  i64(v: number) {
    this.need(8);
    this.view().setBigInt64(this.pos, BigInt(v), true);
    this.pos += 8;
  }
  f32(v: number) {
    this.need(4);
    this.view().setFloat32(this.pos, v, true);
    this.pos += 4;
  }
  f64(v: number) {
    this.need(8);
    this.view().setFloat64(this.pos, v, true);
    this.pos += 8;
  }
  raw(b: Uint8Array) {
    this.commit();
    this.chunks.push(b);
    this.len += b.length;
  }
  fstr(s: string) {
    if (s === "") {
      this.i32(0);
      return;
    }
    if (/^[\x00-\x7f]*$/.test(s)) {
      this.i32(s.length + 1);
      for (let i = 0; i < s.length; i++) this.u8(s.charCodeAt(i));
      this.u8(0);
      return;
    }
    this.i32(-(s.length + 1));
    for (let i = 0; i < s.length; i++) this.u16(s.charCodeAt(i));
    this.u16(0);
  }
  guid(id: string) {
    const p = id.split("-");
    if (p.length !== 5) throw new Error(`bad guid ${id}`);
    this.u32(parseInt(p[0], 16));
    this.u32((parseInt(p[1], 16) << 16) | parseInt(p[2], 16));
    this.u32((parseInt(p[3], 16) << 16) | parseInt(p[4].slice(0, 4), 16));
    const tail = p[4].slice(4);
    const out = new Uint8Array(4);
    for (let i = 0; i < 4; i++) out[i] = parseInt(tail.slice(i * 2, i * 2 + 2), 16);
    this.raw(out);
  }
  finish(): Uint8Array {
    this.commit();
    const out = new Uint8Array(this.len);
    let o = 0;
    for (const c of this.chunks) {
      out.set(c, o);
      o += c.length;
    }
    return out;
  }
}

function readNode(r: Reader): TagNode {
  const name = r.fstr();
  const n = r.u32();
  const inner: TagNode[] = [];
  for (let i = 0; i < n; i++) inner.push(readNode(r));
  return { name, inner };
}

function writeNode(w: Writer, nd: TagNode) {
  w.fstr(nd.name);
  w.u32(nd.inner.length);
  for (const c of nd.inner) writeNode(w, c);
}

function pathOf(nd: TagNode): string {
  if (nd.inner.length !== 1 || nd.inner[0].inner.length !== 0) {
    throw new Error(`bad path node ${nd.name}`);
  }
  return `${nd.inner[0].name}.${nd.name}`;
}

/** Node tree -> semantic tag data. */
function tagDataOf(nd: TagNode): TagData {
  const n = nd.name;
  if (n === "StructProperty") {
    if (nd.inner.length < 1 || nd.inner.length > 2) throw new Error("bad struct tag");
    const full = pathOf(nd.inner[0]);
    const guid = nd.inner.length === 2 ? nd.inner[1].name : undefined;
    return { k: "struct", structPath: full, guid };
  }
  if (n === "ArrayProperty") {
    if (nd.inner.length !== 1) throw new Error("bad array tag");
    return { k: "array", inner: innerDataOf(nd.inner[0]) };
  }
  if (n === "MapProperty") {
    if (nd.inner.length !== 2) throw new Error("bad map tag");
    return { k: "map", key: innerDataOf(nd.inner[0]), value: innerDataOf(nd.inner[1]) };
  }
  if (n === "SetProperty") {
    if (nd.inner.length !== 1) throw new Error("bad set tag");
    return { k: "set", inner: innerDataOf(nd.inner[0]) };
  }
  if (n === "ByteProperty") {
    if (nd.inner.length === 0) return { k: "byte" };
    if (nd.inner.length === 1) return { k: "byte", enumPath: pathOf(nd.inner[0]) };
    throw new Error("bad byte tag");
  }
  if (n === "EnumProperty") {
    if (nd.inner.length !== 2 || nd.inner[1].inner.length !== 0) throw new Error("bad enum tag");
    return { k: "enum", enumPath: pathOf(nd.inner[0]), container: nd.inner[1].name };
  }
  if (n === "BoolProperty") return { k: "bool", value: false };
  return { k: "other", type: n };
}

/** Inner (container element) node -> tag data. Bool has no flag here: 1 byte on the wire. */
function innerDataOf(nd: TagNode): TagData {
  if (nd.name === "BoolProperty") return { k: "bool", value: false, __elem: true } as unknown as TagData;
  return tagDataOf(nd);
}

function readValue(r: Reader, data: TagData, size: number | undefined, flags: number, path: string): Value {
  void path;
  switch (data.k) {
    case "bool":
      if ((data as unknown as { __elem?: boolean }).__elem) return { t: "bool", v: r.u8() !== 0 };
      return { t: "bool", v: (data as { value: boolean }).value };
    case "other": {
      const t = data.type;
      if (t in SCALAR_SIZES) {
        if (t === "IntProperty") return { t: "int", v: r.u32() | 0 };
        if (t === "Int64Property") return { t: "int64", v: r.i64() };
        if (t === "FloatProperty") return { t: "float", v: r.f32() };
        if (t === "DoubleProperty") return { t: "double", v: r.f64() };
        if (t === "Int8Property") return { t: "int", v: (r.u8() << 24) >> 24 };
        if (t === "Int16Property") return { t: "int", v: (r.u16() << 16) >> 16 };
        if (t === "UInt8Property") return { t: "byte", v: r.u8() };
        if (t === "UInt16Property") return { t: "int", v: r.u16() };
        if (t === "UInt32Property") return { t: "int", v: r.u32() };
        const u64 = r.view.getBigUint64(r.pos, true);
        r.pos += 8;
        if (u64 > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error(`UInt64 out of range`);
        return { t: "int64", v: Number(u64) };
      }
      if (t === "NameProperty") return { t: "name", v: r.fstr() };
      if (t === "StrProperty") return { t: "str", v: r.fstr() };
      if (t === "TextProperty") {
        if (size === undefined) throw new Error("text needs size");
        return { t: "text", bytes: r.take(size) };
      }
      if (size === undefined) throw new Error(`unknown type ${t} needs size`);
      return { t: "raw", bytes: r.take(size) };
    }
    case "byte":
      if (data.enumPath === undefined) return { t: "byte", v: r.u8() };
      return { t: "enum", v: r.fstr() };
    case "enum":
      return { t: "enum", v: r.fstr() };
    case "struct": {
      const fixed = FIXED_STRUCTS[data.structPath];
      if (fixed !== undefined) {
        if (size !== undefined && size !== fixed) throw new Error(`fixed size mismatch ${data.structPath}`);
        return { t: "bytes", path: data.structPath, bytes: r.take(fixed) };
      }
      if (flags & FLAG_RAW) {
        if (size === undefined) throw new Error("raw struct needs size");
        return { t: "bytes", path: data.structPath, bytes: r.take(size) };
      }
      return { t: "struct", path: data.structPath, props: readProps(r, size) };
    }
    case "array": {
      const count = r.u32();
      const items: Value[] = [];
      for (let i = 0; i < count; i++) items.push(readValue(r, data.inner, undefined, 0, ""));
      return { t: "array", inner: data.inner, items };
    }
    case "map": {
      const skipCount = r.u32();
      if (skipCount !== 0) throw new Error(`map keys-to-remove nonzero: ${skipCount}`);
      const count = r.u32();
      const entries: Array<[Value, Value]> = [];
      for (let i = 0; i < count; i++) {
        entries.push([readValue(r, data.key, undefined, 0, ""), readValue(r, data.value, undefined, 0, "")]);
      }
      return { t: "map", key: data.key, value: data.value, entries };
    }
    case "set": {
      const skipCount = r.u32();
      if (skipCount !== 0) throw new Error(`set keys-to-remove nonzero: ${skipCount}`);
      const count = r.u32();
      const items: Value[] = [];
      for (let i = 0; i < count; i++) items.push(readValue(r, data.inner, undefined, 0, ""));
      return { t: "set", inner: data.inner, items };
    }
  }
}

function readProps(r: Reader, size: number | undefined): Prop[] {
  const start = r.pos;
  const out: Prop[] = [];
  for (;;) {
    const name = r.fstr();
    if (name === "None") break;
    const node = readNode(r);
    const data = tagDataOf(node);
    const propSize = r.u32();
    const flags = r.u8();
    if (flags & FLAG_EXTENSIONS) throw new Error(`extensions flag on ${name}`);
    let index = 0;
    if (flags & FLAG_ARRAY_INDEX) index = r.u32();
    let guid: string | undefined;
    if (flags & FLAG_GUID) guid = r.guid();
    if (data.k === "bool") (data as { value: boolean }).value = (flags & FLAG_BOOL_TRUE) !== 0;
    const vstart = r.pos;
    let value: Value;
    try {
      value = readValue(r, data, propSize, flags, name);
    } catch (e) {
      throw new Error(`prop ${name}: ${(e as Error).message}`);
    }
    if (r.pos - vstart !== propSize) {
      throw new Error(`prop ${name}: consumed ${r.pos - vstart}, size ${propSize}`);
    }
    out.push({ name, node, data, flags, index, guid, value });
  }
  if (size !== undefined && r.pos - start !== size) {
    throw new Error(`struct size mismatch: consumed ${r.pos - start}, size ${size}`);
  }
  return out;
}

function readHeader(r: Reader): SaveHeader {
  const magic = r.u32();
  const saveVersion = r.u32();
  const pkgUE4 = r.u32();
  const pkgUE5 = saveVersion >= 3 && saveVersion !== 34 ? r.u32() : undefined;
  const engMajor = r.u16();
  const engMinor = r.u16();
  const engPatch = r.u16();
  const engBuild = r.u32();
  const engBranch = r.fstr();
  let customFmt: number | undefined;
  const customs: Array<{ id: string; value: number }> = [];
  if (engMajor > 4 || (engMajor === 4 && engMinor >= 12)) {
    customFmt = r.u32();
    const n = r.u32();
    for (let i = 0; i < n; i++) customs.push({ id: r.guid(), value: r.i32() });
  }
  const saveGameType = r.fstr();
  const isNewTag = engMajor > 5 || (engMajor === 5 && engMinor >= 4);
  const padByte = isNewTag ? r.u8() : undefined;
  return {
    magic, saveVersion, pkgUE4, pkgUE5, engMajor, engMinor, engPatch,
    engBuild, engBranch, customFmt, customs, saveGameType, padByte,
  };
}

/** Parse a stripped payload (GVAS + footer). Footer stays in `extra`. */
export function parseGvas(stripped: Uint8Array): SaveDoc {
  const r = new Reader(stripped);
  const header = readHeader(r);
  // Re-read saveGameType is inside readHeader; root props follow padByte.
  // Root = props until None; extra = remainder.
  const props = readProps(r, undefined);
  const extra = stripped.slice(r.pos);
  return { header, props, extra };
}

function writeValue(w: Writer, data: TagData, value: Value) {
  switch (value.t) {
    case "int": {
      const dt = data.k === "other" ? data.type : "";
      if (dt === "Int8Property") w.i8(value.v);
      else if (dt === "Int16Property") w.i16(value.v);
      else if (dt === "UInt16Property") w.u16(value.v);
      else if (dt === "UInt32Property") w.u32(value.v);
      else if (dt === "UInt64Property") w.u64(value.v);
      else w.i32(value.v);
      return;
    }
    case "int64":
      w.i64(value.v);
      return;
    case "float":
      w.f32(value.v);
      return;
    case "double":
      w.f64(value.v);
      return;
    case "bool":
      w.u8(value.v ? 1 : 0);
      return;
    case "byte":
      w.u8(value.v);
      return;
    case "name":
    case "str":
    case "enum":
      w.fstr(value.v);
      return;
    case "bytes":
      w.raw(value.bytes);
      return;
    case "text":
      w.raw(value.bytes);
      return;
    case "raw":
      w.raw(value.bytes);
      return;
    case "struct":
      writeProps(w, value.props);
      return;
    case "array":
      w.u32(value.items.length);
      for (const it of value.items) writeValue(w, value.inner, it);
      return;
    case "map":
      w.u32(0);
      w.u32(value.entries.length);
      for (const [k, v] of value.entries) {
        writeValue(w, value.key, k);
        writeValue(w, value.value, v);
      }
      return;
    case "set":
      w.u32(0);
      w.u32(value.items.length);
      for (const it of value.items) writeValue(w, value.inner, it);
      return;
  }
}

function writeProps(w: Writer, props: Prop[]) {
  for (const p of props) {
    w.fstr(p.name);
    writeNode(w, p.node);
    // Serialize value to measure size.
    const vw = new Writer();
    if (p.data.k === "bool") {
      // No value bytes; truth lives in flags.
    } else {
      writeValue(vw, p.data, p.value);
    }
    const vbytes = vw.finish();
    w.u32(vbytes.length);
    let flags = p.flags;
    if (p.data.k === "bool") {
      const bv = (p.value as { v: boolean }).v;
      flags = bv ? flags | FLAG_BOOL_TRUE : flags & ~FLAG_BOOL_TRUE;
    }
    w.u8(flags);
    if (flags & FLAG_ARRAY_INDEX) w.u32(p.index);
    if (flags & FLAG_GUID) {
      if (!p.guid) throw new Error(`missing guid on ${p.name}`);
      w.guid(p.guid);
    }
    w.raw(vbytes);
  }
  w.fstr("None");
}

function writeHeader(w: Writer, h: SaveHeader) {
  w.u32(h.magic);
  w.u32(h.saveVersion);
  w.u32(h.pkgUE4);
  if (h.pkgUE5 !== undefined) w.u32(h.pkgUE5);
  w.u16(h.engMajor);
  w.u16(h.engMinor);
  w.u16(h.engPatch);
  w.u32(h.engBuild);
  w.fstr(h.engBranch);
  if (h.customFmt !== undefined) {
    w.u32(h.customFmt);
    w.u32(h.customs.length);
    for (const c of h.customs) {
      w.guid(c.id);
      w.i32(c.value);
    }
  }
  w.fstr(h.saveGameType);
  if (h.padByte !== undefined) w.u8(h.padByte);
}

/** Serialize a document to a stripped payload (GVAS + original extra). */
export function serializeGvas(doc: SaveDoc): Uint8Array {
  const w = new Writer();
  writeHeader(w, doc.header);
  writeProps(w, doc.props);
  w.raw(doc.extra);
  return w.finish();
}
