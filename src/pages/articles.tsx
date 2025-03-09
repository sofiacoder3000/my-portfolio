import AnimatedText from "@components/AnimatedText";
import Head from "next/head";
import Layout from "@components/Layout";
import Link from "next/link";
import TransitionEffect from "@components/TransitionEffect";
import { HireMe2 } from "@components/HireMe2";

export default function Articles() {
  return (
    <>
      <Head>
        <title>Development Articles</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex min-h-screen flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Coming Soon! 👩‍💻"
            className="!text-4xl !leading-tight mb-16 lg:!text-3xl sm:!text-2xl xs:!text-1xl sm:mb-8"
          />

          <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
            <Link
              href="/about/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
            >
              Get To Know Me
            </Link>
            <Link
              href="/projects/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
            >
              View Projects
            </Link>
          </div>
          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}
