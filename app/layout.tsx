import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Santhosh M - Frontend Engineering Manager',
  description: 'Experienced Frontend Engineering Manager with 10+ years of expertise in building scalable web applications, leading high-performing teams, and driving technical excellence.',
  keywords: [
    'Frontend Engineer',
    'Engineering Manager', 
    'React Developer',
    'JavaScript Expert',
    'TypeScript',
    'Next.js',
    'Web Development',
    'UI/UX',
    'Accessibility',
    'Performance Optimization'
  ],
  authors: [{ name: 'Santhosh M' }],
  creator: 'Santhosh M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://santhosh-portfolio.vercel.app',
    title: 'Santhosh M - Frontend Engineering Manager',
    description: 'Experienced Frontend Engineering Manager with 10+ years of expertise in building scalable web applications.',
    siteName: 'Santhosh M Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santhosh M - Frontend Engineering Manager',
    description: 'Experienced Frontend Engineering Manager with 10+ years of expertise in building scalable web applications.',
    creator: '@santhosh_ui',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}