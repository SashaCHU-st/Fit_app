import { FoodData } from "../components/api/api";
import type { UserForm } from "../types/form";

export const calculateNutrition = async ({
  foodLogInput,
  amountFoodLogInput,
  mealType,
}: UserForm) => {
  const data = await FoodData(foodLogInput);
  const amountFoodLogBreakDown = Number(amountFoodLogInput) / 100;
  const nutriments = data.products[0].nutriments;

  const carbo = nutriments.carbohydrates_100g * amountFoodLogBreakDown;
  const protein = nutriments.proteins_100g * amountFoodLogBreakDown;
  const fat = nutriments.fat_100g * amountFoodLogBreakDown;
  const cal = nutriments["energy-kcal_100g"] * amountFoodLogBreakDown;

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
