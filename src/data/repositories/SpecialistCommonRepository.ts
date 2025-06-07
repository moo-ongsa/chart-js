import { apiGet } from "@/utils/api";
import { ISpecialistCommonGetAllParams } from "@/core/interfaces/ISpecialistCommonRepositoryParams";
import { ISpecialistCommonGetAllResponse } from "@/core/interfaces/ISpecialistCommonRepositoryResponses";

const BASE_URL = "/specialist-common";

export const SpecialistCommonRepository = {
  getAll: async (
    params: ISpecialistCommonGetAllParams
  ): Promise<ISpecialistCommonGetAllResponse> => {
    const res: ISpecialistCommonGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
