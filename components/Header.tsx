'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Solutions', 'Resources', 'Pricing', 'Login']

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold text-gray-900">Employment Hero</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-lg font-medium">
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
