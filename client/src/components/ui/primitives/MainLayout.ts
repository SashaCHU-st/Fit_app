import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  background: ${colors.background};
`;

export const NavZone = styled.div`
  position: static;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  z-index: 2;
  pointer-events: auto;
`;

export const CenterContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: 24px;
`;
