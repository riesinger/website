import { ReactNode } from "react";
import styled from "styled-components";
import { Post, ReadingTime } from "../../models/Post";
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
  margin-bottom: 1rem;
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
`;

const BlogLayout = ({ frontMatter, children }: BlogLayoutProps) => {
  return (
    <Layout header={true} footer={true}>
      <StyledArticle>
        <ArticleHeader>
          <ArticleTitle>{frontMatter.title}</ArticleTitle>
          <ArticleMetadata>
            <p>
              {new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(
                new Date(frontMatter.date)
              )}
            </p>
            <p>/</p>
            <p>{frontMatter.readingTime.text}</p>
            {frontMatter.updated !== frontMatter.date ? (
              <>
                <p>/</p>
                <p>
                  Last updated{" "}
                  {new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(
                    new Date(frontMatter.updated)
                  )}
                </p>
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
