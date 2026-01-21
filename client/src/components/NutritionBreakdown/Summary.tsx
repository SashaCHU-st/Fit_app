import { TitleH2 } from "../ui/Title/styles";
import { getFlag } from "../../utils/getFlag";
import { TitleH3 } from "../ui/Title/styles";

interface SummaryProps {
  calories: number;
  proteins: number;
  carbohydrates: number;
  fat: number;
  mealType: string;
}

const Summary = ({
  mealType,
  calories,
  proteins,
  carbohydrates,
  fat,
}: SummaryProps) => {
  const flags = {
    calories: getFlag(calories, mealType, "calories"),
    protein: getFlag(proteins, mealType, "protein"),
    fat: getFlag(fat, mealType, "fat"),
    carbs: getFlag(carbohydrates, mealType, "carbs"),
  };
  const low = Object.entries(flags)
    .filter(([_, f]) => f === "low")
    .map(([k]) => k);

  const high = Object.entries(flags)
    .filter(([_, f]) => f === "high")
    .map(([k]) => k);

  // const parts: string[] = [];
  // if (low.length) parts.push(`You are low on ${low.join(", ")}`);
  // if (high.length)
  //   parts.push(`It would be better to reduce ${high.join(", ")}`);

  const lowList = low.join(", ");
  const highList = high.join(", ");

  return (
    <summary>
      <TitleH2>For {mealType}:</TitleH2>
      <TitleH3>
        {low.length > 0 && (
          <>
            You are low on <strong>{lowList} </strong>I would suggest to add more
          </>
        )}
        {high.length > 0 && (
          <>
            <br />
            It would be better to reduce <strong>{highList}</strong>, maybe try to change amount
          </>
        )}
      </TitleH3>
    </summary>
  );
};

export default Summary;
