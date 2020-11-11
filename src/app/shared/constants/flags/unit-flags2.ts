import { Flag } from '../../types/general';

export const UNIT_FLAGS_2: Flag[] = [
  { bit: 0,  name: 'FEIGN_DEATH 装死'},
  { bit: 1,  name: 'UNK1 - Hide unit model (show only player equip) UNK1 -隐藏单位模型(只显示玩家装备)'},
  { bit: 2,  name: 'IGNORE_REPUTATION 忽视声誉'},
  { bit: 3,  name: 'COMPREHEND_LANG 理解朗'},
  { bit: 4,  name: 'MIRROR_IMAGE 镜像'},
  { bit: 5,  name: 'INSTANTLY_APPEAR_MODEL - Unit model instantly appears when summoned (does not fade in) 被召唤的单位模型立即出现(不褪色)'},
  { bit: 6,  name: 'FORCE_MOVEMENT 力的运动'},
  { bit: 7,  name: 'DISARM_OFFHAND 解除随便的'},
  { bit: 8,  name: 'DISABLE_PRED_STATS - Player has disabled predicted stats (Used by raid frames) 禁用预估状态-玩家已禁用预估状态(用于raid帧)'},
  { bit: 10, name: 'DISARM_RANGED - this does not disable ranged weapon display (maybe additional flag needed?) 解除远程武器-这不会使远程武器显示失效(也许需要额外的旗帜?)'},
  { bit: 11, name: 'REGENERATE_POWER 再生能力'},
  { bit: 12, name: 'RESTRICT_PARTY_INTERACT - Restrict interaction to party or raid 限制团队互动-限制团队或团队的互动'},
  { bit: 13, name: 'PREVENT_SPELL_CLICK - Prevent spellclick 防止法术点击-防止法术点击'},
  { bit: 14, name: 'ALLOW_ENEMY_INTERACT 让敌人互动'},
  { bit: 15, name: 'DISABLE_TURN 禁用转'},
  { bit: 16, name: 'UNK2'},
  { bit: 17, name: 'PLAY_DEATH_ANIM - Plays special death animation upon death 在死亡时播放特殊的死亡动画'},
  { bit: 18, name: 'ALLOW_CHEAT_SPELLS - Allows casting spells with AttributesEx7 & SPELL_ATTR7_IS_CHEAT_SPELL 允许使用欺骗法术-允许使用属性为ex7和法术ATTR7的法术是欺骗法术'},
];
