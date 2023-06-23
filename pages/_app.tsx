import { DefaultSeo } from "components/Seo";
import { ThemeProvider } from "components/ThemeProvider";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/typography.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="riesinger.dev"
          src="https://plausible.riesinger.dev/count.js"
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
