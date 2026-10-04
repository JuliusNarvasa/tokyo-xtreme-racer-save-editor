import { ENGINE_SWAPS } from "./engines.ts";
import { GAME_CAR_NAMES, GAME_ENGINE_NAMES } from "./gameTables.ts";

export type Maker =
  | "DAIHATSU"
  | "HONDA"
  | "LEXUS"
  | "MAZDA"
  | "MITSUBISHI"
  | "NISSAN"
  | "SUBARU"
  | "SUZUKI"
  | "TOYOTA";

export type ImgGroup = Maker | "DEMO" | "CUSTOM";

export interface CarSpec {
  code: string;
  maker: Maker;
  name: string;
  year?: number;
  /** Battle Points (shop price in BP). 0 = unsure / not researched. */
  bp: number;
  /** Credit Points (shop price in CP). 0 = unsure / not researched. */
  cp: number;
  /** DLC/update gate, if any (e.g. guest-rival collabs). */
  dlc?: string;
}

/**
 * Dealer-buyable cars (82 entries). Exact in-game display names.
 * Prices exact only where researched (LFA10, S30, starters 0 BP).
 * GB121 added by Guest Rival Vol.3 / v1.6.0 (requires DLC installed).
 */
export const DEALER_CARS: CarSpec[] = [
  // DAIHATSU (2)
  { code: "L152S", maker: "DAIHATSU", name: "MOVE CUSTOM RS Limited (L152S) 02", bp: 0, cp: 0 },
  { code: "LA400K", maker: "DAIHATSU", name: "COPEN Cero (LA400K) 15", bp: 0, cp: 0 },
  // HONDA (15)
  { code: "GD3", maker: "HONDA", name: "Fit 1.5W (GD3) 04", bp: 0, cp: 0 },
  { code: "JB7", maker: "HONDA", name: "LIFE D TURBO (JB7) 03", bp: 0, cp: 0 },
  { code: "PP1", maker: "HONDA", name: "BEAT (PP1) 91", bp: 0, cp: 0 },
  { code: "JW5", maker: "HONDA", name: "S660 CONCEPT EDITION (JW5) 15", bp: 0, cp: 0 },
  { code: "CL7", maker: "HONDA", name: "ACCORD Euro-R (CL7) 02", bp: 0, cp: 0 },
  { code: "DC2", maker: "HONDA", name: "INTEGRA TYPE R (DC2) 99", bp: 0, cp: 0 },
  { code: "EK9", maker: "HONDA", name: "CIVIC TYPE R (EK9) 99", bp: 0, cp: 0 },
  { code: "DC5", maker: "HONDA", name: "INTEGRA TYPE R (DC5) 04", bp: 0, cp: 0 },
  { code: "AP1", maker: "HONDA", name: "S2000 2.0 TYPE-V (AP1) 03", bp: 0, cp: 0 },
  { code: "FK2", maker: "HONDA", name: "CIVIC TYPE R (FK2) 15", bp: 0, cp: 0 },
  { code: "FL5", maker: "HONDA", name: "CIVIC TYPE R (FL5) 22", bp: 0, cp: 0 },
  { code: "NA2", maker: "HONDA", name: "NSX Type S Zero (NA2) 97", bp: 0, cp: 0 },
  { code: "NA2M", maker: "HONDA", name: "NSX-R (NA2) 02", bp: 0, cp: 0 },
  { code: "NC1", maker: "HONDA", name: "NSX (NC1) 17", bp: 0, cp: 0 },
  { code: "NC1M", maker: "HONDA", name: "NSX Type S (NC1) 22", bp: 0, cp: 0 },
  // LEXUS (3)
  { code: "USC10", maker: "LEXUS", name: "Lexus RC F Performance package (USC10) 23", bp: 0, cp: 0 },
  { code: "URZ100", maker: "LEXUS", name: "Lexus LC500 S package (URZ100) 18", bp: 0, cp: 0 },
  { code: "LFA10", maker: "LEXUS", name: "Lexus LFA (LFA10) 10", bp: 109, cp: 37_500_000 },
  // MAZDA (10)
  { code: "GG3S", maker: "MAZDA", name: "ATENZA Sport 23Z (GG3S) 03", bp: 0, cp: 0 },
  { code: "NB8C", maker: "MAZDA", name: "ROADSTER RS (NB8C) 03", bp: 0, cp: 0 },
  { code: "NA8C", maker: "MAZDA", name: "EUNOS ROADSTER S SPECIAL Type II (NA8C) 96", bp: 0, cp: 0 },
  { code: "BK3P", maker: "MAZDA", name: "AXELA Sport 23S (BK3P) 03", bp: 0, cp: 0 },
  { code: "DK5AW", maker: "MAZDA", name: "CX-3 XD (DK5AW) 15", bp: 0, cp: 0 },
  { code: "SE3P", maker: "MAZDA", name: "RX-8 Type S (SE3P) 03", bp: 0, cp: 0 },
  { code: "BPFJ3R", maker: "MAZDA", name: "MAZDA3 FASTBACK 20S Retro Sports Edition (BPFJ3R) 23", bp: 0, cp: 0 },
  { code: "ND5RC", maker: "MAZDA", name: "ROADSTER RS (ND5RC) 15", bp: 0, cp: 0 },
  { code: "FC3S", maker: "MAZDA", name: "SAVANNA RX-7 INFINI (FC3S) 90", bp: 0, cp: 0 },
  { code: "FD3S", maker: "MAZDA", name: "RX-7 Type RZ (FD3S) 00", bp: 0, cp: 0 },
  // MITSUBISHI (4)
  { code: "DK4A", maker: "MITSUBISHI", name: "ECLIPSE GT (DK4A) 05", bp: 0, cp: 0 },
  { code: "Z16A", maker: "MITSUBISHI", name: "GTO TWIN TURBO (Z16A) 95", bp: 0, cp: 0 },
  { code: "CP9A", maker: "MITSUBISHI", name: "LANCER GSR EVOLUTION V (CP9A) 98", bp: 0, cp: 0 },
  { code: "CZ4A", maker: "MITSUBISHI", name: "LANCER EVOLUTION FINAL EDITION (CZ4A) 15", bp: 0, cp: 0 },
  // NISSAN (16)
  { code: "KPGC10", maker: "NISSAN", name: "SKYLINE HT 2000GT-R (KPGC10) 70", bp: 0, cp: 0 },
  { code: "KRPS13", maker: "NISSAN", name: "180SX TYPE X w/SUPER HICAS (KRPS13) 96", bp: 0, cp: 0 },
  { code: "PS13", maker: "NISSAN", name: "SILVIA Ks (PS13) 91", bp: 0, cp: 0 },
  { code: "S14", maker: "NISSAN", name: "SILVIA Ks AERO SE (S14) 97", bp: 0, cp: 0 },
  { code: "S15", maker: "NISSAN", name: "SILVIA spec-R AERO (S15) 99", bp: 0, cp: 0 },
  { code: "Z33", maker: "NISSAN", name: "FAIRLADY Z Version ST (Z33) 05", bp: 0, cp: 0 },
  { code: "GCZ32", maker: "NISSAN", name: "FAIRLADY Z Version R TwinTurbo 2by2 (GCZ32) 98", bp: 0, cp: 0 },
  { code: "Z34", maker: "NISSAN", name: "FAIRLADY Z Version ST (Z34) 14", bp: 0, cp: 0 },
  { code: "BNR32", maker: "NISSAN", name: "SKYLINE GT-R V-spec II (BNR32) 94", bp: 0, cp: 0 },
  { code: "BCNR33", maker: "NISSAN", name: "SKYLINE GT-R V-spec (BCNR33) 97", bp: 0, cp: 0 },
  { code: "BNR34", maker: "NISSAN", name: "SKYLINE GT-R V-spec II (BNR34) 00", bp: 0, cp: 0 },
  { code: "RZ34", maker: "NISSAN", name: "FAIRLADY Z Version ST (RZ34) 24", bp: 0, cp: 0 },
  { code: "R35M", maker: "NISSAN", name: "NISSAN GT-R Premium edition (R35) 17", bp: 0, cp: 0 },
  { code: "R35", maker: "NISSAN", name: "NISSAN GT-R Premium edition (R35) 14", bp: 0, cp: 0 },
  { code: "R35M2", maker: "NISSAN", name: "NISSAN GT-R Premium edition T-spec (R35) 24", bp: 0, cp: 0 },
  { code: "S30", maker: "NISSAN", name: "FAIRLADY 240Z (HS30S) 71", bp: 121, cp: 29_500_000 },
  // v1.6.0 addition (DLC-gated dealer car, displays as DATSUN in game)
  { code: "GB121", maker: "NISSAN", name: "Datsun Sunny Truck 1200 Long Body Deluxe (GB121) '79", bp: 0, cp: 0, dlc: "Guest Rival Vol.3 / v1.6.0" },
  // SUBARU (10)
  { code: "ZC6", maker: "SUBARU", name: "BRZ GT (ZC6) 16", bp: 0, cp: 0 },
  { code: "ZD8", maker: "SUBARU", name: "BRZ S (ZD8) 21", bp: 0, cp: 0 },
  { code: "VBH", maker: "SUBARU", name: "WRX S4 STI Sport R EX (VBH) 21", bp: 0, cp: 0 },
  { code: "GDBA", maker: "SUBARU", name: "IMPREZA WRX STi (GDB) 00", bp: 0, cp: 0 },
  { code: "GDBC", maker: "SUBARU", name: "IMPREZA WRX STi 2003 V-Limited (GDB) 03", bp: 0, cp: 0 },
  { code: "VMG", maker: "SUBARU", name: "LEVORG 2.0GT-S EyeSight (VMG) 15", bp: 0, cp: 0 },
  { code: "GC8", maker: "SUBARU", name: "IMPREZA WRX TypeR STi VI (GC8) 99", bp: 0, cp: 0 },
  { code: "VNH", maker: "SUBARU", name: "LEVORG STI Sport R EX (VNH) 21", bp: 0, cp: 0 },
  { code: "VAB", maker: "SUBARU", name: "WRX STI Type S (VAB) 15", bp: 0, cp: 0 },
  { code: "GDBF", maker: "SUBARU", name: "IMPREZA WRX STi spec C (GDB) 05", bp: 0, cp: 0 },
  // SUZUKI (4)
  { code: "MH21S", maker: "SUZUKI", name: "WAGON R RR-DI (MH21S) 03", bp: 0, cp: 0 },
  { code: "EA21R", maker: "SUZUKI", name: "CAPPUCCINO (EA21R) 95", bp: 0, cp: 0 },
  { code: "HA36S", maker: "SUZUKI", name: "ALTO WORKS (HA36S) 15", bp: 0, cp: 0 },
  { code: "ZC33S", maker: "SUZUKI", name: "SWIFT Sport (ZC33S) 22", bp: 0, cp: 0 },
  // TOYOTA (17)
  { code: "KR52V", maker: "TOYOTA", name: "TOWNACE VAN GL(KR52V) 05", bp: 0, cp: 0 },
  { code: "NCP31", maker: "TOYOTA", name: "bB Z X Version (NCP31) 03", bp: 0, cp: 0 },
  { code: "AE86L", maker: "TOYOTA", name: "COROLLA LEVIN GT-APEX 3door (AE86) 87", bp: 0, cp: 0 },
  { code: "AE86T", maker: "TOYOTA", name: "SPRINTER TRUENO GT-APEX 3door (AE86) 87", bp: 0, cp: 0 },
  { code: "ZN6", maker: "TOYOTA", name: "TOYOTA 86 GT (ZN6) 12", bp: 0, cp: 0 },
  { code: "XZU402", maker: "TOYOTA", name: "Dyna (XZU402) 99", bp: 0, cp: 0 },
  { code: "GSJ15W", maker: "TOYOTA", name: "FJ CRUISER Color Package (GSJ15W) 14", bp: 0, cp: 0 },
  { code: "ZN8", maker: "TOYOTA", name: "GR86 RZ (ZN8) 21", bp: 0, cp: 0 },
  { code: "JZA70", maker: "TOYOTA", name: "SUPRA 2.5GT TWIN TURBO R (JZA70) 93", bp: 0, cp: 0 },
  { code: "JZX100", maker: "TOYOTA", name: "CHASER TOURER V (JZX100) 98", bp: 0, cp: 0 },
  { code: "GRX133", maker: "TOYOTA", name: "MARK X 350RDS (GRX133) 16", bp: 0, cp: 0 },
  { code: "JZA80", maker: "TOYOTA", name: "SUPRA RZ (JZA80) 97", bp: 0, cp: 0 },
  { code: "GGH35W", maker: "TOYOTA", name: "VELLFIRE 3.5VL (GGH35W) 15", bp: 0, cp: 0 },
  { code: "GXPA16", maker: "TOYOTA", name: "GR YARIS RZ (GXPA16) 20", bp: 0, cp: 0 },
  { code: "GRS184", maker: "TOYOTA", name: "CROWN ATHLETE G (GRS184) 05", bp: 0, cp: 0 },
  { code: "DB06", maker: "TOYOTA", name: "GR SUPRA RS (DB06) 22", bp: 0, cp: 0 },
  { code: "UCF31", maker: "TOYOTA", name: "CELSIOR (UCF31) 04", bp: 0, cp: 0 },
];

