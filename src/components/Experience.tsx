'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Code2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const Experience = () => {
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

  const experiences = [
    {
      company: "Hipe Japan",
      position: "Software Developer & Team Leader",
      location: "FGU Center Ayala Business Park",
      duration: "April 2022 - Present",
      description: "Currently assigned as a team leader and developer for various projects. I delegate tasks and assignments to team members, guide them on project requirements, and maintain direct communication with clients. Responsible for planning project features and ensuring successful delivery.",
      projects: [
        "Attendance System",
        "Camera Mobile Application", 
        "Growing Mobile Application",
        "Construction Management System",
        "Reservation Management System",
        "Sales Management System",
        "CMS Migration",
        "Learning Management System",
        "Payment Management System"
      ],
      technologies: [
        "React.js", "React Native", "Java", "Spring Boot", "MyBatis", 
        "Laravel", "Android Studio", "Swift", "AWS Services", 
        "Salesforce", "OpenAI", "Python", "Nuxt.js"
      ],
      databases: ["PostgreSQL", "MySQL"]
    },
    {
      company: "Ink Shared Solutions",
      position: "Web Developer",
      location: "6th floor JESA-ITC Bldg.",
      duration: "September 2020 - September 2021",
      description: "Focused on web designing using React.js and created new layouts for author's books. Worked with microservices, React TypeScript, Docker integration, and learned AWS cloud services through company training.",
      projects: ["Company Website"],
      technologies: ["React.js", "React TypeScript", "JavaScript", "Docker", "AWS"],
      databases: ["GraphQL"]
    },
    {
      company: "Nerubia/Idearobin",
      position: "Software Engineer",
      location: "6th flr, Mabuhay Tower IT Park",
      duration: "December 2019 - July 2020",
      description: "Focused on web development, both front-end and back-end development.",
      projects: ["BMS", "Beauty Salon System"],
      technologies: [
        "React.js", "JavaScript", "Node.js", "Express.js", "AWS"
      ],
      databases: ["MySQL", "PostgreSQL"]
    },
    {
      company: "Responsive Tech Solutions",
      position: "Full Stack Developer",
      location: "Fuente Osmeña",
      duration: "October 2018 - August 2019",
      description: "Developed web applications for both front-end and back-end. Also developed mobile apps using Android Studio. Primarily assigned to fixing bugs and adding features to web applications.",
      projects: ["MCWD System", "Inventory System"],
      technologies: ["PHP", "Java", "React"],
      databases: ["MySQL"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over 5 years of experience in software development, team leadership, and project management
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Code2 className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.projects.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          Projects Handled
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.databases.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Databases</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.databases.map((db, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                              {db}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
