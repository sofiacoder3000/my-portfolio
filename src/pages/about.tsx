import Layout from "@components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "@images/profile/developer.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@components/Skills";
import AnimatedText from "@components/AnimatedText";
import TransitionEffect from "@components/TransitionEffect";
import { HireMe2 } from "@components/HireMe2";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About NexTemp</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16 background-grid background-grid--fade-out">
          <AnimatedText
            text="With nearly a decade of active development experience 👩‍💻"
            className="!text-2xl !leading-tight mb-8 lg:!text-1xl sm:!text-1xl xs:!text-1xl sm:mb-8"
          />

          <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-16 sm:gap-8 items-center">
            <div className="flex flex-col items-start justify-start md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                I’m Jakeline Campos, a developer with over 9 years of
                experience. My main role is as a{" "}
                <strong>senior backend developer</strong> in Node.js, however, I
                have also worked as a frontend developer with React.js and
                mobile developer with React Native. I have also participated in
                infrastructure-as-code solutions using Serverless Framework and
                Terraform.
              </p>
              <p className="my-4 font-medium">
                Currently, I am working at Acid Labs Uruguay as a Level 5
                software developer for over two years. I am part of the team
                responsible for maintaining a picking app for one of our clients
                (its data is confidential).
              </p>
              <p className="my-4 font-medium">
                P.S. I’m a big fan of coffee and love traveling ✌️.
              </p>
            </div>
            <div className="relative h-max rounded-2xl bg-light dark:bg-dark md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl" />
              <Image
                className="h-auto w-full rounded-2xl "
                priority={true}
                src={profile}
                alt="Jakeline Campos"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>

          <Skills />
          {/* <Experience /> */}
        </Layout>
        <HireMe2 />
      </main>
    </>
  );
}
