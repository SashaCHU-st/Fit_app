import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { getFlag } from "../../utils/getFlag";
import { MEAL_RECOMMENDATIONS } from "../../utils/recommendations";

interface CarbohydratesProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

const Carbohydrates = ({ value, mealType }: CarbohydratesProps) => {
  const flag = getFlag(value, mealType, "carbs");

  return (
    <Row data-flag={flag}>
      <Text component="dt">Carbohydrates</Text>
      <Text data-test-id="carbohydrates" component="dd">
        {value.toFixed(2)}
      </Text>
    </Row>
  );
};

export default Carbohydrates;
