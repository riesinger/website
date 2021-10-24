import { motion, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Tooltip } from "../Tooltip";
import { LinkButton } from "./LinkButton";

interface Props {
  onClick: (event: MouseEvent) => void;
}

export const WorkButton = (props: Props) => {
  const { onClick } = props;
  const duration = 0.7;

  const pathLength = useMotionValue(0);

  return (
    <Tooltip
      id="workTooltip"
      tooltipText="My work and projects"
      tooltipVisuallyHiddenText={`Navigates to my work page, showcasing past and current projects`}
    >
      <LinkButton
        data-testid="work-button"
        title="Work"
        aria-describedby="workTooltip"
        onClick={(event) => {
          onClick(event);
        }}
        initial={true}
        whileHover="hover"
        whileTap="pressed"
        transition={{ duration }}
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            stroke="var(--riesinger-colors-typeface-tertiary)"
            transition={{ duration }}
            style={{ pathLength }}
            animate={{ pathLength: 1 }}
          />
        </motion.svg>
      </LinkButton>
    </Tooltip>
  );
};
