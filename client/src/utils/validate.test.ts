import { describe, expect, it } from "vitest";
import {
  validateAmountFoodLogInput,
  validateFoodLogInput,
  validateMealType,
} from "./validate";

describe("Validate Food Amount Log", () => {
  it("returns error if empty", () => {
    expect(validateAmountFoodLogInput("")).toMatch(/cannot be empty/i);
  });

  it("returns error if negative", () => {
    expect(validateAmountFoodLogInput("-1")).toMatch(
      /Food amount log cannot be negative/i,
    );
  });

  it("returns error if negative", () => {
    expect(validateAmountFoodLogInput("0")).toMatch(
      "The Food Amount must be between 0.1 and 1000 (1 kg)",
    );
  });
  it("returns error if more then 1 001 ", () => {
    expect(validateAmountFoodLogInput("1001")).toMatch(
      "The Food Amount must be between 0.1 and 1000 (1 kg)",
    );
  });
  it("no error if valid number ", () => {
    expect(validateAmountFoodLogInput("10")).toBeNull();
  });
});

describe("Validate Food log", () => {
  it("returns error if empty", () => {
    expect(validateFoodLogInput("")).toMatch(
      "Food log cannot be empty. Please enter e.g. banana",
    );
  });

  it("no error if valid text ", () => {
    expect(validateFoodLogInput("home-assignment")).toBeNull();
  });
});

describe("Validate Meal dropdown", () => {
  it("returns error if empty", () => {
    expect(validateMealType("")).toMatch("Please select a meal type");
  });
});
