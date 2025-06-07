"use client";

import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";

export const TYPES_OF_COFFEE_DRINKERS_VALUE = {
  NON_COFFEE: "non_coffee",
  GENERAL: "general",
  COFFEE_DRINK: "coffee_drink",
  SPECIALIST: "specialist",
} as const;

export const getLabelOfCoffeeDrinkersByType = (type: CoffeeDrinker) => {
  switch (type) {
    case TYPES_OF_COFFEE_DRINKERS_VALUE.NON_COFFEE:
      return "Non Coffee";
    case TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL:
      return "Beginer";
    case TYPES_OF_COFFEE_DRINKERS_VALUE.COFFEE_DRINK:
      return "Intermediate";
    case TYPES_OF_COFFEE_DRINKERS_VALUE.SPECIALIST:
      return "Expert";
    default:
      return "";
  }
};

export const coffeeDrinkerOptions = [
  // {
  //   value: TYPES_OF_COFFEE_DRINKERS_VALUE.NON_COFFEE,
  //   label: getLabelOfCoffeeDrinkersByType(
  //     TYPES_OF_COFFEE_DRINKERS_VALUE.NON_COFFEE
  //   ),
  // },
  {
    value: TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
    label: getLabelOfCoffeeDrinkersByType(
      TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL as CoffeeDrinker
    ),
  },
  {
    value: TYPES_OF_COFFEE_DRINKERS_VALUE.COFFEE_DRINK,
    label: getLabelOfCoffeeDrinkersByType(
      TYPES_OF_COFFEE_DRINKERS_VALUE.COFFEE_DRINK as CoffeeDrinker
    ),
  },
  {
    value: TYPES_OF_COFFEE_DRINKERS_VALUE.SPECIALIST,
    label: getLabelOfCoffeeDrinkersByType(
      TYPES_OF_COFFEE_DRINKERS_VALUE.SPECIALIST as CoffeeDrinker
    ),
  },
];
