import { apiGet } from "@/utils/api";
import { IPreferredCostForWorkshopGetAllParams } from "@/core/interfaces/IPreferredCostForWorkshopRepositoryParams";
import { IPreferredCostForWorkshopGetAllResponse } from "@/core/interfaces/IPreferredCostForWorkshopRepositoryResponses";

const BASE_URL = "/preferred-cost-workshop";

export const PreferredCostForWorkshopRepository = {
  getAll: async (
    params: IPreferredCostForWorkshopGetAllParams
  ): Promise<IPreferredCostForWorkshopGetAllResponse> => {
    const res: IPreferredCostForWorkshopGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
