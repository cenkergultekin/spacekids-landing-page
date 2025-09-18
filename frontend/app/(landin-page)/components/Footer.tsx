'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
 

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]
  const navLinks = [
    { label: "Ana Sayfa", href: "#" },
    { label: "Hakkımızda", href: "#about" },
    { label: "SSS", href: "#faq" },
    { label: "İletişim", href: "#contact" },
  ]

  return (
    <footer ref={ref} className="relative overflow-hidden text-white bg-black">
      {/* Bottom-attached gradient background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-20vh] z-[5]">
        {/* Bottom gradient glow */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[70vh] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(168,85,247,0.55)_0%,rgba(168,85,247,0.34)_35%,rgba(168,85,247,0.18)_55%,transparent_88%)] blur-[100px] opacity-100"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-end gap-2">
              <span className="text-xl tracking-widest font-semibold">SpaceKids</span>
            </div>
            <h3 className="mt-4 text-lg md:text-xl font-semibold">Hadi bir şeyler yapalım — bizimle iletişime geçin!</h3>
            <p className="mt-3 text-sm text-white/70 max-w-md">
              Kısa bir açıklama metni. Uzay temalı deneyimler ve öğrenme için basit ve etkili çözümler.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold tracking-wider text-white/80">NAVIGASYON</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <a className="text-white/80 hover:text-white transition-colors" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h4 className="text-sm font-semibold tracking-wider text-white/80">İLETİŞİM</h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-3">
              <a href="tel:+15551234567" className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-3 hover:border-white/30 hover:bg-white/10 transition-colors">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/60">Telefon</p>
                  <p className="text-sm text-white">+1 (555) 123-4567</p>
                </div>
              </a>
              <a href="mailto:sedanurceylan@dreamdatalabs.com" className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-3 hover:border-white/30 hover:bg-white/10 transition-colors">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/60">E-posta</p>
                  <p className="text-sm text-white">sedanurceylan@dreamdatalabs.com</p>
                </div>
              </a>
              <div className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/60">Adres</p>
                  <p className="text-sm text-white">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="my-8 h-px w-full bg-white/15" />

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>SpaceKids Landing</p>
          <p>Copyright © 2025 DreamData Labs. Tüm hakları saklıdır.</p>
        </motion.div>
      </div>
    </footer>
  )
}