import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";
import { CoffeeDrinker } from "../types/CoffeeDrinker";

export interface IDrinkingLocationGetAllParams extends ApiParams {
  age: AgeRange[];
  type: CoffeeDrinker[];
}
