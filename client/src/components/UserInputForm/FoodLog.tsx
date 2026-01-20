import type { InputProps } from "../../types/form";
import { validateVenueSlugInput } from "../../utils/validate";
import { Input } from "../ui/Input/Input";

const FoodLog = ({ value, error, onChange }: InputProps) => {
  const handleChangeFoodLog = (value: string) => {
    const validationError = validateVenueSlugInput(value);
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
