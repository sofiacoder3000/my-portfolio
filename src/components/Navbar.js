import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  MediumIcon,
  DevIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="background-grid background-grid--fade-out w-full flex items-center justify-between px-56 pt-10 pb-8 font-medium dark:text-light
    xl:px-24 lg:px-16 relative z-10 md:px-12 sm:px-8
    "
    >
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex z-9"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About" />
          <CustomLink className="mx-4" href="/projects" title="Projects" />
          <CustomLink className="ml-4" href="/articles" title="Articles" />
        </nav>
        <nav
          className="flex items-center justify-center flex-wrap lg:mt-2
      "
        >
          {/* <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://github.com/sofiacoder3000"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my GitHub profile"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://www.linkedin.com/in/sofiacoder3000/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my LinkedIn profile"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3 bg-light rounded-full"
            href="https://medium.com/@sofiacoder3000"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my Medium profile"
          >
            <MediumIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://dev.to/sofiacoder3000"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my Dev.to profile"
          >
            <DevIcon />
          </motion.a> */}

          {/* <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://dev.to/sofiacoder3000"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="My Dev.to profile"
          ></motion.a> */}

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-7 h-7 ease ml-9 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] h-[75vh] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md
      "
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              toggle={handleClick}
              className="mr-4 lg:m-0 lg:my-2"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/articles"
              title="Articles"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/contact"
              title="Contact"
            />
          </nav>
          <nav
            className="flex items-center justify-center  mt-2
      "
          >
            <motion.a
              target={"_blank"}
              className="w-6 mx-3"
              href="https://github.com/sofiacoder3000"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Github profile"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 mx-3"
              href="https://www.linkedin.com/in/sofiacoder3000/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Github profile"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full"
              href="https://medium.com/@sofiacoder3000"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Medium profile"
            >
              <MediumIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="w-6 mx-3"
              href="https://dev.to/sofiacoder3000"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Dev.to profile"
            >
              <DevIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="w-6 mx-3"
              href="https://dev.to/sofiacoder3000"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="My Dev.to profile"
            ></motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo mode={mode} />
      </div>
    </header>
  );
};

export default Navbar;