import { styled } from "@linaria/react";
import type { ReactNode } from "react";

const ExercisesFrame = styled.div`
  gap: 24px;
  padding: 24px;
  margin-top: 16px;
  box-sizing: border-box;
  position: relative;
`;

interface ExerciseResultProps {
  children: ReactNode;
}

export const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

const ExerciseResult = ({ children }: ExerciseResultProps) => {
  return (
    <ExercisesFrame>
      <ExerciseGrid>{children}</ExerciseGrid>
    </ExercisesFrame>
  );
};

export default ExerciseResult;
