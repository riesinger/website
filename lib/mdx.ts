import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import readingTime from "reading-time";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { FrontMatterPostType, PostByType, PostType } from "../models/Post";
import imageMetadata from "./rehype-image-metadata";
import { remarkFigure } from "./remark-figure";

const typeToPath = {
  [PostType.BLOGPOST]: "posts",
  [PostType.SNIPPET]: "snippets",
};

const root = path.join(process.cwd(), "content");

export const getFiles = async (type: PostType) => {
  return fs.readdirSync(path.join(root, typeToPath[type]));
};

// Regex to find all the custom static tweets in a MDX file
const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export const readFile = (type: PostType, name: string) => {
  return fs.readFileSync(path.join(root, typeToPath[type], name));
};

export const getFileBySlug = async <T extends PostType>(
  type: T,
  slug: string
): Promise<FrontMatterPostType<T>> => {
  const source = fs.readFileSync(
    path.join(root, typeToPath[type], `${slug}.mdx`),
    "utf8"
  );

  const parsedFile = matter(source);

  const data = {
    ...parsedFile.data,
    slug,
  } as PostByType<T>;
  const content = parsedFile.content;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // remarkSlug,
        // remarkAutolinkHeadings,
        // remarkSectionize,
        remarkGfm,
        remarkFigure,
      ],
      rehypePlugins: [imageMetadata(data.slug), rehypeHighlight],
    },
  });

  if (type === PostType.BLOGPOST) {
    const result = {
      mdxSource,
      frontMatter: {
        draft: data.draft || false,
        readingTime: readingTime(content),
        ...data,
      },
    };

    return result as unknown as FrontMatterPostType<T>;
  }

  return {
    mdxSource,
    frontMatter: data,
  } as unknown as FrontMatterPostType<T>;
};

export const getAllFilesFrontMatter = async <T extends PostType>(
  type: T,
  includeDrafts = false
): Promise<Array<PostByType<T>>> => {
  const files = fs.readdirSync(path.join(root, typeToPath[type]));

  const postSources = await Promise.all(
    files.map(async (filename) => ({
      filename,
      content: await fs.promises.readFile(
        path.join(root, typeToPath[type], filename)
      ),
    }))
  );

  const posts = postSources
    .map(({ filename, content }) => ({ filename, content: matter(content) }))
    .map(({ filename, content }) => ({
      filename,
      post: content.data as PostByType<T>,
    }))
    .map(({ filename, post }) => ({
      ...post,
      slug: filename.replace(/.mdx?/, ""),
    }))
    .filter((post) => (includeDrafts ? true : !post.draft))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
