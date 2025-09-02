'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import mascotL from '@/images/5.png'
import mascotR from '@/images/6.png'

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "1. SpaceYouth nedir?",
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
      question: "4. SpaceYouth'te hangi imkanlardan faydalanabilirim?",
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
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#2D398F]">
      {/* Background ornaments (brand system) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* vignette: darkens downward (top → bottom) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.35))]" />
        
      </div>

      {/* Left/Right mascots (md+) */}
      <motion.div
        aria-hidden
        className="pointer-events-none hidden md:block absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 z-[8]"
        initial={{ opacity: 0, x: -30, rotate: -4 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div animate={{ y: [0, -24, 0, 12, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
          <Image src={mascotL} alt="" className="relative w-[220px] lg:w-[280px] h-auto opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] select-none" sizes="(max-width: 1024px) 220px, 280px" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none hidden md:block absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 z-[8]"
        initial={{ opacity: 0, x: 30, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div animate={{ y: [0, -20, 0, 10, 0] }} transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
          <Image src={mascotR} alt="" className="relative w-[220px] lg:w-[280px] h-auto opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] select-none scale-x-[-1]" sizes="(max-width: 1024px) 210px, 260px" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-white/80 text-sm mb-4">Sık Sorulanlar</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Platformumuzla ilgili en sık sorulan soruların yanıtlarını bulun.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group border border-white/15 rounded-2xl overflow-hidden bg-white/7.5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition-shadow shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-5 text-left bg-white/10 hover:bg-white/15 transition-colors duration-200 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                whileHover={{}}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg md:text-xl font-medium text-white flex items-center justify-between w-full text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus size={20} className="text-white" />
                  ) : (
                    <Plus size={20} className="text-white/60" />
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
                <div className="px-6 pb-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="mt-4 text-white/85 leading-relaxed">
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
