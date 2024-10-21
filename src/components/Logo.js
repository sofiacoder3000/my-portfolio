import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoDark from "@images/logo-dark.png";
import logoLight from "@images/logo-light.png";

let MotionLink = motion(Link);

const Logo = ({ mode }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-30 h-30 md:w-20 md:h-16 .dark:bg-dark  text-white dark:border-1 dark:border-solid dark:border-dark"
      >
        <Image
          priority={false}
          src={mode === "dark" ? logoDark : logoLight}
          alt="Logo dark"
          className="sm:w-full object-contain rounded-full py-2 px-2"
          height={120}
          width={120}
          sizes="12vw"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
