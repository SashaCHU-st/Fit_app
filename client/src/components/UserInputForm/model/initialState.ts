import type { UserForm, UserFormError } from "../../../types/form";
/** initial state for user form and user form error */
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
