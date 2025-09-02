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

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[#2D398F] text-white">
      {/* Background ornaments (brand system) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* vignette: top darker, fades downwards */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,rgba(0,0,0,.35),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Card Only */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 mb-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-darkBlue-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />

          <h3 className="text-2xl font-semibold mb-6">İletişime Geçin</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.a
              href="mailto:sedanurceylan@dreamdatalabs.com"
              className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 hover:border-white/40 hover:bg-white/15 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-white/70">E-posta</p>
                <p className="text-sm text-white">sedanurceylan@dreamdatalabs.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 hover:border-white/40 hover:bg-white/15 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-white/70">Telefon</p>
                <p className="text-sm text-white">+1 (555) 123-4567</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-white/70">Adres</p>
                <p className="text-sm text-white">İstanbul, Türkiye</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + index * 0.08 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-white/20 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-white/70 text-sm">
            2025 DreamData Labs. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}