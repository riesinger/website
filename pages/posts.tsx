import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Grid, { MainGrid } from "components/Grid";
import { motion } from "framer-motion";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import { PostType } from "../models/Post";

const TitleWithBackground = styled("h2")<{ background: string }>`
  color: var(--riesinger-colors-typeface-primary);
  margin-bottom: 0px !important;
  letter-spacing: -0.02em;
  margin-block-end: 0px;
  background: ${(p) => p.background};
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const UnstyledLink = styled.a`
  text-decoration: none;
  color: var(--riesinger-colors-typeface-secondary);
`;

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

let year = 0;

const Posts = ({
  posts,
  featured,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <MainGrid>
        <section>
          <h2>Featured</h2>
          <List as="ul">
            {featured.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
              >
                <Link href={`/posts/${post.slug}`} passHref>
                  <UnstyledLink>
                    <Card depth={1}>
                      <Card.Body>
                        <TitleWithBackground background={post.colorFeatured!}>
                          {post.title}
                        </TitleWithBackground>
                        <p>{post.subtitle}</p>
                      </Card.Body>
                    </Card>
                  </UnstyledLink>
                </Link>
              </motion.li>
            ))}
          </List>
        </section>
        <section>
          <h2>All posts</h2>
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
      </MainGrid>
    </Layout>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);
  const featured = [...posts].filter((post) => post.featured);
  return { props: { posts, featured } };
};
