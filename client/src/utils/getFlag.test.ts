import { describe, expect, it } from "vitest";
import { getFlag } from "./getFlag";

describe("getFlag", () => {
  it("returns null when mealType is missing", () => {
    expect(getFlag(100, undefined, "calories")).toBeNull();
  });

  it("returns null when nutrient is missing", () => {
    expect(getFlag(100, "breakfast", undefined)).toBeNull();
  });

  it("returns low for value below breakfast calories good range", () => {
    expect(getFlag(200, "breakfast", "calories")).toBe("low");
  });

  it("returns good for value inside breakfast calories good range", () => {
    expect(getFlag(450, "breakfast", "calories")).toBe("good");
  });

  it("returns high for value above breakfast calories good range", () => {
    expect(getFlag(600, "breakfast", "calories")).toBe("high");
  });
});
