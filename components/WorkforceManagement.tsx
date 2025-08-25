'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle, Users, Calendar, Target, TrendingUp } from 'lucide-react'

export default function WorkforceManagement() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    "Active Matters",
    "Your Department", 
    "Your Experience",
    "Performance Tracking",
    "Team Analytics"
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hiring made easy
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your recruitment process with our comprehensive hiring tools. 
              From job posting to onboarding, we've got everything covered to help you 
              find and hire the best talent for your organization.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span>Learn more</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Product Interface */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Workforce Management</h3>
                      <p className="text-sm text-gray-500">Team Overview</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Today</span>
                  </div>
                </div>

                {/* Employee Cards */}
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", role: "Senior Developer", status: "Active", avatar: "SJ" },
                    { name: "Mike Chen", role: "Product Manager", status: "On Leave", avatar: "MC" },
                    { name: "Emma Davis", role: "UX Designer", status: "Active", avatar: "ED" },
                    { name: "Alex Thompson", role: "Marketing Lead", status: "Active", avatar: "AT" }
                  ].map((employee, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-medium text-sm">{employee.avatar}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{employee.name}</p>
                          <p className="text-sm text-gray-500">{employee.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-sm text-gray-500">{employee.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: "Team Size", value: "24", icon: Users },
                    { label: "Active Tasks", value: "12", icon: Target },
                    { label: "This Week", value: "89%", icon: TrendingUp }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-primary-50 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <metric.icon size={16} className="text-primary-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Updates</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 10 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-center">
                  <p className="text-sm font-bold">New Hire</p>
                  <p className="text-xs opacity-90">+1 this week</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
