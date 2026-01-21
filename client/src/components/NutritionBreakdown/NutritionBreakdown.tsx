import { TitleH2 } from "../ui/Title/styles";
import { styled } from "@linaria/react";
import AmountFoodLogBreakDown from "./AmountFoodLogBreakDown";
import Calories from "./Calories";
import Fat from "./Fat";
import Proteins from "./Proteins";
import Carbohydrates from "./Carbohydrates";
import Summary from "./Summary";
import UpdateAlert from "./UpdateAlert";

const DetailsList = styled.dl``;
export interface NutritionBreakdownData {
  mealType: string;
  update?: boolean;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fat: number;
  amountFoodLogBreakDown: number;
}
const NutritionBreakdown = ({
  mealType,
  update,
  calories,
  proteins,
  carbohydrates,
  fat,
  amountFoodLogBreakDown,
}: NutritionBreakdownData) => {
  return (
    <section>
      <TitleH2>Here is your nutrition breakdown for {mealType}</TitleH2>
      <UpdateAlert update={update} />
      <DetailsList>
        <AmountFoodLogBreakDown
          value={amountFoodLogBreakDown}
          mealType={mealType}
        />
        <Calories value={calories} mealType={mealType} />
        <Proteins value={proteins} mealType={mealType} />
        <Fat value={fat} mealType={mealType} />
        <Carbohydrates value={carbohydrates} mealType={mealType} />
        <Summary
          calories={calories}
          proteins={proteins}
          carbohydrates={carbohydrates}
          fat={fat}
          mealType={mealType}
        />
      </DetailsList>
    </section>
  );
};

export default NutritionBreakdown;
