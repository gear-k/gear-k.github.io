// components/about.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import { BsFiletypeSql } from 'react-icons/bs'

const techStack = {
  languages: [
    {
      label: 'JavaScript',
      icon: SiJavascript,
      color: 'text-yellow-500',
      url: 'https://www.javascript.com/',
    },
    {
      label: 'Python',
      icon: SiPython,
      color: 'text-blue-600',
      url: 'https://www.python.org/',
    },
    {
      label: 'C++',
      icon: SiCplusplus,
      color: 'text-blue-700',
      url: 'https://isocpp.org/',
    },
    {
      label: 'C#',
      icon: TbBrandCSharp,
      color: 'text-green-600',
      url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      label: 'Java',
      icon: FaJava,
      color: 'text-red-600',
      url: 'https://www.java.com/',
    },
  ],
  webDevelopment: [
    {
      label: 'React',
      icon: SiReact,
      color: 'text-blue-400',
      url: 'https://reactjs.org/',
    },
    {
      label: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-black dark:text-white',
      url: 'https://nextjs.org/',
    },
    {
      label: 'HTML5',
      icon: SiHtml5,
      color: 'text-orange-600',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    },
    {
      label: 'CSS3',
      icon: SiCss3,
      color: 'text-blue-600',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      label: 'Bootstrap',
      icon: SiBootstrap,
      color: 'text-purple-600',
      url: 'https://getbootstrap.com/',
    },
    {
      label: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-teal-500',
      url: 'https://tailwindcss.com/',
    },
  ],
  backend: [
    {
      label: 'Node.js',
      icon: SiNodedotjs,
      color: 'text-green-500',
      url: 'https://nodejs.org/',
    },
    {
      label: '.NET',
      icon: SiDotnet,
      color: 'text-purple-600',
      url: 'https://dotnet.microsoft.com/',
    },
    {
      label: 'MS SQL Server',
      icon: BsFiletypeSql,
      color: 'text-red-600',
      url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    },
    {
      label: 'MongoDB',
      icon: SiMongodb,
      color: 'text-green-700',
      url: 'https://www.mongodb.com/',
    },
    {
      label: 'Firebase',
      icon: SiFirebase,
      color: 'text-yellow-500',
      url: 'https://firebase.google.com/',
    },
  ],
}

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-12 px-4 max-w-3xl text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I&apos;m Gearoid—a passionate Information Technology student at Ngee
        Ann Polytechnic with a deep love for web development. My time at school
        has equipped me with valuable front-end and back-end skills, allowing me
        to transform creative ideas into intuitive, user-friendly digital
        experiences. Whether I&apos;m coding a new feature, refining a UI, or
        exploring the latest tech trends, I&apos;m always eager to learn and
        grow in this ever-evolving field. Alongside my academic journey,
        I&apos;ve also developed several projects that showcase my commitment
        and proficiency in building impactful web applications.
      </motion.p>

      {/* Tech Stack Section */}
      <motion.div
        className="mt-8 p-8" // Increased padding here
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Languages */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold p-4">Languages</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.languages.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Link
                  key={index}
                  href={tech.url}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Icon className={`${tech.color} text-5xl`} />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Web Development */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold p-4">Web Development</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.webDevelopment.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Link
                  key={index}
                  href={tech.url}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Icon className={`${tech.color} text-5xl`} />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Backend & Databases */}
        <div>
          <h4 className="text-xl font-semibold p-4">Backend & Databases</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.backend.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Link
                  key={index}
                  href={tech.url}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Icon className={`${tech.color} text-5xl`} />
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
