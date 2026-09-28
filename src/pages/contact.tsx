import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "@components/Layout";
import Head from "next/head";
import AnimatedText from "@components/AnimatedText";
import TransitionEffect from "@components/TransitionEffect";

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(
  /\D/g,
  ""
);
const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL?.trim();

export default function About() {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    message: ""
  });
  const message = formData.message.trim();
  const whatsappUrl = whatsappPhone
    ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message !== "" ? message : "Hello, I'm coming from your portfolio website.")}`
    : undefined;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Portfolio Contact\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const destination = `mailto:${myEmail}?subject=${encodeURIComponent(
      `Portfolio contact from ${formData.name}`
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = destination;
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="My Portfolio, Get in touch with me" />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Begin Today,
I'm One Message Away 👋"
            className="!text-2xl !leading-tight mb-16 lg:!text-1xl sm:!text-1xl xs:!text-1xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-2 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl bg-light p-6 dark:bg-dark xs:p-4">
            <div className="flex flex-col items-start justify-start md:order-1">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                What’s Next?
              </h2>

              <div className="w-full"></div>
              <p className="">
                My inbox is always open. Whether you have a question or just
                want to say hello, I'll try my best to get back to you! Feel
                free to message me about any relevant project updates.
              </p>
            </div>
            <div className="relative h-max md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl bg-light p-6 dark:bg-dark xs:p-4 shadow-2xl">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form name="contact-form" onSubmit={handleSubmit}>
                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark dark:text-light">
                        Your Name:
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                        Your Email:
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark/75 dark:text-light/75"
                      >
                        Message:
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows={4}
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <button
                        type="submit"
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light dark:hover:bg-dark dark:text-dark dark:hover:text-light"
                      >
                        Open email draft
                      </button>
                    </div>
                  </form>

                  <div
                    className="my-2 flex items-center gap-3 px-2"
                    aria-hidden="true"
                  >
                    <span className="h-px flex-1 bg-dark/20 dark:bg-light/20" />
                    <span className="text-sm text-dark/60 dark:text-light/60">
                      OR
                    </span>
                    <span className="h-px flex-1 bg-dark/20 dark:bg-light/20" />
                  </div>
                  <div className="p-2">
                    {whatsappUrl ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md border-2 border-green-600 bg-green-600 px-4 py-2 font-bold text-white hover:bg-transparent hover:text-green-700"
                      >
                        Contact via WhatsApp
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="rounded-md border-2 border-green-600 bg-green-600 px-4 py-2 font-bold text-white opacity-50"
                      >
                        Contact via WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
