export const coffeePurchaseChannels = [
  "shopee",
  "lazada",
  "facebook",
  "tiktok",
  "instagram",
  "line_shop",
  "official_website",
  "onsite",
] as const;

export type CoffeePurchaseChannel = (typeof coffeePurchaseChannels)[number];
