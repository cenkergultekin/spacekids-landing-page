'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Eye, Target } from 'lucide-react'
import Image from 'next/image'
import Squirrel from '../images/Sincap.png'

export default function CustomerSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>

      {/* Hanging Squirrel - top-right */}
      <motion.div
        className="absolute -top-8 right-4 z-20 pointer-events-none select-none"
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [-4, 4, -4], y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* rope */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[3px] h-12 bg-white/50" />
        <Image
          src={Squirrel}
          alt="Sarkılan sincap"
          className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          priority
          sizes="(max-width: 768px) 180px, (max-width: 1024px) 280px, 320px"
          style={{ height: 'auto', width: 'auto' }}
          width={320}
          height={320}
        />
      </motion.div>



      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Quote Icon */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Quote size={40} className="text-white" />
            </div>
          </motion.div>

          {/* Vision & Mission Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Vizyon Card */}
            <motion.div
              className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-violet-400/440 via-fuchsia-400/30 to-cyan-400/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: -1 }}
            >
              <div className="relative rounded-3xl h-full w-full bg-white/[0.06] backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                {/* playful gradient blob */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(0,0,0,0))' }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="p-8 lg:p-10 text-left relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/10">
                      <Eye size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">Vizyon</h3>
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-violet-400/80 to-fuchsia-400/80 rounded-full mb-6 group-hover:w-20 transition-all"></div>
                  <p className="text-white/90 leading-relaxed text-lg lg:text-xl">
                    Bireylerin potansiyellerini keşfederek global ölçekte kariyerlerini hızlandırmalarına ilham veren, yenilikçi ve sürdürülebilir bir topluluk ekosistemi yaratmak.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Misyon Card */}
            <motion.div
              className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-cyan-400/440 via-sky-400/30 to-emerald-400/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 1 }}
            >
              <div className="relative rounded-3xl h-full w-full bg-white/[0.06] backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                {/* playful gradient blob */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.25), rgba(0,0,0,0))' }}
                  animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="p-8 lg:p-10 text-left relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/10">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">Misyon</h3>
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-cyan-400/80 to-emerald-400/80 rounded-full mb-6 group-hover:w-20 transition-all"></div>
                  <p className="text-white/90 leading-relaxed text-lg lg:text-xl">
                    Profesyonellere ve girişimcilere; networking, yetkinlik geliştirme, mentorluk ve kariyer fırsatları sunarak, onların hem kişisel hem de mesleki yolculuklarında güvenilir bir yol arkadaşı olmak.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Customer Info */}
          <motion.div
            className="text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >

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
