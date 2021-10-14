import { ReactNode } from "react";
import styled from "styled-components";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

interface LayoutProps {
  header?: boolean;
  footer?: boolean;
  children?: ReactNode;
}

const StyledWrapper = styled.div`
  background: var(--riesinger-colors-body);
`;

const Layout = ({ header, footer, children }: LayoutProps) => {
  // TODO: Refactor dark/light theme handling
  return (
    <StyledWrapper>
      {header ? <SiteHeader /> : null}
      {children}
      {footer ? <SiteFooter /> : null}
    </StyledWrapper>
  );
};

export default Layout;
