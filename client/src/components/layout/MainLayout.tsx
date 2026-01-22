import { PageWrapper, CenterContainer } from "../ui/primitives/MainLayout";
import ParticleBackground from "../background/ParticleBackground";
import type { ReactNode } from "react";

interface MainPageProps {
  children?: ReactNode;
}

const MainPageLayout = ({ children }: MainPageProps) => {
  return (
    <PageWrapper>
      <ParticleBackground />
      <CenterContainer>{children}</CenterContainer>
    </PageWrapper>
  );
};

export default MainPageLayout;
