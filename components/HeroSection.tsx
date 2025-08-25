'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Users, Briefcase, Clock, FileText, Shield } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const floatingIcons = [
    { icon: Briefcase, text: "Job", delay: 0 },
    { icon: Clock, text: "Time", delay: 0.2 },
    { icon: FileText, text: "Docs", delay: 0.4 },
    { icon: Shield, text: "Cloud", delay: 0.6 },
    { icon: Users, text: "Team", delay: 0.8 },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-primary-50">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center relative z-10">
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Leap into the{' '}
            <span className="gradient-text">future of work</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Employment OS
          </motion.p>

          {/* Hero Image with Parallax */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            style={{ y, opacity }}
          >
            <div className="relative">
              {/* Placeholder Hero Image */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-center justify-center h-64 md:h-80">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users size={48} className="text-primary-600" />
                    </div>
                    <p className="text-gray-600 font-medium">Hero Image Placeholder</p>
                    <p className="text-sm text-gray-500">Modern workplace illustration</p>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${10 + index * 20}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: item.delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-primary-100">
                    <item.icon size={20} className="text-primary-600" />
                    <span className="text-xs text-gray-600 font-medium block mt-1">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-500 text-sm mb-2">Trusted by 200,000+ businesses globally</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                <span className="text-xs font-medium text-gray-600">HR Tech Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
