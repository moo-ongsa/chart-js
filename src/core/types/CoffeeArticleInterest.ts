export const coffeeArticleInterests = [
  "regulary_read",
  "occasionally_read",
  "not_interested",
] as const;

export type CoffeeArticleInterest = (typeof coffeeArticleInterests)[number];
