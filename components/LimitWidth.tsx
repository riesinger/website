import { twMerge } from "tailwind-merge";

interface Props {
  noPadding?: boolean;
  children: React.ReactNode;
}

function LimitWidth({ noPadding = false, children }: Props) {
  const classes = twMerge("px-8 max-w-2xl mx-auto", noPadding && "px-0");
  return <div className={classes}>{children}</div>;
}

export default LimitWidth;
