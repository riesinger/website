import styled from "@emotion/styled";
import Box from "components/Box";
import { Button } from "components/Button";
import { MainGrid } from "components/Grid";
import Layout from "components/layout/Layout";
import fs from "fs/promises";
import { Project } from "models/Project";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const ProjectImage = styled.div`
  border-radius: var(--border-radius-2);
  overflow: hidden;
  margin-bottom: 2.5rem;
`;

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout header footer>
      <MainGrid>
        <section>
          <h1>{project.name}</h1>
          <ProjectImage>
            <Image
              src={`/projects/${project.image.filename}`}
              layout="responsive"
              width={project.image.width}
              height={project.image.height}
            />
          </ProjectImage>
          <p>{project.longDescription || project.description}</p>
          <p>
            <Box gap={20}>
              {project.links.map((link) => (
                <Link href={link.url} passHref key={link.url}>
                  <Button
                    primary={link.variant === "primary"}
                    secondary={link.variant === "secondary"}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </p>
          <h2>Stack</h2>
          <ul>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        {project.development ? (
          <section>
            <h2>Personal development</h2>
            <p>{project.development}</p>
          </section>
        ) : null}
      </MainGrid>
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
