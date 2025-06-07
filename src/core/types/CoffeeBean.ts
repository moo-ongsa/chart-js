import { CoffeeImportedBean, coffeeImportedBeans } from "./CoffeeImportedBean";
import { CoffeeThaiBean, coffeeThaiBeans } from "./CoffeeThaiBean";

export type CoffeeBean = CoffeeThaiBean | CoffeeImportedBean;

export const coffeeBeans = [
  ...coffeeThaiBeans,
  ...coffeeImportedBeans,
] as const;
