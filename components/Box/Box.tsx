import styled from "@emotion/styled";
import { ElementType, ReactNode, ReactNodeArray } from "react";

type Alignment = "normal" | "start" | "end" | "center" | "stretch" | "baseline";

export interface BoxProps {
  as?: ElementType;
  children?: ReactNode | ReactNodeArray;
  gap?: number | string;
  wrap?: boolean | "wrap" | "no-wrap";
  alignItems?: Alignment;
  justifyContent?: Alignment;
}

const StyledBox = styled("div")<BoxProps>`
  display: flex;
  gap: ${(p) => p.gap};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  flex-wrap: ${(p) => p.wrap};
`;

const Box = (props: BoxProps) => {
  const { as = "div", gap = "none", wrap = true } = props;

  const sanitizedGap = typeof gap === "number" ? `${gap}px` : gap;
  const sanitizedWrap = wrap ? "wrap" : "no-wrap";

  return (
    <StyledBox {...props} as={as} gap={sanitizedGap} wrap={sanitizedWrap}>
      {props.children}
    </StyledBox>
  );
};

export default Box;
