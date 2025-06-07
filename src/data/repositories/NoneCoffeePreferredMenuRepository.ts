import { INoneCoffeePreferredMenuGetAllParams } from "@/core/interfaces/INoneCoffeePreferredMenuRepositoryParams";
import { INoneCoffeePreferredMenuGetAllResponse } from "@/core/interfaces/INoneCoffeePreferredMenuRepositoryResponses";
import { apiGet } from "@/utils/api";

const BASE_URL = "/none-coffee-preferred-menu";

export const NoneCoffeePreferredMenuRepository = {
  getAll: async (
    params: INoneCoffeePreferredMenuGetAllParams
  ): Promise<INoneCoffeePreferredMenuGetAllResponse> => {
    const res: INoneCoffeePreferredMenuGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
