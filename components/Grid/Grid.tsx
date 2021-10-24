import styled from "@emotion/styled";
import { ElementType, ReactNode, ReactNodeArray } from "react";

type Alignments =
  | "auto"
  | "normal"
  | "start"
  | "end"
  | "center"
  | "left"
  | "right"
  | "stretch"
  | "self-start"
  | "self-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe center"
  | "unsafe center"
  | "legacy right"
  | "legacy left"
  | "legacy center";

interface Props {
  as?: ElementType;
  children: ReactNode | ReactNodeArray;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  template?: string;
  columns?: string;
  rows?: string;
  flow?: "row" | "column" | "row dense" | "column dense";
  alignContent?: Alignments;
  alignItems?: Alignments;
  justifyContent?: Alignments;
  justifyItems?: Alignments;
  className?: string;
  "data-testid"?: string;
}

const StyledGrid = styled("div")<Props>`
  display: grid;
  column-gap: ${(p) => p.columnGap};
  row-gap: ${(p) => p.rowGap};
  gap: ${(p) => p.gap};
  grid-template-columns: ${(p) => p.columns};
  grid-template-rows: ${(p) => p.rows};
  grid-auto-flow: ${(p) => p.flow};
  align-content: ${(p) => p.alignContent};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  justify-items: ${(p) => p.justifyItems};
  height: inherit;
`;

const Grid = (props: Props) => {
  const {
    as = "div",
    gap = "none",
    rowGap = "none",
    columnGap = "none",
    template,
    columns,
    rows,
    flow = "row",
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    className,
  } = props;

  const sanitizedGap = typeof gap === "number" ? `${gap}px` : gap;
  const sanitizedRowGap = typeof rowGap === "number" ? `${rowGap}px` : rowGap;
  const sanitizedColumnGap =
    typeof columnGap === "number" ? `${columnGap}px` : columnGap;
  const sanitizeTemplate = template || "none";
  const sanitizedColumns = columns || "none";
  const sanitizedRows = rows || "none";

  return (
    <StyledGrid
      as={as}
      data-testid={props["data-testid"]}
      className={className}
      gap={sanitizedGap}
      rowGap={sanitizedRowGap}
      columnGap={sanitizedColumnGap}
      template={sanitizeTemplate}
      columns={sanitizedColumns}
      rows={sanitizedRows}
      flow={flow}
      alignContent={alignContent}
      alignItems={alignItems}
      justifyContent={justifyContent}
      justifyItems={justifyItems}
    >
      {props.children}
    </StyledGrid>
  );
};

export default Grid;
