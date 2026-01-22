import { describe, expect, it, vi } from "vitest";
import { summaryFlags } from "./summaryFlags";

vi.mock("./getFlag", () => ({
  getFlag: vi.fn(),
}));

describe("summaryFlags", () => {
  it("builds low/high lists and joined strings from flags", async () => {
    const { getFlag } = await import("./getFlag");
    vi.mocked(getFlag)
      .mockReturnValueOnce("low") // calories
      .mockReturnValueOnce("good") // protein
      .mockReturnValueOnce("high") // fat
      .mockReturnValueOnce("low"); // carbs

    const result = summaryFlags({
      calories: 100,
      proteins: 10,
      fat: 50,
      carbohydrates: 20,
      mealType: "breakfast",
    });

    expect(result.low).toEqual(["calories", "carbs"]);
    expect(result.high).toEqual(["fat"]);
    expect(result.lowList).toBe("calories, carbs");
    expect(result.highList).toBe("fat");
  });
});
