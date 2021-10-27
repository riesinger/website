import styled from "@emotion/styled";
import React, { ReactNode } from "react";
interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  white?: boolean;
  danger?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => any;
}

const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  margin: 0;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  padding: 0 30px;
  border-radius: var(--border-radius-1);
  transition: transform 0.15s ease-in-out;

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid var(--riesinger-colors-brand);
    background-color: var(--riesinger-colors-foreground);
  }

  ${(p) =>
    p.primary
      ? `
      background-color: var(--riesinger-colors-brand);
      color: hsla(var(--palette-gray-00), 100%);
      min-width: 150px;

  ${
    p.danger
      ? `
        background-color: var(--riesinger-colors-danger);
            `
      : ""
  }
  
  ${
    p.disabled
      ? `
      cursor: not-allowed;
      opacity: 0.5;
      background-color: var(--riesinger-colors-typeface-secondary);
      color: #000000;
      &:hover {
        transform: none;
      }
        `
      : ""
  }
  
      `
      : ""};

  ${(p) =>
    p.secondary
      ? `
      background-color: transparent;
      color: var(--riesinger-colors-brand);
      border: 2px solid var(--riesinger-colors-brand);
      min-width: 150px;

  ${
    p.danger
      ? `
          color: var(--riesinger-colors-danger);
          border-color: var(--riesinger-colors-danger);
        `
      : ""
  }

  ${
    p.disabled
      ? `
      cursor: not-allowed;
      opacity: 0.5;
      color: var(--riesinger-colors-typeface-secondary);
      border-color: var(--riesinger-colors-typeface-secondary);
      &:hover {
        transform: none;
      }
        `
      : ""
  }

      `
      : ""};

  ${(p) =>
    p.tertiary
      ? `
      background-color: transparent;
      color: var(--riesinger-colors-brand);
      min-width: inherited;
      padding: 0px;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 96%;
        left: 0;
        right: 0;
        height: 2px;
        background-color: var(--riesinger-colors-brand);
        transform: scaleX(0);
        transition: transform 0.25s ease-in;
        transform-origin: right center;
        text-decoration: none;
      }
    
      &:hover::after {
        transform: scale(1);
        transform-origin: left center;
      }

      ${
        p.danger
          ? `
              color: var(--riesinger-colors-danger);
              ::after { 
                background-color: var(--riesinger-colors-danger);
              }
            `
          : ""
      }

      ${
        p.disabled
          ? `
              opacity: 0.5;
              cursor: not-allowed;
              color: var(--riesinger-colors-typeface-secondary);
              ::after { 
                background-color: var(--riesinger-colors-typeface-secondary);
              }
            `
          : ""
      }
          `
      : ""};

  ${({ tertiary }) =>
    !tertiary
      ? `
  &:hover {
    transform: scale(1.02);
  }`
      : ""}
`;

const Button = React.forwardRef(
  ({ children, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
