import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);

export const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
      dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
          -z-10  "
      />
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
           dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
          xs:rounded-[1.5rem]  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full max-h-80 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};
