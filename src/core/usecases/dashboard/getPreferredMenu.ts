import { IPreferredMenuGetAllParams } from "@/core/interfaces/IPreferredMenuRepositoryParams";
import { IPreferredMenuGetAllResponse } from "@/core/interfaces/IPreferredMenuRepositoryResponses";
import { PreferredMenuRepository } from "@/data/repositories/PreferredMenuRepository";
import { dummyPreferredMenu } from "@/mock/dummyPreferredMenu";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getPreferredMenu = async ({
  age,
  type,
}: IPreferredMenuGetAllParams): Promise<IPreferredMenuGetAllResponse> => {
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
      resolve(dummyPreferredMenu);
    }, 800);
  });
};
