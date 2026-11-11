
export const siteConfig = {
  name: "Taxi VILA",
  tagline: "Taxi điện Phù Cát – Phù Mỹ",
  phone: "0978063463",
  phoneDisplay: "0978 063 463",
  zaloUrl: "https://zalo.me/0978063463",
  priceRange: "5.000–12.000đ/km",
  priceNote: "Giá theo tuyến và điều kiện áp dụng; báo giá trước chuyến đi.",
  prebookMessage: "Đặt lịch trước – Cơ hội nhận ưu đãi hấp dẫn!",
} as const;

export const siteContact = {
  telephoneUrl: `tel:${siteConfig.phone}`,
  zaloUrl: siteConfig.zaloUrl,
} as const;
