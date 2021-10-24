import styled from "@emotion/styled";
import Grid from "./Grid";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  box-sizing: border-box;
  padding: 1rem 1rem 0rem 1rem;
  width: 100%;
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
  grid-column: 2;
`;

const SiteFooter = () => {
  return (
    <StyledFooter>
      <Grid columns="var(--layout-medium)" columnGap={20}>
        <FooterContainer>
          <StyledRule />
          <FooterContent>
            <span>&copy; {new Date().getFullYear()} Pascal Riesinger</span>
            <Logo size="sm" />
          </FooterContent>
        </FooterContainer>
      </Grid>
    </StyledFooter>
  );
};

export default SiteFooter;
