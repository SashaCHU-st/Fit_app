import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const ButtonRoot = styled.button`
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  margin-top: 30px;
  padding: 15px 16px;
  // box-shadow: 5px 5px 5px 5px ${colors.border};

  display: inline-flex;
  border-style: ridge;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 25px;
  font-family: "Inter", system-ui, sans-serif;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${colors.button};
  color: #ffffff;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors.buttonHover};
  }
  // &:active {
  //   box-shadow: none;
  //   transform: translateY(4px);
  // }
`;
