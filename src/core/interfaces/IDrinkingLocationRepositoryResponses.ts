import { DrinkingTimeDistribution } from "../entities/DrinkingTimeDistribution";

export interface IDrinkingLocationGetAllResponse {
  labels: string[];
  data: number[];
  table: DrinkingTimeDistribution[];
}
