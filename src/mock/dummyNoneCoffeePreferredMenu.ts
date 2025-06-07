import { INoneCoffeePreferredMenuGetAllResponse } from "@/core/interfaces/INoneCoffeePreferredMenuRepositoryResponses";

export const dummyNoneCoffeePreferredMenu: INoneCoffeePreferredMenuGetAllResponse =
  {
    data: [
      {
        id: 1,
        image: "/images/nonCoffeeMenus/milk.png",
        name: "Fresh Milk",
        percent: 15,
        level: [
          { id: 1, name: "Beginner", percent: 60, backgroundColor: "#ffe5b4" },
          {
            id: 2,
            name: "Intermediate",
            percent: 30,
            backgroundColor: "#ffc97c",
          },
          { id: 3, name: "Expert", percent: 10, backgroundColor: "#ffae42" },
        ],
      },
      {
        id: 2,
        image: "/images/nonCoffeeMenus/cocoa.png",
        name: "Iced Cocoa",
        percent: 14,
        level: [
          { id: 1, name: "Beginner", percent: 50, backgroundColor: "#d9b99b" },
          {
            id: 2,
            name: "Intermediate",
            percent: 35,
            backgroundColor: "#a47551",
          },
          { id: 3, name: "Expert", percent: 15, backgroundColor: "#5e3023" },
        ],
      },
      {
        id: 3,
        image: "/images/nonCoffeeMenus/fruitJuices.png",
        name: "Fruit Juice",
        percent: 12,
        level: [
          { id: 1, name: "Beginner", percent: 65, backgroundColor: "#f9c74f" },
          {
            id: 2,
            name: "Intermediate",
            percent: 25,
            backgroundColor: "#f9844a",
          },
          { id: 3, name: "Expert", percent: 10, backgroundColor: "#f3722c" },
        ],
      },
      {
        id: 4,
        image: "/images/nonCoffeeMenus/alcohol.png",
        name: "Alcohol-Based Drink",
        percent: 10,
        level: [
          { id: 1, name: "Beginner", percent: 20, backgroundColor: "#e0c3fc" },
          {
            id: 2,
            name: "Intermediate",
            percent: 50,
            backgroundColor: "#c084fc",
          },
          { id: 3, name: "Expert", percent: 30, backgroundColor: "#9333ea" },
        ],
      },
      {
        id: 5,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Thai Milk Tea",
        percent: 10,
        level: [
          { id: 1, name: "Beginner", percent: 55, backgroundColor: "#ffd3b6" },
          {
            id: 2,
            name: "Intermediate",
            percent: 35,
            backgroundColor: "#ff8b66",
          },
          { id: 3, name: "Expert", percent: 10, backgroundColor: "#cc5803" },
        ],
      },
      {
        id: 6,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Matcha Latte",
        percent: 9,
        level: [
          { id: 1, name: "Beginner", percent: 50, backgroundColor: "#a8e6cf" },
          {
            id: 2,
            name: "Intermediate",
            percent: 40,
            backgroundColor: "#56c596",
          },
          { id: 3, name: "Expert", percent: 10, backgroundColor: "#379683" },
        ],
      },
      {
        id: 7,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Smoothie",
        percent: 8,
        level: [
          { id: 1, name: "Beginner", percent: 70, backgroundColor: "#f9f871" },
          {
            id: 2,
            name: "Intermediate",
            percent: 25,
            backgroundColor: "#fdd85d",
          },
          { id: 3, name: "Expert", percent: 5, backgroundColor: "#fbbf24" },
        ],
      },
      {
        id: 8,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Lemon Soda",
        percent: 7,
        level: [
          { id: 1, name: "Beginner", percent: 60, backgroundColor: "#e0ffe0" },
          {
            id: 2,
            name: "Intermediate",
            percent: 30,
            backgroundColor: "#b2f2bb",
          },
          { id: 3, name: "Expert", percent: 10, backgroundColor: "#66bb6a" },
        ],
      },
      {
        id: 9,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Hot Herbal Tea",
        percent: 8,
        level: [
          { id: 1, name: "Beginner", percent: 30, backgroundColor: "#caffbf" },
          {
            id: 2,
            name: "Intermediate",
            percent: 40,
            backgroundColor: "#9bf6ff",
          },
          { id: 3, name: "Expert", percent: 30, backgroundColor: "#a0c4ff" },
        ],
      },
      {
        id: 10,
        image: "/images/nonCoffeeMenus/others.png",
        name: "Sparkling Water",
        percent: 7,
        level: [
          { id: 1, name: "Beginner", percent: 50, backgroundColor: "#d0f0fd" },
          {
            id: 2,
            name: "Intermediate",
            percent: 35,
            backgroundColor: "#a5d8ff",
          },
          { id: 3, name: "Expert", percent: 15, backgroundColor: "#74c0fc" },
        ],
      },
    ],
  };
