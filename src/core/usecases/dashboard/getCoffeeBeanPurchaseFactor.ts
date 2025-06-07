import { ICoffeeBeanPurchaseFactorGetAllParams } from "@/core/interfaces/ICoffeeBeanPurchaseFactorRepositoryParams";
import { ICoffeeBeanPurchaseFactorGetAllResponse } from "@/core/interfaces/ICoffeeBeanPurchaseFactorRepositoryResponses";
// import { CoffeeBeanPurchaseFactorRepository } from "@/data/repositories/CoffeeBeanPurchaseFactorRepository";
import { dummyCoffeeBeanPurchaseFactor } from "@/mock/dummyCoffeeBeanPurchaseFactor";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getCoffeeBeanPurchaseFactor = async ({
  age,
  type,
}: ICoffeeBeanPurchaseFactorGetAllParams): Promise<ICoffeeBeanPurchaseFactorGetAllResponse> => {
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
      resolve(dummyCoffeeBeanPurchaseFactor);
    }, 800);
  });
};
