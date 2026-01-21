import { Text } from "../ui/Text/Text";
import { Row } from "../ui/primitives/Row";
import { MEAL_RECOMMENDATIONS } from "../../utils/recommendations";
import { getFlag } from "../../utils/getFlag";
interface ProteinsProps {
  value: number;
  mealType: keyof typeof MEAL_RECOMMENDATIONS;
}

const Proteins = ({ value, mealType }: ProteinsProps) => {
  const flag = getFlag(value, mealType, "protein");
  return (
    <Row data-flag={flag}>
      <Text component="dt">Proteins</Text>
      <Text data-test-id="proteins" component="dd">
        {value.toFixed(2)}
      </Text>
    </Row>
  );
};

export default Proteins;
