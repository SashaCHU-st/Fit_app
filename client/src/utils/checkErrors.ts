import { validateAmountFoodLogInput } from "../utils/validate";
import { validateFoodLogInput } from "../utils/validate";
import { validateMealType } from "../utils/validate";
import type { UserForm, UserFormError } from "../types/form";

/**Validates each form input and returns validation errors, if any.
 */

export const checkErrors = (form: UserForm): UserFormError => ({
  mealTypeError: validateMealType(form.mealType),
  foodLogError: validateFoodLogInput(form.foodLogInput),
  amountFoodLogError: validateAmountFoodLogInput(form.amountFoodLogInput),
});
