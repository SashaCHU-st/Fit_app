import MainPageLayout from "../components/layout/MainLayout";
import { TitleH1 } from "../components/ui/Title/styles";
import { Text } from "../components/ui/Text/Text";
import { FrameWrapper } from "../components/ui/primitives/MainLayout";

/** some short intro about app */
const Home = () => {
  return (
    <main>
      <MainPageLayout>
        <FrameWrapper>
          <TitleH1>Purpose of the project</TitleH1>
          <Text variant="big">
            This project is a web application built with{" "}
            <b>React, TypeScript, and Linaria</b>, using the{" "}
            <b>Open Food Facts API</b> to help users calculate the nutritional
            value of their daily meals, such as breakfast, lunch, and dinner.
            The application focuses on promoting healthy habits by making
            nutrition tracking simple and accessible, as taking care of one’s
            health is essential in everyday life.
          </Text>
        </FrameWrapper>
      </MainPageLayout>
    </main>
  );
};

export default Home;
