import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import type { BreakdownProps } from "../../types/breakdown";

/**
 * Renders the value provided by the parent component
 * the amount calculated based on the user's food input
 * and values received from the API based on the food log.
 */

const Fat = ({ value, flag }: BreakdownProps) => {
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
