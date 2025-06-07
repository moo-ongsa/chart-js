import { ApiParams } from "@/utils/api";

export interface ISignInRepositoryParams extends ApiParams {
  email: string;
  password: string;
  service: "coffChart";
}
