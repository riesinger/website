import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import readingTime from "reading-time";
import { FrontMatterPostType, PostByType, PostType } from "../models/Post";
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

// TODO: Think about generating slugs from file names automatically, so that we don't need to provide the slug attribute in posts
export const getFileBySlug = async <T extends PostType>(
  type: T,
  slug: string
): Promise<FrontMatterPostType<T>> => {
  const source = fs.readFileSync(
    path.join(root, typeToPath[type], `${slug}.mdx`),
    "utf8"
  );

  const parsedFile = matter(source);

  const data = parsedFile.data;
  const content = parsedFile.content;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // remarkSlug,
        // remarkAutolinkHeadings,
        // remarkSectionize,
        remarkFigure,
      ],
    },
  });

  if (type === PostType.BLOGPOST) {
    // TODO: maybe we want to extract this in its own lib?
    /**
     * Find all occurrence of <StaticTweet id="NUMERIC_TWEET_ID"/>
     * in the content of the MDX blog post
     */
    const tweetMatch = content.match(TWEET_RE);

    /**
     * For all occurrences / matches, extract the id portion of the
     * string, i.e. anything matching the regex /[0-9]+/g
     *
     * tweetIDs then becomes an array of string where each string is
     * the id of a tweet.
     * These IDs are then passed to the getTweets function to be fetched from
     * the Twitter API.
     */
    const tweetIDs = tweetMatch?.map((mdxTweet) => {
      const id = mdxTweet.match(/[0-9]+/g)![0];
      return id;
    });

    const result = {
      mdxSource,
      tweetIDs: tweetIDs || [],
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
    files.map(
      async (postSlug) =>
        await fs.promises.readFile(path.join(root, typeToPath[type], postSlug))
    )
  );

  const posts = postSources
    .map((source) => matter(source))
    .map((parsedFile) => parsedFile.data as PostByType<T>)
    .filter((post) => (includeDrafts ? true : !post.draft))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
