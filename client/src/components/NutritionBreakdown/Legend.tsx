import {
  Legend,
  LegendGood,
  LegendHigh,
  LegendItem,
  LegendLow,
} from "../ui/Legend/Legend";

const LegendItems = () => {
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

export default LegendItems;
