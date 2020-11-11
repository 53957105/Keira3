import { Option } from '../../types/general';

export const ITEM_QUALITY: Option[] = [
  { value: 0, name: 'Grey (Poor) 灰色(粗糙)'},
  { value: 1, name: 'White (Common) 白色(普通)'},
  { value: 2, name: 'Green (Uncommon) 绿色(精良)'},
  { value: 3, name: 'Blue (Rare) 蓝色(稀有)'},
  { value: 4, name: 'Purple (Epic) 紫色(史诗)'},
  { value: 5, name: 'Orange (Legendary) 橙色(传奇)'},
  { value: 6, name: 'Red (Artifact) 红色(工件)'},
  { value: 7, name: 'Gold (Bind to Account) 黄金 (账户绑定,传家宝) [requires flags 134221824]' },
];

export enum ITEMS_QUALITY {
  POOR      = 0, // GREY
  NORMAL    = 1, // WHITE
  UNCOMMON  = 2, // GREEN
  RARE      = 3, // BLUE
  EPIC      = 4, // PURPLE
  LEGENDARY = 5, // ORANGE
  ARTIFACT  = 6, // LIGHT YELLOW
  HEIRLOOM  = 7, // GOLD
}
