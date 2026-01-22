import { describe, expect, it } from "vitest";
import { isFormValid } from "./isFormValid";
import type { UserForm, UserFormError } from "../types/form";

const validForm: UserForm = {
  foodLogInput: "banana",
  amountFoodLogInput: "20",
  mealType:"breakfast"
};

const noErrors: UserFormError = {
  foodLogError: null,
  amountFoodLogError: null,
  mealTypeError: null,
};

describe("Validation of the form", () => {
  it("returns tru when all filed are correct", () => {
    expect(isFormValid(validForm, noErrors)).toBe(true);
  });

  it("returns false when some of the field is empty", () => {
    const form = { ...validForm, foodLogInput: "" };
    expect(isFormValid(form, noErrors)).toBe(false);
  });
});
