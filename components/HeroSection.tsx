'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Play } from 'lucide-react'
import Ballpit from './ui/HeroBalls'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Ballpit canvas */}
      <div className="absolute inset-0">
        <Ballpit className="w-full h-full" followCursor={false} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-10">

          {/* Main Content Container */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Left Side Images */}
            <div className="absolute left-0 lg:left-0 top-1/2 transform -translate-y-1/2 space-y-4 w-16 lg:w-20">
              {/* Top Left - Woman on beach */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                      <span className="text-blue-600 font-bold text-xs">👩</span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">Professional</p>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </motion.div>

              {/* Bottom Left - Agriculture */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                      <span className="text-green-600 font-bold text-xs">🌾</span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">Agriculture</p>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </motion.div>
            </div>

            {/* Center Content */}
            <div className="text-center max-w-5xl mx-auto px-20 lg:px-32">
              {/* Main Headline */}
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sky rocket your{' '}
                <span className="relative">
                  <Zap className="inline-block text-yellow-500 w-8 h-8 md:w-12 md:h-12 -mt-1 md:-mt-2" />
                  career
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                 Senin gibi hedefleri olan insanlarla bir araya gel, destek al ve kariyerinde yeni kapılar aç. Birlikte daha yükseğe çıkıyoruz.
              </motion.p>
            </div>

            {/* Right Side Images */}
            <div className="absolute right-0 lg:right-0 top-1/2 transform -translate-y-1/2 space-y-4 w-16 lg:w-20">
              {/* Top Right - Construction workers */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                      <span className="text-orange-600 font-bold text-xs">👷</span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">Construction</p>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </motion.div>

              {/* Bottom Right - Retail */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                      <span className="text-pink-600 font-bold text-xs">🛍️</span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">Retail</p>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Video Section */}
          <motion.div 
            className="max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-medium mb-2">Örnek Video Yüklenecek</p>
                  <p className="text-gray-300 text-sm">Buraya yapay zeka ile oluşturulacak bir video yüklenecek</p>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm font-medium">SpaceKids Demo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
