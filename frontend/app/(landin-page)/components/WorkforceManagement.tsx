"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

// 9 görsel için import'lar
import card1 from "@/images/card1.jpg"
import card2 from "@/images/card2.jpg"
import card3 from "@/images/card3.jpg"
import saturn from "@/images/saturn.jpg"
import space from "@/images/space.jpg"
import token01 from "@/images/token01.webp"
import token02 from "@/images/token02.webp"
import workshop01 from "@/images/workshop01.webp"
import astronaut from "@/images/astronot1.png"

type Card = {
  image: string
  title: string
  description: string
}

export default function PlatformFeatures() {
  const cards: Card[] = useMemo(
    () => [
      { image: (card1 as unknown as { src: string }).src || (card1 as any), title: "Başlık 1", description: "Kısa bir açıklama metni buraya gelecek." },
      { image: (card2 as unknown as { src: string }).src || (card2 as any), title: "Başlık 2", description: "Örnek açıklama; detayları burada gösterebiliriz." },
      { image: (card3 as unknown as { src: string }).src || (card3 as any), title: "Başlık 3", description: "Kullanıcıya ek bilgi veren kısa metin." },
      { image: (saturn as unknown as { src: string }).src || (saturn as any), title: "Satürn", description: "Halkalı gezegene dair vurgular." },
      { image: (space as unknown as { src: string }).src || (space as any), title: "Uzay", description: "Karanlık boşlukta yıldızlar ve keşif." },
      { image: (token01 as unknown as { src: string }).src || (token01 as any), title: "Token 01", description: "Koleksiyon için örnek kart açıklaması." },
      { image: (token02 as unknown as { src: string }).src || (token02 as any), title: "Token 02", description: "Alternatif bir kart açıklaması." },
      { image: (workshop01 as unknown as { src: string }).src || (workshop01 as any), title: "Atölye", description: "Eğitim ve atölye içerikleri." },
      { image: (astronaut as unknown as { src: string }).src || (astronaut as any), title: "Astronot", description: "Macera başlıyor: keşfe hazır mısın?" },
    ],
    []
  )

  // Responsive: mobile'de tek kart, desktop'ta 3 kart göster
  const [isMobile, setIsMobile] = useState(false)
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const pages = useMemo(() => (isMobile ? cards.map((c) => [c]) : [cards.slice(0, 3), cards.slice(3, 6), cards.slice(6, 9)]), [cards, isMobile])
  const totalPages = pages.length

  const goPrev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages])
  const goNext = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages])

  // Klavye ile yön tuşları
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goPrev, goNext])

  // Autoplay: belli aralıklarla otomatik ileri
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      goNext()
    }, 3500)
    return () => clearInterval(id)
  }, [goNext, paused])

  // Touch swipe için basit handler'lar
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true)
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current != null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current
    }
  }
  const onTouchEnd = () => {
    const threshold = 50
    if (touchDeltaX.current > threshold) {
      goPrev()
    } else if (touchDeltaX.current < -threshold) {
      goNext()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    // küçük bir gecikme ile autoplay'i geri aç
    setTimeout(() => setPaused(true), 400)
  }

  return (
    <section className="pf-root" aria-label="Platform features full-screen carousel">
      {/* Slider viewport */}
      <div
        className="pf-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="pf-track"
          style={{ transform: `translateX(-${page * 100}vw)`, width: `${pages.length * 100}vw` }}
        >
          {pages.map((group, idx) => (
            <div className="pf-page" key={idx} aria-roledescription="slide" aria-label={`Sayfa ${idx + 1} / ${totalPages}`}>
              {group.map((c, i) => (
                <article className="pf-card" key={`${idx}-${i}`} style={{ backgroundImage: `url(${c.image})` }}>
                  <div className="pf-overlay" />
                  <div className="pf-content">
                    <h3 className="pf-heading">{c.title}</h3>
                    <p className="pf-desc">{c.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button className="pf-arrow pf-left" aria-label="Önceki" onClick={goPrev}>
        <span>❮</span>
      </button>
      <button className="pf-arrow pf-right" aria-label="Sonraki" onClick={goNext}>
        <span>❯</span>
      </button>

      {/* Dots */}
      <div className="pf-dots" role="tablist" aria-label="Sayfa göstergeleri">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={page === i}
            className={`pf-dot ${page === i ? "active" : ""}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>

      <style jsx>{`
        .pf-root {
          position: relative;
          width: 100%;
          height: 86vh;
          overflow: hidden;
          background: #000;
          color: #fff;
        }
        .pf-viewport {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .pf-track {
          display: flex;
          width: 300vw; /* JS ile override ediliyor */
          height: 100%;
          transition: transform 500ms ease;
        }
        .pf-page {
          width: 100vw; /* her sayfa tam ekran */
          height: 100%;
          display: flex;
          align-items: center; /* kartları dikeyde ortala */
        }
        .pf-card {
          flex: 1 0 33.3333%;
          height: 80%; /* fotoğrafı biraz kısalt */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* kartlar arası boşluk yok */
          position: relative;
          isolation: isolate;
        }
        .pf-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.35));
          z-index: 1;
          transition: background 220ms ease;
        }
        .pf-card:hover .pf-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
        }

        .pf-content {
          position: absolute;
          inset: auto 0 20px 0;
          z-index: 2;
          padding: 14px 18px;
          color: #fff;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 220ms ease, transform 220ms ease;
          pointer-events: none;
        }
        .pf-heading { font-weight: 700; font-size: 18px; letter-spacing: 0.2px; }
        .pf-desc { margin-top: 6px; font-size: 14px; color: rgba(255,255,255,0.9); line-height: 1.5; }
        .pf-card:hover .pf-content { opacity: 1; transform: translateY(0); }

        .pf-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.25);
          display: grid;
          place-items: center;
          color: #fff;
          cursor: pointer;
          z-index: 5;
          backdrop-filter: blur(2px);
          transition: background 160ms ease, transform 160ms ease;
        }
        .pf-arrow:hover { background: rgba(255,255,255,0.22); }
        .pf-arrow:active { transform: translateY(-50%) scale(0.98); }
        .pf-left { left: 12px; }
        .pf-right { right: 12px; }

        .pf-dots {
          position: absolute;
          left: 50%;
          bottom: 5%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 6;
        }
        .pf-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
        }
        .pf-dot.active { background: #fff; }

        @media (max-width: 768px) {
          .pf-card { flex-basis: 100%; height: 76%; }
          .pf-left { left: 8px; }
          .pf-right { right: 8px; }
          /* Mobilde içerik her zaman görünsün */
          .pf-content { opacity: 1; transform: none; }
          .pf-overlay { background: linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55)); }
        }
      `}</style>
    </section>
  )
}