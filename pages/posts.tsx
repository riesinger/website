import LimitWidth from "@/components/LimitWidth";
import PostLinkList from "@/components/PostLinkList";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Post, PostType } from "@/models/Post";
import { cva } from "class-variance-authority";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const featuredTitleProps = cva(
  "text-gray-900 dark:text-gray-100 mb-0 tracking-tight bg-gradient-to-tr bg-clip-text [-moz-text-fill-color:transparent] [-webkit-text-fill-color:transparent]",
  {
    variants: {
      colorScheme: {
        blueViolet: "from-cyan-500 via-violet-500 to-pink-500",
        greenBlue: "from-green-500 via-cyan-500 to-blue-500",
        redViolet: "from-rose-500 via-fuchsia-500 to-violet-500",
      },
    },
  }
);

const Posts = ({
  posts,
  featured,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <LimitWidth>
        <section className="mt-8">
          <h2 className="text-2xl mb-12 leading-tight text-gray-900 dark:text-gray-100">
            Featured
          </h2>
          <ul className="list-none ml-0 space-y-6">
            {featured.map((post, i) => (
              <li key={post.title}>
                <Link href={`/posts/${post.slug}`}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm px-6 py-8 border-2 dark:border-gray-800">
                    <h2
                      className={featuredTitleProps({
                        colorScheme: post.colorFeatured,
                      })}
                    >
                      {post.title}
                    </h2>
                    <p className="leading-normal">{post.subtitle}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>All posts</h2>
          <PostLinkList posts={posts} />
        </section>
      </LimitWidth>
    </Layout>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await getAllFilesFrontMatter(PostType.BLOGPOST);
  const featured: Post[] = [...posts].filter((post) => post.featured);
  return { props: { posts, featured } };
};
