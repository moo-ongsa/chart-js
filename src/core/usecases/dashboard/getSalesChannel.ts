import { ISalesChannelGetAllParams } from "@/core/interfaces/ISalesChannelRepositoryParams";
import { ISalesChannelGetAllResponse } from "@/core/interfaces/ISalesChannelRepositoryResponses";
import { SalesChannelRepository } from "@/data/repositories/SalesChannelRepository";
import { dummySalesChannel } from "@/mock/dummySalesChannel";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getSalesChannel = async ({
  age,
  type,
}: ISalesChannelGetAllParams): Promise<ISalesChannelGetAllResponse> => {
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
      resolve(dummySalesChannel);
    }, 800);
  });
};
