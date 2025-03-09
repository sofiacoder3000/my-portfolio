import HireMe from "@components/HireMe";
import Layout from "@components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@components/TransitionEffect";
import SectionSocialMedia from "@components/SocialMedia";
import profilePicture from "@images/profile/developer.png";
import LoveYouGesture from "@images/love-you-gesture.webp";

const SectionItemsResume = () => {
  return (
    <ul className="pb-4">
      <li className="py-2 hover:-translate-y-0.5 transition ease delay-250 hover:transition-all">
        <span className="pr-2" aria-label="cheese" role="img">
          ☕
        </span>{" "}
        fueled by coffee
      </li>
      <li className="py-2 hover:-translate-y-0.5 transition ease delay-250 hover:transition-all">
        <span className="pr-2" aria-label="cheese" role="img">
          💼
        </span>{" "}
        Systems Engineer V at Acid Labs UV
      </li>
      <li className="py-2 hover:-translate-y-0.5 transition ease delay-250 hover:transition-all">
        <span className="pr-2" aria-label="cheese" role="img">
          📧
        </span>{" "}
        jcamposcabello@gmail.com
      </li>
    </ul>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakeline Campos's Porfolio</title>
        <meta
          name="description"
          content="Next Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="background-grid background-grid--fade-out !pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePicture}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center md:pt-10 sm:pt-6">
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:w-full">
                <span className="capitalize !text-3xl xl:!text-2xl lg:!text-2xl md:!text-3xl sm:!text-1xl">
                  Hi,
                </span>
                <Image
                  priority={false}
                  src={LoveYouGesture}
                  alt="Love-you Gesture"
                  className="w-8 md:w-8 animate-meeting"
                  height={48}
                  width={48}
                  sizes="5vw"
                />
              </div>
              <div
                className="py-2 w-full mx-auto flex flex-col justify-center text-center  
    overflow-hidden sm:py-0"
              >
                <span
                  className="!text-left !text-6xl xl:!text-5xl lg:!text-center !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
                  // style="opacity: 1; transform: none;"
                >
                  I'm{" "}
                  <strong className="text-indigo-600 dark:text-indigo-500">
                    Jakeline
                  </strong>{" "}
                  Campos,{" "}
                </span>
              </div>

              {/* <AnimatedText
                text="I’m Jakeline Campos"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              /> */}
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h1 className="my-4 text-base font-light md:text-sm sm:!text-sm">
                  <span className="lowercase">A</span>{" "}
                  <strong className="font-bold lowercase text-slate-700 dark:text-slate-300">
                    Software Engineer,
                  </strong>{" "}
                  backend developer senior in Node JS, who loves programming
                  with good practices and clean code.
                  {/* </span> */}
                </h1>
              </div>
              {/* <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <SectionItemsResume />
              </div> */}
              <div className="flex pt-3 pb-6 w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <SectionSocialMedia />
              </div>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Porfolio
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
      <HireMe />
    </>
  );
}
