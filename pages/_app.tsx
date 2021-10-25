import { DefaultSeo } from "components/Seo";
import "../styles/globals.css";
import "../styles/typography.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
