import { Select } from "../ui/Select/Select";
import type { InputProps } from "../../types/form";
import { options } from "../../types/dropDownOptions";

/**Renders a select input for meal type and notifies the parent
 * when the selected value changes.
 */

const MealTypeSelect = ({ value, error, onChange }: InputProps) => {
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
