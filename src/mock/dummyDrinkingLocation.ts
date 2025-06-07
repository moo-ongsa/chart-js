import { IDrinkingLocationGetAllResponse } from "@/core/interfaces/IDrinkingLocationRepositoryResponses";

export const dummyDrinkingLocation: IDrinkingLocationGetAllResponse = {
  labels: ["Home", "Office", "Cafe"],
  data: [70, 17, 13], // รวมเป็น 100
  table: [
    {
      morning: 70,
      noon: 15,
      afternoon: 10,
      evening: 5,
    },
    {
      morning: 30,
      noon: 40,
      afternoon: 25,
      evening: 5,
    },
    {
      morning: 20,
      noon: 35,
      afternoon: 35,
      evening: 10,
    },
  ],
};
