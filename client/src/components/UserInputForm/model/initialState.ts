import type { UserForm, UserFormError } from "../../../types/form";
export const initialForm: UserForm = {
  foodLogInput: "",
  amountFoodLogInput: "",
};

export const initialEmptyErrors: UserFormError = {
  foodLogError: "",
  amountFoodLogError: "",
};
