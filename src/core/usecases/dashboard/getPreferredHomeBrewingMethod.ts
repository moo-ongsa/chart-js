import { IPreferredBrewingMethodGetAllParams } from "@/core/interfaces/IPreferredBrewingMethodRepositoryParams";
import { IPreferredBrewingMethodGetAllResponse } from "@/core/interfaces/IPreferredBrewingMethodRepositoryResponses";
import { PreferredBrewingMethodRepository } from "@/data/repositories/PreferredBrewingMethodRepository";
import { dummyPreferredBrewingMethod } from "@/mock/dummyPreferredBrewingMethod";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getPreferredHomeBrewingMethod = async ({
  age,
  type,
}: IPreferredBrewingMethodGetAllParams): Promise<IPreferredBrewingMethodGetAllResponse> => {
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
      resolve(dummyPreferredBrewingMethod);
    }, 800);
  });
};
