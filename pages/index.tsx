import LimitWidth from "@/components/LimitWidth";
import Layout from "components/layout/Layout";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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
              className="inline-flex items-center hover:text-indigo-600 hover:dark:text-indigo-400"
            >
              <Mail className="w-4 h-4 mr-2" />
              hi@riesinger.dev
            </Link>
            <Link
              href="https://github.com/riesinger"
              className="inline-flex items-center hover:text-indigo-600 hover:dark:text-indigo-400"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="GitHub"
                className="w-4 h-4 mr-2"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              riesinger
            </Link>
            <Link
              href="https://techhub.social/@riesinger"
              className="inline-flex items-center hover:text-indigo-600 hover:dark:text-indigo-400"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Mastodon"
                className="w-4 h-4 mr-2"
                fill="currentColor"
              >
                <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
              </svg>
              @riesinger@techhub.social
            </Link>
            <Link
              href="https://www.linkedin.com/in/pascal-riesinger/"
              className="inline-flex items-center hover:text-indigo-600 hover:dark:text-indigo-400"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="LinkedIn"
                className="w-4 h-4 mr-2"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/pascalriesinger"
              className="inline-flex items-center hover:text-indigo-600 hover:dark:text-indigo-400"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Twitter"
                className="w-4 h-4 mr-2"
                fill="currentColor"
              >
                <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
              </svg>
              @pascalriesinger
            </Link>
          </div>
        </section>
        <section
          id="about-me"
          className="mx-auto max-w-2xl prose dark:prose-invert"
        >
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
