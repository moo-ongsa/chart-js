import { PreferredMenu } from "../entities/PreferredMenu";

export interface IPreferredMenuGetAllResponse {
  label: string[];
  data: number[];
  table: PreferredMenu[];
}
