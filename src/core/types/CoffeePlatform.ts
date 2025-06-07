export const coffeePlatforms = [
  "twitter",
  "medium",
  "facebook",
  "instagram",
] as const;

export type CoffeePlatform = (typeof coffeePlatforms)[number];
