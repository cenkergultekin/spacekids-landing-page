'use client'

import { motion } from 'framer-motion'

export default function ModernCardsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
            Toplulukla öğren, kariyerinde fark yarat
            <span className="text-4xl">🚀</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Birlikte öğrenmenin gücüyle kariyer yolculuğunu şekillendir.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Topluluk Desteği Card */}
          <motion.div
            className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-darkBlue-400 via-darkBlue-500 to-primary-500 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative rounded-2xl h-full w-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-darkBlue-500/10 via-transparent to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-darkBlue-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Topluluk Desteği</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    Seninle aynı hedefleri paylaşan insanlarla yan yana.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Paylaş, sor, öğren — çünkü birlikte daha güçlüyüz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Becerilerini Geliştir Card */}
          <motion.div
            className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-pink-400 via-pink-500 to-neonYellow-400 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative rounded-2xl h-full w-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-neonYellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-neonYellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Becerilerini Geliştir</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    Atölyeler, eğitimler ve kaynaklarla yetkinliklerini artır.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Her gün yeni şeyler öğren, kariyerinde fark yarat.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kariyer Fırsatları Card */}
          <motion.div
            className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-neonYellow-400 via-primary-400 to-darkBlue-400 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative rounded-2xl h-full w-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neonYellow-500/10 via-primary-500/10 to-darkBlue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 lg:p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-neonYellow-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-gray-800 text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kariyer Fırsatları</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    Özel iş ilanları ve proje fırsatlarına erişim.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Hayalini kurduğun pozisyonlara bir adım daha yaklaş.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
