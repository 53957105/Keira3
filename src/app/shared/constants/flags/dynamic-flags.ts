import { Flag } from '../../types/general';

export const DYNAMIC_FLAGS: Flag[] = [
  { bit: 0, name: 'LOOTABLE 掉落能力'},
  { bit: 1, name: 'TRACK_UNIT - Creature’s location will be seen as a small dot in the minimap 追踪单位-生物的位置会被视为小地图上的一个小点'},
  { bit: 2, name: 'TAPPED - Makes creatures name appear grey (Lua_UnitIsTapped) 点击-使生物的名字出现灰色(Lua UnitIsTapped)'},
  { bit: 3, name: 'TAPPED_BY_PLAYER - Lua_UnitIsTappedByPlayer usually used by PCVs (Player Controlled Vehicles 由玩家控制的车辆(由玩家控制的车辆)所使用的Lua UnitIs'},
  { bit: 4, name: 'SPECIALINFO 特殊的信息'},
  { bit: 5, name: 'DEAD - Makes the creature appear dead (this DOES NOT make the creature’s name grey or not attack players). 死亡-使该生物看起来死亡(这不会使该生物的名字变成灰色或不攻击玩家)。'},
  { bit: 6, name: 'REFER_A_FRIEND 介绍朋友'},
  { bit: 7, name: 'TAPPED_BY_ALL_THREAT_LIST - Lua_UnitIsTappedByAllThreatList 被所有威胁列表选中的Lua UnitIs'},
];
