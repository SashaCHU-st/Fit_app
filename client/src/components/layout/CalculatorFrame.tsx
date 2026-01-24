import { Frame, Calculator } from "../ui/primitives/CalculatorFrame";
import type { ReactNode } from "react";

interface CalculatorFrameProps {
  children?: ReactNode;
}
/** The frame of the calculator simulation of deep,
 * a bit elevated from the background*/

const CalculatorFrame = ({ children }: CalculatorFrameProps) => {
  return (
    <Frame>
      <Calculator>{children}</Calculator>
    </Frame>
  );
};

export default CalculatorFrame;
