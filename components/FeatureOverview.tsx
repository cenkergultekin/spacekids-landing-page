'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Users, Search, ArrowRight } from 'lucide-react'

export default function FeatureOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "FOR BUSINESSES",
      icon: Building2,
      description: "Streamline your HR operations with our comprehensive platform. Manage hiring, payroll, and compliance all in one place.",
      image: "Dashboard interface with employee profiles and tasks",
      color: "from-green-500 to-emerald-600",
      delay: 0
    },
    {
      title: "FOR EMPLOYEES",
      icon: Users,
      description: "Access your payslips, request time off, and manage your employment details through our intuitive mobile app.",
      image: "Mobile app interface showing payslips and leave requests",
      color: "from-primary-500 to-primary-600",
      delay: 0.2
    },
    {
      title: "FOR JOB SEEKERS",
      icon: Search,
      description: "Find your next opportunity with personalized job alerts and track your application status in real-time.",
      image: "Mobile app interface with job alerts and application status",
      color: "from-purple-500 to-purple-600",
      delay: 0.4
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
            Everything employment, all in one place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hiring to retirement, we've got every aspect of employment covered
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: feature.delay }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                    <p className="text-xs text-gray-500">{feature.image}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${feature.color} text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
