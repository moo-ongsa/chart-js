import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";
import { CoffeeDrinker } from "../types/CoffeeDrinker";

export interface ISalesChannelGetAllParams extends ApiParams {
  age: AgeRange[];
  type: CoffeeDrinker[];
}
