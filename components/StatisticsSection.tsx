'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, TrendingUp, Clock, Award } from 'lucide-react'

export default function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState([0, 0, 0, 0])

  const stats = [
    {
      value: 89,
      label: "Takımı Elinde Tutma",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      value: 85,
      label: "Üye Etkileşimi",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      value: 81,
      label: "Zaman Tasarrufu",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      value: 42,
      label: "Maliyet Tasarrufu",
      icon: Award,
      color: "from-orange-500 to-orange-600"
    }
  ]

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts(stats.map(stat => Math.floor(stat.value * progress)))

        if (currentStep >= steps) {
          clearInterval(interval)
          setCounts(stats.map(stat => stat.value))
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [isInView, stats])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kanıtlanmış Başarılar
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
           Platformumuzun toplulukları ve öğrenme deneyimlerini dünyada nasıl dönüştürdüğünü keşfedin.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <stat.icon size={24} className="text-white" />
              </motion.div>

              {/* Number */}
              <motion.div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                {counts[index]}%
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-white/80 text-sm md:text-base font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-white/70 text-lg mb-6">
            200.000’den fazla işletmenin verilerine dayanmaktadır.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "ISO 27001 Sertifikalı",
              "GDPR Uyumlu", 
              "SOC 2 Tip II",
              "200.000+ Kullanıcı"
            ].map((indicator, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <span className="text-white/90 text-sm font-medium">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.button
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ücretsiz Deneyin
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-32 h-32 border-2 border-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-24 h-24 border-2 border-white rounded-full"></div>
      </motion.div>
    </section>
  )
}
