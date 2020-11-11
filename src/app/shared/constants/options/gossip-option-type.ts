import { Option } from '../../types/general';

export const OPTION_TYPE: Option[] = [
  { value: 0,  name: 'NONE - UNIT_NPC_FLAG_NONE (npcflag=0)' },
  { value: 1,  name: 'GOSSIP - UNIT_NPC_FLAG_GOSSIP (npcflag=1) 对话-单位NPC旗帜闲话(npcflag=1)' },
  { value: 2,  name: 'QUESTGIVER - UNIT_NPC_FLAG_QUESTGIVER (npcflag=2) 任务赋予者-单位NPC旗帜任务赋予者(npcflag=2)' },
  { value: 3,  name: 'VENDOR - UNIT_NPC_FLAG_VENDOR (Make sure there is npc_vendor data for this creature) (npcflag=128) VENDOR -单位NPC FLAG VENDOR(确保有此生物的NPC VENDOR数据)(npcflag=128)' },
  { value: 4,  name: 'TAXIVENDOR - UNIT_NPC_FLAG_TAXIVENDOR (npcflag=8192)' },
  { value: 5,  name: 'TRAINE - UNIT_NPC_FLAG_TRAINER (Remember to set trainer_class in creature_template) (npcflag=16) 训练-单位NPC旗帜训练师(记得在生物模板中设置训练师职业)(npcflag=16)' },
  { value: 6,  name: 'SPIRITHEALER - UNIT_NPC_FLAG_SPIRITHEALER (npcflag=16384) 单位NPC旗SPIRITHEALER (npcflag=16384)' },
  { value: 7,  name: 'SPIRITGUID - UNIT_NPC_FLAG_SPIRITGUIDE (npcflag=32768) 精灵-单位NPC旗帜精灵指南(npcflag=32768)' },
  { value: 8,  name: 'INNKEEPE - UNIT_NPC_FLAG_INNKEEPER (npcflag=65536) INNKEEPE -单位NPC旗帜客栈老板(npcflag=65536)' },
  { value: 9,  name: 'BANKER - UNIT_NPC_FLAG_BANKER (npcflag=131072) 银行家-全国人民代表大会旗帜银行家(npcflag=131072)' },
  { value: 10, name: 'PETITIONER - UNIT_NPC_FLAG_PETITIONER (npcflag=262144) 呈请人-单位NPC旗帜呈请人(npcflag=262144)' },
  { value: 11, name: 'TABARDDESIGNER - UNIT_NPC_FLAG_TABARDDESIGNER (npcflag=524288) 粗呢大衣设计师 (npcflag=524288)' },
  { value: 12, name: 'BATTLEFIEL - UNIT_NPC_FLAG_BATTLEFIELDPERSON (npcflag=1048576) BATTLEFIEL -单位NPC FLAG BATTLEFIELDPERSON (npcflag=1048576)' },
  { value: 13, name: 'AUCTIONEER - UNIT_NPC_FLAG_AUCTIONEER (npcflag=2097152) 拍卖师-单位NPC旗拍卖师(npcflag=2097152)' },
  { value: 14, name: 'STABLEPE - UNIT_NPC_FLAG_STABLE (npcflag=4194304) STABLEPE -单位NPC FLAG STABLE (npcflag=4194304)' },
  { value: 15, name: 'ARMORE - UNIT_NPC_FLAG_ARMORER (not used) (npcflag=4096) ARMORE - NPC旗帜军械师(未使用)(npcflag=4096)' },
  { value: 16, name: 'UNLEARNTALENTS - UNIT_NPC_FLAG_TRAINER (bonus option for OPTION_TRAINER) (npcflag=16) UNLEARNTALENTS -单位NPC旗帜训练师(附加训练师选项)(npcflag=16)' },
  { value: 17, name: 'UNLEARNPETTALENT - UNIT_NPC_FLAG_TRAINER (bonus option for OPTION_TRAINER) (npcflag=16) unlearnpet天赋-单位NPC旗帜训练师(附加训练师选项)(npcflag=16)' },
  { value: 18, name: 'LEARNDUALSPE - UNIT_NPC_FLAG_TRAINER (bonus option for OPTION_TRAINER) (npcflag=16) 学习-单位NPC旗帜训练师(附加训练师选项)(npcflag=16)' },
  { value: 19, name: 'OUTDOORPVP - Added by code (option for outdoor PvP creatures) 户外PvP -通过代码添加(户外PvP生物的选项)' },
];
