import { CUSTOM_BUYABLE, DEMOKIT_CARS, DEALER_CARS } from "./data/cars.ts";
import { ENGINE_SWAPS } from "./data/engines.ts";
import { TUNE_KINDS, TUNE_LEVEL_INDEX, type TuneKind, type TuneLevel } from "./data/tunes.ts";
import { validateCar, validateGarage, validatePlayer } from "./data/validation.ts";
import type { Prop, SaveDoc, Value } from "./lib/types.ts";

export const TUNE_KEY_PREFIX = "EVehicleTuneKind::";
export const TUNE_LEVEL_PREFIX = "EVehicleTuneLevel::";

export interface PlayerValues {
  cp: number;
  upperCp: number;
  pp: number;
  day: number;
  garageMax: number;
  myCarIdSrc: number;
  selectedId: number;
  totalMileages: number;
  carCount: number;
}

export interface CarSummary {
  id: number;
  chassis: string;
  engine: string;
  isReplaced: boolean;
  mileage: number;
  tunes: Record<TuneKind, TuneLevel>;
}

export function userProps(doc: SaveDoc): Prop[] {
  const root = doc.props.find((p) => p.name === "user_info");
  if (!root) throw new Error("missing user_info");
  if (root.value.t !== "struct") throw new Error("user_info is not a struct");
  return root.value.props;
}

export function findProp(props: Prop[], name: string): Prop | undefined {
  return props.find((p) => p.name === name);
}

function numOf(v: Value | undefined, fb: number): number {
  if (!v) return fb;
  if (v.t === "int" || v.t === "int64" || v.t === "float" || v.t === "double" || v.t === "byte") return v.v;
  return fb;
}

function strOf(v: Value | undefined, fb = ""): string {
  if (!v) return fb;
  if (v.t === "name" || v.t === "str" || v.t === "enum") return v.v;
  return fb;
}

export function readPlayer(doc: SaveDoc): PlayerValues {
  const u = userProps(doc);
  const cars = myCarEntries(doc);
  return {
    cp: numOf(findProp(u, "Cp")?.value, 0),
    upperCp: numOf(findProp(u, "UpperLimitCP")?.value, 0),
    pp: numOf(findProp(u, "PP")?.value, 0),
    day: numOf(findProp(u, "Day")?.value, 0),
    garageMax: numOf(findProp(u, "MaxGarageMyCarNum")?.value, 0),
    myCarIdSrc: numOf(findProp(u, "MyCarIdSrc")?.value, 0),
    selectedId: numOf(findProp(u, "SelectedMyCarId")?.value, 0),
    totalMileages: numOf(findProp(u, "TotalMileages")?.value, 0),
    carCount: cars.length,
  };
}

export function writePlayer(doc: SaveDoc, patch: Partial<Omit<PlayerValues, "carCount">>): void {
  const u = userProps(doc);
  const set = (name: string, v: number, t: "int" | "int64" | "double") => {
    const p = findProp(u, name);
    if (!p) return;
    if (t === "int" && p.value.t === "int") p.value.v = Math.trunc(v);
    else if (t === "int64" && p.value.t === "int64") p.value.v = Math.trunc(v);
    else if (t === "double" && p.value.t === "double") p.value.v = v;
  };
  if (patch.cp !== undefined) set("Cp", patch.cp, "int64");
  if (patch.upperCp !== undefined) set("UpperLimitCP", patch.upperCp, "int64");
  if (patch.pp !== undefined) set("PP", patch.pp, "int");
  if (patch.day !== undefined) set("Day", patch.day, "int");
  if (patch.garageMax !== undefined) set("MaxGarageMyCarNum", patch.garageMax, "int");
  if (patch.myCarIdSrc !== undefined) set("MyCarIdSrc", patch.myCarIdSrc, "int");
  if (patch.selectedId !== undefined) set("SelectedMyCarId", patch.selectedId, "int");
  if (patch.totalMileages !== undefined) set("TotalMileages", patch.totalMileages, "double");
}

