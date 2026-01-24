import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";
export const Frame = styled.div`
  width: 100%;
  box-sizing: border-box; // padding and border includes width of the parent
  background: ${colors.backgroundCalculator};
  border-radius: 8px;
  box-shadow:
    0px 3px 5px -1px rgb(70, 70, 70),
    0px 6px 10px 0px rgb(144, 144, 144),
    0px 1px 18px 0px rgb(123, 123, 123);
`;

export const Calculator = styled.div`
  display: flex;
  flex-direction: column; //element from up => down
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
`;
