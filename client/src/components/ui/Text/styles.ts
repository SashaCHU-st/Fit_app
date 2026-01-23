import { styled } from "@linaria/react";

export const TextDetails = styled.span`
  font-family: "Inter", system-ui, sans-serif;
  font-weight: 600;
  line-height: 1.235;
  margin: 0;

  &[data-variant="big"] {
    font-size: 20px;
    line-height: 1.8;
    font-weight: 500;
  }

  &[data-variant="small"] {
    font-size: 14px;
    line-height: 1.4;
  }
     @media (max-width: 768px) {
    &[data-variant="big"] {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;
