import { motion, useMotionValue } from "framer-motion";
import { ForwardedRef, forwardRef, MouseEvent } from "react";
import { Tooltip } from "../Tooltip";
import { LinkButton } from "./LinkButton";

interface Props {
  onClick?: (event: MouseEvent) => void;
  href?: string;
}

export const BlogButton = forwardRef((props: Props, ref) => {
  const { onClick } = props;
  const duration = 0.7;

  const pathLength = useMotionValue(0);

  return (
    <Tooltip
      id="blogTooltip"
      tooltipText="Visit my blog"
      tooltipVisuallyHiddenText={`Navigates to my blog page, listing all blog posts`}
    >
      <LinkButton
        data-testid="blog-button"
        title="Blog"
        aria-describedby="blogTooltip"
        initial={true}
        whileHover="hover"
        whileTap="pressed"
        transition={{ duration }}
        onClick={(event) => onClick(event)}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            stroke="var(--riesinger-colors-typeface-tertiary)"
            transition={{ duration }}
            style={{ pathLength }}
            animate={{ pathLength: 1 }}
          />
        </motion.svg>
      </LinkButton>
    </Tooltip>
  );
});

BlogButton.displayName = "BlogButton";
