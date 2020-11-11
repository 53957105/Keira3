import { Option } from '../../types/general';

export const ITEM_CLASS: Option[] = [
  { value: 0,  name: 'Consumable 消费品' },
  { value: 1,  name: 'Container 容器' },
  { value: 2,  name: 'Weapon 武器' },
  { value: 3,  name: 'Gem 宝石' },
  { value: 4,  name: 'Armor 护甲' },
  { value: 5,  name: 'Reagent 药剂' },
  { value: 6,  name: 'Projectile 弹药' },
  { value: 7,  name: 'Trade Goods 商品' },
  { value: 8,  name: 'Generic 通用的', comment: 'OBSOLETE 废弃' },
  { value: 9,  name: 'Recipe 配方' },
  { value: 0,  name: 'Money 钱', comment: 'OBSOLETE 废弃' },
  { value: 11, name: 'Quiver 箭袋' },
  { value: 12, name: 'Quest 任务' },
  { value: 13, name: 'Key 钥匙' },
  { value: 14, name: 'Permanent 永久的', comment: 'OBSOLETE 废弃' },
  { value: 15, name: 'Miscellaneous 混杂的' },
  { value: 16, name: 'Glyph 雕文' },
];

export const ITEM_SUBCLASS: Option[][] = [];

ITEM_SUBCLASS[0] = [
  { value: 0, name: 'Consumable 消费品', comment: 'usability in combat depends on the assigned spell 战斗中的可用性取决于所分配的法术' },
  { value: 1, name: 'Potion 药水' },
  { value: 2, name: 'Elixir 炼金药' },
  { value: 3, name: 'Flask 瓶' },
  { value: 4, name: 'Scroll 卷轴' },
  { value: 5, name: 'Food &amp; Drink 食物,饮料' },
  { value: 6, name: 'Item Enhancement' },
  { value: 7, name: 'Bandage 绷带' },
  { value: 8, name: 'Other 其他' },
];

ITEM_SUBCLASS[1] = [
  { value: 0, name: 'Bag 背包' },
  { value: 1, name: 'Soul Bag 灵魂带' },
  { value: 2, name: 'Herb Bag 草药袋' },
  { value: 3, name: 'Enchanting Bag 附魔袋' },
  { value: 4, name: 'Engineering Bag 工程袋' },
  { value: 5, name: 'Gem Bag 宝石袋' },
  { value: 6, name: 'Mining Bag 矿石袋' },
  { value: 7, name: 'Leatherworking Bag 皮革袋' },
  { value: 8, name: 'Inscription Bag 铭文袋' },
];

ITEM_SUBCLASS[2] = [
  { value: 0,  name: 'Axe 斧', comment: 'One-handed 单手' },
  { value: 1,  name: 'Axe 斧', comment: 'Two-handed 双手' },
  { value: 2,  name: 'Bow 弓' },
  { value: 3,  name: 'Gun 枪' },
  { value: 4,  name: 'Mace 锤', comment: 'One-handed 单手' },
  { value: 5,  name: 'Mace 锤', comment: 'Two-handed 双手' },
  { value: 6,  name: 'Polearm 长柄武器' },
  { value: 7,  name: 'Sword 剑', comment: 'One-handed 单手' },
  { value: 8,  name: 'Sword 剑', comment: 'Two-handed 双手' },
  { value: 9,  name: 'Obsolete 废弃的' },
  { value: 10, name: 'Staff 职员' },
  { value: 11, name: 'Exotic' },
  { value: 12, name: 'Exotic' },
  { value: 13, name: 'Fist Weapon 拳套' },
  { value: 14, name: 'Miscellaneous 杂项', comment: 'Blacksmith Hammer, Mining Pick, etc. 铁锤、矿锄等' },
  { value: 15, name: 'Dagger 匕首' },
  { value: 16, name: 'Thrown 投掷' },
  { value: 17, name: 'Spear 矛' },
  { value: 18, name: 'Crossbow 弩' },
  { value: 19, name: 'Wand' },
  { value: 20, name: 'Fishing Pole 鱼杆' },
];

