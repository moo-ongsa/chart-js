export const coffeeSpecialtyShops = [
  "hacking_coffee",
  "sarnies",
  "nap_coffee",
  "brave_roasters",
  "bottomless",
  "brewboy",
  "factory_coffee",
  "karo_coffee_roasters",
  "ministry_roasters",
  "mother_roaster",
  "nana_coffee_roasters",
  "hey_coffee",
  "pacamara",
  "roast_runner",
  "roots",
  "the_summer_coffee_company",
] as const;

export type CoffeeSpecialtyShop = (typeof coffeeSpecialtyShops)[number];
