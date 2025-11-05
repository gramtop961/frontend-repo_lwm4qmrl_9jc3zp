import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="contact" className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-tr from-sky-600 to-indigo-600 p-8 sm:p-12 text-center text-white shadow-[0_20px_50px_rgba(2,132,199,0.35)]">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to light your next release?</h3>
              <p className="mt-2 text-white/90">Join teams shipping world‑class products with delightful motion and enterprise‑grade reliability.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sky-700 font-semibold shadow-lg hover:shadow-xl transition-shadow">Create account</a>
                <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">Book a demo</a>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Campfire Cloud. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
