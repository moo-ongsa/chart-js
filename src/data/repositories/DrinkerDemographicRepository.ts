import { apiGet } from "@/utils/api";
import { IDrinkerDemographicGetAllParams } from "@/core/interfaces/IDrinkerDemographicRepositoryParams";
import { IDrinkerDemographicGetAllResponse } from "@/core/interfaces/IDrinkerDemographicRepositoryResponses";

const BASE_URL = "/drinker-demographic";

export const DrinkerDemographicRepository = {
  getAll: async (
    params: IDrinkerDemographicGetAllParams
  ): Promise<IDrinkerDemographicGetAllResponse> => {
    const res: IDrinkerDemographicGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
