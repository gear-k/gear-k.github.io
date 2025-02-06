'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Front-End Project',
    description:
      'This was my very first front-end project. An E-Commerce Store utilizing HTML, CSS, and JavaScript.',
    link: 'https://github.com/gear-k/FEDAssignment1',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Back-End Project',
    description: 'A course creation project utilizing Node.js and Express.',
    link: 'https://github.com/COMET-C275/BED2024Apr_P07_T07',
    technologies: [
      'Node.js',
      'Express',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
  },
  {
    title: 'Full-Stack Project',
    description:
      'Farm sustainability tracker with recommendations and progress monitoring using React, Next.js, Node.js, and MongoDB.',
    link: 'https://github.com/Liojn/FSDP',
    technologies: [
      'Node.js',
      'Express',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'MongoDB',
    ],
  },
  {
    title: 'Mobile App Project',
    description: 'A Fitness App that tracks your workout and health',
    link: 'https://github.com/cedricongjx/-MAD24_-P02-_-TEAM_5-',
    technologies: ['Java', 'Firebase', 'Android Studio'],
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-12 px-4 max-w-5xl">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Ensure grid items stretch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-full" // make motion div fill the grid cell
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="flex flex-col h-full items-center justify-between">
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="w-full text-center">
                <Button asChild variant="link">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 justify-center w-full"
                  >
                    View on GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
