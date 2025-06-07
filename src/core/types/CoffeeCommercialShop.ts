export const coffeeCommercialShops = [
  "starbucks",
  "nespresso",
  "true_coffee",
  "inthanin",
  "cafe_amazon",
  "pun_thai",
  "chao_doi",
  "all_cafe",
] as const;

export type CoffeeCommercialShop = (typeof coffeeCommercialShops)[number];
