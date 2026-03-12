'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { CONTACT, NAV_SECTIONS, SITE } from '@/config/site'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{SITE.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Experienced Software Developer and Team Leader with 5+ years of
                expertise in full-stack development, mobile applications, and
                project management.
              </p>
              <div className="flex space-x-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links - anchor links for accessibility and SEO */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  {NAV_SECTIONS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 block"
                        onClick={(e) => {
                          e.preventDefault()
                          document
                            .querySelector(item.href)
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span aria-hidden="true">📧</span> {CONTACT.email}
                </p>
                <p>
                  <span aria-hidden="true">📱</span> {CONTACT.phone}
                </p>
                <p>
                  <span aria-hidden="true">📍</span> {CONTACT.location}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © {currentYear} {SITE.name}. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
