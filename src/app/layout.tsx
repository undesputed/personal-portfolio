import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carrie A. Yu - Software Developer Portfolio',
  description: 'Experienced Software Developer specializing in React, React Native, Java, Spring Boot, and full-stack development. Team leader with 5+ years of experience in building scalable applications.',
  keywords: 'Software Developer, React, React Native, Java, Spring Boot, Full Stack Developer, Web Development, Mobile Development',
  authors: [{ name: 'Carrie A. Yu' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Carrie A. Yu - Software Developer Portfolio',
    description: 'Experienced Software Developer specializing in React, React Native, Java, Spring Boot, and full-stack development.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Carrie A. Yu - Software Developer',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}