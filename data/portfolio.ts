// Portfolio data extracted from Santhosh anager's resume

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  phone: string;
  location: string;
  summary: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Santhosh ",
  title: "Manager Experience Engineering – Frontend Platforms",
  email: "santhu.reddy19@gmail.com",
  linkedin: "https://www.linkedin.com/in/santhosh-ui",
  phone: "+91 8310849328",
  location: "Bangalore, India",
  summary: "Experienced Frontend Engineering Manager with 16+ years of expertise in building scalable web applications, leading high-performing teams, and driving technical excellence in modern JavaScript frameworks and frontend technologies."
};

// Professional Experience
export const experiences: Experience[] = [
  {
    id: "publicis-sapient",
    company: "Publicis Sapient",
    position: "Manager Experience Engineering",
    duration: "Oct 2025 - Present",
    location: "Bangalore, India",
    description: [
      "Leading frontend platform engineering initiatives and driving technical strategy for large-scale web applications",
      "Managing cross-functional teams to deliver high-quality user experiences",
      "Implementing modern frontend architectures and development practices",
      "Mentoring senior engineers and establishing engineering best practices"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "AWS"],
    achievements: [
      "Led the migration of legacy systems to modern React-based architecture",
      "Established frontend development standards across multiple teams",
      "Improved application performance by 40% through optimization strategies"
    ]
  },
  {
    id: "career-break",
    company: "Career Break, Family Support",
    position: "Personal Development",
    duration: "Sep 2024 - Aug 2025",
    location: "Bangalore, India",
    description: [
      "Took a planned career break to support family during important life transitions",
      "Continued learning and staying updated with latest frontend technologies",
      "Contributed to open-source projects and maintained technical skills",
      "Prepared for return to leadership roles in frontend engineering"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Completed advanced courses in modern frontend frameworks",
      "Built personal projects to explore new technologies",
      "Maintained active engagement with the developer community"
    ]
  },
  {
    id: "intuit",
    company: "Intuit Inc, Bangalore",
    position: "Senior Software Engineer",
    duration: "Jun 2014 - Sep 2024",
    location: "Bangalore, India",
    description: [
      "Developed and maintained large-scale financial software applications",
      "Led frontend development for critical business applications",
      "Collaborated with product teams to deliver user-centric solutions",
      "Mentored junior developers and contributed to technical architecture decisions"
    ],
    technologies: ["JavaScript", "React", "Angular", "Node.js", "Java", "Spring", "AWS"],
    achievements: [
      "Successfully delivered multiple high-impact features for millions of users",
      "Improved application performance and user experience metrics",
      "Led technical initiatives that reduced development time by 30%",
      "Received multiple recognition awards for technical excellence"
    ]
  }
];

// Technical Skills
export const skills: Skill[] = [
  {
    category: "Frontend & UI Engineering",
    items: [
      "React", "Redux", "Context API", "React Query", "JavaScript (ES6+)", "TypeScript",
      "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap",
      "Angular", "Styled Components", "SASS/LESS", "Design Systems", "Component Libraries",
      "Storybook", "REST APIs", "GraphQL"
    ]
  },
  {
    category: "Testing & Quality Engineering",
    items: [
      "Test-Driven Development (TDD)", "Jest", "React Testing Library", "Cypress",
      "Accessibility (WCAG 2.1 AA)", "Cross-Browser Compatibility", "Responsive Design",
      "UI/UX Best Practices"
    ]
  },
  {
    category: "Performance & Scalability",
    items: [
      "Performance Optimization", "Code Splitting", "Lazy Loading", "Memoization",
      "Modularization", "Webpack", "Vite", "Bundle Analysis"
    ]
  },
  {
    category: "Data Visualization",
    items: ["D3.js", "Highcharts", "C3.js", "ReCharts", "Chart.js"]
  },
  {
    category: "Backend & DevOps",
    items: [
      "Node.js", "Express.js", "Java", "Spring Boot", "Python", "AWS",
      "Docker", "Jenkins", "Git", "CI/CD"
    ]
  },
  {
    category: "Leadership & Management",
    items: [
      "Team Leadership", "Technical Mentoring", "Code Reviews", "Architecture Design",
      "Project Management", "Agile/Scrum", "Stakeholder Management"
    ]
  }
];

// Awards and Recognition
export const awards: Award[] = [
  {
    id: "accessibility-champion",
    title: "Accessibility Championship Award",
    description: "Recognized for reducing accessibility violations by 50% and improving usability for screen readers and low-vision users, directly enhancing inclusivity for 200K+ customers.",
    year: "2024"
  }
];

// Education (Note: No formal education details found in resume)
export const education: Education[] = [
  // Education details would be added here when available
];

// Projects (derived from experience)
export const projects = [
  {
    id: "accessibility-improvement",
    title: "Accessibility Enhancement Initiative",
    description: "Led a comprehensive accessibility improvement project that reduced violations by 50% and enhanced user experience for customers with disabilities.",
    technologies: ["React", "ARIA", "WCAG 2.1", "Screen Reader Testing"],
    achievements: [
      "Improved accessibility compliance by 50%",
      "Enhanced experience for 200K+ customers",
      "Established accessibility testing standards"
    ],
    category: "Accessibility"
  },
  {
    id: "performance-optimization",
    title: "Frontend Performance Optimization",
    description: "Implemented comprehensive performance improvements across multiple applications, focusing on load times, bundle optimization, and user experience metrics.",
    technologies: ["React", "Webpack", "Code Splitting", "Lazy Loading"],
    achievements: [
      "Reduced application load time by 40%",
      "Optimized bundle size through code splitting",
      "Improved Core Web Vitals scores"
    ],
    category: "Performance"
  },
  {
    id: "design-system",
    title: "Component Library & Design System",
    description: "Built and maintained a comprehensive design system and component library used across multiple teams and applications.",
    technologies: ["React", "Storybook", "TypeScript", "Styled Components"],
    achievements: [
      "Created reusable component library",
      "Reduced development time by 30%",
      "Improved design consistency across products"
    ],
    category: "Architecture"
  }
];