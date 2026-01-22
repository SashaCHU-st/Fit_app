import { PageWrapper, CenterContainer, NavZone } from "../ui/primitives/MainLayout";
import ParticleBackground from "../background/ParticleBackground";
import type { ReactNode } from "react";
import TopNav from "./TopNav";

interface MainPageProps {
  children?: ReactNode;
}

const MainPageLayout = ({ children }: MainPageProps) => {
  return (
    <PageWrapper>
      <ParticleBackground />
      <NavZone>
        <TopNav />
      </NavZone>
      <CenterContainer>{children}</CenterContainer>
    </PageWrapper>
  );
};

export default MainPageLayout;
