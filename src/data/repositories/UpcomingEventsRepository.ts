import { IUpcomingEventsGetByAreaResponse } from "@/core/interfaces/IUpcomingEventsRepositoryResponses";
import { IUpcomingEventsGetByAreaParams } from "@/core/interfaces/IUpcomingEventsRepositoryParams";
import { apiGet } from "@/utils/api";

const BASE_URL = "/upcoming-event";

export const UpcomingEventsRepository = {
  getByArea: async (
    params: IUpcomingEventsGetByAreaParams
  ): Promise<IUpcomingEventsGetByAreaResponse> => {
    const res: IUpcomingEventsGetByAreaResponse = await apiGet(
      BASE_URL,
      params
    );
    return res;
  },
};
