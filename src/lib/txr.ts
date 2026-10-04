import { crc32 } from "./crc32.ts";

export const CMTA_MAGIC = "CMTA";
export const GVAS_MAGIC = "GVAS";

export interface Unwrapped {
  /** Full stripped payload: GVAS ... + 8-byte footer (4 zero bytes + u32LE crc). */
  stripped: Uint8Array;
}

export interface VerifyResult {
  ok: boolean;
  stored: number;
  computed: number;
}

function ascii4(b: Uint8Array, off: number): string {
  return String.fromCharCode(b[off], b[off + 1], b[off + 2], b[off + 3]);
}

/** Split CMTA wrapper. Throws on bad magic. Never touches disk. */
export function unwrapTxr(full: Uint8Array): Unwrapped {
  if (full.length < 12) throw new Error(`file too small (${full.length}B)`);
  if (ascii4(full, 0) !== CMTA_MAGIC) {
    throw new Error(`expected CMTA header, got '${ascii4(full, 0)}'`);
  }
  if (ascii4(full, 4) !== GVAS_MAGIC) {
    throw new Error(`expected GVAS at offset 4, got '${ascii4(full, 4)}'`);
  }
  return { stripped: full.slice(4) };
}

/** CRC covers file[4:-4], i.e. stripped.slice(0, -4) (GVAS + 4 zero bytes). */
export function computeFooter(strippedWithoutFooter: Uint8Array): number {
  return crc32(strippedWithoutFooter);
}

/**
 * Rebuild a stripped payload with a correct footer, then re-wrap with CMTA.
 * Input: stripped GVAS payload whose last 4 bytes are the (possibly stale) crc.
 */
export function wrapTxr(strippedWithFooter: Uint8Array): Uint8Array {
  if (strippedWithFooter.length < 8) throw new Error("stripped payload too small");
  if (ascii4(strippedWithFooter, 0) !== GVAS_MAGIC) throw new Error("stripped must start with GVAS");
  const body = strippedWithFooter.slice(0, -4);
  const crc = computeFooter(body);
  const out = new Uint8Array(4 + body.length + 4);
  out[0] = 0x43; out[1] = 0x4d; out[2] = 0x54; out[3] = 0x41; // CMTA
  out.set(body, 4);
  new DataView(out.buffer).setUint32(4 + body.length, crc, true);
  // Preserve the 4 zero pad bytes: they are the last 4 of body (echoed from input).
  return out;
}

/** Verify footer of a full (CMTA-wrapped) or stripped payload. */
export function verifyTxr(fullOrStripped: Uint8Array): VerifyResult {
  const stripped =
    ascii4(fullOrStripped, 0) === CMTA_MAGIC ? fullOrStripped.slice(4) : fullOrStripped;
  const view = new DataView(stripped.buffer, stripped.byteOffset);
  const stored = view.getUint32(stripped.length - 4, true);
  const computed = computeFooter(stripped.slice(0, -4));
  return { ok: stored === computed, stored, computed };
}
