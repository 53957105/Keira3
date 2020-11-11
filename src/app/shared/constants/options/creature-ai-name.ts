import { Option } from '../../types/general';

export const CREATURE_AI_NAME: Option[] = [
  { value: 'NullCreatureAI', name: 'Empty AI, creature does nothing; cannot be charmed.\n空AI，生物什么都不做;不能被迷住了。' },
  { value: 'TriggerAI', name: 'Same as "NullCreatureAI", except that the creature casts the spell from field spell1 when summoned\n与“无效生物AI”相同，只是该生物在被召唤时是通过场法1施法' },
  { value: 'AggressorAI', name: 'Creature attacks when entering aggro radius; uses only melee attacks.\n生物进入攻击范围后攻击;只使用近战攻击。' },
  { value: 'ReactorAI', name: 'Creature attacks only if aggroed; uses only melee attacks..\n生物只有在受到侵犯时才会攻击;只使用近战攻击…' },
  { value: 'PassiveAI', name: 'Creature behaves passive, cannot attack. \n生物被动，不能攻击。' },
  { value: 'CritterAI', name: 'Critter which flees if attacked.\n受到攻击会逃跑的小动物。' },
  { value: 'GuardAI', name: 'Creature is a zone guard.\n该生物是区域守卫。' },
  { value: 'PetAI', name: 'The creature is a pet.\n这种生物是宠物。' },
  { value: 'TotemAI', name: 'Creature casts spell from field spell1; does not move.\n该生物使用田野法术1;不能移动。' },
  { value: 'CombatAI', name: 'Creature attacks as soon as something is in aggro range; uses also spells.\n当某物在攻击范围内时，该生物立即攻击;也使用法术。' },
  { value: 'ArcherAI', name: 'Creature casts spell from field spell1; chases the victim.\n该生物使用田野法术1;追逐的受害者。' },
  { value: 'TurretAI', name: 'Creature attacks using spell from field spell1; does not move.\n生物使用场法术1进行攻击;不能移动。' },
  { value: 'VehicleAI', name: 'Creature acts as player vehicle.\n此生物充当玩家的交通工具。' },
  { value: 'SmartAI', name: 'The creature uses SmartAI\n该生物使用智能AI' },
];
