import Head from "next/head";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import TypeWriter from 'typewriter-effect';
import { useState } from "react";
import faqih from "../public/faqih.webp";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import project1 from "../public/project1.png"
import project2 from "../public/project2.png"
import project3 from "../public/project3.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>M Faqih Fitrokhudin S | Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="CV .pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              M Faqih Fitrokhudin S
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            <TypeWriter
              options={{
                strings:[
                  "Fullstack Web Developer",
                  "Software Engineer"
                ],
                changeDelay: 3,
                changeDeleteSpeed: 2,
                autoStart: true,
                loop: true,
              }}/>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              It's difficult for sure, but nothing is impossible if we try hard and diligently.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/faqihcyber27"><AiOutlineGithub /></a>
              <a href="https://www.linkedin.com/in/m-faqih-fitrokhudin-s-2a0545304//"><AiFillLinkedin /></a>
              <a href="https://wa.me/+6282138024643"><AiOutlineWhatsApp /></a>
              <a href="mailto:jihadwajib68@gmail.com"><AiOutlineMail /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={faqih} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a fullstack web developer, I've done a number of jobs and collaborated with talented people to create digital products for business and consumer use.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Framework Frontend
              </h3>
              <p className="py-2">
                supporting tools to make it easier to work on the frontend.
              </p>
              <h4 className="py-4 text-teal-600">Frontend Tools I Use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
              <p className="text-gray-800 py-1">BootstrapCSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Framework Backend
              </h3>
              <p className="py-2">
                supporting tools to make it easier to work on the backend.
              </p>
              <h4 className="py-4 text-teal-600">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">ExpressJS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Project Support</h3>
              <p className="py-2">
                supporting tools to make it easier to work on fullstack projects.
              </p>
              <h4 className="py-4 text-teal-600">Support Tools I Use</h4>
              <p className="text-gray-800 py-1">Visual Code Studio</p>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Vercel</p>
              <p className="text-gray-800 py-1">Xcode</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a fullstack web developer, I've done a number of jobs and collaborated with talented people to create digital products for business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://app-chat-three.vercel.app/"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project1}
              /></a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.kalihcoffeetegal.shop"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project2}
              /></a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://client-mrg.vercel.app"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project3}
              /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
