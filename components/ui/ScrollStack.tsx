"use client";
import React, { useEffect, useRef, useState } from "react";

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  content?: React.ReactNode;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const defaultBackgrounds = [
  "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
  "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
  "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
];

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-transparent",
  cardHeight = "65vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 3,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const cardCount = Math.min(cards.length, 5);

  const cardStyle = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: "20px",
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: intersectionThreshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !cardsContainerRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          const sectionTop = sectionRect.top; // relative to viewport
          const sectionHeight = sectionRef.current.offsetHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
            progress = Math.abs(sectionTop) / scrollableDistance;
          } else if (sectionTop <= 0) {
            progress = 1;
          }

          let newActiveIndex = 0;
          const progressPerCard = 1 / cardCount;
          for (let i = 0; i < cardCount; i++) {
            if (progress >= progressPerCard * (i + 1)) {
              newActiveIndex = i + 1;
            }
          }

          setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);

  const getCardTransform = (index: number) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const scale = 0.9 + index * 0.05;
    let translateY = "100px";

    if (isVisible) {
      translateY = `${90 - index * 30}px`;
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : "none",
    };
  };

  return (
    <section className={`relative w-full ${className}`}>
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${sectionHeightMultiplier * 85}vh` }}
      >
        <div
          className={`sticky top-0 w-full h-screen flex items-center 
            justify-center overflow-hidden ${backgroundColor}`} // Applied as a Tailwind class
        >
          <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
            <div
              ref={cardsContainerRef}
              className="relative w-full max-w-5xl mx-auto flex-shrink-0"
              style={{ height: cardHeight, maxHeight: "640px" }}
            >
              {cards.slice(0, 5).map((card, index) => {
                const cardTransform = getCardTransform(index);
                const backgroundImage =
                  card.backgroundImage ||
                  defaultBackgrounds[index % defaultBackgrounds.length];

                return (
                  <div
                    key={index}
                    className={`absolute z-50 overflow-hidden shadow-xl 
                      transition-all duration-300`}
                    style={{
                      ...cardStyle,
                      top: 0,
                      left: "50%",
                      transform: `translateX(-50%) ${cardTransform.transform}`,
                      width: "100%",
                      maxWidth: "100%",
                      opacity: cardTransform.opacity,
                      zIndex: cardTransform.zIndex,
                      pointerEvents:
                        cardTransform.pointerEvents as React.CSSProperties["pointerEvents"],
                    }}
                  >
                    <div
                      className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80"
                      style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "overlay",
                      }}
                    />

                    {card.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                          <span className="text-sm font-medium">
                            {card.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Step indicator */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur">
                        {index + 1} / {cardCount}
                      </div>
                    </div>

                    <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                      {card.content ? (
                        card.content
                      ) : (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                          {/* Mock App Window */}
                          <div className="relative bg-white/80 backdrop-blur rounded-xl border border-white/30 shadow-lg overflow-hidden">
                            {/* Browser chrome */}
                            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200/60 bg-gray-50/80">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-neonYellow-500" />
                              </div>
                              <div className="text-[10px] sm:text-xs text-gray-500 font-medium truncate max-w-[60%]">
                                app.spacekids.dev/{(card.title || "").toLowerCase().replace(/\s+/g, "-")}
                              </div>
                              <div className="w-8" />
                            </div>
                            {/* Window body */}
                            <div className="p-3 sm:p-4">
                              <div className="grid grid-cols-5 gap-3">
                                {/* Sidebar */}
                                <div className="col-span-1 space-y-2">
                                  <div className="h-8 rounded-md bg-gray-200/80" />
                                  <div className="h-6 rounded-md bg-gray-100" />
                                  <div className="h-6 rounded-md bg-gray-100" />
                                  <div className="h-6 rounded-md bg-gray-100" />
                                  <div className="h-6 rounded-md bg-gray-100" />
                                </div>
                                {/* Content */}
                                <div className="col-span-4 space-y-3">
                                  <div className="h-8 rounded-md bg-gray-200/80 w-2/3" />
                                  <div className="grid grid-cols-3 gap-3">
                                    <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100" />
                                    <div className="h-24 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100" />
                                    <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100" />
                                  </div>
                                  <div className="h-32 rounded-lg bg-gray-100" />
                                  <div className="flex gap-2">
                                    <div className="h-9 px-3 rounded-md bg-indigo-600 text-white text-xs font-medium inline-flex items-center">Kaydet</div>
                                    <div className="h-9 px-3 rounded-md bg-white border text-gray-700 text-xs font-medium inline-flex items-center">İptal</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Text content */}
                          <div className="text-white">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                              {card.title}
                            </h3>
                            {card.subtitle && (
                              <p className="text-white/85 text-base md:text-lg mb-4">
                                {card.subtitle}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 mb-5">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/15 border border-white/20">
                                Ölçeklenebilir
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/15 border border-white/20">
                                Güvenli
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/15 border border-white/20">
                                Kolay Entegrasyon
                              </span>
                            </div>
                            <div className="flex gap-3">
                              <button className="px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-white/90 transition">
                                Hemen Dene
                              </button>
                              <button className="px-4 py-2 rounded-lg bg-white/15 border border-white/25 text-white text-sm font-semibold hover:bg-white/20 transition">
                                Daha Fazla
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom progress dots */}
            <div className="relative mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: cardCount }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i <= activeCardIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
