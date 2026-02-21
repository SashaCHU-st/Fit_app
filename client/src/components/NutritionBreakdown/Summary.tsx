import { TitleH2 } from "../ui/Title/styles";
import { Text } from "../ui/Text/Text";
import type { SummaryProps } from "../../types/breakdown";
import { flagList } from "../../utils/flagList";

/**Displays a summary based on values provided by other components
 * and highlights low and high values for the user.
 */

const Summary = ({ mealType, sum }: SummaryProps) => {
  const { lowList, highList } = flagList(sum);

  return (
    <summary>
      <TitleH2>For {mealType}:</TitleH2>
      {lowList.length > 0 && (
        <Text variant="small">
          You are low on <strong style={{ color: "blue" }}>{lowList} </strong>.
          I would suggest to add more.
        </Text>
      )}
      {highList.length > 0 && (
        <Text variant="small">
          It would be better to reduce{" "}
          <strong style={{ color: "red" }}>{highList} </strong>.
        </Text>
      )}
      {highList.length === 0 && lowList.length === 0 && (
        <Text variant="small">
          <b style={{ color: "green" }}>You have a great choice for today</b>
        </Text>
      )}
    </summary>
  );
};

export default Summary;
