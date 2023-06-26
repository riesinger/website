import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, PartyPopper, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout header footer>
      <LimitWidth>
        <section className="flex items-stretch justify-center flex-col my-8 max-w-2xl mx-auto lg:my-24 box-border">
          <h1 className="text-3xl leading-tight mb-10 text-gray-900 dark:text-gray-100 font-bold">
            Hello{" "}
            <motion.div
              className="inline-block"
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
            </motion.div>{" "}
            I&apos;m Pascal, a full-stack developer 👨‍💻 self-hosting enthusiast
            🚀 and home-automation tinkerer 🤓 living in Karlsruhe 🇩🇪
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="mailto:hi@riesinger.dev"
              className="inline-flex items-center hover:text-lime-600 hover:dark:text-lime-400"
            >
              <Mail className="w-4 h-4 mr-2" />
              hi@riesinger.dev
            </Link>
            <Link
              href="https://github.com/riesinger"
              className="inline-flex items-center hover:text-lime-600 hover:dark:text-lime-400"
            >
              <Github className="w-4 h-4 mr-2" />
              riesinger
            </Link>
            <span className="inline-flex items-center">
              <PartyPopper className="w-4 h-4 mr-2" />
              @riesinger@techhub.social
            </span>
            <Link
              href="https://www.linkedin.com/in/pascal-riesinger/"
              className="inline-flex items-center hover:text-lime-600 hover:dark:text-lime-400"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/pascalriesinger"
              className="inline-flex items-center hover:text-lime-600 hover:dark:text-lime-400"
            >
              <Twitter className="w-4 h-4 mr-2" />
              @pascalriesinger
            </Link>
          </div>
        </section>
        <section id="about-me" className="mx-auto max-w-2xl prose">
          <h2>About me</h2>
          <p>
            I got into programming basic Windows Batch scripts in my early teens
            and remember feeling thrilled when I created my first number
            guessing game. Wanting to develop something more advanced, I
            followed tutorials coding a simple side-scrolling{" "}
            <a href="https://github.com/riesinger/zombalypse">
              jump&apos;n&apos;run game
            </a>{" "}
            with Java 2D graphics. However, I quickly realized that
            software-rendered graphics are too slow and therefore I learned some{" "}
            <a href="https://github.com/riesinger/glow">OpenGL and C++</a>.
            Unfortunately, that project never was finished (you know how it is
            😉).
          </p>
          <p>
            During my last year of school, I worked for a small company called
            SP Consulting and re-designed and their website, which really got me
            into web development.
          </p>
          <p>
            Between school and university, I started a project with 3 of my
            friends which unfortunately ultimately failed. However, I&apos;ve
            learned much from the project, including backend programming in Go,
            database management and containerization with Docker.
          </p>
          <p>
            After school, I enrolled in a cooperative study program to get my
            bachelor&apos;s in computer science. While studying at DHBW
            Karlsruhe, I worked in multiple departments within SAP, both as a
            frontend developer as well as a backend developer. Since I finished
            my bachelor&apos;s degree in 2020, I&apos;m now a full-time employee
            at SAP, mostly working on backend services in Go and Kotlin.
          </p>
        </section>
      </LimitWidth>
    </Layout>
  );
}
