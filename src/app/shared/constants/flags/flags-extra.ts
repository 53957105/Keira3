import { Flag } from '../../types/general';

export const FLAGS_EXTRA: Flag[] = [
  { bit: 0,  name: `INSTANCE_BIND - creature kill bind instance with killer and killer's group 副本绑定-生物用杀手和杀手所在的团队杀死所绑定的副本` },
  { bit: 1,  name: `CIVILIAN - not aggro (ignore faction/reputation hostility) 平民-不是仇恨(忽略派系/名誉敌意)` },
  { bit: 2,  name: `NO_PARRY - creature can't parry 无招架-生物不能招架` },
  { bit: 3,  name: `NO_PARRY_HASTEN - creature can't counter-attack at parry 无招架加速-招架时生物不能反击` },
  { bit: 4,  name: `NO_BLOCK - creature can't block 无格挡-生物不能格挡` },
  { bit: 5,  name: `NO_CRUSH - creature can't do crush attacks 无粉碎-生物不能进行粉碎攻击` },
  { bit: 6,  name: `NO_XP_AT_KILL - creature kill not provide XP 杀死时没有经验值-杀死生物不提供经验值` },
  { bit: 7,  name: `TRIGGER - trigger creature 触发-触发生物` },
  { bit: 8,  name: `NO_TAUNT - creature is immune to taunt auras and effect attack me 没有嘲讽-该生物对嘲讽光环免疫，并且效果攻击我` },
  { bit: 9,  name: `UNKNOWN 未知的` },
  { bit: 10, name: `UNKNOWN 未知的` },
  { bit: 11, name: `UNKNOWN 未知的` },
  { bit: 12, name: `UNKNOWN 未知的` },
  { bit: 13, name: `UNKNOWN 未知的` },
  { bit: 14, name: `WORLDEVENT - custom flag for world event creatures (left room for merging) 世界事件-自定义标志的世界事件生物(左空间合并)` },
  { bit: 15, name: `GUARD - Creature is guard 守卫-生物是守卫` },
  { bit: 16, name: `UNKNOWN 未知的` },
  { bit: 17, name: `NO_CRIT - creature can't do critical strikes 所有暴击生物都不能爆击` },
  { bit: 18, name: `NO_SKILLGAIN - creature won't increase weapon skills 没有技能增益-生物不会增加武器技能` },
  { bit: 19, name: `TAUNT_DIMINISH - Taunt is a subject to diminishing returns on this creature 嘲讽减少-嘲讽是此生物的回报递减的对象` },
  { bit: 20, name: `ALL_DIMINISH - Creature is subject to all diminishing returns as player are 所有递减生物和玩家一样受到所有递减收益的影响` },
  { bit: 21, name: `KNOCKBACK_IMMUNE - set mostly for dungeon bosses and their summons 击退免疫-主要为地牢老板和他们的召唤设置` },
  { bit: 22, name: `AVOID_AOE - ignored by aoe attacks (for icc blood prince council npc - Dark Nucleus) 避免AOE -被AOE攻击忽略(icc血王子议会npc -暗核)` },
  { bit: 23, name: `NO_DODGE - target cannot dodge 不可闪避-目标不能闪避` },
  { bit: 24, name: `DUNGEON_BOSS - creature is a dungeon boss (SET DYNAMICALLY, DO NOT ADD IN DB) 地牢老板-生物是地牢老板(动态设置，不添加数据库)` },
  { bit: 25, name: `IGNORE_PATHFINDING - creature ignore pathfinding 忽略寻路-生物忽略寻路` },
];
