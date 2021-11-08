import styled from "@emotion/styled";
import Link from "next/link";
import Grid from "./Grid";

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

const StyledFeedIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

const SiteFooter = () => {
  return (
    <StyledFooter>
      <Grid columns="var(--layout-medium)" columnGap={20}>
        <FooterContainer>
          <StyledRule />
          <FooterContent>
            <span>&copy; {new Date().getFullYear()} Pascal Riesinger</span>
            <Link href="/feeds/">
              <a>
                <StyledFeedIcon
                  fill="none"
                  stroke="var(--riesinger-colors-brand)"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </StyledFeedIcon>
              </a>
            </Link>
          </FooterContent>
        </FooterContainer>
      </Grid>
    </StyledFooter>
  );
};

export default SiteFooter;
