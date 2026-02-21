import { describe, expect, it, vi } from "vitest";
import { summaryFlags } from "./summaryFlags";
import type { NutritionBreakdownData } from "../types/form";

vi.mock("./getFlag", () => ({
  getFlag: vi.fn(),
}));

const formData: NutritionBreakdownData = {
  foodLogInput: "test",
  mealType: "breakfast",
  calories: 22,
  proteins: 100,
  fat: 20,
  carbohydrates: 20,
  amountFoodLogBreakDown: 1,
};

describe("summaryFlags", () => {
  it("returns flags and sum entries", async () => {
    const { getFlag } = await import("./getFlag");
    vi.mocked(getFlag)
      .mockReturnValueOnce("low") // calories
      .mockReturnValueOnce("good") // proteins
      .mockReturnValueOnce("high") // fat
      .mockReturnValueOnce("low"); // carb

    const result = summaryFlags(formData);

    expect(result.sum[0]).toEqual(["calories", "low"]);
    expect(result.sum[1]).toEqual(["protein", "good"]);
    expect(result.sum[2]).toEqual(["fat", "high"]);
    expect(result.sum[3]).toEqual(["carbs", "low"]);
    expect(result.flags).toEqual({
      calories: "low",
      protein: "good",
      fat: "high",
      carbs: "low",
    });
  });
});
