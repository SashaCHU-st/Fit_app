import { useState } from "react";
import { initialForm, initialEmptyErrors } from "../model/initialState";
import type { UserForm, UserFormError, UserInput } from "../../../types/form";
import { checkErrors } from "../../../utils/checkErrors";
import { isFormValid } from "../../../utils/isFormValid";
import { calculateNutrition } from "../../../utils/calculateNutrition";
/**Custom hook that manages user input form state.
 * Handles form validation, submission, loading state,
 * update alerts when the form changes, and error handling.
 */

export const useUserInputForm = ({
  onSubmit,
  onChangeForm,
  onInvalidSubmit,
}: UserInput) => {
  const [userForm, setUserForm] = useState<UserForm>(initialForm);
  const [userFormError, setUserFormError] =
    useState<UserFormError>(initialEmptyErrors);
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlert("");
    const nextErrors = checkErrors(userForm);
    setUserFormError(nextErrors);

    if (!isFormValid(userForm, nextErrors)) return;
    setIsLoading(true);
    try {
      const results = await calculateNutrition(userForm);
      onSubmit(results);
    } catch (err: unknown) {
      onInvalidSubmit();
      setAlert(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    newUserForm: Partial<UserForm>,
    newError: Partial<UserFormError>,
  ) => {
    setAlert("");
    setUserForm((prev)=>({ ...prev, ...newUserForm }));
    setUserFormError((prev)=>({ ...prev, ...newError }));
    onChangeForm();
  };

  return {
    handleChange,
    handleSubmit,
    userForm,
    userFormError,
    alert,
    isLoading,
  };
};
