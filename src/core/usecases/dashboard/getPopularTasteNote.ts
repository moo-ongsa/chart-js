import { IPopularTasteNoteGetAllParams } from "@/core/interfaces/IPopularTasteNoteRepositoryParams";
import { IPopularTasteNoteGetAllResponse } from "@/core/interfaces/IPopularTasteNoteRepositoryResponses";
import { PopularTasteNoteRepository } from "@/data/repositories/PopularTasteNoteRepository";
import { dummyPopularTasteNote } from "@/mock/dummyPopularTasteNote";
import { ERROR_MESSAGE } from "@/utils/constants";

export const getPopularTasteNote = async ({
  age,
  type,
}: IPopularTasteNoteGetAllParams): Promise<IPopularTasteNoteGetAllResponse> => {
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
      resolve(dummyPopularTasteNote);
    }, 1500);
  });
};
