// components/projects.tsx
"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Project One",
    description: "Brief description of Project One...",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Brief description of Project Two...",
    link: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-12 px-4 max-w-5xl"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              className="text-blue-600 hover:underline"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
