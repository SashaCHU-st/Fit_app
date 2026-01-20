import { StyledAlert } from "./styles";

interface AlertProps {
  children: React.ReactNode;
  "data-test-id": string;
  role: "info" | "warning";
  "data-open"?: boolean;
}

const Alert = ({
  children,
  "data-test-id": testId,
  role: severity,
  "data-open": open,
}: AlertProps) => {
  return (
    <StyledAlert data-test-id={testId} role={severity} data-open={open}>
      {children}
    </StyledAlert>
  );
};

export default Alert;
