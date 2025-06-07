import { IDrinkerDemographicGetAllResponse } from "@/core/interfaces/IDrinkerDemographicRepositoryResponses";

const baseColors = [
  "hsl(24, 91%, 66%)", // Orange
  "hsl(9, 78%, 82%)", // Light Coral
  "hsl(31, 22%, 53%)", // Brownish
  "hsl(41, 89%, 68%)", // Yellow
  "hsl(42, 79%, 58%)", // Goldenrod
  "hsl(2, 56%, 54%)", // Reddish
];

export const dummyDrinkerDemographic: IDrinkerDemographicGetAllResponse = {
  income: {
    labels: ["<10k", "10k–20k", "20k–30k", "30k–50k", ">50k"],
    data: [8, 22, 35, 20, 15],
  },
  womenWhoDrinkCoffee: "48%",
  avgCoffeeSpendingPerMonth: {
    man: [55, 60, 65, 70],
    woman: [45, 40, 35, 30],
    labels: ["18–24", "25–34", "35–44", "45+"],
    labelColor: baseColors.slice(0, 4),
    backgroundColorMan: baseColors.slice(0, 4),
    backgroundColorWoman: baseColors.slice(0, 4),
  },

  avgCoffeePricePreferred: {
    man: [50, 60, 70, 80],
    woman: [50, 40, 30, 20],
    labels: ["18–24", "25–34", "35–44", "45+"],
    labelColor: baseColors.slice(0, 4),
    backgroundColorMan: baseColors.slice(0, 4),
    backgroundColorWoman: baseColors.slice(0, 4),
  },

  preference: {
    man: [45, 25, 15, 10, 5],
    woman: [50, 30, 10, 7, 3],
    labels: ["Americano", "Latte", "Cappuccino", "Mocha", "Other"],
    labelColor: baseColors.slice(0, 5),
    backgroundColorMan: baseColors.slice(0, 5),
    backgroundColorWoman: baseColors.slice(0, 5),
  },
};
