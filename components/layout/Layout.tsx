import { ReactNode } from "react";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

interface LayoutProps {
  header?: boolean;
  footer?: boolean;
  children?: ReactNode;
}

const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <>
      {header ? <SiteHeader /> : null}
      {children}
      {footer ? <SiteFooter /> : null}
    </>
  );
};

export default Layout;
