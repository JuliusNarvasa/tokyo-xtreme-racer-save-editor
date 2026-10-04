import { readFileSync } from "node:fs";
import { parseGvas, serializeGvas } from "./src/lib/gvas.ts";
import { unwrapTxr, verifyTxr } from "./src/lib/txr.ts";
const f = new Uint8Array(readFileSync("./public/template.sav"));
console.log("verify", JSON.stringify(verifyTxr(f)));
const s = unwrapTxr(f).stripped;
const d = parseGvas(s);
const b = serializeGvas(d);
console.log("roundtrip identical", b.length === s.length && b.every((v, i) => v === s[i]));
