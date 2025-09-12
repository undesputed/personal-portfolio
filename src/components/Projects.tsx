'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Projects = () => {
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

  const projects = [
    {
      title: "EC Care Medical Laboratory System",
      type: "Laboratory Management System",
      duration: "May 2023 - April 2024",
      description: "Developed a comprehensive laboratory system that accepts patients' information, processes payments, updates inventory, and prints laboratory results. This ongoing project demonstrates full-stack development capabilities.",
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "Docker", "AWS (EC2)", "Nginx"],
      database: "MySQL",
      category: "web",
      features: [
        "Patient Information Management",
        "Payment Processing",
        "Inventory Management", 
        "Laboratory Results Generation",
        "Multi-platform Support"
      ]
    },
    {
      title: "Hotel Management System",
      type: "Hotel Reservation System",
      duration: "January 2023 - March 2023",
      description: "Developed an online hotel reservation system that accepts reservations from multiple sources including booking.com, trip.com, and agoda.com. Created from scratch with complete project management approach.",
      technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
      database: "MySQL",
      category: "web",
      features: [
        "Multi-source Reservation Integration",
        "Booking Management",
        "Payment Processing",
        "Admin Dashboard",
        "Real-time Availability"
      ]
    },
    {
      title: "Mobile Catering Service",
      type: "Thesis Project",
      duration: "April 2022 - May 2022",
      description: "Developed a mobile catering service application for users who need catering services. This was a solo thesis project demonstrating mobile development skills and full-stack implementation.",
      technologies: ["React Native", "JavaScript", "Node.js", "Express.js", "Axios"],
      database: "MySQL",
      category: "mobile",
      features: [
        "Service Booking",
        "Menu Management",
        "Payment Integration",
        "User Authentication",
        "Order Tracking"
      ]
    },
    {
      title: "E-commerce Website",
      type: "Thesis Project", 
      duration: "August 2022 - August 2022",
      description: "Developed an online e-commerce website for stock animals. Created comprehensive sales reports and admin dashboard for sales management and order management.",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "Axios"],
      database: "MySQL",
      category: "web",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Sales Reports",
        "Admin Dashboard",
        "Order Management"
      ]
    },
    {
      title: "Bakpak App",
      type: "Capstone Project",
      description: "An online e-commerce platform for students and office supplies, demonstrating e-commerce development skills.",
      technologies: ["React.js", "Node.js", "Express.js"],
      database: "MySQL",
      category: "web",
      features: [
        "Student-focused E-commerce",
        "Office Supplies Catalog",
        "User Management",
        "Order Processing"
      ]
    },
    {
      title: "Water District Application",
      type: "Work Project",
      description: "A mobile application to read water meters for billing purposes, showcasing mobile development and utility management solutions.",
      technologies: ["React Native", "JavaScript"],
      database: "MySQL",
      category: "mobile",
      features: [
        "Water Meter Reading",
        "Billing Integration",
        "Data Collection",
        "Report Generation"
      ]
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-6 h-6" />
      case 'web':
        return <Globe className="w-6 h-6" />
      default:
        return <Code className="w-6 h-6" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent projects demonstrating full-stack development, mobile applications, and system management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-blue-600">
                        {getCategoryIcon(project.category)}
                      </div>
                      <Badge variant="secondary">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </CardTitle>
                    {project.duration && (
                      <p className="text-sm text-gray-500">
                        {project.duration}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-blue-600 text-xs">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600">
                        <Database className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">{project.database}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
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

export default Projects
