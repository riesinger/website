// Thanks to https://kylepfromer.com/blog/nextjs-image-component-blog for donating this piece of code

// https://github.com/JS-DevTools/rehype-inline-svg/blob/master/src/inline-svg.ts

import imageSize from "image-size";
import path from "path";
import { Processor } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import { promisify } from "util";
import { VFile } from "vfile";

const sizeOf = promisify(imageSize);

/**
 * An `<img>` HAST node
 */
interface ImageNode extends Node {
  type: "element";
  tagName: "img";
  properties: {
    src: string;
    height?: number;
    width?: number;
  };
}

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode;

  return (
    img.type === "element" &&
    img.tagName === "img" &&
    img.properties &&
    typeof img.properties.src === "string"
  );
}

/**
 * Returns true when a given path is absolute, meaning that it starts with a slash
 */
function isAbsolutePath(path: string): boolean {
  return path.startsWith("/");
}

/**
 * Adds the image's `height` and `width` to it's properties.
 */
async function addMetadata(node: ImageNode, slug: string): Promise<void> {
  if (!isAbsolutePath(node.properties.src)) {
    // TODO: this needs to support snippets/projects (other post types)
    node.properties.src = `/posts/${slug}/${node.properties.src}`;
  }
  const res = await sizeOf(
    path.join(process.cwd(), "public", node.properties.src)
  );

  if (!res) throw Error(`Invalid image with src "${node.properties.src}"`);
  node.properties.width = res.width;
  node.properties.height = res.height;
}

/**
 * This is a Rehype plugin that finds image `<img>` elements and adds the height and width to the properties.
 * Read more about Next.js image: https://nextjs.org/docs/api-reference/next/image#layout
 */
export default function imageMetadata(slug: string) {
  return function (this: Processor) {
    return async function transformer(tree: Node, file: VFile): Promise<Node> {
      const imgNodes: ImageNode[] = [];

      visit(tree, "element", (node) => {
        if (isImageNode(node)) {
          imgNodes.push(node);
        }
      });

      for (const node of imgNodes) {
        await addMetadata(node, slug);
      }

      return tree;
    };
  };
}
