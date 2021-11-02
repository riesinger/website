// MDX only components
import Blockquote from "./Blockquote";
import Callout from "./Callout";
import Code from "./Code";
import InlineCode from "./InlineCode";
import { ListItem } from "./ListItem";
import NextImageWwrapper from "./NextImageWrapper";

const MDXComponents = {
  blockquote: Blockquote,
  Callout,
  pre: Code,
  inlineCode: InlineCode,
  li: ListItem,
  img: NextImageWwrapper,
};

export default MDXComponents;
