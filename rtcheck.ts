import { readFileSync } from "node:fs";
import { parseGvas, serializeGvas } from "./src/lib/gvas.ts";
import { verifyTxr, wrapTxr } from "./src/lib/txr.ts";
import type { Prop, Value } from "./src/lib/types.ts";

const DIR = "C:/Users/Bambaw/AppData/Local/Temp/opencode/txr_test";

function findProp(props: Prop[], name: string): Prop {
  const p = props.find((x) => x.name === name);
  if (!p) throw new Error(`missing ${name}`);
  return p;
}
function structProps(v: Value): Prop[] {
  if (v.t !== "struct") throw new Error(`not struct: ${v.t}`);
  return v.props;
}

for (const f of ["OptionData_stripped.sav", "UserData_stripped.sav"]) {
  const raw = new Uint8Array(readFileSync(`${DIR}/${f}`));
  const doc = parseGvas(raw);
  const back = serializeGvas(doc);
  const same = back.length === raw.length && back.every((v, i) => v === raw[i]);
  let diffs = 0;
  if (!same) {
    for (let i = 0; i < Math.max(back.length, raw.length); i++) {
      if (back[i] !== raw[i]) {
        diffs++;
        if (diffs < 5) console.log(`  diff @${i}: ${raw[i]} -> ${back[i]}`);
      }
    }
  }
  console.log(`${f}: len ${raw.length}->${back.length} identical=${same} diffs=${diffs}`);
}

// Semantic edit test on UserData: bump TotalMileages, re-parse, verify.
{
  const raw = new Uint8Array(readFileSync(`${DIR}/UserData_stripped.sav`));
  const doc = parseGvas(raw);
  const ui = structProps(findProp(doc.props, "user_info").value);
  const tm = findProp(ui, "TotalMileages");
  if (tm.value.t !== "double") throw new Error("tm not double");
  console.log("old TotalMileages:", tm.value.v);
  tm.value = { t: "double", v: 3148649.0313949585 };
  const back = serializeGvas(doc);
  const doc2 = parseGvas(back);
  const tm2 = findProp(structProps(findProp(doc2.props, "user_info").value), "TotalMileages");
  console.log("new TotalMileages:", tm2.value.t === "double" ? tm2.value.v : "?");
  // wrap + verify footer
  const full = wrapTxr(back);
  console.log("wrapped len:", full.length, "verify:", JSON.stringify(verifyTxr(full)));
}
console.log("ALL OK");
