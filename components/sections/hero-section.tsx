'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/data/portfolio'
import { scrollToElement } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
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

export function HeroSection() {
  const handleScrollToAbout = () => {
    scrollToElement('about')
  }

  const handleDownloadCV = () => {
    // In a real application, you would link to the actual CV file
    window.open('/cv/santhosh-manager-cv.pdf', '_blank')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              👋 Available for new opportunities
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={handleScrollToAbout}
              className="group"
            >
              <span>Learn More About Me</span>
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Download CV</span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4"
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}