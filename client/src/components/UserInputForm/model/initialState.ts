import type { UserForm, UserFormError } from "../../../types/form";
export const initialForm: UserForm = {
  foodLogInput: "",
  amountFoodLogInput: "",
  mealType: "none",
};

export const initialEmptyErrors: UserFormError = {
  foodLogError: "",
  amountFoodLogError: "",
  mealTypeError: "",
};
