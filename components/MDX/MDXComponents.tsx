// MDX only components
import type { MDXRemoteProps } from "next-mdx-remote";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import Callout from "./Callout";
import NextImageWrapper from "./NextImageWrapper";

const RandomColorButton = dynamic(() => import("./custom/RandomColorButton"));

const MDXComponents = {
  Callout,
  img: NextImageWrapper,
  RandomColorButton,
  a: NextLink,
  Link: NextLink,
};

export default MDXComponents as unknown as MDXRemoteProps["components"];
