import LimitWidth from "@/components/LimitWidth";
import PostLinkList from "@/components/PostLinkList";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import { PostType } from "../../models/Post";

let year = 0;

const angleBrackets = /[<>]/g;

function sanitize(tag: string) {
  return tag.replace(angleBrackets, "").toLowerCase();
}

const TagPage = ({
  posts,
  tag,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <Layout header footer>
      <LimitWidth>
        <section className="mt-8">
          <h1>Posts for tag &quot;{sanitize(tag)}&quot;</h1>
          <PostLinkList posts={posts} />
        </section>
      </LimitWidth>
    </Layout>
  );
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);
  const tags = new Set(posts.map((post) => post.tags || []).flat());

  return {
    paths: Array.from(tags).map((tag) => ({
      params: {
        tag: tag.toLowerCase(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params?.tag instanceof Array) {
      return { notFound: true };
    }
    const tag = sanitize(params?.tag ?? "");
    const allPosts = await getAllFilesFrontMatter(PostType.BLOGPOST);
    const postsForTag = allPosts.filter((post) =>
      post.tags?.map((t) => t.toLowerCase())?.includes(tag)
    );

    return { props: { posts: postsForTag, tag } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};