ITEM_SUBCLASS[3] = [
  { value: 0, name: 'Red 红' },
  { value: 1, name: 'Blue 蓝' },
  { value: 2, name: 'Yellow 黄' },
  { value: 3, name: 'Purple 紫' },
  { value: 4, name: 'Green 绿' },
  { value: 5, name: 'Orange 橙' },
  { value: 6, name: 'Meta' },
  { value: 7, name: 'Simple 简单的' },
  { value: 8, name: 'Prismatic 多彩的' },
];

ITEM_SUBCLASS[4] = [
  { value: 0,  name: 'Miscellaneous 杂项' },
  { value: 1,  name: 'Cloth 布甲' },
  { value: 2,  name: 'Leather 皮甲' },
  { value: 3,  name: 'Mail 锁甲' },
  { value: 4,  name: 'Plate 板甲' },
  { value: 5,  name: 'Buckler 防御物', comment: 'OBSOLETE 废弃' },
  { value: 6,  name: 'Shield 盾' },
  { value: 7,  name: 'Libram' },
  { value: 8,  name: 'Idol 雕像' },
  { value: 9,  name: 'Totem 图腾' },
  { value: 10, name: 'Sigil 印章' },
];

ITEM_SUBCLASS[5] = [
  { value: 0, name: 'Reagent 药剂' },
];

ITEM_SUBCLASS[6] = [
  { value: 0, name: 'Wand', comment: 'OBSOLETE 废弃' },
  { value: 1, name: 'Bolt 螺栓', comment: 'OBSOLETE 废弃' },
  { value: 2, name: 'Arrow 箭头' },
  { value: 3, name: 'Bullet 子弹' },
  { value: 4, name: 'Thrown 投掷', comment: 'OBSOLETE 废弃' },
];

ITEM_SUBCLASS[7] = [
  { value: 0,  name: 'Trade Goods 商品' },
  { value: 1,  name: 'Parts 部分' },
  { value: 2,  name: 'Explosives 炸药' },
  { value: 3,  name: 'Devices 设备' },
  { value: 4,  name: 'Jewelcrafting 珠宝加工' },
  { value: 5,  name: 'Cloth 布' },
  { value: 6,  name: 'Leather 皮革' },
  { value: 7,  name: 'Metal &amp; Stone 金属和石头' },
  { value: 8,  name: 'Meat 肉' },
  { value: 9,  name: 'Herb 草' },
  { value: 10, name: 'Elemental 元素' },
  { value: 11, name: 'Other 其他' },
  { value: 12, name: 'Enchanting 附魔' },
  { value: 13, name: 'Materials 材料' },
  { value: 14, name: 'Armor Enchantment 防具附魔' },
  { value: 15, name: 'Weapon Enchantment 武器附魔' },
];

ITEM_SUBCLASS[8] = [
  { value: 0, name: 'Generic 通用的', comment: 'OBSOLETE 废弃' },
];

ITEM_SUBCLASS[9] = [
  { value: 0,  name: 'Book 书' },
  { value: 1,  name: 'Leatherworking 皮革制作' },
  { value: 2,  name: 'Tailoring 裁剪' },
  { value: 3,  name: 'Engineering 工程' },
  { value: 4,  name: 'Blacksmithing 锻造' },
  { value: 5,  name: 'Cooking 烹饪' },
  { value: 6,  name: 'Alchemy 炼金术' },
  { value: 7,  name: 'First Aid 急救' },
  { value: 8,  name: 'Enchanting 附魔' },
  { value: 9,  name: 'Fishing 钓鱼' },
  { value: 10, name: 'Jewelcrafting 珠宝加工' },
];

ITEM_SUBCLASS[10] = [
  { value: 0, name: 'Money', comment: 'OBSOLETE 废弃' },
];

ITEM_SUBCLASS[11] = [
  { value: 0, name: 'Quiver (OBSOLETE)' },
  { value: 1, name: 'Quiver (OBSOLETE)' },
  { value: 2, name: 'Quiver 箭袋', comment: 'Can hold arrows 装箭头' },
  { value: 3, name: 'Ammo Pouch 弹药袋', comment: 'Can hold bullets 装弹药' },
];

ITEM_SUBCLASS[12] = [
  { value: 0, name: 'Quest 任务' },
];

ITEM_SUBCLASS[13] = [
  { value: 0, name: 'Key 钥匙' },
  { value: 1, name: 'Lockpick 开锁工具' },
];

ITEM_SUBCLASS[14] = [
  { value: 0, name: 'Permanent 永久的' },
];

