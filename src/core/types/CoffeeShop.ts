import {
  CoffeeCommercialShop,
  coffeeCommercialShops,
} from "./CoffeeCommercialShop";
import {
  CoffeeSpecialtyShop,
  coffeeSpecialtyShops,
} from "./CoffeeSpecialtyShop";

export type CoffeeShop = CoffeeCommercialShop | CoffeeSpecialtyShop;

export const coffeeShops = [
  ...coffeeCommercialShops,
  ...coffeeSpecialtyShops,
] as const;
