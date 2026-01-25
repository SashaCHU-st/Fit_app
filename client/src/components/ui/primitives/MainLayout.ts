import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; //starts from top (for Calculator needed)
  position: relative;
  overflow: hidden; //prevents scrollbars
  background: ${colors.background};
`;

export const NavZone = styled.div`
  position: static;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  z-index: 2; // renders above elements
  pointer-events: auto; //clickable
`;

export const CenterContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1; // a bit "bellow" NavZone
  margin-top: 24px;
`;

export const FrameWrapper = styled.div`
  display: flex;
  border-style: solid;
  border-color: grey;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 16px;
  box-shadow:
    0px 3px 5px -1px rgb(70, 70, 70),
    0px 6px 10px 0px rgb(144, 144, 144),
    0px 1px 18px 0px rgb(123, 123, 123);
  border-radius: 10%;
  min-height: calc(
    70vh - 120px
  ); // needed to make page height to centralize it with justify-content:center
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  background-filter: blur(6px);
`;
