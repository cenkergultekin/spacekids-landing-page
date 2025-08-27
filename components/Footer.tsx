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
    <footer ref={ref} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Card Only */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/70 to-gray-900/30 p-8 mb-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

          <h3 className="text-2xl font-semibold mb-6">İletişime Geçin</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.a
              href="mailto:sedanurceylan@dreamdatalabs.com"
              className="group flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-800/40 p-4 hover:border-primary-600 hover:bg-gray-800/60 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">E-posta</p>
                <p className="text-sm text-white">sedanurceylan@dreamdatalabs.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              className="group flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-800/40 p-4 hover:border-primary-600 hover:bg-gray-800/60 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">Telefon</p>
                <p className="text-sm text-white">+1 (555) 123-4567</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-800/40 p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">Adres</p>
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
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600/80 transition-colors"
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
          className="text-center pt-8 border-t border-gray-800 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 DreamData Labs. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
