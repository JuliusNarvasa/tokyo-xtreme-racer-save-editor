// Document model for TXR GVAS saves. Tags/flags/order are preserved
// verbatim so serialization round-trips byte-identical when unedited.

export interface TagNode {
  name: string;
  inner: TagNode[];
}

/** Semantic tag data, bijective with the binary node tree. */
export type TagData =
  | { k: "other"; type: string }
  | { k: "byte"; enumPath?: string }
  | { k: "enum"; enumPath: string; container: string }
  | { k: "bool"; value: boolean }
  | { k: "struct"; structPath: string; guid?: string }
  | { k: "array"; inner: TagData }
  | { k: "map"; key: TagData; value: TagData }
  | { k: "set"; inner: TagData };

export type Scalar =
  | { t: "int"; v: number }
  | { t: "int64"; v: number }
  | { t: "float"; v: number }
  | { t: "double"; v: number }
  | { t: "bool"; v: boolean }
  | { t: "byte"; v: number }
  | { t: "name"; v: string }
  | { t: "str"; v: string }
  | { t: "enum"; v: string };

export type Value =
  | Scalar
  | { t: "struct"; path: string; props: Prop[] }
  | { t: "bytes"; path: string; bytes: Uint8Array } // fixed engine structs + raw-flagged structs
  | { t: "text"; bytes: Uint8Array }
  | { t: "array"; inner: TagData; items: Value[] }
  | { t: "map"; key: TagData; value: TagData; entries: Array<[Value, Value]> }
  | { t: "set"; inner: TagData; items: Value[] }
  | { t: "raw"; bytes: Uint8Array }; // unknown-type fallback, echoed verbatim

export interface Prop {
  name: string;
  node: TagNode; // echoed verbatim on write
  data: TagData;
  flags: number; // echoed; bit 0x10 = bool value for bool tags
  index: number; // present iff flags & 0x01
  guid?: string; // present iff flags & 0x02
  value: Value;
}

export interface SaveHeader {
  magic: number;
  saveVersion: number;
  pkgUE4: number;
  pkgUE5?: number;
  engMajor: number;
  engMinor: number;
  engPatch: number;
  engBuild: number;
  engBranch: string;
  customFmt?: number;
  customs: Array<{ id: string; value: number }>;
  saveGameType: string;
  /** UE5.4+ separator byte (always 0 in practice). */
  padByte?: number;
}

export interface SaveDoc {
  header: SaveHeader;
  /** Top-level properties (root). None-terminator is implicit. */
  props: Prop[];
  /** Trailing bytes (TXR 8-byte footer lives here; managed by txr.ts). */
  extra: Uint8Array;
}
