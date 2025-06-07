import { IPreferredMenuGetAllResponse } from "@/core/interfaces/IPreferredMenuRepositoryResponses";

export const dummyPreferredMenu: IPreferredMenuGetAllResponse = {
  label: ["Iced Americano", "Latte", "Cappuccino"],
  data: [52, 28, 20],
  table: [
    {
      rank: 1,
      menu: "Iced Americano",
      avgPrice: "65 THB",
      gender: "Male 60% / Female 40%",
      sharePercent: 28,
      image: "/images/menus/americano.png",
    },
    {
      rank: 2,
      menu: "Latte",
      avgPrice: "75 THB",
      gender: "Male 45% / Female 55%",
      sharePercent: 24,
      image: "/images/menus/latte.png",
    },
    {
      rank: 3,
      menu: "Cappuccino",
      avgPrice: "70 THB",
      gender: "Male 50% / Female 50%",
      sharePercent: 18,
      image: "/images/menus/cappuccino.png",
    },
    {
      rank: 4,
      menu: "Mocha",
      avgPrice: "80 THB",
      gender: "Male 35% / Female 65%",
      sharePercent: 15,
      image: "/images/menus/americano.png",
    },
    {
      rank: 5,
      menu: "Espresso",
      avgPrice: "60 THB",
      gender: "Male 70% / Female 30%",
      sharePercent: 10,
      image: "/images/menus/americano.png",
    },
    {
      rank: 6,
      menu: "Flat White",
      avgPrice: "75 THB",
      gender: "Male 48% / Female 52%",
      sharePercent: 5,
      image: "/images/menus/americano.png",
    },
    {
      rank: 6,
      menu: "Orange Juice Americano",
      avgPrice: "75 THB",
      gender: "Male 48% / Female 52%",
      sharePercent: 5,
      image: "/images/menus/orangeJuiceAmericano.png",
    },
  ],
};
