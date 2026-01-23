import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import type { BreakdownProps } from "../../types/breakdown";

const Proteins = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "protein");
  return (
    <Row data-flag={flag}>
      <Text component="dt" variant="small">
        Proteins
      </Text>
      <Text
        data-test-id="proteins"
        component="dd"
        data-raw-value={Math.round(value * 100)}
        variant="small"
      >
        {value.toFixed(2)} gr
      </Text>
    </Row>
  );
};

export default Proteins;
