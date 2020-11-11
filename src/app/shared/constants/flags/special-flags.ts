import { Flag } from '../../types/general';

export const SPECIAL_FLAGS: Flag[] = [
  { bit: 0,  name: 'Makes the quest repeatable 使任务可重复' },
  { bit: 1,  name: 'Makes the quest only completable by some external event 使任务仅由某些外部事件完成' },
  { bit: 2,  name: 'Make quest auto-accept (only quests in the starter area need this flag) 使任务自动接受(只有在启动区域的任务需要这个标志)' },
  { bit: 3,  name: 'Only used for Dungeon Finder quests 只用于寻找地下城的任务' },
  { bit: 4,  name: 'Makes the quest monthly 每月完成任务' },
  { bit: 5,  name: 'The quest requires RequiredOrNpcGo killcredit (a spell cast), but NOT an actual NPC kill 任务需要对npc施放法术' },
];
