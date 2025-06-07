import { ICommercialCoffeeShopGetAllParams } from "@/core/interfaces/ICommercialCoffeeShopRepositoryParams";
import { ICommercialCoffeeShopGetAllResponse } from "@/core/interfaces/ICommercialCoffeeShopRepositoryResponses";
import { CommercialCoffeeShopRepository } from "@/data/repositories/CommercialCoffeeShopRepository";
import { dummyCommercialCoffeeShop } from "@/mock/dummyCommercialCoffeeShop";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getCommercialCoffeeShop = async ({
  age,
}: ICommercialCoffeeShopGetAllParams): Promise<ICommercialCoffeeShopGetAllResponse> => {
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
      resolve(dummyCommercialCoffeeShop);
    }, 800);
  });
};
