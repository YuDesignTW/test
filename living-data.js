// 生活用品數據，使用全局變量方式載入
window.livingDataEmbedded = {
  "category": "living",
  "title": "生活用品",
  "description": "維持基本生活品質，保持衛生與舒適度。",
  "items": [
    {
      "name": "毯子",
      "quantity": 1,
      "unit": "個",
      "description": "提供基本保暖與睡眠環境",
      "scaling": "people", // 隨人數變化
      "note": "選擇便於收納且輕便的款式，冬季需考慮保暖度"
    },
    {
      "name": "個人衣物",
      "quantity": 1,
      "unit": "套",
      "description": "換洗衣物與保暖層",
      "scaling": "people",
      "note": "建議準備薄厚適中、乾爽、不易起皺的衣物"
    },
    {
      "name": "行動馬桶／便盆",
      "quantity": 1,
      "unit": "組",
      "description": "可折疊式行動馬桶",
      "scaling": "people_days_divided",
      "scaling_factor": 3, // 每3天用完2個
      "note": "適合高樓或無水狀況者使用，如廁後所需衛生紙已於醫療用品中統計，如需要可增加需求數量",
      "link": "https://s.shopee.tw/4firKdLW48",
    },
    {
      "name": "凝膠包／吸收墊",
      "quantity": 1,
      "unit": "組",
      "description": "攪拌後可凝固排泄物，無臭、安全",
      "scaling": "people_days_divided",
      "scaling_factor": 1, // 每3天用完2個
      "note": "當無水的時候，可以處理排泄物，若沒有凝膠包與吸收墊則改用垃圾袋處理",
      "link": "https://s.shopee.tw/AUgeHsv3Me",
    },
    {
      "name": "垃圾袋",
      "quantity": 2,
      "unit": "個",
      "description": "	廚餘／排泄物／廢棄物分袋處理與臨時防水",
      "scaling": "people_days_divided",
      "scaling_factor": 3, // 每3天用完2個
      "note": "大型黑色垃圾袋，可作廢棄物處理、防水套、臨時儲水等，可加厚黑袋作為簡易馬桶內袋使用"
    },
    {
      "name": "肥皂/乾洗手",
      "quantity": 1,
      "unit": "瓶",
      "description": "清潔用品",
      "scaling": "people_days_divided",
      "scaling_factor": 30, // 每14天用完1瓶
      "note": "乾洗手可用於手部消毒、而肥皂則用於簡易器具清潔"
    },
    {
      "name": "濕紙巾",
      "quantity": 1,
      "unit": "包",
      "description": "基本清潔與衛生用途",
      "scaling": "people_days_divided",
      "scaling_factor": 7, // 每7天用完1包
      "note": "無水情況下可用於基本清潔，選擇厚一點的規格"
    },
    {
      "name": "防水帆布/雨衣",
      "quantity": 1,
      "unit": "塊",
      "description": "多功能用途：雨具、遮蔽",
      "scaling": "none",
      "note": "可用於防雨、地墊、臨時遮蔽等多種用途"
    },
    {
      "name": "水桶 / 集水袋",
      "quantity": 1,
      "unit": "組",
      "description": "作為儲水用途",
      "scaling": "none",
      "note": "用於收集雨水，作為緊急用水，或是政府發放的救災物資可作為承接"
    },
    {
      "name": "便攜濾水器",
      "quantity": 1,
      "unit": "組",
      "description": "作為濾水用途",
      "scaling": "none",
      "note": "用於濾水，可過濾水中的雜質，提供乾淨的飲用水",
      "link": "https://s.shopee.tw/9pQxUkQABX",
    },
    {
      "name": "夾鏈袋、食物用耐熱袋",
      "quantity": 1,
      "unit": "組",
      "description": "作為食物保存、分裝用途",
      "scaling": "none",
      "note": "用於食物保存、分裝，可避免食物變質，如果必要時刻，可作為烹調用具隔水加熱烹煮食材"
    }
  ],
  "additional_notes": [
    "生活用品主要提供基本舒適度，優先考慮多功能性物品",
    "可依據個人需求、地區氣候、災害類型進行調整",
    "定期檢查物品是否受潮、過期"
  ]
}; 