import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const navVariants = {
  hidden: { y: -24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Navbar() {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,132,199,0.15)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30">
                <Rocket className="h-5 w-5" />
                <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-sky-500/40 to-indigo-500/40 blur-xl pointer-events-none" />
              </div>
              <span className="font-semibold tracking-tight text-slate-800">Campfire Cloud</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
              <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                <Sparkles className="h-4 w-4 text-sky-500" />
                <span>Docs</span>
              </button>
              <button className="inline-flex items-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-shadow">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
