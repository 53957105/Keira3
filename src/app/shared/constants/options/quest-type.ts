import { Option } from '../../types/general';

export const QUEST_TYPE: Option[] = [
  { value: 0, name: 'The quest is enabled, but it is auto-completed when accepted; this skips quest objectives and quest details 任务是启用的，但被接受时自动完成;这跳过了任务目标和任务细节' },
  { value: 1, name: 'The quest is disabled 任务被禁用' },
  { value: 2, name: 'The quest is enabled (does not auto-complete) 任务启用(不自动完成)' },
  { value: 3, name: 'The quest is a World Quest 探索是一项世界性的探索' },
];
