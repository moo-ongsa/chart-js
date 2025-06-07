import { ICommercialCoffeeShopGetAllResponse } from "@/core/interfaces/ICommercialCoffeeShopRepositoryResponses";

export const dummyCommercialCoffeeShop: ICommercialCoffeeShopGetAllResponse = {
  label: ["Starbucks", "Amazon Cafe", "Punthai"],
  data: [35, 25, 8],
  table: [
    {
      rank: 1,
      brand: "Starbucks",
      gender: "Male 18% / Female 17%",
      sharePercent: 35,
      image: "/images/brands/starbucks.png",
    },
    {
      rank: 2,
      brand: "Amazon Cafe",
      gender: "Male 20% / Female 5%",
      sharePercent: 25,
      image: "/images/brands/cafeAmazon.png",
    },
    {
      rank: 3,
      brand: "Punthai",
      gender: "Male 7% / Female 1%",
      sharePercent: 8,
      image: "/images/brands/punthai.png",
    },
    {
      rank: 4,
      brand: "Cafe Nero",
      gender: "Male 6% / Female 14%",
      sharePercent: 20,
      image: "/images/brands/other.png",
    },
    {
      rank: 5,
      brand: "Blue Cup",
      gender: "Male 3% / Female 7%",
      sharePercent: 10,
      image: "/images/brands/other.png",
    },
    {
      rank: 6,
      brand: "Others",
      gender: "Male 1% / Female 1%",
      sharePercent: 2,
      image: "/images/brands/other.png",
    },
  ],
};
