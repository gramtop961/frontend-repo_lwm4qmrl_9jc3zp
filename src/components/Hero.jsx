import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs text-sky-700 backdrop-blur-md shadow-sm"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 animate-pulse" />
              <span>Next‑gen infrastructure for ambitious teams</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Ship faster with a premium startup experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 text-lg leading-7 text-slate-600"
            >
              Blending Stripe‑level polish with campfire‑style warmth. Scalable by default, delightful by design, and animated end‑to‑end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all"
              >
                Start free
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-white px-6 py-3 text-sky-700 font-semibold hover:bg-sky-50 transition-all"
              >
                Explore features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {["99.99% Uptime", "SOC 2 Type II", "Global Edge"].map((label) => (
                <div key={label} className="rounded-xl border border-sky-100 bg-white/70 p-3 text-center text-sm text-slate-700 shadow-sm backdrop-blur-lg">
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-3xl overflow-hidden border border-sky-100 bg-white/60 shadow-xl">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
