import { CAPS } from "./caps.ts";
import { CUSTOM_CODES, DEALER_CODES, DEMOKIT_CODES, UNBUYABLE_EP_SET } from "./cars.ts";
import { ENGINE_IDS } from "./engines.ts";
import { TUNE_KIND_MAP, TUNE_KINDS, TUNE_LEVEL_INDEX, type TuneKind, type TuneLevel } from "./tunes.ts";

export interface ValidationResult {
  ok: boolean;
  warnings: string[];
}

export interface PlayerInput {
  cp: number;
  bp: number;
  day: number;
  garageMax: number;
  carCount: number;
}

export interface CarInput {
  chassisId: string;
  engineId: string;
  tunes: Record<TuneKind, TuneLevel>;
  isCustom: boolean;
}

function isEpOrTrafficOrOt(code: string): boolean {
  if (/(^|[^A-Za-z])Ot/i.test(code)) return true;
  if (/Traffic/i.test(code)) return true;
  if (/Ep[A-Z0-9]/i.test(code)) return true;
  // Common "EP" suffix style markers
  if (/Ep$/i.test(code)) return true;
  return false;
}

function isKnownChassis(code: string): boolean {
  return DEALER_CODES.has(code) || DEMOKIT_CODES.has(code) || UNBUYABLE_EP_SET.has(code) || CUSTOM_CODES.has(code);
}

export { CUSTOM_CODES };

export function validatePlayer(p: PlayerInput): ValidationResult {
  const warnings: string[] = [];
  let ok = true;

  if (!Number.isFinite(p.cp) || !Number.isFinite(p.bp) || !Number.isFinite(p.day)) {
    return { ok: false, warnings: ["non-finite player value"] };
  }
  if (p.cp < 0 || p.bp < 0 || p.day < 0) {
    ok = false;
    warnings.push("negative player value");
  }
  if (p.cp > CAPS.cpParserMax) {
    ok = false;
    warnings.push(`CP ${p.cp} exceeds parser max ${CAPS.cpParserMax}`);
  } else if (p.cp > CAPS.cpLegitMax) {
    warnings.push(`CP ${p.cp} exceeds legit max ${CAPS.cpLegitMax} (illegit but parser-allowed)`);
  }
  if (p.bp > CAPS.bpParserMax) {
    ok = false;
    warnings.push(`BP ${p.bp} exceeds parser max ${CAPS.bpParserMax}`);
  } else if (p.bp > CAPS.bpLegitMax) {
    warnings.push(`BP ${p.bp} exceeds legit max ${CAPS.bpLegitMax} (illegit but parser-allowed)`);
  }
  if (p.carCount > p.garageMax) {
    ok = false;
    warnings.push(`carCount ${p.carCount} exceeds garageMax ${p.garageMax}`);
  }
  if (p.garageMax > CAPS.garageMax) {
    ok = false;
    warnings.push(`garageMax ${p.garageMax} exceeds cap ${CAPS.garageMax}`);
  }

  return { ok, warnings };
}

export function validateCar(car: CarInput): ValidationResult {
  const warnings: string[] = [];
  let ok = true;

  // Chassis checks
  if (isEpOrTrafficOrOt(car.chassisId)) {
    ok = false;
    warnings.push(`chassis ${car.chassisId} looks like Ep/Traffic/Ot and is rejected`);
  } else if (!isKnownChassis(car.chassisId)) {
    if (car.isCustom && !car.chassisId.includes("Cu")) {
      // Custom chassis not in the known buyable set: allow with cheat warning.
      warnings.push(`unknown custom chassis ${car.chassisId} (cheat warning)`);
    } else if (car.isCustom) {
      warnings.push(`unknown custom chassis ${car.chassisId} (cheat warning)`);
    } else {
      warnings.push(`unknown chassis ${car.chassisId} (cheat warning)`);
    }
  }

  // Engine checks
  if (!ENGINE_IDS.has(car.engineId)) {
    // Empty/stock engine id is allowed: treat "" and "Stock" as stock.
    if (car.engineId !== "" && car.engineId !== "Stock") {
      ok = false;
      warnings.push(`unknown engine ${car.engineId} rejected`);
    }
  }

  // Tune checks
  for (const spec of TUNE_KINDS) {
    const level: TuneLevel | undefined = car.tunes[spec.kind];
    if (level === undefined) {
      ok = false;
      warnings.push(`missing tune ${spec.kind}`);
      continue;
    }
    const idx = TUNE_LEVEL_INDEX.get(level);
    if (idx === undefined) {
      ok = false;
      warnings.push(`unknown tune level ${String(level)} for ${spec.kind}`);
      continue;
    }
    if (idx > spec.maxLevel) {
      ok = false;
      warnings.push(`tune ${spec.kind} level ${level} exceeds max ${spec.maxLevel}`);
      continue;
    }
    if (idx > spec.boughtMax) {
      warnings.push(
        `tune ${spec.kind} ${level} exceeds boughtMax ${spec.boughtMax} (tuner-effect cheat)`,
      );
      if (spec.tunerOnly && idx === spec.maxLevel) {
        warnings.push(`tune ${spec.kind} ${level} needs tunerEffect`);
      }
    }
  }

  return { ok, warnings };
}

export interface GarageCarInput extends CarInput {
  id?: string;
}

export function validateGarage(cars: GarageCarInput[], maxGarage: number): ValidationResult {
  const warnings: string[] = [];
  let ok = true;

  if (cars.length > maxGarage) {
    ok = false;
    warnings.push(`garage has ${cars.length} cars, exceeds maxGarage ${maxGarage}`);
  }
  if (maxGarage > CAPS.garageMax) {
    ok = false;
    warnings.push(`maxGarage ${maxGarage} exceeds cap ${CAPS.garageMax}`);
  }

  const seen = new Set<string>();
  cars.forEach((car, i) => {
    const r = validateCar(car);
    if (!r.ok) ok = false;
    for (const w of r.warnings) warnings.push(`car[${i}]: ${w}`);
    if (car.id !== undefined) {
      if (seen.has(car.id)) {
        ok = false;
        warnings.push(`car[${i}]: duplicate id ${car.id}`);
      } else {
        seen.add(car.id);
      }
    }
  });

  return { ok, warnings };
}

// Re-export kind maps for consumers that only import validation.
export { TUNE_KIND_MAP, TUNE_LEVEL_INDEX };
export type { TuneKind, TuneLevel };
