import { PageWrapper, CenterContainer } from "../ui/primitives/MainLayout";
import type { ReactNode } from "react";

interface MainPageProps {
  children?: ReactNode;
}

const MainPageLayout = ({ children }: MainPageProps) => {
  return (
    <PageWrapper>
      <CenterContainer>{children}</CenterContainer>
    </PageWrapper>
  );
};

export default MainPageLayout;
