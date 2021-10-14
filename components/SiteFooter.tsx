import styled from "styled-components";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  box-sizing: border-box;
  padding: 1rem 1rem 0rem 1rem;
  width: 100vw;
`;

const StyledRule = styled.hr`
  height: 1px;
  width: 100%;
  background: hsl(var(--palette-gray-20));
  border: none;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  font-weight: 500;
  font-size: 0.8rem;
`;

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SiteFooter = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledRule />
        <FooterContent>
          <span>&copy; {new Date().getFullYear()} Pascal Riesinger</span>
          <Logo size="sm" />
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  );
};

export default SiteFooter;
