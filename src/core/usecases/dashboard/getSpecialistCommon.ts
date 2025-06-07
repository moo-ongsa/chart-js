import { AgeRange } from "@/core/types/AgeRange";
import { ISpecialistCommonGetAllParams } from "@/core/interfaces/ISpecialistCommonRepositoryParams";
import { SpecialistCommonRepository } from "@/data/repositories/SpecialistCommonRepository";
import { dummySpecialistCommon } from "@/mock/dummySpecialistCommon";
import { ISpecialistCommonGetAllResponse } from "@/core/interfaces/ISpecialistCommonRepositoryResponses";
import { ERROR_MESSAGE } from "@/utils/constants";

type GetSpecialistParams = {
  age: AgeRange[];
};

export const getSpecialistCommon = async ({
  age,
}: GetSpecialistParams): Promise<ISpecialistCommonGetAllResponse> => {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    if (currentUrl.includes("/en/dashboard-lock")) {
      return Promise.reject(
        new Error(ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD)
      );
    }
  }
  const fullParams: ISpecialistCommonGetAllParams = {
    age: age,
    type: "specialist",
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummySpecialistCommon);
    }, 800);
  });
};
