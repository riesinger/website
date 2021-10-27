import styled from "@emotion/styled";
import Link from "next/link";
import { ReactNode } from "react";
import { Post, ReadingTime } from "../../models/Post";
import { Seo } from "../Seo";
import Layout from "./Layout";

type BlogLayoutProps = {
  frontMatter: Post & { readingTime: ReadingTime };
  children: ReactNode;
};

const StyledArticle = styled.article`
  padding: 0rem 1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ArticleHeader = styled.header`
  padding-top: 4rem;
`;

const ArticleTitle = styled.h1``;

const ArticleMetadata = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  color: var(--riesinger-colors-typeface-tertiary);
  font-weight: 500;
  font-size: 0.8rem;
  gap: 1ch;
  flex-wrap: wrap;
`;

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const StyledArticleContent = styled.main`
  color: var(--riesinger-colors-typeface-secondary);

  figure {
    margin-bottom: 2.25rem;
  }

  figcaption {
    font-size: 14px;
    text-align: left;
    line-height: 1.5;
    font-weight: 500;
    color: var(--riesinger-colors-typeface-tertiary);
    padding-top: 10px;
  }

  h2 {
    margin-top: 2em;
  }

  h3 {
    margin-top: 2em;
  }

  hr {
    height: 2px;
    width: 40%;
    margin: 50px auto;
    background-color: var(--riesinger-colors-typeface-primary);
  }

  ul {
    margin-left: 0px;
    li {
      list-style: none;
      display: flex;
      span[data-arrow] {
        padding-right: 8px;
        transform: translateY(4px);
      }
    }
  }

  ol {
    margin-left: 0px;
    list-style: none;
    li {
      counter-increment: li;
      display: flex;

      svg {
        display: none;
      }

      &:before {
        content: counters(li, ".") ". ";
        color: var(--riesinger-colors-brand);
        padding-right: 12px;
      }
    }
  }

  a {
    color: var(--riesinger-colors-brand);
    word-break: break-word;
  }

  twitter-widget {
    margin: 0 auto;
  }
`;

const TagLink = styled.a`
  border-radius: var(--border-radius-1);
  background-color: var(--riesinger-colors-emphasis);
  color: var(--riesinger-colors-brand);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 16px;
  font-weight: 400 !important;
  word-break: break-word;
  text-decoration: none;
  margin-right: 6px;
`;

const BlogLayout = ({ frontMatter, children }: BlogLayoutProps) => {
  const path = `/posts/${frontMatter.slug}/`;
  return (
    <Layout header={true} footer={true}>
      <Seo
        title={frontMatter.title}
        desc={frontMatter.subtitle}
        // image={ogImage}
        path={path}
        date={frontMatter.date}
        updated={frontMatter.updated}
      />
      <StyledArticle>
        <ArticleHeader>
          <ArticleTitle>{frontMatter.title}</ArticleTitle>
          <ArticleMetadata>
            <time>
              {new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(
                new Date(frontMatter.date)
              )}
            </time>
            <span>/</span>
            <span>{frontMatter.readingTime.text}</span>
            {frontMatter.updated && frontMatter.updated !== frontMatter.date ? (
              <>
                <span>/</span>
                <span>
                  Last updated{" "}
                  {new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(
                    new Date(frontMatter.updated)
                  )}
                </span>
              </>
            ) : null}
            {frontMatter.tags ? (
              <>
                <span>/</span>
                <div>
                  {frontMatter.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag.toLowerCase()}`}
                      passHref
                    >
                      <TagLink>{tag}</TagLink>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </ArticleMetadata>
        </ArticleHeader>
        <StyledArticleContent>{children}</StyledArticleContent>
        <footer></footer>
      </StyledArticle>
    </Layout>
  );
};

export default BlogLayout;
