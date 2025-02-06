// components/hero.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[80vh] py-12"
    >
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m <span className="text-blue-600">Your Name</span>
      </motion.h1>
      <motion.p
        className="text-xl text-center text-gray-600 mb-8 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I’m a software developer specialized in building (and occasionally
        designing) exceptional digital experiences.
      </motion.p>

      <motion.div
        className="flex gap-4 justify-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Social Icons using Lucide */}
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <Github className="h-6 w-6 hover:text-gray-700" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-6 w-6 hover:text-blue-700" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <Twitter className="h-6 w-6 hover:text-blue-500" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button asChild>
          <a href="#projects">View My Work</a>
        </Button>
      </motion.div>
    </section>
  )
}
