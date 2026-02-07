import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
interface AmountFoodProps {
  value: number;
}
/** renders the value provided by the parent component, which comes from user input */

const AmountFoodLogBreakDown = ({ value }: AmountFoodProps) => {
  return (
    <Row>
      <Text component="dt" variant="small">
        Food amount (in grams)
      </Text>
      <Text
        data-test-id="amountFoodLogBreakdown"
        component="dd"
        data-raw-value={Math.round(value * 100)}
        variant="small"
      >
        {value.toFixed(2)} gr
      </Text>
    </Row>
  );
};

export default AmountFoodLogBreakDown;
