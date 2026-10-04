export interface DressupSlot {
  slot: string;
  /** Price in CP. */
  cp: number;
  locked: boolean;
}

export const DRESSUP_SLOTS: DressupSlot[] = [
  { slot: "FrontBumper", cp: 100_000, locked: false },
  { slot: "RearBumper", cp: 100_000, locked: false },
  { slot: "SideSkirt", cp: 70_000, locked: false },
  { slot: "RearSpoiler", cp: 200_000, locked: false },
  { slot: "Bonnet", cp: 200_000, locked: false },
  { slot: "Wheel", cp: 100_000, locked: false },
  { slot: "Muffler", cp: 200_000, locked: true },
  { slot: "BrakeRotor", cp: 100_000, locked: true },
  { slot: "BrakeCaliper", cp: 100_000, locked: true },
];

export const WHEEL_MAKERS: readonly string[] = [
  "ADVAN",
  "BBS",
  "ENKEI",
  "RAYS",
  "SSR",
  "WORK",
  "Weds",
  "YOKOHAMA",
];

export const CALIPERS: readonly string[] = ["Normal", "2P", "4P", "6P", "8P", "TW"];

export const ROTORS: readonly string[] = ["Normal", "AD", "AS", "CD", "CS"];

export interface NeonColor {
  index: number;
  hex: string;
}

export const NEON_COLORS: NeonColor[] = [
  { index: 0, hex: "FFFFFF" },
  { index: 1, hex: "FF0000" },
  { index: 2, hex: "FF7F00" },
  { index: 3, hex: "FFFF00" },
  { index: 4, hex: "7FFF00" },
  { index: 5, hex: "00FF00" },
  { index: 6, hex: "00FF7F" },
  { index: 7, hex: "00FFFF" },
  { index: 8, hex: "007FFF" },
  { index: 9, hex: "0000FF" },
  { index: 10, hex: "7F00FF" },
  { index: 11, hex: "FF00FF" },
  { index: 12, hex: "FF007F" },
  { index: 13, hex: "FFB6C1" },
  { index: 14, hex: "ADFF2F" },
  { index: 15, hex: "87CEEB" },
  { index: 16, hex: "FF8AAE" },
];
