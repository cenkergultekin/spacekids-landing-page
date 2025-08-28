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
      question: "1. SpaceKids nedir?",
      answer: "………., kariyerini geliştirmek isteyen bireylerin networking, eğitim, mentorluk ve topluluk desteği ile kendilerini ileriye taşıyabilecekleri bir platformdur."

    },
    {
      question: "2. Kimler üye olabilir?",
      answer: "Öğrenciler, genç profesyoneller, girişimciler ve kariyerinde ilerlemek isteyen herkes DreamData Labs topluluğuna katılabilir."
    },
    {
      question: "3. Üyelik ücretli mi?",
      answer: "Bazı temel özellikler ücretsizdir. Gelişmiş özellikler ve özel fırsatlar için farklı üyelik paketleri sunuyoruz."
    },
    {
      question: "4. SpaceKids'te hangi imkanlardan faydalanabilirim?",
      answer: "Eğitim içerikleri, networking etkinlikleri, mentorluk desteği, iş ilanları ve proje fırsatlarına erişebilirsiniz."
    },
    {
      question: "5. Etkinlikler nasıl gerçekleşiyor?",
      answer: "Etkinlikler hem çevrim içi hem de yüz yüze düzenlenmektedir. Etkinlik takvimi uygulama ve web sitesi üzerinden paylaşılır."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platformumuzla ilgili en sık sorulan soruların yanıtlarını bulun.
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
      </div>
    </section>
  )
}
