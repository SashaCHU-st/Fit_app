import { Input } from "../ui/Input/Input";
import type { InputProps } from "../../types/form";
import { validateAmountFoodLogInput } from "../../utils/validate";

/**Renders a user input field for food amount in grams
 * and validates the value on change.
 */

const AmountFoodLog = ({ value, error, onChange }: InputProps) => {
  const handleChangeFoodAmount = (value: string) => {
    if (value.includes(",")) {
      value = value.replace(",", ".");
    }
    const validationError = validateAmountFoodLogInput(value);
    onChange(value, validationError);
  };
  return (
    <Input
      type="text"
      id="foodAmount"
      label="Food Amount (max 1000 gr)"
      value={value}
      error={error}
      placeholder="e.g 100"
      data-test-id="foodAmount"
      onChange={handleChangeFoodAmount}
      inputMode="decimal"
      pattern="[0-9]+([.\,][0-9]+)?"
    />
  );
};

export default AmountFoodLog;
