import { ISalesChannelGetAllResponse } from "@/core/interfaces/ISalesChannelRepositoryResponses";

export const dummySalesChannel: ISalesChannelGetAllResponse = {
  data: [
    {
      image: "/images/salesChannels/onsite.png",
      label: "Onsite",
      data: 38,
    },
    {
      image: "/images/salesChannels/facebook.png",
      label: "Facebook",
      data: 16,
    },
    {
      image: "/images/salesChannels/instagram.png",
      label: "Instagram",
      data: 10,
    },
    {
      image: "/images/salesChannels/lazada.png",
      label: "Lazada",
      data: 12,
    },
    {
      image: "/images/salesChannels/lineOA.png",
      label: "LINE OA",
      data: 8,
    },
    {
      image: "/images/salesChannels/officialWebsite.png",
      label: "Official Website",
      data: 6,
    },

    {
      image: "/images/salesChannels/shopee.png",
      label: "Shopee",
      data: 6,
    },
    {
      image: "/images/salesChannels/tiktok.png",
      label: "TikTok",
      data: 4,
    },
  ],
};
