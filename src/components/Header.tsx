'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { NAV_SECTIONS, HEADER_SCROLL_THRESHOLD, SITE } from '@/config/site'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={SITE.logo.src}
              alt={SITE.logo.alt}
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_SECTIONS.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              {NAV_SECTIONS.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