function myCarsValue(doc: SaveDoc): Value & { t: "map" } {
  const u = userProps(doc);
  const p = findProp(u, "MyCars");
  if (!p) throw new Error("missing MyCars");
  if (p.value.t !== "map") throw new Error("MyCars is not a map");
  return p.value;
}

export function myCarEntries(doc: SaveDoc): Array<[Value, Value]> {
  return myCarsValue(doc).entries;
}

export function carKeyOf(key: Value): number {
  if (key.t === "int" || key.t === "int64") return key.v;
  throw new Error(`unexpected car key type ${(key as Value).t}`);
}

export function carPropsOf(entryValue: Value): Prop[] {
  if (entryValue.t !== "struct") throw new Error("car entry is not a struct");
  return entryValue.props;
}

function blankTunes(): Record<TuneKind, TuneLevel> {
  return {
    PowerUnit: "Normal", IntakeSystem: "Normal", ExhaustSystem: "Normal",
    Transmission: "Normal", Clutch: "Normal", Suspension: "Normal",
    Brake: "Normal", Body: "Normal", FrontTire: "Normal",
    RearTire: "Normal", LSD: "Normal", Nitro: "Normal",
  };
}

export function readCarTunes(props: Prop[]): Record<TuneKind, TuneLevel> {
  const tunes = blankTunes();
  const ti = findProp(props, "TuneInfos");
  if (!ti || ti.value.t !== "map") return tunes;
  for (const [k, v] of ti.value.entries) {
    if (k.t !== "enum" || v.t !== "struct") continue;
    const kind = k.v.includes("::") ? k.v.split("::").pop()! : k.v;
    const lvlProp = v.props.find((p) => p.name === "EquipLevel");
    if (!lvlProp) continue;
    const lvl = strOf(lvlProp.value).includes("::")
      ? strOf(lvlProp.value).split("::").pop()!
      : strOf(lvlProp.value);
    if (kind in tunes && lvl) (tunes as Record<string, string>)[kind] = lvl;
  }
  return tunes;
}

export function summarizeCar(doc: SaveDoc, id: number): CarSummary {
  const entry = myCarEntries(doc).find(([k]) => {
    try { return carKeyOf(k) === id; } catch { return false; }
  });
  if (!entry) throw new Error(`car ${id} not found`);
  const props = carPropsOf(entry[1]);
  const chassis = strOf(findProp(props, "CarNameId")?.value);
  const engine = strOf(findProp(props, "EngineNameId")?.value, chassis);
  const rep = findProp(props, "IsReplacedEngine")?.value;
  return {
    id,
    chassis,
    engine,
    isReplaced: rep?.t === "bool" ? rep.v : false,
    mileage: numOf(findProp(props, "Mileages")?.value, 0),
    tunes: readCarTunes(props),
  };
}

export function listCars(doc: SaveDoc): CarSummary[] {
  const out: CarSummary[] = [];
  for (const [k] of myCarEntries(doc)) {
    try { out.push(summarizeCar(doc, carKeyOf(k))); } catch { /* skip */ }
  }
  return out.sort((a, b) => a.id - b.id);
}

export function tuneSummary(tunes: Record<TuneKind, TuneLevel>): string {
  let tuned = 0;
  let peak = 0;
  let peakName = "Stock";
  for (const spec of TUNE_KINDS) {
    const idx = TUNE_LEVEL_INDEX.get(tunes[spec.kind]) ?? 0;
    if (idx > 0) tuned++;
    if (idx > peak) { peak = idx; peakName = tunes[spec.kind]; }
  }
  return tuned === 0 ? "Stock" : `${tuned}/12 tuned · peak ${peakName}`;
}

export function readCanBought(doc: SaveDoc, name: string): string[] {
  const p = findProp(userProps(doc), name);
  if (!p || p.value.t !== "array") return [];
  return p.value.items.filter((i) => i.t === "name").map((i) => (i as { v: string }).v);
}

