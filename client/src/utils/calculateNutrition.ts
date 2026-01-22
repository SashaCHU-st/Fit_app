import { FoodData } from "../components/api/api";
import type { UserForm } from "../types/form";

export const calculateNutrition = async ({
  foodLogInput,
  amountFoodLogInput,
  mealType,
}: UserForm) => {
  const data = await FoodData(foodLogInput);
  const amountFoodLogBreakDown = Number(amountFoodLogInput);
  const nutriments = data.products[0].nutriments;

  const carbo = (nutriments.carbohydrates_100g * amountFoodLogBreakDown) / 100;
  const protein = (nutriments.proteins_100g * amountFoodLogBreakDown) / 100;
  const fat = (nutriments.fat_100g * amountFoodLogBreakDown) / 100;
  const cal = (nutriments["energy-kcal_100g"] * amountFoodLogBreakDown) / 100;

  return {
    calories: cal,
    carbohydrates: carbo,
    proteins: protein,
    fat,
    amountFoodLogBreakDown,
    mealType,
    foodLogInput,
  };
};
