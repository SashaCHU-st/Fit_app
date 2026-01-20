export interface UserForm {
  foodLogInput: string;
  amountFoodLogInput: string;
}
export interface UserFormError {
  foodLogError: string | null;
  amountFoodLogError: string | null;
}

export interface InputProps {
  value: string;
  error: string | null;
  onChange: (value: string, error: string | null) => void;
}