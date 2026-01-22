import { TitleH2 } from "../ui/Title/styles";
import { styled } from "@linaria/react";
import AmountFoodLogBreakDown from "./AmountFoodLogBreakDown";
import Calories from "./Calories";
import Fat from "./Fat";
import Proteins from "./Proteins";
import Carbohydrates from "./Carbohydrates";
import Summary from "./Summary";
import UpdateAlert from "./UpdateAlert";
import LegendItems from "./Legend";
import type { NutritionBreakdownData } from "../../types/form";

const DetailsList = styled.dl``;
const NutritionBreakdown = ({
  foodLogInput,
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
      <TitleH2>
        Here’s your nutrition breakdown for {mealType} with a {foodLogInput}.
      </TitleH2>
      <LegendItems />
      <UpdateAlert update={update} />
      <DetailsList>
        <AmountFoodLogBreakDown value={amountFoodLogBreakDown} />
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
