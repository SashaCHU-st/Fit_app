import { MEAL_RECOMMENDATIONS } from "./recommendations";

export interface BreakdownProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

export interface SummaryProps {
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  mealType: string;
}

export interface NutritionBreakdownData {
  mealType: string;
  update?: boolean;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fat: number;
  amountFoodLogBreakDown: number;
}
