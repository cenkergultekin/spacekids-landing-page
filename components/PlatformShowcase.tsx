'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plus, Users, FileText, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function PlatformShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tooltips = [
    {
      icon: Users,
      title: "Hiring",
      description: "Streamlined recruitment process",
      position: "top-1/4 left-1/4"
    },
    {
      icon: FileText,
      title: "Onboarding",
      description: "Automated employee onboarding",
      position: "top-1/3 right-1/4"
    },
    {
      icon: DollarSign,
      title: "Payroll",
      description: "Automated payroll processing",
      position: "bottom-1/3 left-1/3"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Performance management tools",
      position: "bottom-1/4 right-1/3"
    },
    {
      icon: Shield,
      title: "Benefits",
      description: "Employee benefits management",
      position: "top-1/2 left-1/2"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See the platform in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our comprehensive employment management platform
          </p>
        </motion.div>

        {/* Platform Screenshot */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Dashboard Screenshot */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                <h3 className="text-lg font-semibold text-gray-900">Employment Hero Dashboard</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="space-y-3">
                    {['Hiring', 'Onboarding', 'Payroll', 'Performance', 'Benefits'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Candidates Card */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4">Candidates</h4>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-100 rounded w-1/2 mt-1"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Ads Card */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4">Job Ads</h4>
                    <div className="space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-3">
                          <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltip Markers */}
          {tooltips.map((tooltip, index) => (
            <motion.div
              key={index}
              className={`absolute ${tooltip.position} z-10`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.1 }}
              >
                {/* Marker */}
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                  <Plus size={16} className="text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
                    <div className="flex items-center space-x-2">
                      <tooltip.icon size={12} />
                      <span className="font-medium">{tooltip.title}</span>
                    </div>
                    <div className="mt-1 text-gray-300">{tooltip.description}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >          
        </motion.div>
      </div>
    </section>
  )
}
