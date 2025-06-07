import { IPreferredCostForWorkshopGetAllResponse } from "@/core/interfaces/IPreferredCostForWorkshopRepositoryResponses";

export const dummyPreferredCostForWorkshop: IPreferredCostForWorkshopGetAllResponse =
  {
    data: [
      {
        id: 1,
        image: "/images/workshopCosts/under500.png",
        name: "Less than 500 THB",
        percent: 35,
      },
      {
        id: 2,
        image: "/images/workshopCosts/500-1000.png",
        name: "500–1,000 THB",
        percent: 30,
      },
      {
        id: 3,
        image: "/images/workshopCosts/1000-1500.png",
        name: "1,000–1,500 THB",
        percent: 20,
      },
      {
        id: 4,
        image: "/images/workshopCosts/above1500.png",
        name: "More than 1,500 THB",
        percent: 15,
      },
    ],
  };
