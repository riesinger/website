/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "../../components/Grid";
import Layout from "../../components/layout/Layout";
import { PostType } from "../../models/Post";

let year = 0;

function sanitize(tag: string) {
  return tag.replaceAll(/[<>]/, "").toLowerCase();
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
      <Grid
        columns="var(--layout-medium)"
        columnGap={20}
        rowGap={100}
        css={css`
          > * {
            padding-top: 120px;
            grid-column: 2;
          }
        `}
      >
        <section>
          <h2>Posts for tag &quot;{sanitize(tag)}&quot;</h2>
          <List as="ol" rowGap={4}>
            {posts.map((post) => {
              const currentYear = new Date(post.date).getFullYear();
              let printYear = currentYear !== year;
              year = currentYear;

              return (
                <li key={post.slug} data-testid="article-item">
                  {printYear ? <YearBlock>{currentYear}</YearBlock> : null}
                  <Link href={`/posts/${post.slug}/`}>
                    <a
                      css={css`
                        text-decoration: none;
                      `}
                    >
                      <Block data-testid="article-link">
                        <DateBlock>
                          {new Intl.DateTimeFormat(
                            "en-US",
                            DATE_OPTIONS
                          ).format(new Date(post.date))}
                        </DateBlock>
                        <TitleBlock>{post.title}</TitleBlock>
                      </Block>
                    </a>
                  </Link>
                </li>
              );
            })}
          </List>
        </section>
      </Grid>
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
    if (params!.tag instanceof Array) {
      return { notFound: true };
    }
    const tag = sanitize(params!.tag);
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

const List = styled(Grid)`
  margin-left: 0px;
  margin-bottom: 0px;

  li {
    list-style: none;
    cursor: pointer;
  }

  h3 {
    color: var(--riesinger-colors-typeface-primary);
  }
`;

const Block = styled("div")`
  @media (max-width: 700px) {
    height: 100px;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  border-radius: var(--border-radius-2);
  margin-left: -10px;

  height: 60px;
  box-shadow: none;

  color: var(--riesinger-colors-typeface-primary);
  transition: background-color 0.25s, box-shadow 0.25s, color 0.25s;

  &:hover {
    background-color: var(--riesinger-colors-foreground);
    box-shadow: var(--riesinger-shadow-1);
    color: var(--riesinger-colors-brand);
  }
`;

const YearBlock = styled("div")`
  padding: 30px 0px;
  font-weight: 600;
`;

const DateBlock = styled("div")`
  font-size: 14px;
  font-weight: 500;
  color: var(--riesinger-colors-typeface-tertiary);
  min-width: 50px;
  margin-right: 32px;
`;

const TitleBlock = styled("div")`
  font-weight: 500;
`;

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};
