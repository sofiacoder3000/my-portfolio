import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const FramerImage = motion(Image);

interface MovingImageProps {
  title: string;
  image: string;
  link: string;
}

export const MovingImage: React.FC<MovingImageProps> = ({
  title,
  image,
  link
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
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
        src={image}
        ref={imageRef}
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
  );
};
