import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import type { BreakdownProps } from "../../types/breakdown";

const Calories = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "calories");

  return (
    <Row data-flag={flag}>
      <Text component="dt" variant="small">
        Calories
      </Text>
      <Text
        variant="small"
        data-test-id="Calories"
        component="dd"
        data-raw-value={Math.round(value)}
      >
        {value.toFixed(2)} kcal
      </Text>
    </Row>
  );
};

export default Calories;
