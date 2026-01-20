import Button from "../ui/Button/Button";
import { Spinner } from "../ui/primitives/Spinner";

type CalculateDeliveryPriceButtonProps = {
  loading: boolean;
};

const CalculateCaloriesButton = ({
  loading,
}: CalculateDeliveryPriceButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      data-test-id="calculateFoodCalories"
      variant="contained"
      startIcon={loading ? <Spinner /> : null}
    >
      {loading ? "Calculating" : "Calculate Food Calories"}
    </Button>
  );
};

export default CalculateCaloriesButton;
