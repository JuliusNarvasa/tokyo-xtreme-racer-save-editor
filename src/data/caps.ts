export interface Caps {
  /** Max CP legitimately earnable after all CP perks acquired. */
  cpLegitMax: number;
  /** Max CP the save parser accepts. */
  cpParserMax: number;
  /** Max BP legitimately earnable after all BP perks acquired. */
  bpLegitMax: number;
  /** Max BP the save parser accepts. */
  bpParserMax: number;
  /** Max garage slots after all garage-extension perks acquired. */
  garageMax: number;
  /** Human-readable tune gating notes. */
  tuneGating: string;
}

export const CAPS: Caps = {
  cpLegitMax: 500_000_000,
  cpParserMax: 9_999_999_990,
  bpLegitMax: 2500,
  bpParserMax: 9999,
  garageMax: 120,
  tuneGating:
    "PowerUnit 9, IntakeSystem 6 and ExhaustSystem 6 require a tuner effect; " +
    "levels above boughtMax are flagged as tuner-cheat.",
};
