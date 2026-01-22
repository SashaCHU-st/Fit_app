import { StyledAlert } from "../ui/Alert/styles";

interface WarningAlertProps {
  value: string;
}

const WarningAlert = ({ value }: WarningAlertProps) => {
  return (
    <StyledAlert
      data-test-id="warning"
      role="warning"
      data-open={Boolean(value)}
    >
      {value}
    </StyledAlert>
  );
};

export default WarningAlert;
