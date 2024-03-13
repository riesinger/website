import MDXComponents from "components/MDX/MDXComponents";
import "highlight.js/styles/github-dark.css";
import { getFileBySlug, getFiles } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import BlogLayout from "../../components/layout/BlogLayout";
import { FrontMatterPost, PostType } from "../../models/Post";

interface BlogProps {
  post?: FrontMatterPost;
  ogImage: string;
  tweets: Record<string, any>; // TODO: write types for tweets
}

const Blog = ({ post, ogImage, tweets }: BlogProps) => {
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <BlogLayout frontMatter={post.frontMatter}>
      <MDXRemote
        {...post.mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles(PostType.BLOGPOST);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(PostType.BLOGPOST, params!.slug as string);

    return { props: { post } };
  } catch (error) {
    if ("code" in error && error.code === "ENOENT") {
      return { notFound: true };
    }
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};
