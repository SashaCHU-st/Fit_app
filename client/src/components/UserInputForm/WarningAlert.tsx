import { StyledAlert } from "../ui/Alert/styles";

interface WarningAlertProps {
  value: string;
}

/**Shows an warning alert for example when there is no such as food from API.
 */

const WarningAlert = ({ value }: WarningAlertProps) => {
  return (
    <StyledAlert
      data-test-id="warning"
      role="alert"
      data-open={Boolean(value)}
    >
      {value}
    </StyledAlert>
  );
};

export default WarningAlert;
