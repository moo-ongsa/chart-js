export const baristaScenarioAnswers = [
  "i_wait_calmly_with_a_smile",
  "i_guide_him_with_a_top_pick",
] as const;

export type BaristaScenarioAnswer = (typeof baristaScenarioAnswers)[number];
