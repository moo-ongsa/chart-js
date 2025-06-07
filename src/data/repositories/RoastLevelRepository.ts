import { apiGet } from "@/utils/api";
import { IRoastLevelGetAllParams } from "@/core/interfaces/IRoastLevelRepositoryParams";
import { IRoastLevelGetAllResponse } from "@/core/interfaces/IRoastLevelRepositoryResponses";

const BASE_URL = "/roast-level";

export const RoastLevelRepository = {
  getAll: async (
    params: IRoastLevelGetAllParams
  ): Promise<IRoastLevelGetAllResponse> => {
    const res: IRoastLevelGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
