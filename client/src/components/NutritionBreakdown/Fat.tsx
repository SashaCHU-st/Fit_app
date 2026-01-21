import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { MEAL_RECOMMENDATIONS } from "../../utils/recommendations";
import { getFlag } from "../../utils/getFlag";

interface FatProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

const Fat = ({ value, mealType }: FatProps) => {
  const flag = getFlag(value, mealType, "fat");
  return (
    <Row data-flag={flag}>
      <Text component="dt">Fat</Text>
      <Text data-test-id="fat" component="dd">
        {value.toFixed(2)}
      </Text>
    </Row>
  );
};

export default Fat;
