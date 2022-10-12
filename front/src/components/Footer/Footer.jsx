import {
  FooterContainer,
  FooterLogo,
  SocialButton,
  SocialItem,
  SocialList,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo />
      <SocialList>
        <SocialItem>
          <SocialButton className="linkedin"></SocialButton>
        </SocialItem>
        <SocialItem>
          <SocialButton className="twitter"></SocialButton>
        </SocialItem>
        <SocialItem>
          <SocialButton className="facebook"></SocialButton>
        </SocialItem>
        <SocialItem>
          <SocialButton className="pinterest"></SocialButton>
        </SocialItem>
      </SocialList>
    </FooterContainer>
  );
};

export default Footer;
