'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import token01 from '@/images/token01.webp'
import token02 from '@/images/token02.webp'
import workshop from '@/images/workshop01.webp'

export default function WorkforceManagement() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)

  // Scroll-jacking: keep section sticky, drive active by progress
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })

  const features = [
    {
      title: 'Eğitimler',
      blurb:
        "İş ilanlarını atlayın, topluluk içindeki eğitim ve kaynaklara hızlıca erişin. Yeni arkadaşlar edinin, yeteneklerinizi geliştirin ve birlikte öğrenmenin gücünü keşfedin.",
      image:
        token01.src,
    },
    {
      title: 'Kariyer Yolları',
      blurb:
        'Tüm ihtiyaçlarınız tek bir yerde – yeni katılımcı rehberlerinden eğitim takibi, performans değerlendirmesi ve raporlamaya kadar.',
      image:
        token02.src,
    },
    {
      title: 'Workshop Etkinlikleri',
      blurb:
        'Otomatik hesaplamalar, uyumlu bordrolar ve akıllı bilgiler – zahmetsiz ve hızlı.',
      image:
        workshop.src,
    },
    {
      title: 'İş Fırsatları',
      blurb:
        'Takımlara iletişim, geri bildirim ve takdir için keyifli araçlar sunun; bağlılığı yüksek tutun.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'K-Coin Fırsatları',
      blurb:
        'Akıllı programları dakikalar içinde oluşturun. Katılım, uygunluk ve kaynak kullanımını otomatik dengeleyin.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Sertifikalar',
      blurb:
        'Sağlık, emeklilik ve avantajları tek bir yerde toplayın. Kaydolun, uygunluğu takip edin ve topluluğu bilgilendirin.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Lider Tablosu',
      blurb:
        'Web veya mobil üzerinden doğru zaman kayıtları tutun. Onaylar, fazla mesai kuralları ve proje maliyetlendirmesi entegre olarak gelir.',
      image:
        'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Notlar',
      blurb:
        'Web veya mobil üzerinden doğru zaman kayıtları tutun. Onaylar, fazla mesai kuralları ve proje maliyetlendirmesi entegre olarak gelir.',
      image:
        'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Topluluk',
      blurb:
        'Web veya mobil üzerinden doğru zaman kayıtları tutun. Onaylar, fazla mesai kuralları ve proje maliyetlendirmesi entegre olarak gelir.',
      image:
        'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  // Map scroll progress to active index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (p) => {
      // p: 0..1 across wrapper height; split into equal segments per feature
      // Use floor to avoid jitter near boundaries
      const idx = Math.min(features.length - 1, Math.floor(p * features.length + 0.0001))
      setActive(idx)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // When a dot is clicked, also scroll the document to the matching segment
  const scrollToFeature = (i: number) => {
    const el = wrapperRef.current
    if (!el) {
      setActive(i)
      return
    }
    const rect = el.getBoundingClientRect()
    const wrapperTop = window.scrollY + rect.top
    const wrapperHeight = el.offsetHeight
    // position at the start of the i-th segment (slightly inside to avoid boundary jitter)
    const p = Math.min(1, Math.max(0, (i + 0.01) / features.length))
    const targetY = Math.round(wrapperTop + p * wrapperHeight)
    setActive(i)
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  return (
    <div ref={wrapperRef} className="relative min-h-[300vh] bg-[#2D398F]">
      {/* Background ornaments (brand system) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* vignette: darkens downward */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.35))]" />
        {/* bottom transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 " />
      </div>

      {/* Sticky full-viewport content; screen stays fixed while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Başlık */}
          <div className="text-center pt-16 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">SpaceYouth Akademi</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-center mb-12">Kaydırdıkça sol içerik ve sağ görsel değişir, ekran sabit kalır.</p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-center flex-1">
            {/* Sol: Aktif özelliğin içeriği */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-[20rem] sm:max-w-none">
                <motion.h3
                  key={`title-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-2xl font-semibold text-white"
                >
                  {features[active].title}
                </motion.h3>
                <motion.p
                  key={`blurb-${active}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="mt-2 text-white/80 text-lg leading-relaxed"
                >
                  {features[active].blurb}
                </motion.p>

                {/* Progress / dots */}
                <div className="mt-8 flex items-center gap-2">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToFeature(i)}
                      aria-label={`Göster ${i + 1}. özellik`}
                      className={`h-2 w-8 rounded-full transition-all ${
                        active === i ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                  <ArrowRight className="ml-3 text-white/50" />
                </div>
              </div>
            </div>

            {/* Sağ: Sabit büyük görsel alanı */}
            <div className="lg:col-span-7 lg:justify-self-end w-full">
              <div className="relative w-full h-[58vh] md:h-[64vh] lg:h-[70vh] rounded-3xl overflow-hidden ring-1 ring-black/5 bg-gray-100 shadow-lg">
                {features.map((f, i) => (
                  <motion.img
                    key={f.title}
                    src={f.image}
                    alt={f.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.02 }}
                    transition={{ duration: 0.45 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
