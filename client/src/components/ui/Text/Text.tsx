import { TextDetails } from "./styles";
interface TextProps {
  children: React.ReactNode;
  "data-raw-value"?: number;
  "data-test-id"?: string;
  component?: "dt" | "dd";
  variant: "small" | "big";
}

export const Text = ({
  children,
  "data-test-id": testId,
  "data-raw-value": dataRaw,
  component,
  variant,
}: TextProps) => {
  return (
    <TextDetails
      data-test-id={testId}
      data-raw-value={dataRaw}
      as={component}
      data-variant={variant}
    >
      {children}
    </TextDetails>
  );
};
