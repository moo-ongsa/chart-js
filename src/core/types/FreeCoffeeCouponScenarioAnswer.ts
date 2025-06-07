export const freeCoffeeCouponScenarioAnswers = [
  "a_comfy_place_with_coffee_and_workshops",
  "a_specialty_coffee_shop_with_awards",
  "a_cafe_with_a_unique_menu_and_decoration",
] as const;

export type FreeCoffeeCouponScenarioAnswer =
  (typeof freeCoffeeCouponScenarioAnswers)[number];
