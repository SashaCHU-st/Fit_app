import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import type { BreakdownProps } from "../../types/breakdown";

const Carbohydrates = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "carbs");

  return (
    <Row data-flag={flag}>
      <Text component="dt">Carbohydrates</Text>
      <Text
        data-test-id="carbohydrates"
        component="dd"
        data-raw-value={Math.round(value * 100)}
      >
        {value.toFixed(2)} gr
      </Text>
    </Row>
  );
};

export default Carbohydrates;
