import { IRoastLevelGetAllParams } from "@/core/interfaces/IRoastLevelRepositoryParams";
import { IRoastLevelGetAllResponse } from "@/core/interfaces/IRoastLevelRepositoryResponses";
import { RoastLevelRepository } from "@/data/repositories/RoastLevelRepository";
import { dummyRoastLevel } from "@/mock/dummyRoastLevel";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getRoastLevel = async ({
  age,
  type,
}: IRoastLevelGetAllParams): Promise<IRoastLevelGetAllResponse> => {
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
      resolve(dummyRoastLevel);
    }, 800);
  });
};
