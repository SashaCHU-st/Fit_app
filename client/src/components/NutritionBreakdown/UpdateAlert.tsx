import Alert from "../ui/Alert/Alert";
interface UpdateAlertProps {
  update?: boolean;
}

/**Shows an update alert when previously submitted form values are changed.
 */

const message =
  "Attention! The Nutrition Breakdown values have not been updated because the inputs have changed. Please click the Calculate Food Nutrition button again to get the updated values.";
const UpdateAlert = ({ update }: UpdateAlertProps) => {
  return (
    <Alert data-test-id="updateAlert" role="info" data-open={Boolean(update)}>
      {update ? message : null}
    </Alert>
  );
};

export default UpdateAlert;
