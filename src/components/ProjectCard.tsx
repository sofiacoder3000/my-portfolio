import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, GooglePlayIcon, AppleStoreIcon } from "@components/Icons";
import IProject from "@/interfaces/project";

const ProjectCard: React.FC<IProject> = ({
  title,
  type,
  imagen,
  date,
  link,
  tools,
  demo,
  playStoreUrl,
  appleStoreUrl,
  github
}) => {
  // const {
  //   title,
  //   type,
  //   imagen,
  //   date,
  //   link,
  //   tools,
  //   demo,
  //   playStoreUrl,
  //   appleStoreUrl,
  //   github
  // } = project;
  const FramerImage = motion(Image);

  const hasDemo = demo !== "" || !!playStoreUrl || !!appleStoreUrl;

  return (
    <article
      className="relative flex h-full w-full flex-col items-center rounded-2xl  rounded-br-2xl 
        border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-slate-800
        xs:p-4"
    >
      {/* <div
          className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
           dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
          xs:rounded-[1.5rem]"
        /> */}

      <Link
        href={demo !== "" ? demo : link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={imagen}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-1 flex-col items-start justify-between gap-y-4">
        <div>
          <p className="text-xs font-light text-primary dark:text-light lg:text-lg md:text-base">
            {type}
          </p>
          <p className="text-l font-medium text-primaryDark dark:text-primaryDark xs:text-base">
            {tools}
          </p>

          {/* <Link href={link} className="underline-offset-2 hover:underline"> */}
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">
            {title}
          </h2>
        </div>

        {/* </Link> */}
        <div
          className={`flex w-full items-center gap-x-2 ${
            demo !== "" ? "justify-between" : "justify-end"
          }`}
        >
          {!!demo && (
            <Link
              href={demo}
              className="rounded-lg
               bg-dark px-6 py-2 text-base font-semibold
               sm:px-4 sm:text-sm rounded-lg border-2 border-solid bg-dark
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-md
              "
              aria-label={title}
            >
              Demo
            </Link>
          )}
          {!!playStoreUrl && (
            <Link
              href={playStoreUrl}
              target={"_blank"}
              className="p-2 rounded-full border-2 border-solid hover:transition hover:duration-200 hover:transform hover:scale-105 border-dark dark:border-light bg-transparent hover:bg- dark:bg-transparent dark:hover:bg-dark md:p-2 md:p-4"
              aria-label="play store link"
            >
              {" "}
              <GooglePlayIcon className="w-6" />
            </Link>
          )}
          {!!appleStoreUrl && (
            <Link
              href={appleStoreUrl}
              target={"_blank"}
              className="p-2 rounded-full border-2 border-solid hover:transition hover:duration-200 hover:transform hover:scale-105 border-dark dark:border-light bg-transparent hover:bg- dark:bg-transparent dark:hover:bg-dark md:p-2 md:p-4"
              aria-label="app store link"
            >
              <AppleStoreIcon className="w-6" />
            </Link>
          )}
          {!!github && (
            <Link
              href={github}
              target={"_blank"}
              className="w-8 hover:transition hover:duration-200 hover:transform hover:scale-105"
              aria-label="github link"
            >
              {" "}
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
