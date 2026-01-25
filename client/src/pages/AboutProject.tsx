import MainPageLayout from "../components/layout/MainLayout";
import { TitleH1 } from "../components/ui/Title/styles";
import { Text } from "../components/ui/Text/Text";
import { FrameWrapper } from "../components/ui/primitives/MainLayout";

/** page about the project, what was purpose of this page */
const AboutProject = () => {
  return (
    <section>
      <MainPageLayout>
        <FrameWrapper>
          <TitleH1>About</TitleH1>
          <Text variant="big">
            The main purpose of this project is <b>learning</b>: working with
            external APIs, managing application state, structuring reusable
            components, and applying strong typing with TypeScript. In future
            development plans, the project will be expanded with an{" "}
            <b>Exercise page</b>, where users will be able to find a list of
            specific exercises. Overall, this project combines technical
            learning goals with a meaningful real-world topic{" "}
            <b>health awareness and self-care</b>. Additionally, I explored{" "}
            <b>Three.js</b> and implemented it in the project to create an
            interactive background.
          </Text>
        </FrameWrapper>
      </MainPageLayout>
    </section>
  );
};

export default AboutProject;
