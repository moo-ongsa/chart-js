import { apiGet } from "@/utils/api";
import { ICommercialCoffeeShopGetAllParams } from "@/core/interfaces/ICommercialCoffeeShopRepositoryParams";
import { ICommercialCoffeeShopGetAllResponse } from "@/core/interfaces/ICommercialCoffeeShopRepositoryResponses";

const BASE_URL = "/commercial-coffee-shop";

export const CommercialCoffeeShopRepository = {
  getAll: async (
    params: ICommercialCoffeeShopGetAllParams
  ): Promise<ICommercialCoffeeShopGetAllResponse> => {
    const res: ICommercialCoffeeShopGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
