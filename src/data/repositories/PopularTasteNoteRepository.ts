import { IPopularTasteNoteGetAllParams } from "@/core/interfaces/IPopularTasteNoteRepositoryParams";
import { IPopularTasteNoteGetAllResponse } from "@/core/interfaces/IPopularTasteNoteRepositoryResponses";
import { apiGet } from "@/utils/api";

const BASE_URL = "/popular-taste-note";

export const PopularTasteNoteRepository = {
  getAll: async (
    params: IPopularTasteNoteGetAllParams
  ): Promise<IPopularTasteNoteGetAllResponse> => {
    const res: IPopularTasteNoteGetAllResponse = await apiGet(BASE_URL, params);
    return res;
  },
};
