import { Option } from '../../types/general';

export const UNIT_CLASS: Option[] = [
  { value: 1, name: 'WARRIOR - Health only (equal to ROGUE) 战士-只有生命值(等于盗贼)' },
  { value: 2, name: 'PALADIN - health & mana (more health than MAGE but less mana) 圣骑士-生命和法力(比法师生命多但法力少)' },
  { value: 4, name: 'ROGUE - Health only (equal to WARRIOR) 盗贼-只有生命值(等于战士)' },
  { value: 8, name: 'MAGE - Health & mana (less health than PALADIN but more mana) 法师-生命和法力(比圣骑士生命少但法力多)' },
];
