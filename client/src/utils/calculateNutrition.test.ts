import { describe, expect, it, vi } from "vitest";
import { calculateNutrition } from "./calculateNutrition";
import type { FoodApiResponse } from "../components/api/api";

vi.mock("../components/api/api", () => ({
  FoodData: vi.fn(),
}));

const mockFoodData = async (): Promise<FoodApiResponse> => ({
  products: [
    {
      product_name: "Test Food",
      nutriments: {
        "energy-kcal_100g": 250,
        proteins_100g: 10,
        carbohydrates_100g: 30,
        fat_100g: 5,
      },
    },
  ],
});

describe("calculateNutrition", () => {
  it("calculates nutrient values based on amount", async () => {
    const { FoodData } = await import("../components/api/api");
    vi.mocked(FoodData).mockImplementation(mockFoodData);

    const result = await calculateNutrition({
      foodLogInput: "banana",
      amountFoodLogInput: "200",
      mealType: "breakfast",
    });

    expect(result).toEqual({
      calories: 500,
      carbohydrates: 60,
      proteins: 20,
      fat: 10,
      amountFoodLogBreakDown: 2,
      mealType: "breakfast",
    });
  });

  it("throws when product is not found", async () => {
    const { FoodData } = await import("../components/api/api");
    vi.mocked(FoodData).mockRejectedValue(
      new Error("Food with such as name banana not exist"),
    );

    await expect(
      calculateNutrition({
        foodLogInput: "banana",
        amountFoodLogInput: "200",
        mealType: "breakfast",
      }),
    ).rejects.toThrow(/not exist/i);
  });
});
