import Link from "next/link";
import { ReactNode } from "react";
import { Post, ReadingTime } from "../../models/Post";
import LimitWidth from "../LimitWidth";
import { Seo } from "../Seo";
import Layout from "./Layout";

type BlogLayoutProps = {
  frontMatter: Post & { readingTime: ReadingTime };
  children: ReactNode;
};

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

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
      <LimitWidth>
        <header className="pt-16">
          <h1 className="text-2xl text-gray-900 dark:text-gray-100 tracking-tight leading-snug">
            {frontMatter.title}
          </h1>
          <div className="flex items-center mb-12 text-gray-600 dark:text-gray-400 text-xs gap-[1ch] flex-wrap">
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
                {frontMatter.tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase()}`}
                    className="rounded bg-gray-200 dark:bg-gray-800 text-lime-600 dark:text-lime-400 py-1 px-2 font-normal"
                  >
                    {tag}
                  </Link>
                ))}
              </>
            ) : null}
          </div>
        </header>
        <main className="prose prose-gray dark:prose-invert prose-figcaption:text-center prose-pre:bg-[#0d1117]">
          {children}
        </main>
        <footer className="py-4 text-gray-600 dark:text-gray-400">
          <div>
            <p>Thanks for reading, have a great day 🙂</p>
          </div>
          <div>
            Found an issue or have a suggestion?{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/riesinger/website/issues"
              className="cursor-pointer text-lime-600 dark:text-lime-400"
            >
              Open an issue on GitHub
            </a>
          </div>
          <div>
            Want to get notified about new posts?{" "}
            <Link
              href="/feeds"
              className="cursor-pointer text-lime-600 dark:text-lime-400"
            >
              Subscribe to my RSS feed
            </Link>
          </div>
        </footer>
      </LimitWidth>
    </Layout>
  );
};

export default BlogLayout;
