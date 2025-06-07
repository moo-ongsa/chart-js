import { ICoffeeBeanPurchaseFactorGetAllParams } from "@/core/interfaces/ICoffeeBeanPurchaseFactorRepositoryParams";
import { ICoffeeBeanPurchaseFactorGetAllResponse } from "@/core/interfaces/ICoffeeBeanPurchaseFactorRepositoryResponses";
import { apiGet } from "@/utils/api";

const BASE_URL = "/coffee-purchase-factor";

export const CoffeeBeanPurchaseFactorRepository = {
  getAll: async (
    params: ICoffeeBeanPurchaseFactorGetAllParams
  ): Promise<ICoffeeBeanPurchaseFactorGetAllResponse> => {
    const res: ICoffeeBeanPurchaseFactorGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
