import { INoneCoffeePreferredMenuGetAllParams } from "@/core/interfaces/INoneCoffeePreferredMenuRepositoryParams";
import { INoneCoffeePreferredMenuGetAllResponse } from "@/core/interfaces/INoneCoffeePreferredMenuRepositoryResponses";
import { NoneCoffeePreferredMenuRepository } from "@/data/repositories/NoneCoffeePreferredMenuRepository";
import { dummyNoneCoffeePreferredMenu } from "@/mock/dummyNoneCoffeePreferredMenu";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getNoneCoffeePreferredMenu = async ({
  age,
}: INoneCoffeePreferredMenuGetAllParams): Promise<INoneCoffeePreferredMenuGetAllResponse> => {
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
      resolve(dummyNoneCoffeePreferredMenu);
    }, 800);
  });
};
