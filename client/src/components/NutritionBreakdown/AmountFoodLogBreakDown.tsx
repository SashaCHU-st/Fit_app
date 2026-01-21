import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { MEAL_RECOMMENDATIONS } from "../../utils/recommendations";
import { getFlag } from "../../utils/getFlag";

interface CartValueBreakdownProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

const AmountFoodLogBreakDown = ({
  value,
  mealType,
}: CartValueBreakdownProps) => {
  const flag = getFlag(value, mealType, "calories");
  return (
    <Row data-flag={flag}>
      <Text component="dt">Food amount</Text>
      <Text data-test-id="amountFoodLogBreakdown" component="dd">
        {value * 100} gr
      </Text>
    </Row>
  );
};

export default AmountFoodLogBreakDown;
