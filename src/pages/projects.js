import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import lightPortfolio from "../../public/images/projects/portfolio-light.png";
import darkPortfolio from "../../public/images/projects/portfolio-dark.png";
import listasYPerfiles from "../../public/images/projects/listas-y-perfiles.png";
import blogPrueba from "../../public/images/projects/blog-prueba.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools, demo, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-slate-800
      xs:p-4
      "
    >
      {/* <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      /> */}

      <Link
        href={demo}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        {/* <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span> */}
        <span className="text-l font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        {/* <Link href={link} className="underline-offset-2 hover:underline"> */}
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
          {title}
        </h2>
        {/* </Link> */}
        <div className="flex w-full items-center  justify-between">
          <Link
            href={demo}
            className="rounded-lg
             bg-dark mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            Demo
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="github link"
          >
            {" "}
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

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
            <div className="">
              <Project
                type="Design & Development"
                tools="HTML | CSS | JavaScript | NextJS | TailwindCSS"
                title="Light Portfolio Personal"
                img={lightPortfolio}
                date="2023"
                link=""
                demo="https://portfolio-jakeline-campos.vercel.app/"
                github="https://github.com/sofiacoder3000/my-portfolio"
              />
            </div>
            <div className="">
              <Project
                type="Design & Development"
                tools="HTML | CSS | JavaScript | NextJS | TailwindCSS"
                title="Dark Portfolio Personal"
                img={darkPortfolio}
                date="2023"
                link=""
                demo="https://portfolio-jakeline-campos.vercel.app/"
                github="https://github.com/sofiacoder3000/my-portfolio"
              />
            </div>
            <div className="">
              <Project
                type="Front End"
                tools="HTML | CSS | JavaScript | ReactJS | WebPack"
                title="Lists and Profile Detail"
                img={listasYPerfiles}
                date="2023"
                link=""
                demo="https://dreamcode.vercel.app/"
                github="https://github.com/sofiacoder3000/dreamcode-challenge"
              />
            </div>
            <div className="">
              <Project
                type="Front End"
                tools="HTML | CSS | JavaScript | NextJS | ReactJS | WebPack"
                title="Basic Blog"
                img={blogPrueba}
                date="2023"
                link=""
                demo="https://nextjs-blog-one-gilt.vercel.app/"
                github="https://github.com/sofiacoder3000/nextjs-blog"
              />
            </div>
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
