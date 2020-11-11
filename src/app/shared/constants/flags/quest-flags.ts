import { Flag } from '../../types/general';

export const QUEST_FLAG_SHARABLE = 0x00008;

export const QUEST_FLAGS: Flag[] = [
  { bit: 0,  name: 'STAY_ALIVE - If the player dies, the quest is failed 生存-如果玩家死亡，任务失败' },
  { bit: 1,  name: 'PARTY_ACCEPT - All party members that can accept this quest will receive a confirmation box to accept quest 小队接受-所有可以接受任务的小队成员将会收到一个确认接受任务的框' },
  { bit: 2,  name: 'EXPLORATION - Involves the activation of an areatrigger 探索-包括一个反射者的激活' },
  { bit: 3,  name: 'SHARABLE - Allows the quest to be shared with other players 共享-允许任务与其他玩家共享' },
  { bit: 4,  name: 'HAS_CONDITION 有条件' },
  { bit: 5,  name: 'HIDE_REWARD_POI 隐藏奖励兴趣点' },
  { bit: 6,  name: 'RAID - Can be completed while in raid RAID -可以在RAID中完成' },
  { bit: 7,  name: 'TBC - Available only if TBC expansion is enabled TBC -只有在启用TBC扩展时才可用' },
  { bit: 8,  name: 'NO_MONEY_FROM_XP - Experience is not converted to gold at max level 没有钱从经验-经验不转换为黄金在最大水平' },
  { bit: 9,  name: 'HIDDEN_REWARDS - Item and monetary rewards are hidden in the initial quest details page and in the quest log 隐藏奖励-物品和金钱奖励隐藏在最初的任务细节页面和任务日志中' },
  { bit: 10, name: 'TRACKING 跟踪' },
  { bit: 11, name: 'DEPRECATE_REPUTATION 反对的声誉' },
  { bit: 12, name: 'DAILY - Daily repeatable quests  每日-每日可重复的任务' },
  { bit: 13, name: 'FLAGS_PVP - Having this quest in log forces PvP flag 有这个任务在日志强制PVP标志' },
  { bit: 14, name: 'UNAVAILABLE - Used on quests that are not generically available 不可用-用于一般不可用的任务' },
  { bit: 15, name: 'WEEKLY - Weekly repeatable quests 每周可重复的任务' },
  { bit: 16, name: 'AUTOCOMPLETE 自动完成' },
  { bit: 17, name: 'DISPLAY_ITEM_IN_TRACKER - Displays usable item in quest tracker 在任务跟踪中显示可用的物品' },
  { bit: 18, name: 'OBJ_TEXT - Use Objective text as Complete text OBJ文本-使用客观文本作为完整的文本' },
  { bit: 19, name: 'AUTO_ACCEPT - The client recognizes this flag as auto-accept 自动接受——客户端将此标志识别为自动接受' },
];
