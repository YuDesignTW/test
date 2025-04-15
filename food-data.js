// 食物數據，避免CORS問題使用全局變量方式載入
window.foodDataEmbedded = {
  "category": "food",
  "title": "糧食",
  "description": "食物準備的三大原則：不需烹煮、營養價值高熱量夠支撐體力、可存放時間長。",
  "items": [
    {
      "name": "水",
      "quantity": 3,
      "unit": "公升",
      "description": "每人每天3公升水，適當補充身體水分",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "災難時每人每天需要2-3公升飲用水，夏季或高溫環境可能需要更多",
      "link": "https://s.shopee.tw/LZsATh8Rc",
    },
    {
      "name": "即食飯、餅乾、泡麵",
      "quantity": 2,
      "unit": "份",
      "description": "主食提供碳水化合物能量來源",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "選擇不需烹煮或簡易加熱的主食，提供基礎熱量",
      "link": "https://s.shopee.tw/5KyY6xg9Ja",
    },
    {
      "name": "蛋白質罐頭(鮪魚/雞肉)",
      "quantity": 1,
      "unit": "份",
      "description": "補充蛋白質，維持肌肉",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "罐頭保存期長，每日至少一份蛋白質食物維持體力",
      "link": "https://s.shopee.tw/7zzJI2IcK5",
    },
    {
      "name": "高熱量(能量棒/巧克力)",
      "quantity": 1,
      "unit": "份",
      "description": "高熱量食物補充脂肪與快速能量",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "能量密度高，提供快速能量及心理滿足感",
      "link": "https://s.shopee.tw/9KUgsdW2eP",
    },
    {
      "name": "電解質粉",
      "quantity": 1,
      "unit": "包",
      "description": "補充電解質維持體液平衡與精神",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "避免脫水及維持電解質平衡，特別是腹瀉或大量出汗狀況",
      "link": "https://s.shopee.tw/4q2HWRgTjA",
    },
    {
      "name": "綜合維他命",
      "quantity": 1,
      "unit": "顆",
      "description": "補充各類微量元素",
      "scaling": "people_days", // 隨人數和天數變化
      "note": "維持營養均衡，長期災難狀況下更為重要"
    }
  ],
  "additional_notes": [
    "長期儲存食物應避免需冷藏、高水分的，以乾糧為主",
    "災難時身體需要足夠的營養與熱量，請勿單純靠零食或泡麵維持",
    "非常時期，每日飲食份量可依體型與活動狀況調整"
  ]
}; 