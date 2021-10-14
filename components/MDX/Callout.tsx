import React from "react";
import styled from "styled-components";

export enum VARIANT {
  DANGER = "danger",
  INFO = "info",
}

interface Props {
  variant: VARIANT;
}

const Callout = (props: Props) => <StyledCallout {...props} />;

const variantColors = {
  [VARIANT.DANGER]: `
    background-color: var(--riesinger-colors-danger-emphasis);
    border-color: var(--riesinger-colors-danger);
    color: var(--riesinger-colors-typeface-primary);
    `,
  [VARIANT.INFO]: `
    background-color: var(--riesinger-colors-emphasis);
    border-color: var(--riesinger-colors-brand);
    color: var(--riesinger-colors-typeface-primary);
  `,
};

const StyledCallout = styled("div")<{ variant: VARIANT }>`
  @media (max-width: 700px) {
    /**
     * Make it fullbleed! 
     */
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    border-radius: 0px;
  }

  code {
    background: none;
  }

  border-radius: var(--border-radius-0);
  border-left: 3px solid;
  padding: 30px 30px;
  margin-bottom: 2.25rem;

  *:last-child {
    margin-bottom: 0px;
  }

  ${(p) => variantColors[p.variant]}
`;

export default Callout;
