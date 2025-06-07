import { IDrinkingLocationGetAllParams } from "@/core/interfaces/IDrinkingLocationRepositoryParams";
import { IDrinkingLocationGetAllResponse } from "@/core/interfaces/IDrinkingLocationRepositoryResponses";
import { DrinkingLocationRepository } from "@/data/repositories/DrinkingLocationRepository";
import { dummyDrinkingLocation } from "@/mock/dummyDrinkingLocation";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getDrinkingLocation = async ({
  age,
  type,
}: IDrinkingLocationGetAllParams): Promise<IDrinkingLocationGetAllResponse> => {
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
      resolve(dummyDrinkingLocation);
    }, 800);
  });
};
