'use client'

import React from 'react'
import Image from 'next/image'
import img1 from '../../../images/card1.jpg'
import img2 from '../../../images/card2.jpg'
import img3 from '../../../images/card3.jpg'
import LogoLoop from '@/components/ui/logo_loop'
import { SiReact as SiReactIcon, SiNextdotjs as SiNextIcon, SiTypescript as SiTsIcon, SiTailwindcss as SiTwIcon } from 'react-icons/si'

export default function ModernCardsSection() {
  const iconClass = 'text-[#959595]/30'
  const IconReact = SiReactIcon as unknown as React.ComponentType<any>
  const IconNext = SiNextIcon as unknown as React.ComponentType<any>
  const IconTs = SiTsIcon as unknown as React.ComponentType<any>
  const IconTw = SiTwIcon as unknown as React.ComponentType<any>

  const techLogos = [
    { node: React.createElement(IconReact, { size: 100, className: iconClass }), title: 'React', href: 'https://react.dev' },
    { node: React.createElement(IconNext, { size: 100, className: iconClass }), title: 'Next.js', href: 'https://nextjs.org' },
    { node: React.createElement(IconTs, { size: 100, className: iconClass }), title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: React.createElement(IconTw, { size: 100, className: iconClass }), title: 'Tailwind CSS', href: 'https://tailwindcss.com' }
  ]
  return (
    <section className="relative min-h-[75vh] md:min-h-screen overflow-hidden bg-black">
      {/* Logo loop (preserved) */}
      <div className="bg-[#0f0f0f] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pt-6">
        <div className="w-full mx-auto">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={100}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            className="py-1"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
          <div className="flex md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 text-white px-4 py-2 text-sm tracking-wide">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              OUR BLOG
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white text-center md:text-left">
            NOTES FROM
            <br />
            THE COSMOS
          </h2>

          <div className="text-white/80 max-w-md md:ml-auto">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-3 text-white hover:text-white/80">
              <span className="font-semibold">Read More</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/30">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[97rem] px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <article className="group relative rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-in-out hover:ring-white/20 shadow-none hover:shadow-xl hover:shadow-black/30">
            <div className="aspect-[3/4] relative">
              <Image src={img1} alt="Why astronomy inspires future sky watchers" fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]" />
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <div className="rounded-b-3xl bg-[#151515]/85 backdrop-blur-sm px-6 py-4 text-white transition-colors duration-700 ease-in-out">
                <p className="text-[11px] uppercase tracking-wider text-white/60 mb-2">August 14, 2025 | By <span className="text-white/80 font-semibold">KTPRO</span></p>
                <h3 className="text-[17px] font-semibold leading-snug tracking-wide">
                  WHY ASTRONOMY INSPIRES FUTURE SKY WATCHERS
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-white/70 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group relative rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-in-out hover:ring-white/20 shadow-none hover:shadow-xl hover:shadow-black/30">
            <div className="aspect-[3/4] relative">
              <Image src={img2} alt="Planets up close: meet our solar neighbors" fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]" />
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <div className="rounded-b-3xl bg-[#151515]/85 backdrop-blur-sm px-6 py-4 text-white transition-colors duration-700 ease-in-out">
                <p className="text-[11px] uppercase tracking-wider text-white/60 mb-2">August 14, 2025 | By <span className="text-white/80 font-semibold">KTPRO</span></p>
                <h3 className="text-[17px] font-semibold leading-snug tracking-wide">
                  PLANETS UP CLOSE: MEET OUR SOLAR NEIGHBORS
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-white/70 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group relative rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-in-out hover:ring-white/20 shadow-none hover:shadow-xl hover:shadow-black/30">
            <div className="aspect-[3/4] relative">
              <Image src={img3} alt="The myths behind famous constellations" fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]" />
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <div className="rounded-b-3xl bg-[#151515]/85 backdrop-blur-sm px-6 py-4 text-white transition-colors duration-700 ease-in-out">
                <p className="text-[11px] uppercase tracking-wider text-white/60 mb-2">August 14, 2025 | By <span className="text-white/80 font-semibold">KTPRO</span></p>
                <h3 className="text-[17px] font-semibold leading-snug tracking-wide">
                  THE MYTHS BEHIND FAMOUS CONSTELLATIONS
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-white/70 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}