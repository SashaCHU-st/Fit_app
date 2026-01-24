import {
  Legend,
  LegendItem,
  LegendGood,
  LegendHigh,
  LegendLow,
} from "./styles";

const NutritionLegend = () => {
  return (
    <Legend>
      <LegendItem>
        <LegendLow /> Low
      </LegendItem>
      <LegendItem>
        <LegendGood /> Good
      </LegendItem>
      <LegendItem>
        <LegendHigh /> High
      </LegendItem>
    </Legend>
  );
};

export default NutritionLegend;
