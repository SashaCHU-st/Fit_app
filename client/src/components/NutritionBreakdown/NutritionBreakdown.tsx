import { TitleH2 } from "../ui/Title/styles";
import AmountFoodLogBreakDown from "./AmountFoodLogBreakDown";
import Calories from "./Calories";
import Fat from "./Fat";
import Proteins from "./Proteins";
import Carbohydrates from "./Carbohydrates";
import Summary from "./Summary";
import UpdateAlert from "./UpdateAlert";
import LegendItems from "../ui/NutritionLegend/NutritionLegend";
import type { NutritionBreakdownData } from "../../types/form";
import { DetailsList } from "../ui/primitives/DetailsList";
import { summaryFlags } from "../../utils/summaryFlags";

/**Parent component that renders the full nutrition breakdown.
 * passes values to children components
 */

interface NutritionBreakdownProps {
  update: boolean;
  formData: NutritionBreakdownData;
}
const NutritionBreakdown = ({ update, formData }: NutritionBreakdownProps) => {
  const { sum, flags } = summaryFlags(formData);
  return (
    <section>
      <TitleH2>
        Here’s your nutrition breakdown for {formData.mealType} with a{" "}
        {formData.foodLogInput}.
      </TitleH2>
      <LegendItems />
      <UpdateAlert update={update} />
      <DetailsList>
        <AmountFoodLogBreakDown value={formData.amountFoodLogBreakDown} />
        <Calories value={formData.calories} flag={flags.calories} />
        <Proteins value={formData.proteins} flag={flags.protein} />
        <Fat value={formData.fat} flag={flags.fat} />
        <Carbohydrates value={formData.carbohydrates} flag={flags.carbs} />
        <Summary sum={sum} mealType={formData.mealType} />
      </DetailsList>
    </section>
  );
};

export default NutritionBreakdown;
