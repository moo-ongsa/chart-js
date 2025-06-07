import { IPreferredBrewingMethodGetAllResponse } from "@/core/interfaces/IPreferredBrewingMethodRepositoryResponses";

export const dummyPreferredBrewingMethod: IPreferredBrewingMethodGetAllResponse =
  {
    data: [
      {
        id: 1,
        name: "Drip",
        percent: 30,
        image: "/images/brewingMethods/dripCoffee.png",
        rank: 1,
      },
      {
        id: 2,
        name: "French Press",
        percent: 20,
        image: "/images/brewingMethods/frenchPress.png",
        rank: 2,
      },
      {
        id: 3,
        name: "Espresso Machine",
        percent: 18,
        image: "/images/brewingMethods/espressoMachine.png",
        rank: 3,
      },
      {
        id: 4,
        name: "Pour Over",
        percent: 15,
        image: "/images/brewingMethods/dripCoffee.png",
        rank: 4,
      },
      {
        id: 5,
        name: "Aeropress",
        percent: 10,
        image: "/images/brewingMethods/aeropress.png",
        rank: 5,
      },
      {
        id: 6,
        name: "Drip Coffee Bag",
        percent: 7,
        image: "/images/brewingMethods/dripCoffeeBag.png",
        rank: 6,
      },
    ],
  };
