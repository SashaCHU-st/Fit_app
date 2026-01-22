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
    .filter((entry) => entry[1] === "low")
    .map((entry) => entry[0]);

  const high = Object.entries(flags)
    .filter((entry) => entry[1] === "high")
    .map((entry) => entry[0]);

  const lowList = low.join(", ");
  const highList = high.join(", ");
  return {
    low,
    lowList,
    high,
    highList,
  };
};
