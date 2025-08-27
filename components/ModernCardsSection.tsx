'use client'

import { motion } from 'framer-motion'

export default function ModernCardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* FOR BUSINESSES Card */}
          <motion.div
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Topluluk Desteği</h3>
              <p className="text-gray-600 mb-6">
                •Seninle aynı hedefleri paylaşan insanlarla yan yana. <br />
                •Paylaş, sor, öğren — çünkü birlikte daha güçlüyüz.
              </p>
            </div>

            {/* Generic Dashboard Mockup */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Daha fazla bilgi edin →
            </button>
          </motion.div>

          {/* FOR EMPLOYEES Card */}
          <motion.div
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Becerilerini Geliştir</h3>
              <p className="text-gray-600 mb-6">
                •Atölyeler, eğitimler ve kaynaklarla yetkinliklerini artır. <br />
                •Her gün yeni şeyler öğren, kariyerinde fark yarat..
              </p>
            </div>

            {/* Generic Mobile App Mockup */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Daha fazla bilgi edin →
            </button>
          </motion.div>

          {/* FOR JOB SEEKERS Card */}
          <motion.div
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kariyer Fırsatları</h3>
              <p className="text-gray-600 mb-6">
                •Özel iş ilanları ve proje fırsatlarına erişim.”
                •Hayalini kurduğun pozisyonlara bir adım daha yaklaş.”
              </p>
            </div>

            {/* Generic Job Search Mockup */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Daha fazla bilgi edin →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
