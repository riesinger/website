import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project as IProject } from "models/Project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import path from "path";

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <LimitWidth>
        <article className="prose dark:prose-invert mt-8">
          <h1>Hochzeitsbilder Kerstin & HP</h1>
          <p>
            Leider sind die Bilder noch nicht verfügbar. Bitte überprüfe diese
            Seite später noch einmal.
          </p>
          <p>
            Wenn du selbst Bilder gemacht hast, die du teilen möchtest, kannst
            du sie bis zum 15.09.2024{" "}
            <Link
              href="https://link.riesinger.dev/oh5lx"
              className="text-blue-600"
            >
              hier
            </Link>{" "}
            hochladen.
          </p>
          <p>
            Falls du eine Email bekommen möchtest, wenn die Bilder verfügbar
            sind, trage dich doch bis zum 15.09.2024 in{" "}
            <Link
              href="https://link.riesinger.dev/DUsMw"
              className="text-blue-600"
            >
              diese Liste
            </Link>{" "}
            ein.
          </p>
        </article>
      </LimitWidth>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const file = path.join(path.resolve(process.cwd()), "projects.json");
  const content = await fs.readFile(file);
  const { projects } = JSON.parse(content.toString());

  return {
    props: {
      projects: projects as IProject[],
    },
  };
};

export default Projects;
