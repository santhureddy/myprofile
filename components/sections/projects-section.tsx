'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Award, Zap, Accessibility } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'

const categoryIcons = {
  'Accessibility': Accessibility,
  'Performance': Zap,
  'Architecture': Award
}

const categoryColors = {
  'Accessibility': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  'Performance': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  'Architecture': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
}

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Key Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Featured
              <span className="gradient-text"> Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Highlighting some of the impactful projects I've led, focusing on accessibility,
              performance optimization, and scalable architecture design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Award
              const colorClass = categoryColors[project.category as keyof typeof categoryColors] || categoryColors['Architecture']
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass.split(' ').slice(0, 2).join(' ')}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs"
                          disabled
                        >
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View Details
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                          disabled
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Projects Note */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-bold font-heading mb-4">
                More Projects Available
              </h3>
              <p className="text-muted-foreground mb-6">
                These represent a selection of my key contributions. I've worked on numerous other
                projects involving React applications, performance optimizations, and team leadership
                initiatives throughout my career.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-background/50">
                  50+ Projects Delivered
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  Multiple Industries
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  Scalable Solutions
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}