import { styled } from "@linaria/react";
export const BreakdownWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  margin-top: 0;
  transition:
    grid-template-rows 500ms ease,
    opacity 500ms ease,
    margin-top 500ms ease;

  &[data-open="true"] {
    grid-template-rows: 1fr;
    opacity: 1;
    // margin-top: 16px;
  }

  & > * {
    overflow: hidden;
  }
`;
