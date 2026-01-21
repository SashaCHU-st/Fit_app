import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { MEAL_RECOMMENDATIONS } from "../../utils/recommendations";
import { getFlag } from "../../utils/getFlag";

interface CaloriesProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

const Calories = ({ value, mealType }: CaloriesProps) => {
  const flag = getFlag(value, mealType, "calories");

  return (
    <Row data-flag={flag}>
      <Text component="dt">Calories</Text>
      <Text data-test-id="Calories" component="dd">
        {value.toFixed(2)}
      </Text>
    </Row>
  );
};

export default Calories;
