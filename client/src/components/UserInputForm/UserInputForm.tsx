import { TitleH1, TitleH2 } from "../ui/Title/styles";
import FoodLog from "./FoodLog";
import AmountFoodLog from "./AmountFoodLog";
import CalculateCaloriesButton from "./CalculateCaloriesButton";
import MealTypeSelect from "./MealTypeSelect";

import WarningAlert from "./WarningAlert";
import type { UserInput } from "../../types/form";
import { useUserInputForm } from "./model/useUserInputForm";
import RandomizeFoodLog from "./RandomizeFoodLog";

const UserInputForm = (props: UserInput) => {
  const {
    handleSubmit,
    userForm,
    userFormError,
    handleChange,
    isLoading,
    alert,
  } = useUserInputForm(props);
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
        <RandomizeFoodLog
          onRandomize={(v) => {
            handleChange({ foodLogInput: v }, { foodLogError: "" });
          }}
        />
        <CalculateCaloriesButton loading={isLoading} />

        <WarningAlert value={alert} />
      </form>
    </section>
  );
};

export default UserInputForm;
