'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, Play, Pause } from 'lucide-react'
import Image from 'next/image'
import Ballpit from './ui/HeroBalls'
import BlurText from './ui/HeroTitle'
import sincap1 from '@/images/sincap-1.webp'
import sincap2 from '@/images/sincap-2.webp'
import sincap3 from '@/images/sincap-3.webp'
import sincap4 from '@/images/sincap-4.webp'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [isMdUp, setIsMdUp] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Only enable background animation on >= md (768px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsMdUp(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Ballpit canvas - only render on md and up */}
      {isMdUp && (
        <div className="absolute inset-0">
          <Ballpit className="w-full h-full" followCursor={false} paused={paused} />
        </div>
      )}
      {/* Animation Toggle Button (fixed) - only show on md and up */}
      {isMdUp && (
        <button
          type="button"
          aria-label={paused ? 'Animasyonu başlat' : 'Animasyonu durdur'}
          onClick={() => setPaused((p) => !p)}
          className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 backdrop-blur px-3 py-3 transition"
        >
          {paused ? (
            <Play className="w-5 h-5 text-gray-700" />
          ) : (
            <Pause className="w-5 h-5 text-gray-700" />
          )}
          <span className="ml-2 hidden sm:inline text-xs font-medium text-gray-700">
            {paused ? 'Başlat' : 'Durdur'}
          </span>
        </button>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-10">

          {/* Main Content Container */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Left Side Images */}
            <div className="absolute left-0 lg:left-0 top-1/2 transform -translate-y-1/2 space-y-4 w-24 lg:w-28">
              {/* Top Left - Woman on beach */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="aspect-square relative">
                  <Image src={sincap1} alt="Profesyonel" fill className="object-cover" sizes="112px" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-neonYellow-500 rounded-full" />
              </motion.div>

              {/* Bottom Left - Agriculture */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="aspect-square relative">
                  <Image src={sincap2} alt="Çalışmalar" fill className="object-cover" sizes="112px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-neonYellow-500 rounded-full" />
              </motion.div>
            </div>

            {/* Center Content */}
            <div className="text-center max-w-5xl mx-auto px-20 lg:px-32">
              {/* Main Headline with single BlurText including Zap icon */}
              <BlurText
                as="h1"
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight justify-center"
                elements={[
                  'Kariyerini', ' ', 'hızla', ' ', 'yükselt', ' ',
                  <span key="zap" className="relative inline-flex items-center"><Zap className="inline-block text-yellow-500 w-8 h-8 md:w-12 md:h-12 -mt-1 md:-mt-2" /></span>,
                  ' '
                ]}
                direction="top"
                delay={120}
              />
            
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
            <div className="absolute right-0 lg:right-0 top-1/2 transform -translate-y-1/2 space-y-4 w-24 lg:w-28">
              {/* Top Right - Construction workers */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="aspect-square relative">
                  <Image src={sincap3} alt="Yapı" fill className="object-cover" sizes="112px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-neonYellow-500 rounded-full" />
              </motion.div>

              {/* Bottom Right - Retail */}
              <motion.div 
                className="relative rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="aspect-square relative">
                  <Image src={sincap4} alt="Başarılar" fill className="object-cover" sizes="112px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-neonYellow-500 rounded-full" />
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
                  <div className="w-3 h-3 bg-neonYellow-500 rounded-full"></div>
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
