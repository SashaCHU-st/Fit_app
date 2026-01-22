import { TextDetails } from "./styles";
interface TextProps {
  children: React.ReactNode;
  "data-raw-value"?: number;
  "data-test-id"?: string;
  component?: "dt" | "dd";
}

export const Text = ({
  children,
  "data-test-id": testId,
  "data-raw-value": dataRaw,
  component,
}: TextProps) => {
  return (
    <TextDetails data-test-id={testId} data-raw-value={dataRaw} as={component}>
      {children}
    </TextDetails>
  );
};
