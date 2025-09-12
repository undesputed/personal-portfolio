'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Heart } from 'lucide-react'

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
              <h3 className="text-2xl font-bold mb-4">Carrie A. Yu</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Experienced Software Developer and Team Leader with 5+ years of expertise 
                in full-stack development, mobile applications, and project management.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:eirracyu12@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/undesputed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carrie-yu-6a6395160/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 eirracyu12@gmail.com</p>
                <p>📱 +63 977 132 4804</p>
                <p>📍 Fatima, Ubay, Bohol, Philippines</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © {currentYear} Carrie A. Yu. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
