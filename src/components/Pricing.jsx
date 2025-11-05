import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: { m: 19, y: 15 },
    features: ['1 project', '10k requests/mo', 'Email support'],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: { m: 49, y: 39 },
    features: ['Unlimited projects', '1M requests/mo', 'Priority support'],
    cta: 'Upgrade',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { m: 199, y: 159 },
    features: ['Custom limits', 'SLA + SSO', 'Dedicated success'],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-center">
            Simple, transparent pricing
          </h2>
          <motion.div layout className="hidden sm:flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-1 py-1 backdrop-blur">
            <button
              onClick={() => setYearly(false)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${!yearly ? 'bg-sky-600 text-white' : 'text-slate-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${yearly ? 'bg-sky-600 text-white' : 'text-slate-700'}`}
            >
              Yearly
            </button>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-2xl border ${t.highlighted ? 'border-sky-300' : 'border-sky-100'} bg-white/70 p-6 shadow-[0_10px_30px_rgba(2,132,199,0.08)] backdrop-blur-xl`}
            >
              {t.highlighted && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute right-4 top-4 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md"
                >
                  Popular
                </motion.span>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? t.price.y : t.price.m}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      ${yearly ? t.price.y : t.price.m}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="mb-1 text-slate-500">/mo</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all shadow ${t.highlighted ? 'bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-sky-500/30 hover:shadow-sky-500/50' : 'border border-sky-200 bg-white text-sky-700 hover:bg-sky-50'}`}>
                {t.cta}
              </button>

              <div className="mt-6 h-10 w-full overflow-hidden rounded-xl border border-sky-100 bg-gradient-to-r from-white to-sky-50">
                <motion.div
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                  className="h-full w-full bg-gradient-to-r from-sky-200/40 via-indigo-200/40 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
