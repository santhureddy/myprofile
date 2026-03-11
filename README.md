# Santhosh  - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing the professional experience and technical expertise of Santhosh , a Frontend Engineering Manager.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Animations**: Smooth animations using Framer Motion
- **Type Safe**: Built with TypeScript for better development experience
- **SEO Optimized**: Proper meta tags and structured data for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or later
- npm, yarn, or pnpm

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd santhosh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/              # Reusable UI components
├── data/                 # Data and content
│   └── portfolio.ts     # Portfolio data and types
├── lib/                 # Utility functions
│   └── utils.ts        # Helper functions
├── public/             # Static assets
└── types/             # TypeScript type definitions
```

## 🎨 Customization

### Personal Information
Update the portfolio data in `data/portfolio.ts` to reflect your own information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
}
```

### Styling
- **Colors**: Modify the CSS variables in `app/globals.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Components**: Customize components in the `components/` directory

### Content Sections
Each section can be customized by editing the corresponding component:
- Hero: `components/sections/hero-section.tsx`
- About: `components/sections/about-section.tsx`
- Experience: `components/sections/experience-section.tsx`
- Skills: `components/sections/skills-section.tsx`
- Projects: `components/sections/projects-section.tsx`
- Contact: `components/sections/contact-section.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Features Overview

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios

### Performance
- Optimized images
- Code splitting
- Lazy loading
- Minimal bundle size

### SEO
- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Structured data
- Sitemap generation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

Santhosh  - [santhu.reddy19@gmail.com](mailto:santhu.reddy19@gmail.com)

Project Link: [Portfolio Website](https://santhosh-portfolio.vercel.app)

---

**Built with ❤️ using Next.js and Tailwind CSS**