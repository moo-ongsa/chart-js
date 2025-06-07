import { ICoffeeContentOpportunityGetAllParams } from "@/core/interfaces/ICoffeeContentOpportunityRepositoryParams";
import { ICoffeeContentOpportunityGetAllResponse } from "@/core/interfaces/ICoffeeContentOpportunityRepositoryResponses";
// import { CoffeeContentOpportunityRepository } from "@/data/repositories/CoffeeContentOpportunityRepository";
import { dummyContentOpportunity } from "@/mock/dummyContentOpportunity";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getCoffeeContentOpportunity = async ({
  age,
  type,
}: ICoffeeContentOpportunityGetAllParams): Promise<ICoffeeContentOpportunityGetAllResponse> => {
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
      resolve(dummyContentOpportunity);
    }, 800);
  });
};
