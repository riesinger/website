import styled from "@emotion/styled";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project as IProject } from "models/Project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import path from "path";

const ProjectImage = styled.div`
  border-radius: var(--border-radius-2);
  overflow: hidden;
  margin-bottom: 2.25rem;
  cursor: pointer;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 0.25rem;
`;

const ProjectDescription = styled.p`
  color: var(--riesinger-colors-typeface-secondary);
`;

const Project = styled.article``;

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <h1>My projects</h1>
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.slug} passHref>
          <Project>
            <ProjectImage>
              <Image
                src={`/projects/${project.image.filename}`}
                layout="responsive"
                width={project.image.width}
                height={project.image.height}
                alt=""
              />
            </ProjectImage>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </Project>
        </Link>
      ))}
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
