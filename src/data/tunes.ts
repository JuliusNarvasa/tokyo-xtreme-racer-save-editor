export type TuneKind =
  | "PowerUnit"
  | "IntakeSystem"
  | "ExhaustSystem"
  | "Transmission"
  | "Clutch"
  | "Suspension"
  | "Brake"
  | "Body"
  | "FrontTire"
  | "RearTire"
  | "LSD"
  | "Nitro";

export type TuneLevel =
  | "Normal"
  | "Level1"
  | "Level2"
  | "Level3"
  | "Level4"
  | "Level5"
  | "Level6"
  | "Level7"
  | "Level8"
  | "Level9";

export interface TuneKindSpec {
  kind: TuneKind;
  /** Absolute max level index (Normal=0 .. maxLevel). */
  maxLevel: number;
  /** Max level buyable without tuner effect. */
  boughtMax: number;
  /** Whether the top level(s) require a tuner effect. */
  tunerOnly: boolean;
}

export const TUNE_KINDS: TuneKindSpec[] = [
  { kind: "PowerUnit", maxLevel: 9, boughtMax: 8, tunerOnly: true },
  { kind: "IntakeSystem", maxLevel: 6, boughtMax: 5, tunerOnly: true },
  { kind: "ExhaustSystem", maxLevel: 6, boughtMax: 5, tunerOnly: true },
  { kind: "Transmission", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "Clutch", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "Suspension", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "Brake", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "Body", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "FrontTire", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "RearTire", maxLevel: 5, boughtMax: 5, tunerOnly: false },
  { kind: "LSD", maxLevel: 3, boughtMax: 3, tunerOnly: false },
  { kind: "Nitro", maxLevel: 3, boughtMax: 3, tunerOnly: false },
];

export const TUNE_LEVELS: readonly TuneLevel[] = [
  "Normal",
  "Level1",
  "Level2",
  "Level3",
  "Level4",
  "Level5",
  "Level6",
  "Level7",
  "Level8",
  "Level9",
];

export const TUNE_KIND_MAP: ReadonlyMap<TuneKind, TuneKindSpec> = new Map(
  TUNE_KINDS.map((t) => [t.kind, t]),
);

export const TUNE_LEVEL_INDEX: ReadonlyMap<TuneLevel, number> = new Map(
  TUNE_LEVELS.map((l, i) => [l, i]),
);
