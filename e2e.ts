import { readFileSync } from "node:fs";
import { parseGvas, serializeGvas } from "./src/lib/gvas.ts";
import { unwrapTxr, verifyTxr, wrapTxr } from "./src/lib/txr.ts";
import {
  addCar, garageValidation, listCars, playerValidation,
  removeCar, setCarEngine, setCarTune, summarizeCar, writePlayer,
} from "./src/state.ts";

// Simulate full UI flow on the template.
const full = new Uint8Array(readFileSync("./public/template.sav"));
console.log("template verify:", JSON.stringify(verifyTxr(full)));
const doc = parseGvas(unwrapTxr(full).stripped);
console.log("cars:", listCars(doc).map((c) => `${c.id}:${c.chassis}`).join(","));

// Add a BNR34, engine-swap it, max tunes, bump wallet.
const id = addCar(doc, "BNR34", 1);
setCarEngine(doc, id, "EgRp_VR38DETT");
setCarTune(doc, id, "PowerUnit", "Level9");
setCarTune(doc, id, "LSD", "Level3");
writePlayer(doc, { cp: 500000000, pp: 2500 });
const c = summarizeCar(doc, id);
console.log("new car:", id, c.chassis, c.engine, c.isReplaced, JSON.stringify(c.tunes.PowerUnit));

// Remove the starter (id 1), check SelectedMyCarId fixup.
removeCar(doc, 1);
console.log("after remove:", listCars(doc).map((x) => x.id).join(","));

const pv = playerValidation(doc);
const gv = garageValidation(doc);
console.log("player ok:", pv.ok, JSON.stringify(pv.warnings));
console.log("garage ok:", gv.ok, JSON.stringify(gv.warnings));

const out = wrapTxr(serializeGvas(doc));
console.log("out len:", out.length, "verify:", JSON.stringify(verifyTxr(out)));
const doc2 = parseGvas(unwrapTxr(out).stripped);
console.log("reparsed cars:", listCars(doc2).map((x) => `${x.id}:${x.chassis}/${x.engine}`).join(","));
console.log("E2E OK");
