// 醫療衛生數據，使用全局變量方式載入
window.medicalDataEmbedded = {
  "category": "medical",
  "title": "醫療衛生",
  "description": "確保基本醫療需求與個人衛生，避免交叉感染與二次傷害。",
  "items": [
    {
      "name": "個人藥物",
      "quantity": 1,
      "unit": "份",
      "description": "個人處方藥、慢性病用藥",
      "scaling": "none", // 不隨人數和天數變化
      "note": "請根據個人情況準備，確保足夠用藥量"
    },
    {
      "name": "急救包",
      "quantity": 1,
      "unit": "套",
      "description": "需包含繃帶、紗布、膠帶、藥膏、消毒液等",
      "scaling": "people", // 隨人數變化
      "note": "每人一套基本急救用品",
    },
    {
        "name": "常見藥物",
        "quantity": 1,
        "unit": "組",
        "description": "感冒退燒藥、胃乳片胃藥、止吐暈車、止痛消炎藥、發泡錠、眼藥水、萬用藥膏、蚊蟲叮咬藥膏",
        "scaling": "none",
        "note": "各式成藥，準備一組即可，須注意過期時間",
    },
    {
      "name": "口罩/N95口罩",
      "quantity": 1,
      "unit": "個",
      "description": "防灰塵、煙塵、部分有毒氣體",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "每人每天至少1個，可重複使用類型可相應減少"
    },
    {
      "name": "衛生紙",
      "quantity": 1,
      "unit": "包",
      "description": "基本衛生清潔用品",
      "scaling": "people_days_divided", // 隨人數和天數變化但有除數
      "scaling_factor": 5, // 每2天用完1卷
      "note": "每人每5天約需1包"
    },
    {
        "name": "衛生棉",
        "quantity": 1,
        "unit": "組",
        "description": "女性週期生理必需品",
        "scaling": "people_days_divided", // 隨人數和天數變化但有除數
        "scaling_factor": 30, // 每2天用完1卷
        "note": "每人每30天約需1組，緊急時可充當繃帶用途"
      },
    {
      "name": "酒精/消毒液",
      "quantity": 1,
      "unit": "瓶",
      "description": "表面和傷口消毒",
      "scaling": "none", // 不隨人數和天數變化
      "note": "通常一瓶即可，注意安全存放"
    }
  ],
  "additional_notes": [
    "醫療用品存放應避免潮濕、高溫環境",
    "定期檢查有效期，尤其是藥物和消毒液",
    "對特殊醫療需求(如慢性病)應準備額外用品"
  ]
}; 