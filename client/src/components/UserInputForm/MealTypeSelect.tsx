import type { InputProps } from "../../types/form";
import { Select } from "../ui/Select/Select";

const options = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Snack", value: "snack" },
];

interface MealTypeProps {
  value: string;
  error: InputProps["error"];
  onChange: (value: string, error: string | null) => void;
}

const MealTypeSelect = ({ value, error, onChange }: MealTypeProps) => {
  const handleChangeMealType = (value: string) => {
    onChange(value, null);
  };

  return (
    <Select
      id="mealType"
      label="Meal Type"
      value={value}
      error={error}
      options={options}
      data-test-id="mealType"
      onChange={handleChangeMealType}
    />
  );
};

export default MealTypeSelect;
