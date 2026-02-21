import { getFlag } from "./getFlag";
import type { NutritionBreakdownData } from "../types/form";

/**for summary checking flags to give explicit message to user what is in low or high */
export const summaryFlags = ({
  calories,
  proteins,
  fat,
  carbohydrates,
  mealType,
}: NutritionBreakdownData) => {
  const flags = {
    calories: getFlag(calories, mealType, "calories"),
    protein: getFlag(proteins, mealType, "protein"),
    fat: getFlag(fat, mealType, "fat"),
    carbs: getFlag(carbohydrates, mealType, "carbs"),
  };
  const sum = Object.entries(flags);

  return {
    sum,
    flags,
  };
};
