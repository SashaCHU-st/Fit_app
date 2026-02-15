import Button from "../ui/Button/Button";
import { Spinner } from "../ui/primitives/Spinner";

interface CalculateNutritionButtonProps {
  loading: boolean;
}
/**Submit button that sends user input values for nutrition calculation.
 */

const CalculateNutritionButton = ({
  loading,
}: CalculateNutritionButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      data-test-id="calculateFoodNutrition"
      variant="contained"
      startIcon={loading ? <Spinner /> : null}
    >
      {loading ? "Checking" : "Check Food Nutrition"}
    </Button>
  );
};

export default CalculateNutritionButton;
