import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";

export interface ICommercialCoffeeShopGetAllParams extends ApiParams {
  age: AgeRange[];
}
