import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import type { BreakdownProps } from "../../types/breakdown";
import { getFlag } from "../../utils/getFlag";

const AmountFoodLogBreakDown = ({ value, mealType }: BreakdownProps) => {
  const flag = getFlag(value, mealType, "calories");
  return (
    <Row data-flag={flag}>
      <Text component="dt">Food amount</Text>
      <Text data-test-id="amountFoodLogBreakdown" component="dd">
        {Number(value*100).toFixed(0)} gr
      </Text>
    </Row>
  );
};

export default AmountFoodLogBreakDown;
