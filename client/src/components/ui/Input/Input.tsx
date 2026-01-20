import { InputWrapper, Label, StyledInput, HelperText } from "./styles";

interface InputProps {
  id: string;
  label: string;
  value: string;
  error?: string | null;
  placeholder: string;
  type: string;
  inputMode?: "text" | "decimal";
  onChange: (value: string) => void;
  "data-test-id": string;
  step?: number;
}

export const Input = ({
  id,
  label,
  value,
  error,
  placeholder,
  type = "text",
  onChange,
  "data-test-id": testId,
  step,
  inputMode,
}: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>

      <StyledInput
        id={id}
        type={type}
        step={step}
        value={value}
        data-has-error={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-helper`}
        placeholder={placeholder}
        data-test-id={testId}
        inputMode={inputMode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />

      <HelperText id={`${id}-helper`} data-has-error={Boolean(error)}>
        {error ?? ""}
      </HelperText>
    </InputWrapper>
  );
};
