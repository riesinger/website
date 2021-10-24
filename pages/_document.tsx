import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=2"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=2"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=2"
          />
          <link rel="manifest" href="/site.webmanifest?v=2" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=2"
            color="#0e52f1"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=2" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#16181d" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
