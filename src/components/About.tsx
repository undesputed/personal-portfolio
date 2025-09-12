'use client'

import { motion } from 'framer-motion'
import { Code, Users, Lightbulb, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
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

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Expertise in both frontend and backend technologies including React, React Native, Java, Spring Boot, and Node.js"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Proven experience leading development teams, delegating tasks, and guiding team members through complex projects"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong analytical skills with the ability to break down complex problems and implement effective solutions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Management",
      description: "Experience in planning, organizing, and executing projects from conception to deployment"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Passionate Developer & Team Leader
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am a dedicated software developer with over 5 years of experience in building 
                  scalable applications and leading development teams. Currently serving as a Team 
                  Leader at Hipe Japan, where I guide team members, delegate tasks, and maintain 
                  direct communication with clients.
                </p>
                <p>
                  My journey in software development has been driven by a passion for creating 
                  innovative solutions that make a real impact. I specialize in full-stack development, 
                  with extensive experience in React, React Native, Java, Spring Boot, and various 
                  cloud technologies.
                </p>
                <p>
                  I believe in continuous learning and staying updated with emerging trends in the 
                  IT sector. My goal is to utilize my technical, database, and management skills 
                  to contribute to the growth of organizations while enhancing my knowledge and expertise.
                </p>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-blue-600 mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional Philosophy
                </h4>
                <p className="text-gray-600 italic max-w-3xl mx-auto">
                  "Looking for a challenging role in a reputable organization to utilize my technical, 
                  database, and management skills for the growth of the organization as well as to 
                  enhance my knowledge about new and emerging trends in the IT sector. Flexibility 
                  and open-mindedness are my strengths."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
