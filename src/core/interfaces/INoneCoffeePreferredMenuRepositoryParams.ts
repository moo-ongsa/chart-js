import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";

export interface INoneCoffeePreferredMenuGetAllParams extends ApiParams {
  age: AgeRange[];
}
