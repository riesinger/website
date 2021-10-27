import { css } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  id: string;
  tooltipText: string;
  tooltipVisuallyHiddenText?: string;
}

const Tooltip = (props: PropsWithChildren<Props>) => {
  const { children, id, tooltipText, tooltipVisuallyHiddenText } = props;
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const controls = useAnimation();

  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePosition = useCallback(
    (tooltipRef: React.RefObject<HTMLSpanElement>) => {
      const { current } = tooltipRef!;

      if (current) {
        const tooltipRect = current.getBoundingClientRect();
        if (tooltipRect.left < 0) {
          current.style.left = "0";
          current.style.right = "auto";
          current.style.transform = `translateX(${-tooltipRect.x - 40}px)`;
        } else if (tooltipRect.right > dimensions.width) {
          current.style.left = "auto";
          current.style.right = "0";
          current.style.transform = `translateX(${
            dimensions.width - tooltipRect.right + 40
          }px)`;
        }
      }
    },
    [dimensions]
  );

  const resetPosition = (tooltipRef: React.RefObject<HTMLSpanElement>) => {
    const { current } = tooltipRef!;

    if (current) {
      current.style.removeProperty("left");
      current.style.removeProperty("right");
      current.style.removeProperty("transform");
    }
  };

  const showTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.setAttribute("aria-hidden", "false");
      controls.start("hover");
      handlePosition(tooltipRef);
    }
  };

  function hideTooltip() {
    if (tooltipRef.current) {
      tooltipRef.current.setAttribute("aria-hidden", "true");
      controls.start("idle");
      resetPosition(tooltipRef);
    }
  }

  const tipVariants = {
    hover: {
      scale: 1,
      y: 6,
      opacity: 1,
    },
    idle: {
      scale: 0.95,
      y: 10,
      opacity: 0,
    },
  };

  return (
    <motion.div
      css={css`
        position: relative;
      `}
      initial="idle"
      animate={controls}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          hideTooltip();
          return false;
        }
      }}
    >
      {children}
      <motion.span
        id={id}
        aria-hidden={true}
        ref={tooltipRef}
        variants={tipVariants}
        transition={{
          delay: 0.15,
        }}
        css={css`
          color: hsla(var(--palette-gray-00));
          background: hsla(var(--palette-gray-75));
          box-shadow: var(--riesinger-shadow-2);
          border-radius: var(--border-radius-0);
          position: absolute;
          bottom: -60%;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          padding: 4px 10px;
          z-index: 5;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        `}
        role="tooltip"
      >
        {tooltipText}
        {/* FIXME: The visually hidden (accessible) text on Tooltips must be fixed */}
        {/* {tooltipVisuallyHiddenText ? (
          <VisuallyHidden as="p">{tooltipVisuallyHiddenText}</VisuallyHidden>
        ) : null} */}
      </motion.span>
    </motion.div>
  );
};

export default Tooltip;