/** Demo-kit cars (3 entries, not sold at dealer). */
export const DEMOKIT_CARS: CarSpec[] = [
  { code: "VABDeDA", maker: "SUBARU", name: "WRX STI ELECTRICO", bp: 0, cp: 0 },
  { code: "JZA80DeBO", maker: "TOYOTA", name: "BOMEX Racing GT CONCEPT V001", bp: 0, cp: 0 },
  { code: "NA2DeRK", maker: "HONDA", name: "RouteKS BODY KIT NA2", bp: 0, cp: 0 },
];

/** Starter car chassis codes (free / 0 BP). */
export const STARTERS: readonly string[] = ["ND5RC", "ZC33S", "AE86T"];

/**
 * Custom-only (unbuyable at dealer) EP chassis list (13 entries).
 * These are known chassis usable on custom cars but not sold directly.
 */
export const UNBUYABLE_EP: readonly string[] = [
  "BCNR33CuSI",
  "NCP31CuHG",
  "S30CuWN",
  "S30CuWN2",
  "ZC6EpUR",
  "KPGC10EpBP",
  "JW5EpSU",
  "Z33EpSC",
  "GDBAEpDS",
  "BNR32EpDG",
  "ZN6EpV3",
  "ZD8EpHY2",
  "AP1EpOD",
];

