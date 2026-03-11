'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Clock, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { personalInfo, awards } from '@/data/portfolio'

const stats = [
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience',
    description: 'Building scalable web applications'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Across various industries'
  },
  {
    icon: Target,
    value: '200K+',
    label: 'Users Impacted',
    description: 'Through accessibility improvements'
  },
  {
    icon: Award,
    value: '5+',
    label: 'Recognition Awards',
    description: 'For technical excellence'
  }
]

const highlights = [
  'Frontend Engineering Leadership',
  'React & TypeScript Expert',
  'Performance Optimization',
  'Accessibility Champion',
  'Team Mentoring & Growth',
  'Scalable Architecture Design'
]

export function AboutSection() {
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
        staggerChildren: 0.1
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
    <section id="about" className="section-padding bg-muted/30">
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
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Passionate About Building
              <span className="gradient-text"> Exceptional Digital Experiences</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience in frontend engineering, I specialize in creating
              scalable, accessible, and performant web applications that deliver outstanding user experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  My Journey in Frontend Engineering
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My passion for creating digital experiences began over 10 years ago when I started
                    my career as a software engineer. Throughout my journey, I've evolved from writing
                    my first lines of JavaScript to leading engineering teams and architecting
                    large-scale frontend applications.
                  </p>
                  <p>
                    At Intuit, I spent nearly a decade honing my skills in building financial software
                    that serves millions of users. This experience taught me the importance of
                    accessibility, performance, and user-centric design in creating products that
                    truly make a difference.
                  </p>
                  <p>
                    Today, as a Frontend Engineering Manager, I combine my technical expertise with
                    leadership skills to build high-performing teams and deliver exceptional digital
                    products. I'm particularly passionate about accessibility, having led initiatives
                    that improved usability for 200K+ customers with disabilities.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold mb-4">What I Bring to the Table</h4>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      variants={itemVariants}
                      custom={index}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Awards */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold font-heading mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium mb-2">
                            {stat.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.description}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Awards */}
              {awards.length > 0 && (
                <motion.div variants={itemVariants}>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Recent Recognition</h4>
                        {awards.map((award) => (
                          <div key={award.id} className="mb-3 last:mb-0">
                            <div className="font-medium text-sm">{award.title}</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              {award.description}
                            </div>
                            {award.year && (
                              <Badge variant="outline" className="text-xs mt-2">
                                {award.year}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}