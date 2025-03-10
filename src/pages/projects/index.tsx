import React from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "@components/AnimatedText";
import Layout from "@components/Layout";
import HireMe2 from "@components/HireMe2";
import TransitionEffect from "@components/TransitionEffect";
import Project from "../../components/Project";
import appTaskManager from "@images/projects/app-task-manager02.png";
import lightPortfolio from "@images/projects/portfolio-light.png";
import darkPortfolio from "@images/projects/portfolio-dark.png";
import listasYPerfiles from "@images/projects/listas-y-perfiles.png";
import blogPrueba from "@images/projects/blog-prueba.png";
import IProject from "@/interfaces/project";

const PROJECTS_DATA: IProject[] = [
  {
    id: "1",
    type: "Design & Mobile Development",
    tools: "React Native | Typescript | SQLite",
    title: "Task Manager App",
    imagen: appTaskManager,
    date: "2024",
    link: "",
    demo: "",
    github: "https://github.com/sofiacoder3000/tasks-manager-react-native"
  },
  {
    id: "2",
    type: "Design & Development",
    tools: "HTML | CSS | JavaScript | NextJS | TailwindCSS",
    title: "Light Portfolio Personal",
    imagen: lightPortfolio,
    date: "2023",
    link: "",
    demo: "https://portfolio-jakeline-campos.vercel.app/",
    github: "https://github.com/sofiacoder3000/my-portfolio"
  },
  {
    id: "3",
    type: "Design & Development",
    tools: "HTML | CSS | JavaScript | NextJS | TailwindCSS",
    title: "Dark Portfolio Personal",
    imagen: darkPortfolio,
    date: "2023",
    link: "",
    demo: "https://portfolio-jakeline-campos.vercel.app/",
    github: "https://github.com/sofiacoder3000/my-portfolio"
  },
  {
    id: "4",
    type: "Front End",
    tools: "HTML | CSS | JavaScript | ReactJS | WebPack",
    title: "Lists and Profile Detail",
    imagen: listasYPerfiles,
    date: "2023",
    link: "",
    demo: "https://dreamcode.vercel.app/",
    github: "https://github.com/sofiacoder3000/dreamcode-challenge"
  },
  {
    id: "5",
    type: "Front End",
    tools: "HTML | CSS | JavaScript | NextJS | ReactJS | WebPack",
    title: "Basic Blog",
    imagen: blogPrueba,
    date: "2023",
    link: "",
    demo: "https://nextjs-blog-one-gilt.vercel.app/",
    github: "https://github.com/sofiacoder3000/nextjs-blog"
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | By NexTemp</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16 background-grid background-grid--fade-out ">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="!text-2xl !leading-tight mb-8 lg:!text-1xl sm:!text-1xl xs:!text-1xl sm:mb-8"
          />
          <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0">
            {PROJECTS_DATA.map((_project, index) => (
              <Project
                key={`project_${_project.id}`}
                id={_project.id}
                type={_project.type}
                tools={_project.tools}
                title={_project.title}
                imagen={_project.imagen}
                date={_project.date}
                link={_project.link}
                demo={_project.demo}
                github={_project.github}
              />
            ))}
          </div>

          <div className="pt-16">
            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/articles/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                View Articles
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
          </div>
        </Layout>
        <HireMe2 />
      </main>
    </>
  );
}
