import { apiGet } from "@/utils/api";
import { ISalesChannelGetAllParams } from "@/core/interfaces/ISalesChannelRepositoryParams";
import { ISalesChannelGetAllResponse } from "@/core/interfaces/ISalesChannelRepositoryResponses";

const BASE_URL = "/sales-channel";

export const SalesChannelRepository = {
  getAll: async (
    params: ISalesChannelGetAllParams
  ): Promise<ISalesChannelGetAllResponse> => {
    const res: ISalesChannelGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
