import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";
import Link from "next/link";

function NotFound() {
  return (
    <Layout header footer>
      <LimitWidth>
        <section className="prose dark:prose-invert mt-8">
          <h1>Looks like you took a wrong turn</h1>
          <p>
            Unfortunately, the page you were looking for doesn&apos;t exist. You
            can head back to the <Link href="/">homepage</Link>, read some of my{" "}
            <Link href="/posts/">blog posts</Link> or{" "}
            <a href="mailto:hi@riesinger.dev"> send me an email</a> or{" "}
            <a href="https://github.com/riesinger/website">
              open an issue on GitHub
            </a>{" "}
            in case you think this page should exist.
          </p>
        </section>
      </LimitWidth>
    </Layout>
  );
}

export default NotFound;
