import { Feed } from "feed";
import fs from "fs/promises";
import path from "path";
import { PostType } from "../models/Post";
import siteConfig from "../siteConfig";
import { getAllFilesFrontMatter } from "./mdx";

const date = new Date();

export async function generateFeeds() {
  const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    image: `${siteConfig}/android-chrome-512x512.png`,
    favicon: `${siteConfig}/favicon-32x32.png`,
    copyright: `CC BY 4.0 - ${siteConfig.author}`,
    updated: date,
    generator: "",
    feedLinks: {
      rss2: `${siteConfig.url}/feeds/feed.xml`,
      json: `${siteConfig.url}/feeds/feed.json`,
      atom: `${siteConfig.url}/feeds/atom.xml`,
    },
    author: {
      link: siteConfig.url,
      name: siteConfig.author,
    },
  });

  posts.forEach((post) => {
    // Remove trailing slash from siteConfig.url, if present
    const url = `${siteConfig.url.replace(/[/]$/, "")}/posts/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.subtitle,
      author: [
        {
          name: siteConfig.author,
        },
      ],
      date: new Date(post.date),
    });
  });

  await fs.mkdir(path.resolve("./public", "feeds"), {
    recursive: true,
  });

  await fs.writeFile(
    path.resolve("./public", "feeds", "feed.xml"),
    feed.rss2()
  );
  await fs.writeFile(
    path.resolve("./public", "feeds", "feed.json"),
    feed.json1()
  );
  await fs.writeFile(
    path.resolve("./public", "feeds", "atom.xml"),
    feed.atom1()
  );
}

generateFeeds().then().catch(console.error);
