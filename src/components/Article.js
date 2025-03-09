import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { MovingImage } from "../pages/projects/components/MovingImage";

export const Article = ({
  image,
  title,
  date,
  link,
  className = "", // Asegurar que className no sea undefined
  ...props
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className={`relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
        bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light ${className}`}
      {...props} // Asegurar que otros props sean pasados correctamente
    >
      <MovingImage image={image} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
        sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};
