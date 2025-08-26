'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Plus, Minus } from 'lucide-react'

export default function WorkforceManagement() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [active, setActive] = useState<number>(-1) // all closed by default

  const features = [
    {
      title: 'Hiring',
      blurb:
        "Skip the job ads and jump straight to shortlists of matched candidates. Cut hours of screening time and slash thousands from your recruitment budget with our all‑in‑one solution.",
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'All-in-one HR software',
      blurb:
        'Everything you need in one place – from onboarding and leave to performance and reporting.',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Intelligent Payroll',
      blurb:
        'Automated calculations, compliant payslips and smart insights with zero fuss.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Employee Experience',
      blurb:
        'Give teams delightful tools for comms, feedback and recognition to keep engagement high.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Scheduling',
      blurb:
        'Build smart shift plans in minutes. Balance coverage, availability and labor costs automatically.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Benefits',
      blurb:
        'Centralize health, retirement and perks. Enroll, track eligibility and keep teams informed.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Time Tracking',
      blurb:
        'Accurate time entries from web or mobile. Approvals, overtime rules and project costing built in.',
      image:
        'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            {/* No heading/CTA per design when closed */}

            <hr className="border-gray-200 mb-2" />
            <div className="divide-y divide-gray-200">
              {features.map((f, i) => {
                const open = active === i
                return (
                  <button
                    key={f.title}
                    onClick={() => setActive(open ? -1 : i)}
                    className="w-full text-left py-4 group focus:outline-none"
                    aria-expanded={open}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold flex items-center gap-2 ${open ? 'text-gray-900' : 'text-gray-800'}`}>
                        {f.title}
                        {f.title === 'Hiring' && (
                          <span className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">Start free</span>
                        )}
                      </span>
                      {open ? (
                        <Minus className="text-gray-500 group-hover:text-gray-700" size={18} />
                      ) : (
                        <Plus className="text-gray-500 group-hover:text-gray-700" size={18} />
                      )}
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pr-6"
                    >
                      <p className="text-sm text-gray-600 mt-2">{f.blurb}</p>
                    </motion.div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Right Image that swaps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl bg-purple-50 overflow-hidden ring-1 ring-black/5">
              {features.map((f, i) => (
                <motion.img
                  key={f.title}
                  src={f.image}
                  alt={f.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{ opacity: (active === -1 ? 0 === i : active === i) ? 1 : 0, scale: (active === -1 ? 0 === i : active === i) ? 1 : 1.02 }}
                  transition={{ duration: 0.35 }}
                />
              ))}
              {/* Top pipeline bubbles mimic - only for Hiring */}
              {(active === -1 ? features[0]?.title === 'Hiring' : features[active]?.title === 'Hiring') && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3">
                  {['19 New','7 In Review','5 Phone Screen','5 Assessment','3'].map((s, idx) => (
                    <span key={idx} className={`text-xs px-3 py-1 rounded-full shadow-sm ${idx===0? 'bg-purple-700 text-white' : 'bg-white/90 text-gray-700'}`}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
