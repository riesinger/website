// MDX only components
import dynamic from "next/dynamic";
import Blockquote from "./Blockquote";
import Callout from "./Callout";
import Code from "./Code";
import InlineCode from "./InlineCode";
import { ListItem } from "./ListItem";
import NextImageWwrapper from "./NextImageWrapper";

const RandomColorButton = dynamic(() => import("./custom/RandomColorButton"));

const MDXComponents = {
  blockquote: Blockquote,
  Callout,
  pre: Code,
  inlineCode: InlineCode,
  li: ListItem,
  img: NextImageWwrapper,
  RandomColorButton,
};

export default MDXComponents;
