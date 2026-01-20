import type { UserForm, UserFormError } from "../../../types/form";
export const initialForm: UserForm = {
  foodLogInput: "",
  amountFoodLogInput: "",
  mealTypeInput: "breakfast",
};

export const initialEmptyErrors: UserFormError = {
  foodLogError: "",
  amountFoodLogError: "",
  mealTypeError: "",
};
