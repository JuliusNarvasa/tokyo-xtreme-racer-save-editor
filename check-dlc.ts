import { CUSTOM_CODES, DEALER_CODES, customName, imgUrl } from "./src/data/cars.ts";
import { validateCar } from "./src/data/validation.ts";
import { TUNE_KINDS } from "./src/data/tunes.ts";
const tunes = Object.fromEntries(TUNE_KINDS.map((s) => [s.kind, "Normal"])) as never;
for (const code of ["GB121", "BNR34CuMINIGT", "DC5CuNJ", "FL5CuMINIGT", "GB121CuMINIGT", "JZA80CuMINIGT", "SE3PCuHL"]) {
  const known = DEALER_CODES.has(code) || CUSTOM_CODES.has(code);
  const r = validateCar({ chassisId: code, engineId: "", tunes, isCustom: code.includes("Cu") });
  console.log(code, "known=" + known, "ok=" + r.ok, JSON.stringify(r.warnings), "|", customName(code), "|", imgUrl(code).split("/").pop());
}
