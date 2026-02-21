export interface UserForm {
  foodLogInput: string;
  amountFoodLogInput: string;
  mealType: string;
}
export interface UserFormError {
  foodLogError: string | null;
  amountFoodLogError: string | null;
  mealTypeError: string | null;
}

export interface InputProps {
  value: string;
  error: string | null;
  onChange: (value: string, error: string | null) => void;
}

export interface NutritionBreakdownData {
  foodLogInput: string;
  mealType: string;
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
