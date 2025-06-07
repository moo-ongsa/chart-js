import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";
import { CoffeeDrinker } from "../types/CoffeeDrinker";

export interface ICoffeeBeanPurchaseFactorGetAllParams extends ApiParams {
  age: AgeRange[];
  type: CoffeeDrinker[];
}
