import styled from "@emotion/styled";
import Link from "next/link";
import { BlogButton, ProjectsButton } from "./Button";
import Grid from "./Grid";
import Logo from "./Logo";

const StyledHeader = styled.header`
  border-top: 6px solid var(--riesinger-colors-brand);
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
  height: 6rem;
  /* box-shadow: var(--riesinger-shadow-1); */
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderContent = styled.div`
  grid-column: 2;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteHeader = () => {
  return (
    <StyledHeader>
      <Grid columns="var(--layout-medium)" columnGap={20}>
        <HeaderContent>
          <Link href="/" passHref>
            <a title="Back to riesinger.dev">
              <Logo />
            </a>
          </Link>
          <div />
          <StyledNav>
            <Link href="/projects" passHref>
              <ProjectsButton />
            </Link>
            <Link href="/posts" passHref>
              <BlogButton />
            </Link>
          </StyledNav>
        </HeaderContent>
      </Grid>
    </StyledHeader>
  );
};

export default SiteHeader;
