import { Input } from "../ui/Input/Input";
import type { InputProps } from "../../types/form";
import { validateAmountFoodLogInput } from "../../utils/validate";

const AmountFoodLog = ({ value, error, onChange }: InputProps) => {
  const handleChangeFoodAmount = (value: string) => {
    const validationError = validateAmountFoodLogInput(value);
    onChange(value, validationError);
  };
  return (
    <Input
      type="number"
      // step={0.1}
      id="foodAmount"
      label="Food Amount"
      value={value}
      error={error}
      placeholder="e.g 100"
      data-test-id="foodAmount"
      onChange={handleChangeFoodAmount}
      inputMode="decimal"
    />
  );
};

export default AmountFoodLog;
