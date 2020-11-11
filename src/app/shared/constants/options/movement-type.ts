import { Option } from '../../types/general';

export const MOVEMENT_TYPE: Option[] = [
  { value: 0, name: 'Idle (stay in place) 闲置(原地不动)' },
  { value: 1, name: 'Random (in radius) 随机(半径)' },
  { value: 2, name: 'Waypoint movement 航点运动' },
];