export function ensureCanBought(doc: SaveDoc, name: string, code: string): void {
  if (!code) return;
  const p = findProp(userProps(doc), name);
  if (!p || p.value.t !== "array") return;
  const has = p.value.items.some((i) => i.t === "name" && i.v === code);
  if (!has) p.value.items.push({ t: "name", v: code });
}

/**
 * Populate CanBoughtCarNameIds + CanBoughtEngineNameIds with every code the
 * game allows the player to buy at the dealer / tuner. Pairs with
 * unlockEveryPerkWithReference(): the perk tree shows everything acquired,
 * but the shop uses a separate gate array — without this the dealer only
 * shows whatever the player had already bought before the toggle.
 *
 * EP/Traffic/Ot chassis (UNBUYABLE_EP) are intentionally excluded: those are
 * story-only and the validator rejects them.
 */
export function unlockAllShopInventory(doc: SaveDoc): void {
  for (const car of DEALER_CARS) ensureCanBought(doc, "CanBoughtCarNameIds", car.code);
  for (const car of DEMOKIT_CARS) ensureCanBought(doc, "CanBoughtCarNameIds", car.code);
  for (const code of CUSTOM_BUYABLE) ensureCanBought(doc, "CanBoughtCarNameIds", code);
  for (const eng of ENGINE_SWAPS) ensureCanBought(doc, "CanBoughtEngineNameIds", eng.id);
}

/**
 * Perks the game ties to wallet / cap unlocks. New Game+ reverts all perks and
 * leaves these flags off, which causes user_perks_0 to silently drop CP, BP, and
 * garage extensions. We force these on every load so the saved upper limits and
 * MaxGarageMyCarNum are honored regardless of NG+ state.
 *
 * Statuses are stored in user_info.Perk.CategoryStatuses (Map<Name, SPerkCategoryInfo>)
 * where SPerkCategoryInfo.Statuses is Map<Name, ESkillTreeStatus enum>. The mirror
 * AcquiredPerks (Map<ESkillTreeType, SPerkStatusInfo>) is what the game uses to gate
 * cap-aware code paths; both are kept in sync.
 */
export const PERK_AUTO_UNLOCK: ReadonlyArray<{
  rowName: string;
  category: string;
  treeType: string;
  level: number;
}> = [
  // CP wallet & cap (PerkIncome category)
  { rowName: "Perk_default_CP", category: "PerkIncome", treeType: "STT_NEW_WALLET", level: 0 },
  { rowName: "Perk_CP_update_6", category: "PerkIncome", treeType: "STT_NEW_WALLET", level: 6 },
  // BP wallet & cap (PerkIncome category, separate treeType)
  { rowName: "Perk_default_BP", category: "PerkIncome", treeType: "STT_BP_UPPER_LIMIT_UPDATE", level: 0 },
  { rowName: "Perk_BP_update_6", category: "PerkIncome", treeType: "STT_BP_UPPER_LIMIT_UPDATE", level: 6 },
  // Garage capacity (PerkOncome category)
  { rowName: "Perk_default_garage_extension", category: "PerkOncome", treeType: "STT_GARAGE_EXTENSION", level: 0 },
  { rowName: "Perk_garage_extension_6", category: "PerkOncome", treeType: "STT_GARAGE_EXTENSION", level: 6 },
];

/** True when the loaded save has completed the final story chapter (NG+ candidate). */
export function isNgPlus(doc: SaveDoc): boolean {
  const u = userProps(doc);
  const ss = findProp(u, "StoryStage");
  if (!ss || ss.value.t !== "enum") return false;
  return ss.value.v.endsWith("Stage6");
}

