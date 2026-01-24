import { HelperText, Label, SelectWrapper, StyledSelect } from "./styles";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  error?: string | null;
  options: SelectOption[];
  onChange: (value: string) => void;
  "data-test-id": string;
}

/**Select from meal types */
export const Select = ({
  id,
  label,
  value,
  error,
  options,
  onChange,
  "data-test-id": testId,
}: SelectProps) => {
  return (
    <SelectWrapper>
      <Label htmlFor={id}>{label}</Label>

      <StyledSelect
        id={id}
        value={value}
        data-has-error={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-helper`}
        data-test-id={testId}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>

      <HelperText id={`${id}-helper`} data-has-error={Boolean(error)}>
        {error ?? ""}
      </HelperText>
    </SelectWrapper>
  );
};
