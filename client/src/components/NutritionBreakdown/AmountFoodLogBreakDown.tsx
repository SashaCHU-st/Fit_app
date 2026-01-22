import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
interface AmountFoodProps {
  value: number;
}

const AmountFoodLogBreakDown = ({ value }: AmountFoodProps) => {
  return (
    <Row>
      <Text component="dt">Food amount (in grams)</Text>
      <Text
        data-test-id="amountFoodLogBreakdown"
        component="dd"
        data-raw-value={Math.round(value * 100)}
      >
        {Number(value).toFixed(0)} gr
      </Text>
    </Row>
  );
};

export default AmountFoodLogBreakDown;
