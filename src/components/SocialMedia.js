import { motion } from "framer-motion";
import {
  MediumIcon,
  DevIcon,
  GithubIcon,
  LinkedInIcon
} from "@components/Icons";

const SectionSocialMedia = () => {
  return (
    <div
      className="flex items-center justify-center flex-wrap lg:mt-2
        "
    >
      <motion.a
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
      </motion.a>
    </div>
  );
};

export default SectionSocialMedia;
