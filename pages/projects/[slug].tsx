import LimitWidth from "@/components/LimitWidth";
import { Button } from "@/components/ui/button";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project } from "models/Project";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import path from "path";

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <LimitWidth>
        <section className="mt-8">
          <h1 className="text-2xl mb-12 leading-tight text-gray-900 dark:text-gray-100 font-bold">
            {project.name}
          </h1>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src={`/projects/${project.image.filename}`}
              width={project.image.width}
              height={project.image.height}
              alt=""
            />
          </div>
          <p className="max-w-prose leading-relaxed mb-12">
            {project.longDescription || project.description}
          </p>
          <section className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-12">
            {project.links.map((link) => (
              <Button
                key={link.url}
                asChild
                variant={link.variant === "primary" ? "default" : "secondary"}
              >
                <Link href={link.url}>{link.name}</Link>
              </Button>
            ))}
          </section>
          <h2 className="text-xl mb-6 leading-tight text-gray-900 dark:text-gray-100">
            Stack
          </h2>
          <ul className="list-disc ml-4 mb-12">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        {project.development ? (
          <section>
            <h2 className="text-xl mb-6 leading-tight text-gray-900 dark:text-gray-100">
              Personal development
            </h2>
            <p className="max-w-prose leading-relaxed">{project.development}</p>
          </section>
        ) : null}
      </LimitWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: Move this to a file in lib/ and potentially add some file-format validation
  const file = path.join(path.resolve(process.cwd()), "projects.json");
  const data = await fs.readFile(file);
  const { projects } = JSON.parse(data.toString());

  return {
    paths: projects.map((project: Project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const file = path.join(path.resolve(process.cwd()), "projects.json");
  const data = await fs.readFile(file);
  const { projects } = JSON.parse(data.toString());

  const project: Project = projects.find(
    (project: Project) => project.slug === slug
  );

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
