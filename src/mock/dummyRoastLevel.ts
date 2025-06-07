import { IRoastLevelGetAllResponse } from "@/core/interfaces/IRoastLevelRepositoryResponses";

export const dummyRoastLevel: IRoastLevelGetAllResponse = {
  data: [
    {
      id: 1,
      name: "Light Roast",
      abbreviate: "L",
      percent: 20,
      image: "/images/roastLevel/light.png",
      level: [
        { id: 1, name: "Beginner", percent: 60, backgroundColor: "#fde68a" },
        {
          id: 2,
          name: "Intermediate",
          percent: 30,
          backgroundColor: "#fcd34d",
        },
        { id: 3, name: "Expert", percent: 10, backgroundColor: "#fbbf24" },
      ],
    },
    {
      id: 2,
      name: "Medium Light Roast",
      abbreviate: "ML",
      percent: 20,
      image: "/images/roastLevel/mediumLight.png",
      level: [
        { id: 1, name: "Beginner", percent: 50, backgroundColor: "#ffedd5" },
        {
          id: 2,
          name: "Intermediate",
          percent: 35,
          backgroundColor: "#fdba74",
        },
        { id: 3, name: "Expert", percent: 15, backgroundColor: "#fb923c" },
      ],
    },
    {
      id: 3,
      name: "Medium Roast",
      abbreviate: "M",
      percent: 20,
      image: "/images/roastLevel/medium.png",
      level: [
        { id: 1, name: "Beginner", percent: 40, backgroundColor: "#fed7aa" },
        {
          id: 2,
          name: "Intermediate",
          percent: 40,
          backgroundColor: "#fb923c",
        },
        { id: 3, name: "Expert", percent: 20, backgroundColor: "#ea580c" },
      ],
    },
    {
      id: 4,
      name: "Medium Dark Roast",
      abbreviate: "MD",
      percent: 20,
      image: "/images/roastLevel/mediumDark.png",
      level: [
        { id: 1, name: "Beginner", percent: 25, backgroundColor: "#d9b99b" },
        {
          id: 2,
          name: "Intermediate",
          percent: 45,
          backgroundColor: "#a47551",
        },
        { id: 3, name: "Expert", percent: 30, backgroundColor: "#6f4e37" },
      ],
    },
    {
      id: 5,
      name: "Dark Roast",
      abbreviate: "D",
      percent: 20,
      image: "/images/roastLevel/dark.png",
      level: [
        { id: 1, name: "Beginner", percent: 10, backgroundColor: "#c2b280" },
        {
          id: 2,
          name: "Intermediate",
          percent: 35,
          backgroundColor: "#8d6748",
        },
        { id: 3, name: "Expert", percent: 55, backgroundColor: "#4e342e" },
      ],
    },
  ],
};
