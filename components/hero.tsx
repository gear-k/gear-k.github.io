// components/hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center  py-12"
    >
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m <span className="text-blue-600">Gearoid</span>
      </motion.h1>
      <motion.p
        className="text-xl text-center text-gray-500 mb-8 pt-5 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I&apos;m a student from Ngee Ann Polytechnic studying Information
        Technology. I&apos;m passionate about web development and I enjoy
        building web applications.
      </motion.p>

      {/* Single container for both icons and the download resume button */}
      <motion.div
        className="flex items-center gap-8 justify-center mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/gear-k"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Github className="h-6 w-6 text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/gearoidkor"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white" />
          </a>
        </div>

        {/* Download Resume Button */}
        <Button asChild className="rounded-xl text-md px-6 py-7">
          <a href="/resume.pdf" download className="flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
