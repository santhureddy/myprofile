'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { personalInfo } from '@/data/portfolio'
import { scrollToElement } from '@/lib/utils'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: 'hover:text-green-600'
  },
  {
    name: 'Phone',
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    color: 'hover:text-purple-600'
  }
]

const quickLinks = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    scrollToElement(href)
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">{personalInfo.name}</h3>
                <p className="text-muted-foreground text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {personalInfo.summary}
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="justify-start p-0 h-auto font-normal"
                  >
                    <a
                      href={social.href}
                      target={social.name !== 'Phone' ? '_blank' : undefined}
                      rel={social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center text-muted-foreground ${social.color} transition-colors`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{social.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}