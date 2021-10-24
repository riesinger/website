import styled from "@emotion/styled";
import { Children } from "react";
import { CardBody } from "./Body";
import { CardHeader } from "./Header";
import { isHeaderElement } from "./utils";

export interface CardWrapperProps {
  glass?: boolean;
  depth?: 0 | 1 | 2 | 3;
}

export interface CardProps extends CardWrapperProps {
  title?: string;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

const DEFAULT_TAG = "div";

export const CardWrapper = styled(DEFAULT_TAG)<CardWrapperProps>`
  position: relative;
  background: ${(p) =>
    p.glass
      ? "var(--riesinger-colors-foreground)"
      : "var(--riesinger-card-background-color)"};
  backdrop-filter: ${(p) => (p.glass ? "blur(6px)" : "")};
  border-radius: var(--border-radius-2);
  box-shadow: ${(p) =>
    p.depth === 0 ? "none" : `var(--riesinger-shadow-${p.depth || "1"})`};
  border: 1px solid var(--riesinger-border-color);
  overflow: hidden;
`;

function Card(props: CardProps) {
  const { as: Component, children, glass, depth, title, ...rest } = props;

  const hasHeaderChildren = Children.toArray(children).some((child) =>
    isHeaderElement(child)
  );

  let header = null;

  /**
   * If no CardHeader children are present AND if a title has been specified as a prop
   * create an instance of CardHeader with the title prop
   */
  if (!hasHeaderChildren && title) {
    header = <CardHeader>{title}</CardHeader>;
  }

  return (
    <CardWrapper as={Component} depth={depth} glass={glass} {...rest}>
      {header}
      {children}
    </CardWrapper>
  );
}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.displayName = "Card";

export default Card;
