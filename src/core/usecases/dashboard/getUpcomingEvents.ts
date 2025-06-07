import { IUpcomingEventsGetByAreaParams } from "@/core/interfaces/IUpcomingEventsRepositoryParams";
import { IUpcomingEventsGetByAreaResponse } from "@/core/interfaces/IUpcomingEventsRepositoryResponses";
import { UpcomingEventsRepository } from "@/data/repositories/UpcomingEventsRepository";
import { dummyUpcomingEvents } from "@/mock/dummyUpcomingEvents";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getUpcomingEvents = async ({
  area,
}: IUpcomingEventsGetByAreaParams): Promise<IUpcomingEventsGetByAreaResponse> => {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    if (currentUrl.includes("/en/dashboard-lock")) {
      return Promise.reject(
        new Error(ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD)
      );
    }
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyUpcomingEvents);
    }, 800);
  });
};
