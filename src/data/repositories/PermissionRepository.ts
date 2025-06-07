import { IPermissionPostPurchaseData } from "@/core/interfaces/IPermissionRepositoryData";
import { IPermissionGetSpecificParams } from "@/core/interfaces/IPermissionRepositoryParams";
import {
  IPermissionResponse,
  IPermissionPostPurchaseResponse,
} from "@/core/interfaces/IPermissionRepositoryResponses";
import { apiGet, apiPost } from "@/utils/api";

const BASE_URL = "/permission";

export const PermissionRepository = {
  getAll: async (): Promise<IPermissionResponse[]> => {
    const res: IPermissionResponse[] = await apiGet(BASE_URL);
    return res;
  },
  getSpecific: async (
    params: IPermissionGetSpecificParams
  ): Promise<IPermissionResponse> => {
    const res: IPermissionResponse = await apiGet(
      BASE_URL + `/specific`,
      params
    );
    return res;
  },
  postPurchase: async (
    data: IPermissionPostPurchaseData
  ): Promise<IPermissionPostPurchaseResponse> => {
    const res: IPermissionPostPurchaseResponse = await apiPost(
      BASE_URL + `/purchase`,
      data
    );
    return res;
  },
};
