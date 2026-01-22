import type { UserForm, UserFormError } from "../types/form";
export const isFormValid = (form: UserForm, error: UserFormError): boolean => {
  return (
    !error.mealTypeError &&
    !error.foodLogError &&
    !error.amountFoodLogError &&
    form.mealType !== "none" &&
    !!form.foodLogInput &&
    !!form.amountFoodLogInput
  );
};
