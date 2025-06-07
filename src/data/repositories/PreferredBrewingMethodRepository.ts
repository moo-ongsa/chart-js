import { apiGet } from "@/utils/api";
import { IPreferredBrewingMethodGetAllParams } from "@/core/interfaces/IPreferredBrewingMethodRepositoryParams";
import { IPreferredBrewingMethodGetAllResponse } from "@/core/interfaces/IPreferredBrewingMethodRepositoryResponses";

const BASE_URL = "/preferred-brewing-method";

export const PreferredBrewingMethodRepository = {
  getAll: async (
    params: IPreferredBrewingMethodGetAllParams
  ): Promise<IPreferredBrewingMethodGetAllResponse> => {
    const res: IPreferredBrewingMethodGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
