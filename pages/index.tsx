import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "components/Button";
import Grid, { MainGrid } from "components/Grid";
import { TwitterIcon } from "components/icons";
import Layout from "components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1ch;
  margin-top: 3rem;
`;

const Hero = styled.section`
  min-height: 650px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 2rem 0;
`;

const TwitterLink = styled.a`
  margin-left: auto;
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

const Tweety = styled(TwitterIcon)`
  width: 1rem;
  height: 1rem;
  margin-left: 1ch;
`;

export default function Home() {
  return (
    <Layout header footer>
      <MainGrid>
        <Hero>
          <h1>
            <span
              style={{ color: "var(--riesinger-colors-typeface-secondary)" }}
            >
              Hello{" "}
              <motion.div
                css={css`
                  display: inline-block;
                `}
                transition={{
                  delay: 0.5,
                  ease: "easeInOut",
                  type: "tween",
                  repeat: 7,
                  repeatType: "mirror",
                  duration: 0.2,
                }}
                animate={{ rotate: 20 }}
              >
                👋
              </motion.div>
            </span>{" "}
            I&apos;m Pascal, a full-stack developer 👨‍💻 self-hosting enthusiast
            🚀 and home-automation tinkerer 🤓 living in Karlsruhe 🇩🇪
          </h1>
          <ButtonContainer>
            <Link href="/posts" passHref>
              <Button primary>Blog</Button>
            </Link>
            <Link href="#about-me" passHref>
              <Button secondary>About me</Button>
            </Link>
            <TwitterLink href="https://twitter.com/pascalriesinger">
              <Button tertiary>
                @pascalriesinger <Tweety />
              </Button>
            </TwitterLink>
          </ButtonContainer>
        </Hero>
        <AboutSection id="about-me" className="fullbleed">
          <Grid
            columns="var(--layout-medium)"
            columnGap={20}
            rowGap={0}
            css={css`
              padding-top: 48px;
              padding-bottom: 48px;
              > * {
                grid-column: 2;
              }
            `}
          >
            <h2>About me</h2>
            <AboutMeGrid>
              <div>
                <p>
                  I got into programming basic Windows Batch scripts in my early
                  teens and remember feeling thrilled when I created my first
                  number guessing game. Wanting to develop something more
                  advanced, I followed tutorials coding a simple side-scrolling{" "}
                  <a href="https://github.com/riesinger/zombalypse">
                    jump&apos;n&apos;run game
                  </a>{" "}
                  with Java 2D graphics. However, I quickly realized that
                  software-rendered graphics are too slow and therefore I
                  learned some{" "}
                  <a href="https://github.com/riesinger/glow">OpenGL and C++</a>
                  . Unfortunately, that project never was finished (you know how
                  it is 😉).
                </p>
                <p>
                  During my last year of school, I worked for a small company
                  called SP Consulting and re-designed and their website, which
                  really got me into web development.
                </p>
              </div>
              <div>
                <p>
                  Between school and university, I started a project with 3 of
                  my friends which unfortunately ultimately failed. However,
                  I&apos;ve learned much from the project, including backend
                  programming in Go, database management and containerization
                  with Docker.
                </p>
                <p>
                  After school, I enrolled in a cooperative study program to get
                  my bachelor&apos;s in computer science. While studying at DHBW
                  Karlsruhe, I worked in multiple departments within SAP, both
                  as a frontend developer as well as a backend developer. Since
                  I finished my bachelor&apos;s degree in 2020, I&apos;m now a
                  full-time employee at SAP, mostly working on backend services
                  in Go and Kotlin.
                </p>
              </div>
            </AboutMeGrid>
          </Grid>
        </AboutSection>
        <section>
          <h2>Contact</h2>
          <p>Want to get in touch?</p>
          <p>
            Write me an <a href="mailto:hi@riesinger.dev">email</a> or{" "}
            <a href="https://twitter.com/messages/compose?recipient_id=2820089835">
              DM me on Twitter
            </a>
          </p>
        </section>
      </MainGrid>
    </Layout>
  );
}