/** Dealer-buyable custom chassis codes (77 entries, incl. 6 DLC collabs). Hotlinked thumbnails only. */
export const CUSTOM_BUYABLE: string[] = [
  "AE86TCuRG", "AE86LCuRM", "ZN6CuRG2", "LA400KCuTD", "BK3PCuPG",
  "ZN6CuRG", "EA21RCuDR", "ZN6CuBH", "VMGCuKD", "ZC6CuJA",
  "VMGCuKH", "DK4ACuWF", "AE86LCuGA", "LA400KCuGL", "Z34CuMR",
  "VMGCuKO", "VABCuYT", "ZD8CuDW", "SE3PCuMA", "BPFJ3RCuGS",
  "SE3PCuMC", "BCNR33CuSI2", "CZ4ACuSE", "CZ4ACuCM", "AP1CuRW",
  "Z33CuKD", "GCZ32CuKH", "VABCuDeCD", "VABCuCD", "JZX100CuIT",
  "JZA80CuST", "FD3SCuDF", "ZN8CuRS", "VBHCuTL", "BNR34CuKO",
  "JZA80CuSH", "Z16ACuDS", "FD3SCuTG", "JZA80CuNA", "RZ34CuMD",
  "CZ4ACuSB", "ZN8CuRZ", "GRS184CuSR", "ZD8CuTR", "NA2CuLD",
  "JZA70CuTU", "VBHCuPL", "GDBFCuLC", "NC1MCuFW", "NC1MCuFM",
  "NA2CuDeLB", "BNR32CuCM", "JZA70CuFM", "FD3SCuWC", "DB06CuTS",
  "GXPA16CuSA", "GCZ32CuSA", "NC1CuRE", "R35MCuSI", "DB06CuIN",
  "FD3SCuSN", "Z16ACuSK", "BNR34CuZE", "Z16ACuON", "CZ4ACuXN",
  "JZA80CuDeFT", "R35MCuEX", "JZA80CuSN", "BNR34CuEM", "LFA10CuCD",
  "S30CuUN",
  // DLC collabs (Guest Rival Vol.1-3 / v1.6.0)
  "DC5CuNJ", "SE3PCuHL",
  "BNR34CuMINIGT", "FL5CuMINIGT", "GB121CuMINIGT", "JZA80CuMINIGT",
];

