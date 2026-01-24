import type { InputProps } from "../../types/form";
import { validateFoodLogInput } from "../../utils/validate";
import { Input } from "../ui/Input/Input";

/**Renders a user input field for food amount in grams
 * and validates the value on change (not be empty).
 */

const FoodLog = ({ value, error, onChange }: InputProps) => {
  const handleChangeFoodLog = (value: string) => {
    const validationError = validateFoodLogInput(value);
    onChange(value, validationError);
  };

  return (
    <Input
      type="text"
      id="foodLog"
      inputMode="text"
      label="Food Log"
      value={value}
      error={error}
      placeholder="e.g banana"
      data-test-id="foodLog"
      onChange={handleChangeFoodLog}
    />
  );
};

export default FoodLog;
