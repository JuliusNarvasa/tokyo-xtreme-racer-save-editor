import { parseGvas, serializeGvas } from "../lib/gvas.ts";
import { unwrapTxr, verifyTxr, wrapTxr, type VerifyResult } from "../lib/txr.ts";
import type { SaveDoc } from "../lib/types.ts";

export interface LoadedFile {
  doc: SaveDoc;
  verify: VerifyResult;
}

export function hex8(v: number): string {
  return `0x${(v >>> 0).toString(16).padStart(8, "0").toUpperCase()}`;
}

export function loadBytesToDoc(full: Uint8Array): LoadedFile {
  const { stripped } = unwrapTxr(full);
  const verify = verifyTxr(full);
  if (!verify.ok) {
    throw new Error(
      `CRC mismatch: stored ${hex8(verify.stored)} != computed ${hex8(verify.computed)}`,
    );
  }
  return { doc: parseGvas(stripped), verify };
}

export async function loadTemplate(): Promise<LoadedFile> {
  const base = import.meta.env.BASE_URL;
  const res = await fetch(`${base}template.sav`);
  if (!res.ok) throw new Error(`template.sav fetch failed: ${res.status}`);
  return loadBytesToDoc(new Uint8Array(await res.arrayBuffer()));
}

export async function loadPickedFile(file: File): Promise<LoadedFile> {
  return loadBytesToDoc(new Uint8Array(await file.arrayBuffer()));
}

export interface Preview {
  bytes: Uint8Array;
  verify: VerifyResult;
  size: number;
}

export function previewOutput(doc: SaveDoc): Preview {
  const bytes = wrapTxr(serializeGvas(doc));
  return { bytes, verify: verifyTxr(bytes), size: bytes.length };
}

export function downloadDoc(doc: SaveDoc): Preview {
  const p = previewOutput(doc);
  const blob = new Blob([p.bytes.buffer as ArrayBuffer], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "UserData_00.sav";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return p;
}
