export interface EngineSwap {
  id: string;
  name: string;
  /** Credit Point cost. */
  cp: number;
  /**
   * Stock donor car(s) using this engine in game data (CDT_CarParameter
   * EngineFormatName). Empty when no stock car uses it.
   */
  donor: string;
}

export const ENGINE_SWAPS: EngineSwap[] = [
  { id: "EgRp_2JZ_GTE", name: "2JZ-GTE", cp: 1_700_000, donor: "SUPRA RZ (JZA80)" },
  { id: "EgRp_20B", name: "20B", cp: 1_700_000, donor: "" },
  { id: "EgRp_RB26DETT", name: "RB26DETT", cp: 2_000_000, donor: "SKYLINE GT-R (BNR32 · BCNR33 · BNR34)" },
  { id: "EgRp_VR38DETT", name: "VR38DETT", cp: 10_000_000, donor: "NISSAN GT-R (R35)" },
  { id: "EgRp_JNC", name: "JNC", cp: 10_000_000, donor: "NSX (NC1)" },
  { id: "EgRp_1LR-GUE", name: "1LR-GUE", cp: 12_500_000, donor: "Lexus LFA (LFA10)" },
];

/** BP avatars needed to unlock engine swaps. */
export const ENGINE_UNLOCK_BP = 18;

export const ENGINE_IDS: ReadonlySet<string> = new Set(ENGINE_SWAPS.map((e) => e.id));
