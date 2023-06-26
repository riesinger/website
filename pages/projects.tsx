import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project as IProject } from "models/Project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <LimitWidth>
        <h1 className="text-2xl mb-12 leading-tight text-gray-900 dark:text-gray-100 mt-8 font-bold">
          My projects
        </h1>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="mb-36 block"
          >
            <section>
              <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-1 font-bold">
                {project.name}
              </h2>
              <p className="max-w-prose leading-normal mb-4">
                {project.description}
              </p>
              <div className="rounded-lg overflow-hidden mb-8 cursor-pointer">
                <Image
                  src={`/projects/${project.image.filename}`}
                  width={project.image.width}
                  height={project.image.height}
                  alt=""
                />
              </div>
            </section>
          </Link>
        ))}
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
