'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/portfolio'

export function ExperienceSection() {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Professional
              <span className="gradient-text"> Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A decade of building exceptional digital experiences across various industries
              and leading high-performing engineering teams.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                            {experience.position}
                          </CardTitle>
                          <div className="flex items-center text-muted-foreground mt-2 mb-3">
                            <Building className="h-4 w-4 mr-2" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-bold font-heading mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in discussing new opportunities and challenging projects.
              </p>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Let's Connect
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}