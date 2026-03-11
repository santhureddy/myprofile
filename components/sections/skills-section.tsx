'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  TestTube, 
  Zap, 
  BarChart3, 
  Server, 
  Users,
  Palette,
  Shield
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { skills } from '@/data/portfolio'

const skillIcons = {
  'Frontend & UI Engineering': Code,
  'Testing & Quality Engineering': TestTube,
  'Performance & Scalability': Zap,
  'Data Visualization': BarChart3,
  'Backend & DevOps': Server,
  'Leadership & Management': Users,
  'Design & UX': Palette,
  'Security': Shield
}

const skillColors = {
  'Frontend & UI Engineering': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  'Testing & Quality Engineering': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  'Performance & Scalability': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  'Data Visualization': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  'Backend & DevOps': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  'Leadership & Management': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
  'Design & UX': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
  'Security': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
}

export function SkillsSection() {
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

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-muted/30">
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
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Technical
              <span className="gradient-text"> Proficiencies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set spanning frontend development, team leadership,
              and modern web technologies, built through years of hands-on experience.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, categoryIndex) => {
              const IconComponent = skillIcons[skillCategory.category as keyof typeof skillIcons] || Code
              const colorClass = skillColors[skillCategory.category as keyof typeof skillColors] || skillColors['Frontend & UI Engineering']
              
              return (
                <motion.div
                  key={skillCategory.category}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass.split(' ').slice(0, 2).join(' ')}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                          {skillCategory.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            variants={badgeVariants}
                            custom={skillIndex}
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying at the forefront of
                frontend development. I regularly explore new frameworks, tools, and best practices
                to deliver cutting-edge solutions that drive business value.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Badge variant="outline" className="bg-background/50">
                  Always Learning
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  Innovation Focused
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  Best Practices Advocate
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}