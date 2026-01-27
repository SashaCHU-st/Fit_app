import github from "/logo/github-black.png";
import linkedIn from "/logo/linkedIn.png";
import { LogoLink, LogoWrap } from "./styles";
import { LogoList } from "./styles";
import { LogoImage } from "./styles";

const Logo = () => {
  return (
    <LogoWrap>
      <LogoList>
        <LogoLink href="https://github.com/SashaCHU-st/Fit_app" target="_blank">
          <LogoImage src={github} alt="githubLogo" title="GitHub repo" />
        </LogoLink>
      </LogoList>
      <LogoList>
        <LogoLink
          href="https://www.linkedin.com/in/aleksandra-heinanen/ "
          target="_blank"
        >
          <LogoImage
            src={linkedIn}
            alt="linkedInLogo"
            title="LinkedIn Aleksandra Heinänen"
          />
        </LogoLink>
      </LogoList>
    </LogoWrap>
  );
};

export default Logo;
