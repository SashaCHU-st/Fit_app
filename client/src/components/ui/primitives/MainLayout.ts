import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";
export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${colors.background};
`;

export const NavZone = styled.div`
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 600px) {
    top: 12px;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
