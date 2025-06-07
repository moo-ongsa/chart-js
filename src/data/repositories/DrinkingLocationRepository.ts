import { apiGet } from "@/utils/api";
import { IDrinkingLocationGetAllParams } from "@/core/interfaces/IDrinkingLocationRepositoryParams";
import { IDrinkingLocationGetAllResponse } from "@/core/interfaces/IDrinkingLocationRepositoryResponses";

const BASE_URL = "/drinking-location";

export const DrinkingLocationRepository = {
  getAll: async (
    params: IDrinkingLocationGetAllParams
  ): Promise<IDrinkingLocationGetAllResponse> => {
    const res: IDrinkingLocationGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
