import { MEAL_RECOMMENDATIONS } from "../types/recommendations";
export type Flag = "low" | "good" | "high" | null;

export const getFlag = (
  value: number,
  mealType?: keyof typeof MEAL_RECOMMENDATIONS,
  nutrient?: "calories" | "protein" | "fat" | "carbs",
): Flag => {
  if (!mealType || !nutrient) return null;
  const ranges = MEAL_RECOMMENDATIONS[mealType]?.[`${nutrient}_ranges`];
  if (!ranges) return null;
  const match = ranges.find(({ min, max }) => {
    const lowerOk = value >= min;
    const upperOk = max === 0 ? true : value < max;
    return lowerOk && upperOk;
  });
  return (match?.flag as Flag) ?? null;
};
