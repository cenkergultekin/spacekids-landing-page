'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, Play } from 'lucide-react'
import Image from 'next/image'
import BlurText from '@/components/ui/HeroTitle'
import underwater from '@/images/underwater01.webp'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [isMdUp, setIsMdUp] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const scrollToVideo = () => {
    const el = videoRef.current
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Only enable background animation on >= md (768px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsMdUp(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Underwater background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: isMdUp ? (y as unknown as number) : undefined }}>
        <Image
          src={underwater}
          alt="Underwater background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Darken background slightly for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Vignette to focus center content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.55)_100%)]" />
      </motion.div>
      {/* Bottom layered gradients for perfect soft blend into next section */}
      {/* Color blend toward next section color */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent via-[#2D398F]/80 to-[#2D398F] z-[14]" />
      {/* Feathered shadow for depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent via-black/30 to-transparent mix-blend-multiply z-[15]" />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-20">

          {/* Main Content Container */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Center Content */}
            <div className="text-center max-w-6xl mx-auto px-4 md:px-10 lg:px-24 xl:px-32 mt-8 md:mt-48">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 text-white text-xs md:text-sm mb-6 backdrop-blur">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Yeni nesil kariyer topluluğu
              </div>

              {/* Main Headline with single BlurText including Zap icon */}
              <BlurText
                as="h1"
                className="text-6xl md:text-7xl font-extrabold mb-6 md:mb-8 leading-tight tracking-tight justify-center text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]"
                elements={[
                  'Kariyerini', ' ', 'hızla', ' ', 'yükselt', ' ',
                  <span key="zap" className="relative inline-flex items-center"><Zap className="inline-block text-yellow-500 w-10 h-10 md:w-14 md:h-14 -mt-1 md:-mt-2" /></span>,
                  ' '
                ]}
                direction="top"
                delay={120}
              />
            
              {/* Subheading */}
              <motion.p 
                className="text-xl md:text-2xl text-slate-200/95 leading-relaxed font-medium mb-6 md:mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                 Senin gibi hedefleri olan insanlarla bir araya gel, destek al ve kariyerinde yeni kapılar aç. Birlikte daha yükseğe çıkıyoruz.
              </motion.p>

              {/* CTAs */}
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <a href="#apply" className="inline-flex items-center justify-center rounded-full px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-emerald-500/20 hover:from-cyan-400 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition">
                  Hemen Başvur
                </a>
                <button type="button" onClick={scrollToVideo} className="inline-flex items-center justify-center rounded-full px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur transition">
                  Tanıtımı İzle
                </button>
              </div>

              {/* Stats Bar */}
              <div className="mt-6 md:mt-8 flex items-center justify-center">
                <div className="inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-full px-5 py-3 md:px-6 md:py-3.5 bg-white/5 ring-1 ring-white/10 backdrop-blur text-sm text-white/90">
                  <div className="flex items-center gap-2"><span className="font-bold text-white">10K+</span><span>Üye</span></div>
                  <div className="hidden md:block h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2"><span className="font-bold text-white">95%</span><span>Memnuniyet</span></div>
                  <div className="hidden md:block h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2"><span className="font-bold text-white">200+</span><span>Mentor</span></div>
                </div>
              </div>
            </div>

            {/* Side images removed */}
          </div>

          {/* Video Section */}
          <motion.div 
            ref={videoRef}
            className="max-w-4xl mx-auto mt-[32vh] md:mt-[20vh] lg:mt-[8vh]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-medium mb-2">Örnek Video Yüklenecek</p>
                  <p className="text-gray-300 text-sm">Buraya yapay zeka ile oluşturulacak bir video yüklenecek</p>
                </div>
              </div>
              {/* Subtle top highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-neonYellow-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm font-medium">SpaceYouth Demo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
