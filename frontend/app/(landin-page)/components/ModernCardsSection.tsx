'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import mascot1 from '@/images/1.png'

export default function ModernCardsSection() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2D398F]">
      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.35))]" />
        {/* bottom transition to next section: darken toward boundary */}
        <div className="absolute bottom-0 left-0 right-0 " />
      </div>

      {/* Elegant corner mascot accent (top-right, md+ only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none hidden md:block absolute top-2 md:top-4 right-2 md:right-4 z-[5]"
        initial={{ opacity: 0, y: -90, rotate: -12 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -40, 0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
          <Image
            src={mascot1}
            alt=""
            priority={false}
            className="relative w-[200px] lg:w-[240px] xl:w-[280px] h-auto opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] select-none"
            sizes="(max-width: 1024px) 200px, (max-width: 1280px) 240px, 280px"
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={item}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 text-white text-xs md:text-sm mb-4 backdrop-blur">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Birlikte daha hızlı öğren
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Toplulukla öğren, kariyerinde fark yarat
          </h2>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed">
            Birlikte öğrenmenin gücüyle kariyer yolculuğunu şekillendir.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* Topluluk Desteği Card */}
          <motion.div variants={item}
            className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/30 via-white/10 to-white/0 hover:from-cyan-400/30 hover:via-emerald-300/20 hover:to-transparent transition-all duration-300">
            <div className="relative rounded-2xl h-full w-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden">
              {/* hover glow */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Topluluk Desteği</h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-200/90 leading-relaxed">Seninle aynı hedefleri paylaşan insanlarla yan yana.</p>
                  <p className="text-slate-200/90 leading-relaxed">Paylaş, sor, öğren — çünkü birlikte daha güçlüyüz.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Becerilerini Geliştir Card */}
          <motion.div variants={item}
            className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/30 via-white/10 to-white/0 hover:from-pink-400/30 hover:via-yellow-300/20 hover:to-transparent transition-all duration-300">
            <div className="relative rounded-2xl h-full w-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(244,114,182,0.15)_0%,transparent_70%)]" />
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/20">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Becerilerini Geliştir</h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-200/90 leading-relaxed">Atölyeler, eğitimler ve kaynaklarla yetkinliklerini artır.</p>
                  <p className="text-slate-200/90 leading-relaxed">Her gün yeni şeyler öğren, kariyerinde fark yarat.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kariyer Fırsatları Card */}
          <motion.div variants={item}
            className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/30 via-white/10 to-white/0 hover:from-amber-300/30 hover:via-indigo-300/20 hover:to-transparent transition-all duration-300">
            <div className="relative rounded-2xl h-full w-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(250,204,21,0.15)_0%,transparent_70%)]" />
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Kariyer Fırsatları</h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-200/90 leading-relaxed">Özel iş ilanları ve proje fırsatlarına erişim.</p>
                  <p className="text-slate-200/90 leading-relaxed">Hayalini kurduğun pozisyonlara bir adım daha yaklaş.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}