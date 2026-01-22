import { getFlag } from "./getFlag";
import type { SummaryProps } from "../types/breakdown";
export const summaryFlags = ({
  calories,
  proteins,
  fat,
  carbohydrates,
  mealType,
}: SummaryProps) => {
  const flags = {
    calories: getFlag(calories, mealType, "calories"),
    protein: getFlag(proteins, mealType, "protein"),
    fat: getFlag(fat, mealType, "fat"),
    carbs: getFlag(carbohydrates, mealType, "carbs"),
  };
  const low = Object.entries(flags)
    .filter(([_, f]) => f === "low")
    .map(([k]) => k);

  const high = Object.entries(flags)
    .filter(([_, f]) => f === "high")
    .map(([k]) => k);

  const lowList = low.join(", ");
  const highList = high.join(", ");
  return {
    low,
    lowList,
    high,
    highList,
  };
};
