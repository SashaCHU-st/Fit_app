import { FoodData } from "../components/api/api";
import type { UserForm } from "../types/form";

/** Fetches nutrition data from the API and calculates
 * final nutrition values based on the user-input food amount.
 */

export const calculateNutrition = async ({
  foodLogInput,
  amountFoodLogInput,
  mealType,
}: UserForm) => {
  const data = await FoodData(foodLogInput);
  const amountFoodLogBreakDown = Number(amountFoodLogInput);
  const nutriments = data.products[0].nutriments;

  const carbohydrates =
    (nutriments.carbohydrates_100g * amountFoodLogBreakDown) / 100;
  const proteins = (nutriments.proteins_100g * amountFoodLogBreakDown) / 100;
  const fat = (nutriments.fat_100g * amountFoodLogBreakDown) / 100;
  const calories =
    (nutriments["energy-kcal_100g"] * amountFoodLogBreakDown) / 100;

  return {
    calories,
    carbohydrates,
    proteins,
    fat,
    amountFoodLogBreakDown,
    mealType,
    foodLogInput,
  };
};
