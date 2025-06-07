import { ApiParams } from "@/utils/api";
import { AgeRange } from "../types/AgeRange";

export interface IDrinkerDemographicGetAllParams extends ApiParams {
  age: AgeRange[];
}
