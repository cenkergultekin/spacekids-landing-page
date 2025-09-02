'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Eye, Target } from 'lucide-react'
import Image from 'next/image'
import mascot2 from '@/images/2.png'

export default function CustomerSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#2D398F]">
      {/* Background ornaments (matched to ModernCards) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid (match ModernCards) */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* vignette: top darker, fades downwards */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,rgba(0,0,0,.35),transparent)]" />
        {/* top transition to darken boundary (match intensity with ModernCards) */}
        <div className="absolute top-0 left-0 right-0 " />
      </div>

      {/* Elegant corner mascot accent (bottom-left, md+ only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none hidden md:block absolute bottom-2 md:bottom-4 left-2 md:left-4 z-[5]"
        initial={{ opacity: 0, y: 90, rotate: 10 }}
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
            src={mascot2}
            alt=""
            priority={false}
            className="relative w-[200px] lg:w-[240px] xl:w-[280px] h-auto opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] select-none"
            sizes="(max-width: 1024px) 200px, (max-width: 1280px) 240px, 280px"
          />
        </motion.div>
      </motion.div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 text-white text-xs md:text-sm mb-5 backdrop-blur">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Amacımız
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Vizyon ve Misyonla Büyüyoruz</h2>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed">Eğitim, mentorluk ve toplulukla ivmelenen bir gelişim yolculuğu.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
            {/* Vizyon Card */}
            <motion.div
              className="group relative rounded-3xl p-[1.5px] bg-gradient-to-r from-white/30 via-white/10 to-transparent"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: -1 }}
            >
              <div className="relative rounded-3xl h-full w-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden">
                {/* playful gradient blob */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(0,0,0,0))' }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="px-12 py-8 md:px-14 md:py-10 lg:px-16 lg:py-12 text-left relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/10">
                      <Eye size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-white tracking-tight text-[clamp(1.75rem,3.2vw,2.5rem)]">Vizyon</h3>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-400/30 to-fuchsia-400/30 rounded-full mb-6 group-hover:w-28 transition-all"></div>
                  <p className="text-white/90 leading-relaxed text-[clamp(1.125rem,1.6vw,1.375rem)]">
                    Bireylerin potansiyellerini keşfederek global ölçekte kariyerlerini hızlandırmalarına ilham veren, yenilikçi ve sürdürülebilir bir topluluk ekosistemi yaratmak.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Misyon Card */}
            <motion.div
              className="group relative rounded-3xl p-[1.5px] bg-gradient-to-r from-white/30 via-white/10 to-transparent"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 1 }}
            >
              <div className="relative rounded-3xl h-full w-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden">
                {/* playful gradient blob */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.25), rgba(0,0,0,0))' }}
                  animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="px-12 py-8 md:px-14 md:py-10 lg:px-16 lg:py-12 text-left relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/10">
                      <Target size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-white tracking-tight text-[clamp(1.75rem,3.2vw,2.5rem)]">Misyon</h3>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-cyan-400/80 to-emerald-400/80 rounded-full mb-6 group-hover:w-28 transition-all"></div>
                  <p className="text-white/90 leading-relaxed text-[clamp(1.125rem,1.6vw,1.375rem)]">
                    Profesyonellere ve girişimcilere; networking, yetkinlik geliştirme, mentorluk ve kariyer fırsatları sunarak, onların hem kişisel hem de mesleki yolculuklarında güvenilir bir yol arkadaşı olmak.
                  </p>
                </div>
              </div>
            </motion.div>
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
