import { styled } from "@linaria/react";
import { colors } from "../../../styles/theme";

export const NavShell = styled.nav`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 16px 10px 14px;
  border-radius: 20px;
  background: ${colors.backgroundNavbar};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 16px 30px -22px rgba(0, 0, 0, 0.55),
    0 6px 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(6px);
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
