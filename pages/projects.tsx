import styled from "@emotion/styled";
import { MainGrid } from "components/Grid";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project as IProject } from "models/Project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
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
      <MainGrid rowGap={96}>
        <h1>My projects</h1>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <Project>
              <ProjectImage>
                <Image
                  src={`/projects/${project.image.filename}`}
                  layout="responsive"
                  width={project.image.width}
                  height={project.image.height}
                />
              </ProjectImage>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </Project>
          </Link>
        ))}
        <Project>
          <Link href="/projects/nononsensecooking">
            <ProjectImage>
              <Image
                src="/projects/nononsensecooking.png"
                layout="responsive"
                width="1200"
                height="855"
              />
            </ProjectImage>
          </Link>
          <ProjectTitle>NoNonsense.cooking</ProjectTitle>
          <ProjectDescription>
            A no-nonsense recipe website hosting my favorite easy-to-cook
            recipes.
          </ProjectDescription>
        </Project>
        <Project>
          <Link href="/projects/paper-tracker">
            <ProjectImage>
              <Image
                src="/projects/paper-tracker.png"
                layout="responsive"
                width="1200"
                height="655"
              />
            </ProjectImage>
          </Link>
          <ProjectTitle>Paper Tracker</ProjectTitle>
          <ProjectDescription>
            A system for tracking the location and workflow of documents. This
            was a university project.
          </ProjectDescription>
        </Project>
        <Project>
          <Link href="/projects/8051-connect-four">
            <ProjectImage>
              <Image
                src="/projects/8051-connect-four.png"
                layout="responsive"
                width="1200"
                height="855"
              />
            </ProjectImage>
          </Link>
          <ProjectTitle>8051 Connect Four</ProjectTitle>
          <ProjectDescription>
            Connect Four implemented on a 8051 microprocessor with a keypad as
            input and an LED matrix as output. This was a university project.
          </ProjectDescription>
        </Project>
      </MainGrid>
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
