'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Removed PDF generation import - now using Google Drive resume
import Image from 'next/image'

const Hero = () => {
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
      opacity: 1
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #1d4ed8 2px, transparent 2px),
            linear-gradient(45deg, transparent 40%, rgba(37, 99, 235, 0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(29, 78, 216, 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
          backgroundPosition: '0 0, 30px 30px, 0 0, 60px 60px'
        }} />
      </div>
      
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 text-6xl text-blue-200 font-mono select-none"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {"</>"}
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-4xl text-blue-200 font-mono select-none"
          animate={{ 
            y: [0, -10, 10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          {"{}"}
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-5xl text-blue-200 font-mono select-none"
          animate={{ 
            rotate: [0, -3, 3, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          {"[]"}
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-3xl text-blue-200 font-mono select-none"
          animate={{ 
            y: [0, 8, -8, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          {"()"}
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 text-2xl text-blue-200 font-mono select-none"
          animate={{ 
            x: [0, 5, -5, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        >
          {"=>"}
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 text-3xl text-blue-200 font-mono select-none"
          animate={{ 
            scale: [1, 1.03, 1],
            opacity: [0.1, 0.18, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        >
          {"&&"}
        </motion.div>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mx-auto mb-8"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image
                src="/logo.png"
                alt="Carrie A. Yu Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Carrie A. Yu
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-blue-600 mb-6 font-semibold"
            variants={itemVariants}
          >
            Software Developer & Team Leader
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experienced software developer with 5+ years of expertise in full-stack development, 
            mobile applications, and team leadership. Passionate about creating scalable solutions 
            and mentoring development teams.
          </motion.p>
          
                 <motion.div
                   className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                   variants={itemVariants}
                 >
                   <Button 
                     size="lg" 
                     className="flex items-center gap-2" 
                     asChild
                   >
                     <a
                       href="https://docs.google.com/document/d/1xfcEfHy59FcFnKUwma5_oNAh6_0eZ0N5LzTEH3BbtLs/edit?tab=t.0"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <Download size={20} />
                       Download Resume
                     </a>
                   </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <a
              href="mailto:eirracyu12@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/undesputed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/carrie-yu-6a6395160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
