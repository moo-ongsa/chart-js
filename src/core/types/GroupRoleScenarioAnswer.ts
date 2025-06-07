export const groupRoleScenarioAnswers = [
  "i_ensure_deadlines_run_smoothly",
  "i_focus_on_details_like_decor_and_setup",
] as const;

export type GroupRoleScenarioAnswer = (typeof groupRoleScenarioAnswers)[number];
