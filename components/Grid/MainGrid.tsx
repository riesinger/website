import styled from "@emotion/styled";
import Grid from ".";
import { GridProps } from "./Grid";

const StyledMainGrid = styled(Grid)`
  padding-top: 96px;

  > :not(.fullbleed) {
    grid-column: 2;
  }
`;

export const MainGrid = (props: GridProps) => (
  <StyledMainGrid
    columns="var(--layout-medium)"
    columnGap={20}
    rowGap={100}
    {...props}
  />
);