ITEM_SUBCLASS[15] = [
  { value: 0, name: 'Junk 垃圾' },
  { value: 1, name: 'Reagent 试剂' },
  { value: 2, name: 'Pet 宠物' },
  { value: 3, name: 'Holiday 假期' },
  { value: 4, name: 'Other 其他' },
  { value: 5, name: 'Mount 山' },
];

ITEM_SUBCLASS[16] = [
  { value: 1, name: 'Warrior 战士' },
  { value: 2, name: 'Paladin 圣骑士' },
  { value: 3, name: 'Hunter 猎人' },
  { value: 4, name: 'Rogue 盗贼' },
  { value: 5, name: 'Priest 牧师' },
  { value: 6, name: 'Death Knight 死亡骑士' },
  { value: 7, name: 'Shaman 萨满' },
  { value: 8, name: 'Mage 法师' },
  { value: 9, name: 'Warlock 术士' },
  { value: 11,name: 'Druid 德鲁伊' },
];

export enum ITEM_TYPE {
  CONTAINER  = 1,
  WEAPON     = 2,
  ARMOR      = 4,
  AMMUNITION = 6,
}

// ItemMod  (differ slightly from client, see g_statToJson)
export enum ITEM_MOD {
  WEAPON_DMG               = 0,             // < custom
  MANA                     = 1,
  HEALTH                   = 2,
  AGILITY                  = 3,             // stats v
  STRENGTH                 = 4,
  INTELLECT                = 5,
  SPIRIT                   = 6,
  STAMINA                  = 7,
  ENERGY                   = 8,             // powers v
  RAGE                     = 9,
  FOCUS                    = 10,
  RUNIC_POWER              = 11,
  DEFENSE_SKILL_RATING     = 12,            // ratings v
  DODGE_RATING             = 13,
  PARRY_RATING             = 14,
  BLOCK_RATING             = 15,
  HIT_MELEE_RATING         = 16,
  HIT_RANGED_RATING        = 17,
  HIT_SPELL_RATING         = 18,
  CRIT_MELEE_RATING        = 19,
  CRIT_RANGED_RATING       = 20,
  CRIT_SPELL_RATING        = 21,
  HIT_TAKEN_MELEE_RATING   = 22,
  HIT_TAKEN_RANGED_RATING  = 23,
  HIT_TAKEN_SPELL_RATING   = 24,
  CRIT_TAKEN_MELEE_RATING  = 25,
  CRIT_TAKEN_RANGED_RATING = 26,
  CRIT_TAKEN_SPELL_RATING  = 27,
  HASTE_MELEE_RATING       = 28,
  HASTE_RANGED_RATING      = 29,
  HASTE_SPELL_RATING       = 30,
  HIT_RATING               = 31,
  CRIT_RATING              = 32,
  HIT_TAKEN_RATING         = 33,
  CRIT_TAKEN_RATING        = 34,
  RESILIENCE_RATING        = 35,
  HASTE_RATING             = 36,
  EXPERTISE_RATING         = 37,
  ATTACK_POWER             = 38,
  RANGED_ATTACK_POWER      = 39,
  FERAL_ATTACK_POWER       = 40,
  SPELL_HEALING_DONE       = 41,            // deprecated
  SPELL_DAMAGE_DONE        = 42,            // deprecated
  MANA_REGENERATION        = 43,
  ARMOR_PENETRATION_RATING = 44,
  SPELL_POWER              = 45,
  HEALTH_REGEN             = 46,
  SPELL_PENETRATION        = 47,
  BLOCK_VALUE              = 48,
  // MASTERY_RATING           = 49,
  ARMOR                    = 50,            // resistances v
  FIRE_RESISTANCE          = 51,
  FROST_RESISTANCE         = 52,
  HOLY_RESISTANCE          = 53,
  SHADOW_RESISTANCE        = 54,
  NATURE_RESISTANCE        = 55,
  ARCANE_RESISTANCE        = 56,            // custom v
  FIRE_POWER               = 57,
  FROST_POWER              = 58,
  HOLY_POWER               = 59,
  SHADOW_POWER             = 60,
  NATURE_POWER             = 61,
  ARCANE_POWER             = 62,
}

// ItemClass
export const ITEM_CLASS_RECIPE = 9;
