import { ITopBeansByOriginGetAllResponse } from "@/core/interfaces/ITopBeansByOriginRepositoryResponses";
import { ITopBeansByOriginGetAllParams } from "@/core/interfaces/ITopBeansByOriginRepositoryParams";
import { apiGet } from "@/utils/api";

const BASE_URL = "/top-bean-by-origin";

export const TopBeansByOriginRepository = {
  getAll: async (
    params: ITopBeansByOriginGetAllParams
  ): Promise<ITopBeansByOriginGetAllResponse> => {
    const res: ITopBeansByOriginGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
