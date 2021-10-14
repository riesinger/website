import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  border-top: 6px solid var(--riesinger-colors-brand);
  width: 100vw;
  box-sizing: border-box;
  padding: 0 1rem;
  box-shadow: var(--riesinger-shadow-1);
`;

const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  color: var(--riesinger-colors-brand);
  list-style: none;
  text-decoration: none;
  font-weight: 600;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SiteHeader = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link href="/" passHref>
          <a title="Back to riesinger.dev">
            <Logo />
          </a>
        </Link>
        <div />
        <StyledNav>
          <Link href="/projects" passHref>
            <StyledLink>Projects</StyledLink>
          </Link>
          <Link href="/posts" passHref>
            <StyledLink>Posts</StyledLink>
          </Link>
        </StyledNav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default SiteHeader;
