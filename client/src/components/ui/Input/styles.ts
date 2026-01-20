import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  font-family: "Inter", system-ui, sans-serif;
`;

export const StyledInput = styled.input`
  padding: 16px;
  font-size: 16px;
  font-family: "Inter", system-ui, sans-serif;
  border-radius: 4px;
  border: 3px solid ${colors.border};
  outline: none;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary};
  }

  &[data-has-error="true"] {
    border-color: ${colors.error};
  }

  &[data-has-error="true"]:focus {
    border-color: ${colors.error};
    box-shadow: 0 0 0 2px ${colors.error};
  }
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: ${colors.muted};
  min-height: 16px;

  &[data-has-error="true"] {
    color: ${colors.error};
  }
`;
