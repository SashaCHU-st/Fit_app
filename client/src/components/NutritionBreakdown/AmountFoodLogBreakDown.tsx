import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
interface AmountFoodProps {
  value: number;
}

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
        {Number(value).toFixed(2)} gr
      </Text>
    </Row>
  );
};

export default AmountFoodLogBreakDown;
