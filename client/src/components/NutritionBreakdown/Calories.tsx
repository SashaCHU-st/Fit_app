import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import type { BreakdownProps } from "../../types/breakdown";

/**
 * Renders the value provided by the parent component
 * the amount calculated based on the user's food input
 * and values received from the API based on the food log.
 */

const Calories = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "calories");

  return (
    <Row data-flag={flag}>
      <Text component="dt" variant="small">
        Calories
      </Text>
      <Text
        variant="small"
        data-test-id="calories"
        component="dd"
        data-raw-value={Math.round(value) * 100}
      >
        {value.toFixed(2)} kcal
      </Text>
    </Row>
  );
};

export default Calories;
