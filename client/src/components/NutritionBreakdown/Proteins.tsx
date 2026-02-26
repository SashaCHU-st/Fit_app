import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import type { BreakdownProps } from "../../types/breakdown";

/**
 * Renders the value provided by the parent component
 * the amount calculated based on the user's food input
 * and values received from the API based on the food log.
 */

const Proteins = ({ value, flag }: BreakdownProps) => {
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
        {value.toFixed(2)} gr ({flag})
      </Text>
    </Row>
  );
};

export default Proteins;
