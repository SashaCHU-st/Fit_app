import CalculatorFrame from "../components/layout/CalculatorFrame";
import MainPageLayout from "../components/layout/MainLayout";
import UserInputForm from "../components/UserInputForm/UserInputForm";
import { useState } from "react";
import { BreakdownWrapper } from "../components/ui/primitives/BreakdownWrapper";
import NutritionBreakdown from "../components/NutritionBreakdown/NutritionBreakdown";
import type { NutritionBreakdownData } from "../types/form";

const NutritionCalculator = () => {
  const [formData, setFormData] = useState<NutritionBreakdownData | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  return (
    <main>
      <MainPageLayout>
        <CalculatorFrame>
          <UserInputForm
            onSubmit={(data) => {
              setFormData(data);
              setUpdate(false);
            }}
            onChangeForm={() => {
              setUpdate(true);
            }}
            onInvalidSubmit={() => {
              setFormData(null);
              setUpdate(false);
            }}
          />
          <BreakdownWrapper data-open={Boolean(formData)}>
            {formData && (
              <NutritionBreakdown
                foodLogInput={formData.foodLogInput}
                mealType={formData.mealType}
                update={update}
                calories={formData.calories}
                proteins={formData.proteins}
                carbohydrates={formData.carbohydrates}
                fat={formData.fat}
                amountFoodLogBreakDown={formData.amountFoodLogBreakDown}
              />
            )}
          </BreakdownWrapper>
        </CalculatorFrame>
      </MainPageLayout>
    </main>
  );
};

export default NutritionCalculator;
