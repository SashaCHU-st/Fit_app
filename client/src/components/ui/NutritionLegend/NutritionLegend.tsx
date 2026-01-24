import {
  Legend,
  LegendItem,
  LegendGood,
  LegendHigh,
  LegendLow,
} from "./styles";
/**
 * Legend that identifies color meanings for the user,
 * indicating when nutrition values are low(blue), high(read), or good(green).
 */

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
