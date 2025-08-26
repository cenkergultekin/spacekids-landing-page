'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "... nedir?",
      answer: "Employment Hero is a comprehensive employment management platform that helps businesses streamline their HR operations. From hiring and onboarding to payroll and compliance, we provide everything you need to manage your workforce effectively."
    },
    {
      question: "What are the benefits of using Employment Hero?",
      answer: "Employment Hero offers numerous benefits including automated payroll processing, streamlined recruitment workflows, comprehensive compliance management, employee self-service portals, and real-time analytics. Our platform helps reduce administrative overhead by up to 60% while improving employee satisfaction."
    },
    {
      question: "Does Employment Hero help with legal and compliance?",
      answer: "Yes, Employment Hero includes built-in compliance features that help ensure your business meets all relevant employment laws and regulations. Our platform automatically updates with the latest legal requirements and provides audit trails for all HR activities."
    },
    {
      question: "How can I learn more about Employment Hero?",
      answer: "You can learn more about Employment Hero by booking a personalized demo with our team, exploring our comprehensive documentation, or attending one of our regular webinars. We also offer free trials so you can experience the platform firsthand."
    },
    {
      question: "Is Employment Hero suitable for small businesses?",
      answer: "Absolutely! Employment Hero is designed to scale with your business. We offer solutions for businesses of all sizes, from startups with just a few employees to large enterprises with thousands of staff members."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 customer service, dedicated account managers for enterprise clients, extensive documentation, video tutorials, and regular training sessions. Our support team is always ready to help you get the most out of the platform."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about Employment Hero
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus size={20} className="text-primary-600" />
                  ) : (
                    <Plus size={20} className="text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2, ease: "easeInOut" }
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          className="mt-16 text-center bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the perfect solution for your business. 
            Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
