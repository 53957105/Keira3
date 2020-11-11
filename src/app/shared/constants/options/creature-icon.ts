import { Option } from '../../types/general';

export const CREATURE_ICON: Option[] = [
  { value: null, name:  'None' },
  { value: 'Directions', name:  'Used for guards and teleporter NPC’s. 用于守卫和传送NPC。' },
  { value: 'Gunner', name:  'Indicator of a turret NPC/Player Controlled. 一个炮塔NPC/玩家的指示器被控制。' },
  { value: 'vehichleCursor', name:  'Indicator that this is a PCV (Player Controlled Vehicle) 指示这是一个PCV(玩家控制的车辆)' },
  { value: 'Driver', name:  'Shows a steering wheel icon when mouse over. 当鼠标经过时，显示方向盘图标。' },
  { value: 'Attack', name:  'Shows a sword icon indicating you can attack this target. 显示剑图标，表明你可以攻击这个目标。' },
  { value: 'Buy', name:  'Shows a brown bag icon usually if the NPC only sells things. 当NPC只卖东西时，会显示一个棕色的袋子图标。' },
  { value: 'Speak', name:  'Shows a chat bubble icon if this NPC has quest/gossip options. 如果这个NPC有任务/八卦选项，会显示一个聊天泡泡图标。' },
  { value: 'Pickup', name:  'Shows a hand grasping icon if this NPC can be picked up for quest/items. 如果这个NPC可以被拾取任务/物品，则显示一个手抓图标。' },
  { value: 'Interact', name:  'Shows cog icon commonly used for quest/transport. 显示任务/运输常用的齿轮图标。' },
  { value: 'Trainer', name: 'Shows a book icon, identifying this NPC as a trainer. 书图标如何，将这个NPC识别为训练师。' },
  { value: 'Taxi', name:  'Shows a boot with wings icon identifying this NPC as a taxi. 显示一个带翅膀的引导图标，标识这个NPC是一辆出租车。' },
  { value: 'Repair', name:  'Shows a anvil icon identifying that this NPC can repair. 显示一个铁砧图标，表明这个NPC可以修复。' },
  { value: 'LootAll', name:  'Shows a multiple brown bag icon (same as holding shift before looting a creature). 显示多个棕色袋子图标(与在抢劫生物前按住shift键相同)。' },
  { value: 'Quest', name:  'Unused or unknown (see entry 32870 “The Real Ronakada”). ' },
  { value: 'PVP', name:  'Unused or Unknown (see entry 29387 “Arena Master: Dalaran Arena”). ' },
];
