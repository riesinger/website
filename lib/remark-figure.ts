import { visit } from "unist-util-visit";

const replace = (source) => ({
  with: (target) => {
    for (let property in source) {
      if (!target.hasOwnProperty(property)) delete source[property];
    }
    Object.assign(source, target);
  },
});

const transform = (tree: import("mdast").Root) => {
  visit(tree, "image", (node, index, parent) => {
    if (!node.alt) return;

    const figure = {
      type: "figure",
      children: [
        {
          type: "image",
          url: node.url,
          title: null,
          alt: node.alt,
          position: node.position,
        },
        {
          type: "mdxJsxFlowElement",
          name: "figcaption",
          children: [
            {
              type: "text",
              value: node.alt,
            },
          ],
        },
      ],
      data: {
        hName: "figure",
      },
    };

    replace(parent).with(figure);
  });
};
export const remarkFigure = () => {
  return transform;
};
