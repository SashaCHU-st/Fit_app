import CalculatorFrame from "../components/layout/CalculatorFrame";
import MainPageLayout from "../components/layout/MainLayout";
import UserInputForm from "../components/UserInputForm/UserInputForm";
import { useState } from "react";
import { BreakdownWrapper } from "../components/ui/primitives/BreakdownWrapper";
import NutritionBreakdown from "../components/NutritionBreakdown/NutritionBreakdown";
import type { NutritionBreakdownData } from "../types/form";

/**
 * Nutrition Calculator (parent component) that renders a form for user input
 * and shows the nutrition breakdown after successful validation.
 */

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
              <NutritionBreakdown update={update} formData={formData} />
            )}
          </BreakdownWrapper>
        </CalculatorFrame>
      </MainPageLayout>
    </main>
  );
};

export default NutritionCalculator;
