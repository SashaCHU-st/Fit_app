import { describe, it, expect } from "vitest";
import { checkErrors } from "./checkErrors";

const validForm = {
  foodLogInput: "banana",
  amountFoodLogInput: "10",
  mealType: "breakfast",
};

describe("checkErrors", () => {
  it("returns empty error strings for valid form", () => {
    const errors = checkErrors(validForm);

    expect(errors).toEqual({
      foodLogError: null,
      amountFoodLogError: null,
      mealTypeError: null,
    });
  });

  it("return error if venue slug for example empty", () => {
    const form = { ...validForm, foodLogInput: "" };
    const errors = checkErrors(form);

    expect(errors.foodLogError).toBe(
      "Food log cannot be empty. Please enter e.g. banana",
    );
  });
});