/** Known custom display aliases; fallback label = code. */
export const CUSTOM_NAMES: Record<string, string> = {
  BCNR33CuSI: "POLARIS",
  S30CuWN: "FAIRLADY 240Z (HS30S) 71",
  ZC6EpUR: "RYOMA",
  AE86TCuRG: "ROLLING GUY NO.1",
  BNR34CuKO: "IRON R",
  JZA80CuSH: "SHADOW EYES",
  CZ4ACuSB: "SKULL BULLET",
  NA2CuLD: "NIGHTMARE",
  GDBFCuLC: "LIGHTSPEED COURIER",
  NC1MCuFW: "PRINCESS",
  // DLC collabs
  BNR34CuMINIGT: "GT-R MINI GT CUSTOM (BNR34)",
  DC5CuNJ: "Meloco Custom (NIJISANJI) (DC5)",
  FL5CuMINIGT: "CIVIC MINI GT CUSTOM (FL5)",
  GB121CuMINIGT: "SUNNY TRUCK MINI GT CUSTOM Kagami (GB121)",
  JZA80CuMINIGT: "SUPRA MINI GT CUSTOM (JZA80)",
  SE3PCuHL: "Chihaya Rindo Custom (hololive) (SE3P)",
};

/** Cars gated behind DLC/entitlements (shipped; game requires the DLC). */
export const DLC_GATED: ReadonlySet<string> = new Set([
  "GB121",
  "BNR34CuMINIGT",
  "DC5CuNJ",
  "FL5CuMINIGT",
  "GB121CuMINIGT",
  "JZA80CuMINIGT",
  "SE3PCuHL",
]);

