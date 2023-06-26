import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";

export default function Feeds() {
  return (
    <Layout header footer>
      <LimitWidth>
        <section className="mt-8 prose">
          <h1>Feeds</h1>
          <section>
            <p>
              If you want to stay in the loop and get notified about new posts,
              the best option is to subscribe with a feed reader app. I provide
              multiple feed formats for maximum compatibility.
            </p>
            <p>
              Most feed readers should be compatible with RSS, so you might want
              to try that one first 🙂
            </p>
            <ul>
              <li>
                <a href="/feeds/feed.xml">RSS2 feed</a>
              </li>
              <li>
                <a href="/feeds/feed.json">JSON feed</a>
              </li>
              <li>
                <a href="/feeds/atom.xml">Atom feed</a>
              </li>
            </ul>
          </section>
        </section>
      </LimitWidth>
    </Layout>
  );
}
