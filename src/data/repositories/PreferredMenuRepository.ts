import { apiGet } from "@/utils/api";
import { IPreferredMenuGetAllParams } from "@/core/interfaces/IPreferredMenuRepositoryParams";
import { IPreferredMenuGetAllResponse } from "@/core/interfaces/IPreferredMenuRepositoryResponses";

const BASE_URL = "/preferred-menu";

export const PreferredMenuRepository = {
  getAll: async (
    params: IPreferredMenuGetAllParams
  ): Promise<IPreferredMenuGetAllResponse> => {
    const res: IPreferredMenuGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
