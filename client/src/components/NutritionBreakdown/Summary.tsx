import { TitleH2 } from "../ui/Title/styles";
import { Text } from "../ui/Text/Text";
import { summaryFlags } from "../../utils/summaryFlags";
import type { SummaryProps } from "../../types/breakdown";

const Summary = ({
  mealType,
  calories,
  proteins,
  carbohydrates,
  fat,
}: SummaryProps) => {
  const { low, lowList, high, highList } = summaryFlags({
    mealType,
    calories,
    proteins,
    carbohydrates,
    fat,
  });

  return (
    <summary>
      {}
      <TitleH2>For {mealType}:</TitleH2>
      {low.length > 0 && (
        <Text variant="small">
          You are low on <strong style={{ color: "blue" }}>{lowList} </strong>I
          would suggest to add more;
        </Text>
      )}
      {high.length > 0 && (
        <Text variant="small">
          <br />
          It would be better to reduce{" "}
          <strong style={{ color: "red" }}>{highList}</strong>, maybe try to
          change amount;
        </Text>
      )}
      {low.length === 0 && high.length === 0 && (
        <Text variant="small">
          <b style={{ color: "green" }}>You have a great choice for today</b>
        </Text>
      )}
    </summary>
  );
};

export default Summary;
