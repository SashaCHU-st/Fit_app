import { MEAL_RECOMMENDATIONS } from "../utils/recommendations";

export interface BreakdownProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}