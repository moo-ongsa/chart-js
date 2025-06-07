import { ICoffeeContentOpportunityGetAllResponse } from "@/core/interfaces/ICoffeeContentOpportunityRepositoryResponses";
import { ICoffeeContentOpportunityGetAllParams } from "@/core/interfaces/ICoffeeContentOpportunityRepositoryParams";
import { apiGet } from "@/utils/api";

const BASE_URL = "/content-opportunity";

export const CoffeeContentOpportunityRepository = {
  getAll: async (
    params: ICoffeeContentOpportunityGetAllParams
  ): Promise<ICoffeeContentOpportunityGetAllResponse> => {
    const res: ICoffeeContentOpportunityGetAllResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
