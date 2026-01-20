import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const Spinner = styled.span`
  width: 16px;
  height: 16px;

  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: ${colors.background};
  border-radius: 50%;

  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
