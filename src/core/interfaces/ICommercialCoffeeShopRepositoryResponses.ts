import { CommercialCoffeeShop } from "../entities/CommercialCoffeeShop";

export interface ICommercialCoffeeShopGetAllResponse {
  label: string[];
  data: number[];
  table: CommercialCoffeeShop[];
}
