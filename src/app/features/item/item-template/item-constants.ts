export const ITEM_CONSTANTS = {
  'timeUnits': {
    sg: ['year',  'month',  'week',  'day',  'hour',  'minute',  'second',  'millisecond'],
    pl: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'],
    ab: ['yr',    'mo',     'wk',    'day',  'hr',    'min',     'sec',     'ms'],
  },
  'resistances':   [/* null, */ '神圣抗性', '火焰抗性', '自然抗性', '冰抗性', '暗影抗性', '奥术抗性'],                         // RESISTANCE?_NAME
  'sc':            ['物理的', '神圣的', '火的', '自然的', '霜的', '暗影的', '奥术的'],                                                                                     // STRING_SCHOOL_*
  'armor':             '%s 护甲',                      // ARMOR_TEMPLATE
  'block':             '%s Block',                      // SHIELD_BLOCK_TEMPLATE
  'charges':           '%d Charges', /* |4Charge: */    // ITEM_SPELL_CHARGES
  'locked':            '锁住的',                        // LOCKED
  'ratingString':      '%s&nbsp;@&nbsp;L%s',
  'fap':               '凶猛的攻击力',
  'durability':        '耐久性 %d / %d',            // DURABILITY_TEMPLATE
  'itemLevel':         '物品等级 %d',                 // ITEM_LEVEL
  'randEnchant':       '&lt;随机附魔&gt',     // ITEM_RANDOM_ENCHANT
  'readClick':         '&lt;右击阅读&gt',    // ITEM_READABLE
  'openClick':         '&lt;右击打开n&gt',    // ITEM_OPENABLE
  'setBonus':          '(%d) Set: %s',                  // ITEM_SET_BONUS_GRAY
  'setName':           '%s (%d/%d)',                    // ITEM_SET_NAME
  'reqMinLevel':       '装备等级 %d',             // ITEM_MIN_LEVEL
  'reqLevelRange':     '装备等级 %d to %d (%s)',  // ITEM_LEVEL_RANGE_CURRENT
  'unique':            ['唯一',          '唯一 (%d)', '唯一: %s (%d)'         ],   // ITEM_UNIQUE, ITEM_UNIQUE_MULTIPLE, ITEM_LIMIT_CATEGORY
  'uniqueEquipped':    ['装备唯一', null,          '装备唯一: %s (%d)'],   // ITEM_UNIQUE_EQUIPPABLE, null, ITEM_LIMIT_CATEGORY_MULTIPLE
  'dps':               '(%.1f 伤害每秒)',      // DPS_TEMPLATE
  'damage': {                                   // *DAMAGE_TEMPLATE*
            //  basic,                          basic /w school,                add basic,                  add basic /w school
    'single': ['%d 伤害',                    '%d %s 伤害',                 '+ %d 伤害',              '+%d %s 伤害'             ],
    'range':  ['%d - %d 伤害',               '%d - %d %s 伤害',            '+ %d - %d 伤害',         '+%d - %d %s 伤害'        ],
    'ammo':   ['Adds %d 伤害每秒',    'Adds %d %s 伤害每秒', '+ %d 伤害每秒',   '+ %d %s 伤害每秒' ],
  },
  'socketBonus': '插槽奖励: %s',              // ITEM_SOCKET_BONUS
  'socket': [
      '多彩插槽',
      '红色插槽',
      '黄色插槽',
      '蓝色插槽',
      // -1 => 'Prismatic Socket' // TODO
  ],
  'gemColors': [                                  // *_GEM
    '多彩',
    '红色',
    '黄色',
    '蓝色'
  ],
  'gemConditions': {                              // ENCHANT_CONDITION_* in GlobalStrings.lua
    2: '小于 %s %s 宝石;',
    3: '大于 %s 宝石 比 %s 宝石',
    5: '至少 %s %s 宝石',
  },
  'reqRating': [                                    // ITEM_REQ_ARENA_RATING*
    '要求个人和团队竞技场等级达到 of %d',
    '要求个人和团队竞技场等级在 3v3 或 5v5 中达到  %d',
    '要求个人和团队竞技场等级在 5v5 中达到  %d',
  ],
  'quality': [                                       // ITEM_QUALITY?_DESC
    '粗糙的',
    '一般的',
    '精良',
    '稀有',
    '史诗',
    '传奇',
    '神器',
    '传家宝',
  ],
  'trigger': [                                        // ITEM_SPELL_TRIGGER_*
    '使用: ',
    '装备: ',
    '有概率触发: ',
    '',
    '',
    '',
    '',
  ],
  'bonding': [                                        // ITEM_BIND_*
    '账户绑定',
    '捡取绑定',
    '装备绑定',
    '使用绑定',
    '任务物品',
    '任务物品'
  ],
  'bagFamily': [                                       // ItemSubClass.dbc/1
    '背包',
    '箭袋',
    '弹药袋',
    '灵魂袋',
    '皮革袋',
    '铭文袋',
    '草药袋',
    '附魔袋',
    '工程袋',
    null, /* Key */
    '宝石袋',
    '矿石袋',
  ],
  'inventoryType': [                                   // INVTYPE_*
    null, '头','颈','肩','衬衫',
    '胸','腰','腿','脚','手腕',
    '手','手指','饰品','单手','副手',/*盾牌*/
    'Ranged','Back','双手','包','战袍',
    '长袍','主手','副手','握在副手','投掷',
    '扔','范围','箭袋','圣物',
  ],
  'armorSubClass': [                           // ItemSubClass.dbc/2
      '杂项',        '布甲',            '皮甲',              '锁甲',                         '板甲',
      null,                   '盾',           'Libram',               '偶像',                         '图腾',
      '图章'
  ],
  'weaponSubClass': [                           // ItemSubClass.dbc/4
      '斧',                  '锤',              '弓',                  '枪',                          'Mace',
      'Mace',                 '长柄武器',          '剑',                '剑',                        null,
      '职员',                null,               null,                   '拳套',                  '杂项',
      '匕首',               '投掷',           null,                   '弩',                     'Wand',
      '鱼竿',
  ],
  'projectileSubClass': [                      // ItemSubClass.dbc/6
      null,                   null,               '箭头',                '子弹',                        null
  ],
  'statType': [                           // ITEM_MOD_*
    '法力',
    '生命',
    null,
    '敏捷',
    '力量',
    '智力',
    '精神',
    '耐力',
    null, null, null, null,
    '提高防御等级 %d',
    '增加你的躲闪等级 %d',
    '增加你的格挡等级 %d',
    '增加你的盾牌格挡等级 %d',
    '提高近战命中率 %d',
    '提高 %d 的远程命中',
    '提高法术命中率 %d',
    '提高近战爆击等级 %d',
    '提高 %d 的远程爆击等级',
    '提高法术爆击等级 %d',
    '提高近战命中躲避等级 %d',
    '提高远程命中躲避等级 %d',
    '提高法术命中躲避等级 %d',
    '提高近战致命躲避等级 %d',
    '提高远程致命躲避等级 %d',
    '提高法术爆击躲避等级 %d',
    '提高近战加速等级 %d',
    '提高 %d 的远程加速等级',
    '提高法术急速等级 %d',
    '提高命中等级 %d',
    '提高暴击等级 %d',
    '提高命中躲避率 %d',
    '提高危险规避率 %d',
    '提高你的韧性等级 %d',
    '增加你的急速等级 %d',
    '提高专业技能等级 %d',
    '增加攻击强度 %d',
    '增加 %d 的远程攻击强度',
    '只增加猫、熊、巨熊和Moonkin形态的攻击强度 %d',
    '提高魔法法术和效果的伤害最多 %d',
    '提高魔法法术和效果的治疗效果最多 %d',
    '每5秒恢复 %d 法力值',
    '增加你的护甲穿透率 %d',
    '增加法术能量 %d',
    '每5秒恢复 %d 运行状况',
    '增加法术穿透 %d',
    '增加你盾牌的格挡值 %d',
    '未知奖金# %d  (%d)',
  ],
  lockType: [                          // lockType.dbc
    null,
    '开锁',
    '草药学',
    '采矿',
    '解除武器陷阱',
    '打开',
    '宝藏(DND)',
    '钙化精灵宝石(DND)',
    '闭合',
    '手臂陷阱',
    '快速打开',
    '快速关闭',
    '打开修补',
    '打开跪着',
    '打开攻击',
    'Gahz\'ridian (DND)',
    '爆破',
    'PvP打开',
    'PvP关闭',
    '垂钓(DND)',
    '铭文',
    '车辆上打开'
  ],

};
