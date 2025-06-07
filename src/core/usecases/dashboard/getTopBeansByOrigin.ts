import { ITopBeansByOriginGetAllParams } from "@/core/interfaces/ITopBeansByOriginRepositoryParams";
import { ITopBeansByOriginGetAllResponse } from "@/core/interfaces/ITopBeansByOriginRepositoryResponses";
import { TopBeansByOriginRepository } from "@/data/repositories/TopBeansByOriginRepository";
import { dummyTopBeansByOrigin } from "@/mock/dummyTopBeansByOrigin";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getTopBeansByOrigin = async ({
  age,
  type,
}: ITopBeansByOriginGetAllParams): Promise<ITopBeansByOriginGetAllResponse> => {
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
      resolve(dummyTopBeansByOrigin);
    }, 800);
  });
};
