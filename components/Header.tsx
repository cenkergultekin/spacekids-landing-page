'use client'

import { motion } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Başlangıç', 'Bilgilendirme', 'Akademi', 'Sertifikalar', 'SSS']

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-darkBlue-500 to-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">SpaceYouth</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-900 hover:text-primary-600 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

                     {/* Right side icons */}
           <div className="hidden md:flex items-center space-x-4">
             <motion.button
               className="flex items-center space-x-2 text-gray-900 hover:text-primary-600 transition-colors duration-200"
               whileHover={{ scale: 1.05 }}
             >
               <User size={20} />
               <span className="text-sm font-medium">Giriş yapın</span>
             </motion.button>
           </div>

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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent border-0">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
                             <div className="flex items-center space-x-4 px-3 py-2">
                 <button className="flex items-center space-x-2 text-gray-700">
                   <User size={20} />
                   <span className="text-sm">Giriş yapın</span>
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </div>

      
    </motion.header>
  )
}
