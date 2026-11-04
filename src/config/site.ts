
export const siteConfig = {
  name: "Taxi VILA",
  tagline: "Taxi điện Phù Cát – Phù Mỹ",
  phone: "0978063463",
  phoneDisplay: "0978 063 463",
  zaloUrl: "https://zalo.me/0978063463",
} as const;

export const siteContact = {
  telephoneUrl: `tel:${siteConfig.phone}`,
  zaloUrl: siteConfig.zaloUrl,
} as const;
