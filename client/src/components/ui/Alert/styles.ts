import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const StyledAlert = styled.p`
  font-family: "Inter", system-ui, sans-serif;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  transition:
    max-height 900ms ease,
    opacity 900ms ease,
    margin 900ms ease,
    padding 900ms ease;

  &[data-open="true"] {
    max-height: 120px;
    opacity: 1;
    margin-top: 8px;
    padding: 16px;
  }

  &[role="status"] {
    background-color: ${colors.info};
  }
  &[role="alert"] {
    background-color: ${colors.warning};
  }
`;
