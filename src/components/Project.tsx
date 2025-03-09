import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@components/Icons";
import IProject from "@/interfaces/project";

const Project: React.FC<IProject> = ({
  id,
  title,
  type,
  imagen,
  date,
  link,
  tools,
  demo,
  github
}) => {
  const FramerImage = motion(Image);

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
        <div
          className={`flex w-full items-center ${
            demo !== "" ? "justify-between" : "justify-end"
          }`}
        >
          {demo !== "" && (
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
          )}
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

export default Project;
