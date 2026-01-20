import Button from "../ui/Button/Button";
import { Spinner } from "../ui/primitives/Spinner";

type CalculateNutritionButtonProps = {
  loading: boolean;
};

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
      {loading ? "Calculating" : "Calculate Food Nutrition"}
    </Button>
  );
};

export default CalculateNutritionButton;
