import { BeanItem } from "../entities/BeanItem";

export interface ITopBeansByOriginGetAllResponse {
  thaiPercent: number;
  importedPercent: number;
  dataLocal: BeanItem[];
  dataImported: BeanItem[];
}
