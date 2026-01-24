import type { ReactNode } from "react";
import { ButtonRoot } from "./styles";
interface ButtonProps {
  "data-test-id": string;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?: boolean;
  startIcon?: ReactNode;
  children: ReactNode;
  variant: "contained" | "outlined";
}
/**Button used for Random food and Check Food Nutrition */
const Button = ({
  "data-test-id": testId,
  onClick,
  type,
  disabled,
  startIcon,
  children,
  variant,
}: ButtonProps) => {
  return (
    <ButtonRoot
      type={type}
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
      data-test-id={testId}
    >
      {startIcon}
      {children}
    </ButtonRoot>
  );
};

export default Button;
