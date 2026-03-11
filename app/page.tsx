import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}