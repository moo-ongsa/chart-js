import { IDrinkerDemographicGetAllParams } from "@/core/interfaces/IDrinkerDemographicRepositoryParams";
import { IDrinkerDemographicGetAllResponse } from "@/core/interfaces/IDrinkerDemographicRepositoryResponses";
// import { DrinkerDemographicRepository } from "@/data/repositories/DrinkerDemographicRepository";
import { dummyDrinkerDemographic } from "@/mock/dummyDrinkerDemographic";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getDrinkerDemographic = async ({
  age,
}: IDrinkerDemographicGetAllParams): Promise<IDrinkerDemographicGetAllResponse> => {
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
      resolve(dummyDrinkerDemographic);
    }, 800);
  });
};
