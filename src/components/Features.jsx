import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Instant global scale',
    desc: 'Deploy to our edge in seconds with zero‑downtime rollouts and smart traffic shaping.',
    icon: Zap,
    gradient: 'from-sky-500/10 to-indigo-500/10',
  },
  {
    title: 'Security by default',
    desc: 'Enterprise‑grade auth, encryption at rest and in transit, and granular permissions.',
    icon: Shield,
    gradient: 'from-emerald-500/10 to-sky-500/10',
  },
  {
    title: 'Delightful DX',
    desc: 'Rich animations, polished flows, and components crafted for velocity and joy.',
    icon: Sparkles,
    gradient: 'from-fuchsia-500/10 to-sky-500/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-sky-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-center"
        >
          Enterprise power, startup speed
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, gradient }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/70 p-6 shadow-[0_10px_30px_rgba(2,132,199,0.08)] backdrop-blur-xl"
            
            >
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} blur-3xl pointer-events-none`} />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600 leading-7">{desc}</p>
              <div className="mt-6 h-12 w-full overflow-hidden rounded-xl border border-sky-100 bg-gradient-to-r from-white to-sky-50">
                <motion.div
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, Ease: 'easeInOut' }}
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
