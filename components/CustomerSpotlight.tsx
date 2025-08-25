'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export default function CustomerSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Parallax Background Icon */}
      <motion.div
        className="absolute right-10 bottom-10 opacity-10"
        style={{ y, opacity }}
      >
        <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center">
              <Quote size={32} className="text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Quote Icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Quote size={32} className="text-white" />
            </div>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "At the click of a button, we can coordinate everything from the recruitment 
            process through to issuing a contract, managing payroll and compliance 
            documents for new staff. This has streamlined both short-term tasks 
            through to end-of-year reviews."
          </motion.blockquote>

          {/* Customer Info */}
          <motion.div
            className="text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold mb-2">Customer Spotlight</p>
            <p className="text-xl font-bold">Tasmanian Oyster Company</p>
            <p className="text-sm opacity-75 mt-1">Leading seafood producer in Australia</p>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Employees Managed", value: "150+" },
              { label: "Time Saved", value: "60%" },
              { label: "Compliance Rate", value: "100%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-12 bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 opacity-20"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
    </section>
  )
}
