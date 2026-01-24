import { styled } from "@linaria/react";

export const TextDetails = styled.span`
  display: block; // text will not be more then width of container 100%
  max-width: 100%;
  font-family: "Inter", system-ui, sans-serif;
  font-weight: 600;
  line-height: 1.235;
  margin: 0;
  white-space: normal;
  word-break: break-word;

  &[data-variant="big"] {
    font-size: 20px;
    line-height: 2;
    font-weight: 500;
  }

  &[data-variant="small"] {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    &[data-variant="big"] {
      font-size: 16px;
      line-height: 1.8;
    }
  }
`;
