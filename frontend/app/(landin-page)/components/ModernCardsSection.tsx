'use client'

import Image from 'next/image'
import spaceImg from '../../../images/space.jpg'
import frameBot from '@/images/framebot.png'

export default function ModernCardsSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-screen overflow-hidden">
      {/* Background image (bottom frame) */}
      <Image
        src={frameBot}
        alt="Background frame"
        fill
        priority
        className="object-cover object-bottom -z-10 select-none pointer-events-none"
      />
      {/* Top Logos Row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center gap-10 md:gap-14">
          <BrandLogo />
          <BrandLogo text="LOGO IPSUM" compact />
          <BrandLogo text="LOGOIPSUM" bars />
          <BrandLogo text="LOGO IPSUM" pill />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Circular Image with curved text */}
        <div className="relative mx-auto md:mx-0 w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
          <div className="absolute inset-0 rounded-full ring-4 ring-white/20" />
          <div className="absolute inset-4 rounded-full overflow-hidden">
            <Image src={spaceImg} alt="Neowise" fill className="object-cover" priority />
          </div>
          {/* Curved text around circle */}
          <svg viewBox="0 0 400 400" className="absolute -inset-6 text-white/90">
            <defs>
              <path id="curve" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" />
            </defs>
            <text className="font-semibold tracking-[0.2em]" fontSize="16" fill="currentColor">
              <textPath href="#curve" startOffset="5%">Where Astronomy Meets Infinite Possibilities • </textPath>
            </text>
          </svg>
        </div>

        {/* Right: Text content */}
        <div className="md:pl-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-10 bg-white/60" />
            <span className="uppercase tracking-[0.3em] text-sm text-white/80">About Neowise</span>
            <span className="h-[1px] flex-1 bg-white/60" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-5">
            Get To Know More
            <br />
            About Neowise
          </h2>
          <p className="text-white/80 leading-relaxed max-w-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-white px-6 py-3 font-medium shadow-lg shadow-cyan-500/20 transition-colors"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">🔭</span>
            Get To know More
          </a>
        </div>
      </div>
    </section>
  )
}

function BrandLogo({ text = 'logoipsum', compact = false, bars = false, pill = false }: { text?: string; compact?: boolean; bars?: boolean; pill?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${pill ? 'px-6 py-3 rounded-full ring-1 ring-white/20' : ''}`}>
      <span className="inline-grid place-items-center h-8 w-8 rounded-full ring-1 ring-white/20 text-white/90">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3a7 7 0 1 1-7 7 7 7 0 0 1 7-7Z" />
        </svg>
      </span>
      <span className={`text-white/90 ${compact ? 'tracking-widest' : 'tracking-[0.25em]'} uppercase font-semibold`}>
        {text}
      </span>
      {bars && (
        <span className="flex items-end gap-0.5 text-white/70">
          <i className="block h-4 w-0.5 bg-current" />
          <i className="block h-3 w-0.5 bg-current" />
          <i className="block h-5 w-0.5 bg-current" />
        </span>
      )}
    </div>
  )
}