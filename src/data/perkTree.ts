// Game-sourced Perk reference (generated, do not hand-edit).
// Source: UserData_stripped.sav (1.6.0 NG+ save with all categories present).
// 17 categories, 381 statuses, 45 AcquiredPerks.
// Used by unlockEveryPerkWithReference() to deep-clone the full tree into a
// target save (so categories the player hasn't unlocked yet still appear),
// then mark every status ESkillTreeStatus::STS_ACQUIRED.

import type { Value } from "../lib/types.ts";

export const PERK_CATEGORY_STATUSES: Value = { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"struct","structPath":"/Script/TokyoXtremeRacer.SPerkCategoryInfo"}, entries: [
  [  { t: "name", v: "PerkIncome" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Perk_default_CP" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_default_BP" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_rival_prize_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_BP_update_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_CP_update_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_perfect_prize_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_winning_streak_prize_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_tecq_prize_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_num_win_bonus_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "PerkOncome" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Perk_default_garage_extension" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_default" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_enable_aura" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_fast_travel" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_call_tuner" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_car_rating_up_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_enable_engine_replacement" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_tune_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_car_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_discount_PA_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_dicount_aero_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Perk_garage_extension_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "MAZDA" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Mazda_ND5RC" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_SE3P" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_FC3S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_BPFJ3R" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_BK3P" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_GG3S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_DK5AW" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_NA8C" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mazda_NB8C" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "MAZDA_FD3S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SUZUKI" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "SUZUKI_ZC33S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suzuki_MH21S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suzuki_HA36S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suzuki_EA21R" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "Toyota" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Toyota_AE86T" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_ZN6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_ZN8" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_GXPA16" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_JZA70" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_JZA80" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "TOYOTA_DB06" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_NCP31" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_JZX100" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_GSJ15W" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_GGH35W" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_XZU402" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_KR52V" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_GRX133" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_GRS184" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_UCF31" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Toyota_AE86L" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SkillDEX" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "STT_DEX_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEX_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEX_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SkillSP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "STT_SP_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_BY_WIN_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_BY_WIN_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_BY_WIN_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_BY_WIN_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_UP_BY_WIN_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SkillATK" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "STT_ATK_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_DAMAGE_COEF_UP_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_BY_WIN_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_DAMAGE_COEF_UP_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_DAMAGE_COEF_UP_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_DAMAGE_COEF_UP_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SP_DAMAGE_COEF_UP_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_BY_WIN_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_BY_WIN_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_BY_WIN_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_UP_BY_WIN_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SkillDEF" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "STT_DEF_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_BY_WIN_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_BY_WIN_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_BY_WIN_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_BY_WIN_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_BY_WIN_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SkillPHY" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "STT_PHY_0" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_RELAX_JUDEGE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_RELAX_JUDEGE_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHOCK_ABSORPTION_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHOCK_ABSORPTION_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_AVOID_COLLISION_DEATH_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_AVOID_COLLISION_DEATH_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_AVOID_COLLISION_DEATH_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_AVOID_COLLISION_DEATH_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_AVOID_COLLISION_DEATH_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHOCK_ABSORPTION_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHOCK_ABSORPTION_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_SHOCK_ABSORPTION_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_PHY_7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_RELAX_JUDEGE_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_RELAX_JUDEGE_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "STT_RELAX_JUDEGE_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "TuneTree" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "PowerUnit_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "ExhaustSystem_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "IntakeSystem_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Clutch_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Brake_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Body_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Brake_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suspension_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Body_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suspension_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Tire_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Tire_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Clutch_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "transmission_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "transmission_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "LSD_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "LSD_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "ExhaustSystem_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "IntakeSystem_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Tire_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Body_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "NitroSystem_1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "ExhaustSystem_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "IntakeSystem_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "NitroSystem_2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Clutch_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "transmission_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "ExhaustSystem_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "IntakeSystem_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Body_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Tire_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suspension_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Brake_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Brake_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suspension_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Clutch_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "transmission_4" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "LSD_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Body_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Tire_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Suspension_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Brake_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "NitroSystem_3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "transmission_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Clutch_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "ExhaustSystem_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "IntakeSystem_5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "PowerUnit_8" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "NISSAN" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Nissan_KRPS13" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_PS13" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_GCZ32" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_BNR32" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_BCNR33" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_BNR34" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_R35" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_R35M" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "NISSAN_R35M2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_S14" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_S15" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_Z33" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_Z34" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_RZ34" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_S30" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_KPGC10" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Nissan_GB121" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "LEXUS" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Lexus_URZ100" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Lexus_USC10" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Lexus_LFA10" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "DAIHATSU" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "DAIHATSU_LA400K" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Daihatsu_L152S" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "Honda" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Honda_JB7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_PP1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_JW5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_GD3" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_CL7" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_EK9" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_FK2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_DC2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_DC5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_AP1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_NA2" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_NA2M" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_NC1M" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_NC1" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Honda_FL5" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "MITSUBISHI" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Mitsubishi_CP9A" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "MITSUBISHI_CZ4A" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mitsubishi_Z16A" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Mitsubishi_DK4A" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }],
  [  { t: "name", v: "SUBARU" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkCategoryInfo", props: [
    { name: "Statuses", node: { name: "MapProperty", inner: [
      { name: "NameProperty", inner: [] },
      { name: "EnumProperty", inner: [
        { name: "ESkillTreeStatus", inner: [
          { name: "/Script/TokyoXtremeRacer", inner: [] }
        ] },
        { name: "ByteProperty", inner: [] }
      ] }
    ] }, data: {"k":"map","key":{"k":"other","type":"NameProperty"},"value":{"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}}, flags: 0, index: 0, value:     { t: "map", key: {"k":"other","type":"NameProperty"}, value: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeStatus","container":"ByteProperty"}, entries: [
      [      { t: "name", v: "Subaru_ZC6" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_ZD8" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_GC8" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_VNH" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_VMG" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_GDBA" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_VAB" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_GDBC" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "Subaru_GDBF" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }],
      [      { t: "name", v: "SUBARU_VBH" },       { t: "enum", v: "ESkillTreeStatus::STS_ACQUIRED" }]
    ] } }
  ] }]
] };
export const PERK_ACQUIRED_PERKS: Value = { t: "map", key: {"k":"enum","enumPath":"/Script/TokyoXtremeRacer.ESkillTreeType","container":"ByteProperty"}, value: {"k":"struct","structPath":"/Script/TokyoXtremeRacer.SPerkStatusInfo"}, entries: [
  [  { t: "enum", v: "ESkillTreeType::STT_NEW_WALLET" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_CP_update_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_BP_UPPER_LIMIT_UPDATE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_BP_update_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_RIVAL_PRIZE_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_rival_prize_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_PERFECT_PRIZE_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_perfect_prize_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_WINNING_STREAK_PRIZE_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_winning_streak_prize_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_TECHNIQUES_PRIZE_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_tecq_prize_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_MAINTENANCE_EXPERT" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_car_rating_up_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT__DEX" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 3 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEX" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEX_3" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT__SP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 7 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_7" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT__ATK" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 7 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_ATK_7" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT__DEF" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 7 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_7" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT__PHY" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 7 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_PHY_7" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_NUM_OF_WIN_BONUS" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkIncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_num_win_bonus_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SKIL_DAMAGE_FROM_TECHNIQUE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SKIL_DAMAGE_FROM_TECHNIQUE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SHORT_SP_ATK_DISTANCE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SHORT_SP_ATK_DISTANCE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DISCOUNT_TUNE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_discount_tune_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DISCOUNT_AERO" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_dicount_aero_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_AURA" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 0 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_enable_aura" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_DAMAGE_COEF_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_DAMAGE_COEF_UP_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DISCOUNT_AT_PA" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_discount_PA_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_FAST_TRAVEL" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 0 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_fast_travel" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_CAN_CALL_TUNER" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 0 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_call_tuner" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_REDUCE_CONSUMPTION_BY_TIRE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_TIRE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_REDUCE_CONSUMPTION_BY_NITRO" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_REDUCE_CONSUMPTION_BY_NITRO_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_RELAX_JUDEGE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_RELAX_JUDEGE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SHOCK_ABSORPTION" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SHOCK_ABSORPTION_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_AVOID_COLLISION_DEATH" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_AVOID_COLLISION_DEATH_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_ENABLE_ENGINE_REPLACEMENT" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 0 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_enable_engine_replacement" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_LOYAL_CUSTOMERS" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 6 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "PerkOncome" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "Perk_discount_car_6" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_UP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_UP_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_RECOVERY_FROM_TECHNIQUE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_RECOVERY_FROM_TECHNIQUE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_RECOVERY_FROM_NITRO" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_RECOVERY_FROM_NITRO_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_RECOVERY_AT_CONTINUOUS_BATTLE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_RECOVERY_AT_ATTACK" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_RECOVERY_AT_ATTACK_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_SP_UP_BY_WIN" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillSP" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_SP_UP_BY_WIN_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_ATK_UP_AT_PA_BATTLE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_ATK_UP_AT_PA_BATTLE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_ATK_UP_BY_WIN" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_ATK_UP_BY_WIN_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_ATK_COEF_ON_BATTLE_START" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillATK" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_ATK_COEF_ON_BATTLE_START_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_LONG_SP_DEF_DISTANCE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_LONG_SP_DEF_DISTANCE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DEF_COEF_FROM_SKIL_DAMAGE" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_COEF_FROM_SKIL_DAMAGE_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DEF_COEF" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_COEF_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DEF_UP_AT_MANY_RIVAL" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_UP_AT_MANY_RIVAL_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DEF_UP_BY_WIN" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_UP_BY_WIN_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_DEF_COEF_ON_BATTLE_START" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillDEF" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_DEF_COEF_ON_BATTLE_START_5" } }
  ] }],
  [  { t: "enum", v: "ESkillTreeType::STT_REDUCE_CONSUMPTION_FOR_SP" },   { t: "struct", path: "/Script/TokyoXtremeRacer.SPerkStatusInfo", props: [
    { name: "Level", node: { name: "IntProperty", inner: [] }, data: {"k":"other","type":"IntProperty"}, flags: 0, index: 0, value:     { t: "int", v: 5 } },
    { name: "CategoryName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "SkillPHY" } },
    { name: "RowName", node: { name: "NameProperty", inner: [] }, data: {"k":"other","type":"NameProperty"}, flags: 0, index: 0, value:     { t: "name", v: "STT_REDUCE_CONSUMPTION_FOR_SP_5" } }
  ] }]
] };

export const PERK_REFERENCE_TOTAL_CATEGORIES = 17;
export const PERK_REFERENCE_TOTAL_STATUSES = 381;
export const PERK_REFERENCE_TOTAL_ACQUIRED = 45;
