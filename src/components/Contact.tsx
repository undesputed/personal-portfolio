'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { sendContactEmail, ContactFormData } from '@/lib/emailService'
import Notification from './Notification'

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    message: string
    isVisible: boolean
  }>({
    type: 'success',
    message: '',
    isVisible: false
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({
      type,
      message,
      isVisible: true
    })
  }

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await sendContactEmail(formData)
      
      if (response.success) {
        showNotification('success', response.message)
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        showNotification('error', response.message)
      }
    } catch {
      showNotification('error', 'An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "eirracyu12@gmail.com",
      link: "mailto:eirracyu12@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+63 977 132 4804",
      link: "tel:+639771324804"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Fatima, Ubay, Bohol, Philippines",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center">
                        <div className="text-blue-600 mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      <Button size="icon" asChild>
                        <a
                          href="mailto:eirracyu12@gmail.com"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <a
                          href="https://github.com/undesputed"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <a
                          href="https://www.linkedin.com/in/carrie-yu-6a6395160/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Availability</h4>
                      <p className="text-gray-600 mb-4">
                        I&apos;m currently open to new opportunities and collaborations. 
                        Whether you have a project in mind or just want to connect, 
                        I&apos;d love to hear from you!
                      </p>
                             <Button 
                               className="flex items-center gap-2" 
                               asChild
                             >
                               <a
                                 href="https://docs.google.com/document/d/1xfcEfHy59FcFnKUwma5_oNAh6_0eZ0N5LzTEH3BbtLs/edit?tab=t.0"
                                 target="_blank"
                                 rel="noopener noreferrer"
                               >
                                 <Download className="w-4 h-4" />
                                 Download Resume
                               </a>
                             </Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
