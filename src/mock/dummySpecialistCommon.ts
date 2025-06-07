import { ISpecialistCommonGetAllResponse } from "@/core/interfaces/ISpecialistCommonRepositoryResponses";

export const dummySpecialistCommon: ISpecialistCommonGetAllResponse = {
  data: [
    {
      id: 1,
      image: "/images/specialistCommon/knowledge.png",
      name: "In-depth Coffee Knowledge",
      percent: 35,
      sub: "Specialists often possess deep understanding of beans",
      level: [
        {
          id: 1,
          name: "Beginner",
          percent: 15,
        },
        {
          id: 2,
          name: "Intermediate",
          percent: 50,
        },
        {
          id: 3,
          name: "Expert",
          percent: 35,
        },
      ],
    },
    {
      id: 2,
      image: "/images/specialistCommon/tasting.png",
      name: "Advanced Tasting Skills",
      percent: 28,
      sub: "Ability to identify subtle flavor notes and quality in coffee.",
      level: [
        {
          id: 1,
          name: "Beginner",
          percent: 20,
        },
        {
          id: 2,
          name: "Intermediate",
          percent: 55,
        },
        {
          id: 3,
          name: "Expert",
          percent: 25,
        },
      ],
    },
    {
      id: 3,
      image: "/images/specialistCommon/equipment.png",
      name: "Own Professional Equipment",
      percent: 22,
      sub: "Often invest in high-quality gear for home or professional use.",
      level: [
        {
          id: 1,
          name: "Beginner",
          percent: 30,
        },
        {
          id: 2,
          name: "Intermediate",
          percent: 50,
        },
        {
          id: 3,
          name: "Expert",
          percent: 20,
        },
      ],
    },
  ],
};
