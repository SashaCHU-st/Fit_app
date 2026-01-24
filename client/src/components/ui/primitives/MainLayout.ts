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

export const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 16px;
  // needed to make page height to centralize it with justify-content:center
  min-height: calc(100vh - 120px);
  justify-content: center;
`;