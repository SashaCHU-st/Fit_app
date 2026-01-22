import { css } from "@linaria/core";
import { colors } from "../../../styles/theme";

export const navItemClass = css`
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  color: ${colors.primary};
  font-family: "Inter", system-ui, sans-serif;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
`;

export const navItemActiveClass = css`
  color: ${colors.primary};
  background: ${colors.backgroundButtonNavbar};
  box-shadow: 0 8px 16px -12px rgba(0, 0, 0, 0.45);
`;
