import { readFileSync, writeFileSync } from "node:fs";
import { parseGvas, serializeGvas } from "./src/lib/gvas.ts";
import { wrapTxr } from "./src/lib/txr.ts";
import type { Prop, Value } from "./src/lib/types.ts";

// Build public/template.sav: completion-state template with a single stock starter.
const raw = new Uint8Array(
  readFileSync("C:/Users/Bambaw/AppData/Local/Temp/opencode/txr_test/UserData_stripped.sav"),
);
const doc = parseGvas(raw);
const get = (props: Prop[], name: string): Prop => {
  const p = props.find((x) => x.name === name);
  if (!p) throw new Error(`missing ${name}`);
  return p;
};
const setNum = (props: Prop[], name: string, v: number) => {
  const p = get(props, name);
  if (p.value.t === "int" || p.value.t === "int64" || p.value.t === "float" || p.value.t === "double") {
    (p.value as { v: number }).v = v;
  } else throw new Error(`${name} not numeric`);
};
const ui = get(doc.props, "user_info");
if (ui.value.t !== "struct") throw new Error("no user_info");
const up = ui.value.props;

// Reset wallet/stats to starter defaults.
setNum(up, "Cp", 3000000);
setNum(up, "UpperLimitCP", 10000000);
setNum(up, "CumulativeAcquisitionCP", 0);
setNum(up, "TotalCumulativeAcquisitionCP", 0);
setNum(up, "TotalToPayCP", 0);
setNum(up, "PP", 0);
setNum(up, "CumulativeAcquisitionPP", 0);
setNum(up, "Day", 1);

// Single stock starter: clone first car, reset to showroom state.
const cars = get(up, "MyCars");
if (cars.value.t !== "map") throw new Error("no MyCars");
const first = cars.value.entries[0][1];
if (first.t !== "struct") throw new Error("no car struct");
const cp = first.props;
const setStr = (n: string, v: string) => {
  const p = get(cp, n);
  if (p.value.t !== "name" && p.value.t !== "enum" && p.value.t !== "str")
    throw new Error(`${n} not stringlike`);
  (p.value as { v: string }).v = v;
};
setStr("CarNameId", "ZC33S");
setStr("EngineNameId", "ZC33S");
const repl = get(cp, "IsReplacedEngine");
if (repl.value.t === "bool") repl.value.v = false;
const rm = get(cp, "ReplacementEngines");
if (rm.value.t === "map") rm.value.entries = [];
const mil = get(cp, "Mileages");
if (mil.value.t === "double") mil.value.v = 0;
const tunes = get(cp, "TuneInfos");
if (tunes.value.t !== "map") throw new Error("no tunes");
for (const [, tv] of tunes.value.entries) {
  if (tv.t !== "struct") throw new Error("tune not struct");
  const lv = get(tv.props, "EquipLevel");
  if (lv.value.t === "enum") lv.value.v = "EVehicleTuneLevel::Normal";
  const hf = get(tv.props, "HaveFlags");
  if (hf.value.t === "int") hf.value.v = 1;
}
cars.value.entries = [[{ t: "int", v: 1 }, first]];
setNum(up, "MyCarIdSrc", 1);
setNum(up, "SelectedMyCarId", 1);

const out = serializeGvas(doc);
const full = wrapTxr(out);
writeFileSync("public/template.sav", full);
console.log("template bytes:", full.length);
