// components/contact.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto py-12 px-4 max-w-3xl text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Whether you have a question or just want to say hi, I’ll try my best
        to get back to you!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button>
          <a href="mailto:youremail@example.com">Say Hello</a>
        </Button>
      </motion.div>
    </section>
  )
}
