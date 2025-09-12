'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Users, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "React Native", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Nuxt.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 85 },
        { name: "MyBatis", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 90 },
        { name: "Android Studio", level: 85 },
        { name: "Swift", level: 70 },
        { name: "Mobile UI/UX", level: 80 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "AWS Services", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Nginx", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Salesforce", level: 75 },
        { name: "OpenAI Integration", level: 80 },
        { name: "Python", level: 70 },
        { name: "Git", level: 85 },
        { name: "Agile/Scrum", level: 90 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "Time Management", level: 90 },
        { name: "Adaptability", level: 95 }
      ]
    }
  ]

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tagalog", level: "Native" },
    { name: "Cebuano", level: "Native" }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical skills and soft skills developed through 5+ years of professional experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                      <div className="text-blue-600 mr-3">
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {languages.map((language, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-blue-50 rounded-lg"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {language.name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {language.level}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Additional Skills
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Programming Skills", "Communication Skills", "Team Player",
                    "Stress and Time Management", "Can work under pressure",
                    "Planning and Organizational Skills", "Patience and Positive Attitude",
                    "Active Listening", "Leadership", "Dependability", "Open minded", "Adaptability"
                  ].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white text-gray-700 shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
