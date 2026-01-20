import { TitleH1, TitleH2 } from "../ui/Title/styles";
import { useState, type FormEvent } from "react";
import type { UserForm, UserFormError } from "../../types/form";
import { initialForm, initialEmptyErrors } from "./model/initialState";
import FoodLog from "./FoodLog";
import AmountFoodLog from "./AmountFoodLog";
import CalculateCaloriesButton from "./CalculateCaloriesButton";
import { FoodData } from "../api/api";


export interface NutritionBreakdownData {
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

const UserInputForm = ({
  onSubmit,
  onInvalidSubmit,
  onChangeForm,
}: UserInput) => {
  const [userForm, setUserForm] = useState<UserForm>(initialForm);
  const [userFormError, setUserFormError] =
    useState<UserFormError>(initialEmptyErrors);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await FoodData(userForm.foodLogInput);
      console.log("FoodData response:", data.products[0].nutriments);
    } catch (error) {
      console.error("FoodData error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    newUserForm: Partial<UserForm>,
    newError: Partial<UserFormError>,
  ) => {
    // setAlert("");
    setUserForm({ ...userForm, ...newUserForm });
    setUserFormError({ ...userFormError, ...newError });
    onChangeForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <TitleH1>Calories Food Calculator</TitleH1>
        <TitleH2>Details</TitleH2>
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
      </form>
    </section>
  );
};

export default UserInputForm;
