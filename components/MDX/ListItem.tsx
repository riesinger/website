import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const StyledIcon = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
`;

export const ListItem = (props: PropsWithChildren<HTMLLIElement>) => {
  return (
    <li>
      <span data-arrow>
        <StyledIcon
          className="w-6 h-6"
          fill="none"
          stroke="var(--riesinger-colors-brand)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </StyledIcon>
      </span>
      <div>{props.children}</div>
    </li>
  );
};