export function customName(code: string): string {
  return CUSTOM_NAMES[code] ?? code;
}

export const DEALER_CODES: ReadonlySet<string> = new Set(DEALER_CARS.map((c) => c.code));
export const DEMOKIT_CODES: ReadonlySet<string> = new Set(DEMOKIT_CARS.map((c) => c.code));
export const UNBUYABLE_EP_SET: ReadonlySet<string> = new Set(UNBUYABLE_EP);
export const CUSTOM_CODES: ReadonlySet<string> = new Set(CUSTOM_BUYABLE);

const DEALER_MAKER_BY_CODE = new Map(DEALER_CARS.map((c) => [c.code, c.maker] as const));

const DEALER_NAME_BY_CODE = new Map(DEALER_CARS.map((c) => [c.code, c.name] as const));


/**
 * Full display name for a chassis code (primary identifier in UI).
 * Dealer exact name / game CarNameId (covers customs, demo kits, EP cars,
 * DLC collabs) / hand alias / fallback code.
 * Custom CarNameIds ARE the wanderer/boss crew names (e.g. ROLLING GUY NO.1,
 * POLARIS) — the game has no separate owner mapping table.
 */
export function displayName(code: string): string {
  return DEALER_NAME_BY_CODE.get(code) ?? GAME_CAR_NAMES[code] ?? customName(code);
}

/** Game engine format name for a chassis (e.g. AE86T -> "4A-GEU"), if known. */
export function engineFormat(code: string): string | null {
  const raw = GAME_ENGINE_NAMES[code];
  return raw ? raw.replace(/_/g, "-") : null;
}

const SWAP_NAME_BY_ID = new Map(ENGINE_SWAPS.map((s) => [s.id, s.name] as const));

/** Garage/engine-cell label: game-accurate names, never bare internal ids. */
export function engineLabel(engineId: string, chassis: string, isReplaced: boolean): string {
  if (!isReplaced) {
    const fmt = engineFormat(chassis);
    return fmt ? `Stock · ${fmt}` : "Stock";
  }
  return SWAP_NAME_BY_ID.get(engineId) ?? engineId.replace(/^EgRp_/, "").replace(/_/g, "-");
}

/**
 * Hotlinked thumbnail URL (community datamine, NOT vendored — no license grant).
 * Pattern: https://ddm999.github.io/txr25info/img/car/TTH_CAR_<MAKER>_<CODE>.PNG
 * MAKER: dealer maker uppercase, DEMO for demokit, CUSTOM for customs. CODE uppercased.
 */
export function imgUrl(code: string): string {
  const up = code.toUpperCase();
  let maker: ImgGroup;
  if (DEMOKIT_CODES.has(code)) maker = "DEMO";
  else if (CUSTOM_CODES.has(code) || code.includes("Cu")) maker = "CUSTOM";
  else maker = DEALER_MAKER_BY_CODE.get(code) ?? "CUSTOM";
  // TEMP-LOCAL-DLC-THUMBS (revert after ddm999/txr25info#5 merges): use vendored PNGs in public/img/car
  if (DLC_GATED.has(code)) return `/img/car/TTH_CAR_${maker}_${up}.PNG`;
  return `https://ddm999.github.io/txr25info/img/car/TTH_CAR_${maker}_${up}.PNG`;
}
