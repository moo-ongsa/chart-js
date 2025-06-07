import { ApiParams } from "@/utils/api";
import { Area } from "../types/Area";

export interface IUpcomingEventsGetByAreaParams extends ApiParams {
  area: Area;
}
