'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Sparkles, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Jump into Employment OS
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses that have transformed their HR operations 
            with Employment Hero. Start your journey today.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 mx-auto mb-16"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span>Book a Demo</span>
            <ArrowRight size={20} />
          </motion.button>

          {/* Parallax Illustration */}
          <motion.div
            className="relative max-w-2xl mx-auto"
            style={{ y, opacity }}
          >
            <div className="relative">
              {/* Main Smartphone Illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <motion.div
                      className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Smartphone size={48} className="text-white" />
                    </motion.div>
                    <p className="text-white font-medium text-lg">Mobile App</p>
                    <p className="text-white/70 text-sm">Available on iOS & Android</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -left-6"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Sparkles size={20} className="text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="bg-green-500/80 backdrop-blur-sm rounded-full p-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-1/4"
                animate={{ 
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="bg-primary-500/80 backdrop-blur-sm rounded-full p-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 right-1/4"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="bg-yellow-500/80 backdrop-blur-sm rounded-full p-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Features */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Free Trial", description: "14-day free trial, no credit card required" },
              { title: "24/7 Support", description: "Round-the-clock customer support" },
              { title: "Easy Setup", description: "Get started in under 30 minutes" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="w-16 h-16 border-2 border-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-20"
        animate={{ 
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="w-24 h-24 border-2 border-white rounded-full"></div>
      </motion.div>
    </section>
  )
}
