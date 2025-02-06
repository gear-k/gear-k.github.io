// components/about.tsx
"use client"

import { motion } from "framer-motion"

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
        className="text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I&apos;m a software engineer with a passion for building amazing web
        applications. I enjoy working with modern technologies like Next.js,
        React, TailwindCSS, and more.
      </motion.p>
    </section>
  )
}
