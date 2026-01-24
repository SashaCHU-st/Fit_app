import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";
export const Legend = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6px;
  color: ${colors.textSecondary};
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin-left: 0;
`;
export const LegendItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 1;
`;
export const LegendLow = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid ${colors.border};
  background: ${colors.low};
`;
export const LegendGood = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid ${colors.border};
  background: ${colors.good};
`;
export const LegendHigh = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid ${colors.border};
  background: ${colors.high};
`;
