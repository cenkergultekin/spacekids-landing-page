'use client'

import Image from 'next/image'
import astronautPng from '@/images/Entire_Saturn.png'
import frameTop from '@/images/frametop.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={frameTop}
        alt="Background stars"
        fill
        priority
        className="object-cover object-top -z-10 select-none pointer-events-none"
      />

      {/* Astronaut at right - fills right half of the screen */}
      <div className="absolute inset-y-0 right-0 w-5/12 hidden md:block">
        <Image
          src={astronautPng}
          alt="Astronaut"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 md:pt-44 md:pb-24 flex items-center">
        {/* Text at left */}
        <div className="relative z-10 mr-auto w-full md:w-1/2 text-left text-white md:pr-10 -ml-2 md:-ml-8 mt-8 md:mt-16">
          <div className="flex items-center justify-start gap-4 mb-8">
            <span className="hidden md:block h-px w-20 bg-white/90" />
            <span className="text-cyan-100 tracking-[0.35em] text-sm md:text-base uppercase">To The Space</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-wider leading-none">NEOWISE</h1>

          <div className="flex justify-start mt-3 mb-6">
            <span className="h-[3px] w-24 md:w-80 bg-cyan-300" />
          </div>

          <p className="max-w-md md:max-w-lg text-slate-200/90 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  )
}
