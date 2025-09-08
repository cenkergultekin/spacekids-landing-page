'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import certificate from '@/images/certificate.jpg'

export default function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const getStep = () => {
    const el = scrollRef.current
    if (!el) return 0
    const first = el.children[0] as HTMLElement | undefined
    const second = el.children[1] as HTMLElement | undefined
    // Prefer exact offset delta between first two slides (includes gap)
    if (first && second) {
      const delta = second.offsetLeft - first.offsetLeft
      if (delta > 0) return delta
    }
    // Fallback per viewport estimate
    const w = el.clientWidth
    const perView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1)
    return Math.max(1, Math.floor(w / perView))
  }

  const updateButtons = () => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const x = el.scrollLeft
    const eps = 4
    setCanPrev(x > eps)
    setCanNext(x < max - eps)
  }

  const scrollByStep = (dir: number) => {
    const el = scrollRef.current
    if (!el) return
    const step = getStep()
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
    // optimistic update; will be corrected by scroll handler
    requestAnimationFrame(updateButtons)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateButtons()
    const onScroll = () => updateButtons()
    el.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => updateButtons()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="w-full max-w-[100rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sertifikalar
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
           Öğrenme deneyiminizi sektörde geçerli sertifikalarla destekleyin.
          </p>
        </motion.div>
        {/* Certificate Slider */}
        <div className="relative">
          {/* Controls */}
          <button
            type="button"
            aria-label="Öncekiler"
            onClick={() => scrollByStep(-1)}
            aria-disabled={!canPrev}
            disabled={!canPrev}
            className={`flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition ${!canPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="sr-only">Öncekiler</span>
            {/* Simple arrow */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            type="button"
            aria-label="Sonrakiler"
            onClick={() => scrollByStep(1)}
            aria-disabled={!canNext}
            disabled={!canNext}
            className={`flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition ${!canNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="sr-only">Sonrakiler</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* Track */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-6 md:gap-8 px-2 md:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Array(6).fill(certificate).map((img, index) => (
              <motion.div
                key={index}
                className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="group relative rounded-3xl bg-white/20 backdrop-blur-sm border border-white/20">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-white/20 bg-white/10 shadow-xl">
                    <Image
                      src={img}
                      alt={`Sertifika ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={index < 3}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements replaced with subtle glows above */}
    </section>
  )
}
