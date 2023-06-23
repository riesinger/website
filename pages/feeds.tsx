/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Layout from "components/layout/Layout";

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1ch;
  margin-top: 3rem;
`;

const AboutSection = styled.div`
  background: var(--riesinger-colors-emphasis);
  grid-column: 1 / span 3;
`;

const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  column-gap: 2rem;
`;

export default function Feeds() {
  return (
    <Layout header footer>
      <h1>Feeds</h1>
      <section>
        <p>
          If you want to stay in the loop and get notified about new posts, the
          best option is to subscribe with a feed reader app. I provide multiple
          feed formats for maximum compatibility.
        </p>
        <p>
          Most feed readers should be compatible with RSS, so you might want to
          try that one first 🙂
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
    </Layout>
  );
}
