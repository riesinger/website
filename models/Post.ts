import { MDXRemoteSerializeResult } from "next-mdx-remote";

export enum PostType {
  SNIPPET = "snippet",
  BLOGPOST = "blogPost",
}

export type ReadingTime = {
  text: string;
};

export type Post = {
  colorFeatured?: string;
  date: string;
  updated: string;
  featured?: boolean;
  tags?: string[];
  slug: string;
  subtitle: string;
  title: string;
  type: PostType.BLOGPOST;
  draft?: boolean;
};

export type FrontMatterPost = {
  frontMatter: Post & {
    readingTime: ReadingTime;
  };
  tweetIDs: string[];
  mdxSource: MDXRemoteSerializeResult;
};

export type Snippet = {
  date: string;
  language: string;
  slug: string;
  title: string;
  description: string;
  snippetImage: string;
  type: PostType.SNIPPET;
  draft?: boolean;
};

export type FrontMatterSnippet = {
  frontMatter: Snippet;
  mdxSource: MDXRemoteSerializeResult;
};

export type PostByType<T> = T extends PostType.BLOGPOST ? Post : Snippet;

export type FrontMatterPostType<T> = T extends PostType.BLOGPOST
  ? FrontMatterPost
  : FrontMatterSnippet;
