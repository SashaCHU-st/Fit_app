import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import type { BreakdownProps } from "../../types/breakdown";

const Fat = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "fat");
  return (
    <Row data-flag={flag}>
      <Text component="dt" variant="small">
        Fat
      </Text>
      <Text
        data-test-id="fat"
        component="dd"
        data-raw-value={Math.round(value * 100)}
        variant="small"
      >
        {value.toFixed(2)} gr
      </Text>
    </Row>
  );
};

export default Fat;
