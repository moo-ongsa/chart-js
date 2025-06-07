import { ICoffeeContentOpportunityGetAllResponse } from "@/core/interfaces/ICoffeeContentOpportunityRepositoryResponses";

export const dummyContentOpportunity: ICoffeeContentOpportunityGetAllResponse =
  {
    coffeeReadings: {
      labels: [
        "Articles",
        "Videos",
        "Social Media Posts",
        "Podcasts",
        "Email Newsletters",
      ],
      data: [80, 65, 75, 40, 30],
    },
    socialMedias: [
      {
        id: 1,
        image: "/images/facebook.png",
        name: "Facebook",
        percent: 30,
        level: [
          {
            id: 1,
            name: "Beginner",
            percent: 50,
            backgroundColor: "#a3d9ff",
          },
          {
            id: 2,
            name: "Intermediate",
            percent: 35,
            backgroundColor: "#3399ff",
          },
          {
            id: 3,
            name: "Expert",
            percent: 15,
            backgroundColor: "#005fa3",
          },
        ],
      },
      {
        id: 2,
        image: "/images/youtube.png",
        name: "YouTube",
        percent: 25,
        level: [
          {
            id: 1,
            name: "Beginner",
            percent: 35,
            backgroundColor: "#ff9999",
          },
          {
            id: 2,
            name: "Intermediate",
            percent: 45,
            backgroundColor: "#ff4d4d",
          },
          {
            id: 3,
            name: "Expert",
            percent: 20,
            backgroundColor: "#b30000",
          },
        ],
      },
      {
        id: 3,
        image: "/images/instagram.png",
        name: "Instagram",
        percent: 20,
        level: [
          {
            id: 1,
            name: "Beginner",
            percent: 55,
            backgroundColor: "#fcd5ce",
          },
          {
            id: 2,
            name: "Intermediate",
            percent: 35,
            backgroundColor: "#e29578",
          },
          {
            id: 3,
            name: "Expert",
            percent: 10,
            backgroundColor: "#b5838d",
          },
        ],
      },
      {
        id: 4,
        image: "/images/tiktok.png",
        name: "TikTok",
        percent: 15,
        level: [
          {
            id: 1,
            name: "Beginner",
            percent: 60,
            backgroundColor: "#ffc3a0",
          },
          {
            id: 2,
            name: "Intermediate",
            percent: 30,
            backgroundColor: "#ff8c42",
          },
          {
            id: 3,
            name: "Expert",
            percent: 10,
            backgroundColor: "#d95d39",
          },
        ],
      },
      {
        id: 5,
        image: "/images/twitter.png",
        name: "Twitter",
        percent: 10,
        level: [
          {
            id: 1,
            name: "Beginner",
            percent: 50,
            backgroundColor: "#b2d3c2",
          },
          {
            id: 2,
            name: "Intermediate",
            percent: 30,
            backgroundColor: "#66a182",
          },
          {
            id: 3,
            name: "Expert",
            percent: 20,
            backgroundColor: "#226644",
          },
        ],
      },
    ],
    educationChannels: [
      {
        id: 1,
        name: "YouTube",
        percent: 35,
      },
      {
        id: 2,
        name: "Facebook Page",
        percent: 25,
      },
      {
        id: 3,
        name: "Website Articles",
        percent: 20,
      },
      {
        id: 4,
        name: "Email Newsletters",
        percent: 10,
      },
      {
        id: 5,
        name: "In-Person Workshops",
        percent: 10,
      },
    ],
  };
