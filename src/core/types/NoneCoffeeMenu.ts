export const nonCoffeeMenus = [
  "cocoa",
  "matcha_green_tea",
  "soft_drinks",
  "juice",
  "energy_drink",
  "tea",
  "thai_iced_tea",
  "milk",
  "alcohol",
  "water",
] as const;

export type NonCoffeeMenu = (typeof nonCoffeeMenus)[number];
