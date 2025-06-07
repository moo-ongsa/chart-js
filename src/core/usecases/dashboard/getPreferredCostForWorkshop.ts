import { IPreferredCostForWorkshopGetAllParams } from "@/core/interfaces/IPreferredCostForWorkshopRepositoryParams";
import { IPreferredCostForWorkshopGetAllResponse } from "@/core/interfaces/IPreferredCostForWorkshopRepositoryResponses";
import { PreferredCostForWorkshopRepository } from "@/data/repositories/PreferredCostForWorkshopRepository";
import { dummyPreferredCostForWorkshop } from "@/mock/dummyPreferredCostForWorkshop";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getPreferredCostForWorkshop = async ({
  age,
  type,
}: IPreferredCostForWorkshopGetAllParams): Promise<IPreferredCostForWorkshopGetAllResponse> => {
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
      resolve(dummyPreferredCostForWorkshop);
    }, 800);
  });
};