/**
 * Force-acquire every perk in the save's skill tree. Walks all categories under
 * user_info.Perk.CategoryStatuses and sets every status entry to STS_ACQUIRED.
 * The category status map is the one the perk tree UI reads, and the cap/perk
 * gating code falls back to the category flags if AcquiredPerks is missing.
 * For the NG+ "reset everything" use case this is sufficient and round-trip safe.
 */
export function unlockEveryPerk(doc: SaveDoc): void {
  const u = userProps(doc);
  const perk = findProp(u, "Perk");
  if (!perk || perk.value.t !== "struct") return;
  const csProp = findProp(perk.value.props, "CategoryStatuses");
  if (!csProp || csProp.value.t !== "map") return;
  const ACQUIRED: Value = { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" };
  for (const cat of csProp.value.entries) {
    if (cat[1].t !== "struct") continue;
    const st = findProp(cat[1].props, "Statuses");
    if (!st || st.value.t !== "map") continue;
    for (let i = 0; i < st.value.entries.length; i++) {
      st.value.entries[i][1] = ACQUIRED;
    }
  }
}

/**
 * Synthesize the full perk tree (every category) from the bundled reference
 * (src/data/perkTree.ts — extracted from a 1.6.0 NG+ save with all 17
 * categories populated, 381 statuses, 45 AcquiredPerks), then mark every
 * status as acquired. This makes categories the player hasn't bought from
 * in their current playthrough show up fully acquired in the in-game skill
 * tree. Falls back to the in-place unlockEveryPerk helper if Perk is missing.
 */
import { PERK_ACQUIRED_PERKS, PERK_CATEGORY_STATUSES } from "./data/perkTree.ts";

export function unlockEveryPerkWithReference(doc: SaveDoc): void {
  const u = userProps(doc);
  const perk = findProp(u, "Perk");
  if (!perk || perk.value.t !== "struct") {
    unlockEveryPerk(doc);
    return;
  }
  const csProp = findProp(perk.value.props, "CategoryStatuses");
  const apProp = findProp(perk.value.props, "AcquiredPerks");
  if (csProp && csProp.value.t === "map") {
    csProp.value = structuredClone(PERK_CATEGORY_STATUSES) as Value & { t: "map" };
  }
  if (apProp && apProp.value.t === "map") {
    apProp.value = structuredClone(PERK_ACQUIRED_PERKS) as Value & { t: "map" };
  }
  unlockEveryPerk(doc);
}

/** Force-acquire the perks that gate CP / BP / garage caps. Safe to call on any save. */
export function unlockAllPerks(doc: SaveDoc): void {
  const u = userProps(doc);
  const perk = findProp(u, "Perk");
  if (!perk || perk.value.t !== "struct") return;
  const ps = perk.value.props;
  const csProp = findProp(ps, "CategoryStatuses");
  const apProp = findProp(ps, "AcquiredPerks");
  if (csProp?.value.t !== "map" || apProp?.value.t !== "map") return;
  const ACQUIRED = "ESkillTreeStatus::STS_ACQUIRED";

  for (const want of PERK_AUTO_UNLOCK) {
    // 1) AcquiredPerks[want.treeType] = { Level, CategoryName, RowName }
    const tk = { t: "name", v: want.treeType } as const;
    const existing = apProp.value.entries.find(([k]) => k.t === "name" && k.v === want.treeType);
    if (existing) {
      if (existing[1].t === "struct") {
        for (const p of existing[1].props) {
          if (p.name === "Level" && p.value.t === "int") p.value.v = want.level;
          else if (p.name === "CategoryName" && (p.value.t === "name" || p.value.t === "str")) p.value.v = want.category;
          else if (p.name === "RowName" && (p.value.t === "name" || p.value.t === "str")) p.value.v = want.rowName;
        }
      }
    } else {
      apProp.value.entries.push([
        tk,
        {
          t: "struct",
          path: "/Script/TokyoXtremeRacer.SPerkStatusInfo",
          props: [
            { name: "Level", node: { name: "Level", inner: [] }, data: { k: "other", type: "IntProperty" }, flags: 0, index: 0, value: { t: "int", v: want.level } },
            { name: "CategoryName", node: { name: "CategoryName", inner: [] }, data: { k: "other", type: "NameProperty" }, flags: 0, index: 0, value: { t: "name", v: want.category } },
            { name: "RowName", node: { name: "RowName", inner: [] }, data: { k: "other", type: "NameProperty" }, flags: 0, index: 0, value: { t: "name", v: want.rowName } },
          ],
        },
      ]);
    }

    // 2) CategoryStatuses[want.category].Statuses[want.rowName] = STS_ACQUIRED
    let cat = csProp.value.entries.find(([k]) => k.t === "name" && k.v === want.category);
    if (!cat) {
      // Synthesize an empty category bucket so we can write into its Statuses map.
      const fresh: Value = {
        t: "struct",
        path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo",
        props: [
            {
              name: "Statuses",
              node: { name: "Statuses", inner: [] },
              data: { k: "map", key: { k: "other", type: "NameProperty" }, value: { k: "other", type: "EnumProperty" } },
              flags: 0,
              index: 0,
              value: { t: "map", key: { k: "other", type: "NameProperty" }, value: { k: "other", type: "EnumProperty" }, entries: [] },
            },
        ],
      };
      cat = [{ t: "name", v: want.category }, fresh];
      csProp.value.entries.push(cat);
    }
    if (cat[1].t === "struct") {
      const st = findProp(cat[1].props, "Statuses");
      if (st && st.value.t === "map") {
        const rk = { t: "name", v: want.rowName } as const;
        const hit = st.value.entries.find(([k]) => k.t === "name" && k.v === want.rowName);
        const acquired: Value = { t: "enum", v: ACQUIRED };
        if (hit) hit[1] = acquired;
        else st.value.entries.push([rk, acquired]);
      }
    }
  }
}

/**
 * After unlockAllPerks(), bring the wallet and garage-cap fields up to the
 * new maxima so the in-game perk effects match the save and the validator
 * stops reporting "BP exceeds parser max" / "garageMax 5 with 20 cars".
 * - MaxGarageMyCarNum -> 120 (or keep higher, never reduce)
 * - UpperLimitCP -> 9_999_999_990
 * - UpperLimitPP -> 9999
 * - Cp -> clamped to UpperLimitCP (if user has more than the new upper limit)
 * - PP -> clamped to UpperLimitPP (some saves shipped with PP over the parser max)
 */
export function liftCapsAfterPerks(doc: SaveDoc): void {
  const u = userProps(doc);
  // Garage: raise MaxGarageMyCarNum to 120. Don't reduce if the player saved higher.
  const garage = findProp(u, "MaxGarageMyCarNum");
  if (garage && garage.value.t === "int" && garage.value.v < 120) garage.value.v = 120;
  // CP upper limit: lift to parser max.
  const upperCp = findProp(u, "UpperLimitCP");
  if (upperCp && upperCp.value.t === "int64") {
    if (upperCp.value.v < 9_999_999_990) upperCp.value.v = 9_999_999_990;
  }
  // BP upper limit: lift to parser max.
  const upperPp = findProp(u, "UpperLimitPP");
  if (upperPp && upperPp.value.t === "int64") {
    if (upperPp.value.v < 9999) upperPp.value.v = 9999;
  }
  // Bank balance clamping: only if the balance exceeds the new upper limit.
  // (We never reduce a valid sub-cap balance.)
  const cp = findProp(u, "Cp");
  if (cp && cp.value.t === "int64" && upperCp && upperCp.value.t === "int64"
    && cp.value.v > upperCp.value.v) cp.value.v = upperCp.value.v;
  const pp = findProp(u, "PP");
  if (pp && pp.value.t === "int" && upperPp && upperPp.value.t === "int64"
    && pp.value.v > upperPp.value.v) pp.value.v = upperPp.value.v;
}

function findCarEntry(doc: SaveDoc, id: number): [Value, Value] {
  const e = myCarEntries(doc).find(([k]) => {
    try { return carKeyOf(k) === id; } catch { return false; }
  });
  if (!e) throw new Error(`car ${id} not found`);
  return e;
}

export function setCarChassis(doc: SaveDoc, id: number, code: string): void {
  const props = carPropsOf(findCarEntry(doc, id)[1]);
  const cn = findProp(props, "CarNameId");
  if (cn && (cn.value.t === "name" || cn.value.t === "str")) cn.value.v = code;
  const rep = findProp(props, "IsReplacedEngine")?.value;
  if (rep?.t === "bool" && !rep.v) {
    const en = findProp(props, "EngineNameId");
    if (en && (en.value.t === "name" || en.value.t === "str")) en.value.v = code;
  }
  ensureCanBought(doc, "CanBoughtCarNameIds", code);
}

export function setCarEngine(doc: SaveDoc, id: number, engineId: string): void {
  const props = carPropsOf(findCarEntry(doc, id)[1]);
  const chassis = strOf(findProp(props, "CarNameId")?.value);
  const en = findProp(props, "EngineNameId");
  const rep = findProp(props, "IsReplacedEngine")?.value;
  if (engineId === "Stock") {
    if (en && (en.value.t === "name" || en.value.t === "str")) en.value.v = chassis;
    if (rep?.t === "bool") rep.v = false;
  } else {
    if (en && (en.value.t === "name" || en.value.t === "str")) en.value.v = engineId;
    if (rep?.t === "bool") rep.v = true;
    ensureCanBought(doc, "CanBoughtEngineNameIds", engineId);
  }
}

export function setCarMileage(doc: SaveDoc, id: number, km: number): void {
  const props = carPropsOf(findCarEntry(doc, id)[1]);
  const m = findProp(props, "Mileages");
  if (m && m.value.t === "double") m.value.v = km;
}

export function setCarTune(doc: SaveDoc, id: number, kind: TuneKind, level: TuneLevel): void {
  const props = carPropsOf(findCarEntry(doc, id)[1]);
  const ti = findProp(props, "TuneInfos");
  if (!ti || ti.value.t !== "map") return;
  for (const [k, v] of ti.value.entries) {
    if (k.t !== "enum" || v.t !== "struct") continue;
    const kk = k.v.includes("::") ? k.v.split("::").pop() : k.v;
    if (kk !== kind) continue;
    for (const p of v.props) {
      if (p.name === "EquipLevel" && p.value.t === "enum") p.value.v = `${TUNE_LEVEL_PREFIX}${level}`;
    }
  }
}

function resetClonedCar(props: Prop[], chassis: string): void {
  for (const p of props) {
    if (p.name === "Mileages" && p.value.t === "double") p.value.v = 0;
    if ((p.name === "CarNameId" || p.name === "EngineNameId") &&
      (p.value.t === "name" || p.value.t === "str")) p.value.v = chassis;
    if (p.name === "IsReplacedEngine" && p.value.t === "bool") p.value.v = false;
    if (p.name === "ReplacementEngines" && p.value.t === "map") p.value.entries = [];
    if (p.name === "TuneInfos" && p.value.t === "map") {
      for (const [, v] of p.value.entries) {
        if (v.t !== "struct") continue;
        for (const tp of v.props) {
          if (tp.name === "HaveFlags" && tp.value.t === "int") tp.value.v = 1;
          if (tp.name === "EquipLevel" && tp.value.t === "enum") tp.value.v = `${TUNE_LEVEL_PREFIX}Normal`;
          if (tp.name === "TunerEffect" && tp.value.t === "bool") tp.value.v = false;
        }
      }
    }
  }
}

function nextCarId(doc: SaveDoc): number {
  const u = userProps(doc);
  const p = findProp(u, "MyCarIdSrc");
  const next = numOf(p?.value, 0) + 1;
  if (p && p.value.t === "int") p.value.v = next;
  return next;
}

function keyValueLike(doc: SaveDoc, id: number): Value {
  for (const [k] of myCarEntries(doc)) {
    if (k.t === "int64") return { t: "int64", v: id };
    if (k.t === "int") return { t: "int", v: id };
  }
  return { t: "int", v: id };
}

export function addCar(doc: SaveDoc, chassis: string, templateId: number | null): number {
  const entries = myCarEntries(doc);
  let template: Value | undefined;
  if (templateId !== null) {
    const e = entries.find(([k]) => {
      try { return carKeyOf(k) === templateId; } catch { return false; }
    });
    template = e?.[1];
  }
  template ??= entries[0]?.[1];
  if (!template) throw new Error("garage is empty, nothing to clone");
  const clone = structuredClone(template) as Value;
  resetClonedCar(carPropsOf(clone), chassis);
  const id = nextCarId(doc);
  entries.push([keyValueLike(doc, id), clone]);
  ensureCanBought(doc, "CanBoughtCarNameIds", chassis);
  return id;
}

export function duplicateCar(doc: SaveDoc, id: number): number {
  const [, val] = findCarEntry(doc, id);
  const clone = structuredClone(val) as Value;
  const nid = nextCarId(doc);
  myCarEntries(doc).push([keyValueLike(doc, nid), clone]);
  return nid;
}

export function removeCar(doc: SaveDoc, id: number): void {
  const map = myCarsValue(doc);
  map.entries = map.entries.filter(([k]) => {
    try { return carKeyOf(k) !== id; } catch { return true; }
  });
  const u = userProps(doc);
  const sel = findProp(u, "SelectedMyCarId");
  const stillThere = map.entries.some(([k]) => {
    try { return carKeyOf(k) === numOf(sel?.value, -1); } catch { return false; }
  });
  if (!stillThere && sel && sel.value.t === "int") {
    const first = map.entries[0];
    sel.value.v = first ? carKeyOf(first[0]) : 0;
  }
}

export function toPlayerInput(doc: SaveDoc) {
  const p = readPlayer(doc);
  return { cp: p.cp, bp: p.pp, day: p.day, garageMax: p.garageMax, carCount: p.carCount };
}

export function toCarInput(doc: SaveDoc, id: number) {
  const c = summarizeCar(doc, id);
  return {
    chassisId: c.chassis,
    engineId: c.isReplaced ? c.engine : "",
    tunes: c.tunes,
    isCustom: c.chassis.includes("Cu"),
  };
}

export function playerValidation(doc: SaveDoc) {
  return validatePlayer(toPlayerInput(doc));
}

export function carValidation(doc: SaveDoc, id: number) {
  return validateCar(toCarInput(doc, id));
}

export function garageValidation(doc: SaveDoc) {
  const p = readPlayer(doc);
  return validateGarage(listCars(doc).map((c) => toCarInput(doc, c.id)), p.garageMax);
}

const WARN_RE = /legit max|illegit but parser-allowed|boughtMax|tuner|cheat|unknown chassis|unknown custom/i;

export function splitMessages(messages: string[]): { errors: string[]; warns: string[] } {
  const errors: string[] = [];
  const warns: string[] = [];
  for (const m of messages) (WARN_RE.test(m) ? warns : errors).push(m);
  return errors.length + warns.length > 0 ? { errors, warns } : { errors, warns };
}

export interface ChassisGroup {
  label: string;
  codes: string[];
}

export const CHASSIS_GROUPS: ChassisGroup[] = [
  { label: "Dealer", codes: DEALER_CARS.map((c) => c.code) },
  { label: "Demo Kit", codes: DEMOKIT_CARS.map((c) => c.code) },
];

export const ALL_CHASSIS: string[] = CHASSIS_GROUPS.flatMap((g) => g.codes);
