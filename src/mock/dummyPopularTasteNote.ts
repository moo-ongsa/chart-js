import { IPopularTasteNoteGetAllResponse } from "@/core/interfaces/IPopularTasteNoteRepositoryResponses";

export const dummyPopularTasteNote: IPopularTasteNoteGetAllResponse = {
  labels: [
    "Fruity",
    "Floral",
    "Chocolatey",
    "Liquor",
    "Fermented",
    "Herbal & Spice",
  ],
  data: [22, 18, 17, 15, 15, 13], // รวม 100, มี 6 ค่า
};
