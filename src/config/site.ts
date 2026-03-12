/**
 * Site-wide constants and configuration.
 * Contact details and URLs can be overridden via NEXT_PUBLIC_* environment variables.
 */

export const SITE = {
  name: 'Carrie A. Yu',
  title: 'Carrie A. Yu - Software Developer Portfolio',
  description:
    'Experienced Software Developer specializing in React, React Native, Java, Spring Boot, and full-stack development. Team leader with 5+ years of experience in building scalable applications.',
  url:
    (process.env.NEXT_PUBLIC_SITE_URL as string) || 'https://carrie-yu-portfolio.vercel.app',
} as const;

export const CONTACT = {
  email:
    (process.env.NEXT_PUBLIC_CONTACT_EMAIL as string) || 'eirracyu12@gmail.com',
  phone:
    (process.env.NEXT_PUBLIC_CONTACT_PHONE as string) || '+63 977 132 4804',
  location:
    (process.env.NEXT_PUBLIC_CONTACT_LOCATION as string) ||
    'Cebu City',
  links: {
    github: 'https://github.com/undesputed',
    linkedin: 'https://www.linkedin.com/in/carrie-yu-6a6395160/',
    resume:
      'https://docs.google.com/document/d/1xfcEfHy59FcFnKUwma5_oNAh6_0eZ0N5LzTEH3BbtLs/edit?tab=t.0',
  },
} as const;

export const NAV_SECTIONS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const;

/** Scroll threshold (px) after which header gets background */
export const HEADER_SCROLL_THRESHOLD = 50;

/** Auto-close duration for toast notifications (ms) */
export const NOTIFICATION_AUTO_CLOSE_MS = 5000;
