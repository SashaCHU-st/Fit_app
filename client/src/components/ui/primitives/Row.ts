import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  &[data-flag="low"] {
    background: ${colors.low};
  }

  &[data-flag="good"] {
    background: ${colors.good};
  }

  &[data-flag="high"] {
    background: ${colors.high};
  }
`;
