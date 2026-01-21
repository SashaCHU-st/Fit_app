import { TitleH1, TitleH2 } from "../ui/Title/styles";
import { useState, type FormEvent } from "react";
import type { UserForm, UserFormError } from "../../types/form";
import { initialForm, initialEmptyErrors } from "./model/initialState";
import FoodLog from "./FoodLog";
import AmountFoodLog from "./AmountFoodLog";
import CalculateCaloriesButton from "./CalculateCaloriesButton";
import MealTypeSelect from "./MealTypeSelect";
import { calculateNutrition } from "../../utils/calculateNutrition";
import { validateAmountFoodLogInput } from "../../utils/validate";
import { validateFoodLogInput } from "../../utils/validate";
import { validateMealType } from "../../utils/validate";
import WarningAlert from "./WarningAlert";
export interface NutritionBreakdownData {
  mealType: string;
  update?: boolean;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fat: number;
  amountFoodLogBreakDown: number;
}
export interface UserInput {
  onSubmit: (data: NutritionBreakdownData) => void;
  onChangeForm: () => void;
  onInvalidSubmit: () => void;
}

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

export const checkErrors = (form: UserForm): UserFormError => ({
  mealTypeError: validateMealType(form.mealType),
  foodLogError: validateFoodLogInput(form.foodLogInput),
  amountFoodLogError: validateAmountFoodLogInput(form.amountFoodLogInput),
});

const UserInputForm = ({
  onSubmit,
  onInvalidSubmit,
  onChangeForm,
}: UserInput) => {
  const [userForm, setUserForm] = useState<UserForm>(initialForm);
  const [userFormError, setUserFormError] =
    useState<UserFormError>(initialEmptyErrors);
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const handleAlertError = (message: string) => {
  //   setAlert(message);
  // };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlert("");
    const nextErrors = checkErrors(userForm);
    setUserFormError(nextErrors);

    if (!isFormValid(userForm, nextErrors)) return;
    setIsLoading(true);
    try {
      const results = await calculateNutrition(userForm);
      onSubmit(results);
    } catch (err: unknown) {
      onInvalidSubmit();
      setAlert(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    newUserForm: Partial<UserForm>,
    newError: Partial<UserFormError>,
  ) => {
    setAlert("");
    setUserForm({ ...userForm, ...newUserForm });
    setUserFormError({ ...userFormError, ...newError });
    onChangeForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <TitleH1>Nutrition Food Calculator</TitleH1>
        <TitleH2>Details</TitleH2>
        <MealTypeSelect
          value={userForm.mealType}
          error={userFormError.mealTypeError}
          onChange={(v, e) => {
            handleChange({ mealType: v }, { mealTypeError: e });
          }}
        />
        <FoodLog
          value={userForm.foodLogInput}
          error={userFormError.foodLogError}
          onChange={(v, e) => {
            handleChange({ foodLogInput: v }, { foodLogError: e });
          }}
        />
        <AmountFoodLog
          value={userForm.amountFoodLogInput}
          error={userFormError.amountFoodLogError}
          onChange={(v, e) => {
            handleChange({ amountFoodLogInput: v }, { amountFoodLogError: e });
          }}
        />
        <CalculateCaloriesButton loading={isLoading} />
        <WarningAlert value={alert} />
      </form>
    </section>
  );
};

export default UserInputForm;
