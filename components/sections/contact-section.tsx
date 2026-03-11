'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'
import { copyToClipboard } from '@/lib/utils'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Send me an email',
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    description: 'Give me a call',
    color: 'text-green-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: personalInfo.linkedin,
    description: 'Let\'s connect professionally',
    color: 'text-blue-700'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: '#',
    description: 'Based in India',
    color: 'text-red-600'
  }
]

export function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleCopy = async (text: string, label: string) => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopiedItem(label)
      setTimeout(() => setCopiedItem(null), 2000)
    }
  }

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
    <section id="contact" className="section-padding bg-muted/30">
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
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Let's
              <span className="gradient-text"> Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, challenging projects,
              or simply connecting with fellow professionals in the tech industry.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const isCopyable = method.label === 'Email' || method.label === 'Phone'
              const isLocation = method.label === 'Location'
              
              return (
                <motion.div
                  key={method.label}
                  variants={itemVariants}
                  custom={index}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        onClick={() => {
                          if (isCopyable) {
                            handleCopy(method.value, method.label)
                          } else if (!isLocation) {
                            window.open(method.href, '_blank')
                          }
                        }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className={`h-6 w-6 ${method.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                              {method.label}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        {copiedItem === method.label && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center text-green-600"
                          >
                            <CheckCircle className="h-5 w-5" />
                          </motion.div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium">
                        {method.value}
                      </p>
                      {isCopyable && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Click to copy
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Ready to Start a Conversation?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're looking for a frontend engineering leader, want to discuss
                  a project, or simply connect, I'd love to hear from you. Let's explore
                  how we can work together to create exceptional digital experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="group"
                  >
                    <a href={`mailto:${personalInfo.email}`}>
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="group"
                  >
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                <span>Open to remote work</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                <span>Based in {personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}