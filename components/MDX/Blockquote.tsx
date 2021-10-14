import { ReactNode } from "react";
import styled from "styled-components";

const StyledBlockquote = styled("blockquote")`
  transition: 0.5s;
  margin-top: 0px;
  margin-bottom: 2.25rem;
  color: var(--riesinger-colors-typeface-primary);
  font-style: italic;

  /**
   * Make it fullbleed! 
   */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  padding-top: 40px;
  padding-bottom: 40px;
  background: var(--riesinger-colors-emphasis);
  backdrop-filter: blur(6px);
  & > p {
    max-width: 880px !important;
    padding-left: 50px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    font-size: 27px;
    line-height: 1.6818;
    font-weight: 400;
  }
`;

interface Props {
  children: ReactNode;
}

const Blockquote = (props: Props) => <StyledBlockquote {...props} />;

export default Blockquote;
