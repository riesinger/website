import { cva } from "class-variance-authority";

interface Props {
  variant: "danger" | "info";
}

const calloutClasses = cva("rounded-md px-6 py-4", {
  variants: {
    variant: {
      danger: "bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200",
      info: "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200",
    },
  },
});

const Callout = ({ variant = "info", ...props }: Props) => (
  <div className={calloutClasses({ variant })} {...props} />
);

export default Callout;
