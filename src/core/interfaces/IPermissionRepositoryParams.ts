import { ApiParams } from "@/utils/api";

export interface IPermissionGetSpecificParams extends ApiParams {
  permission: string;
}
