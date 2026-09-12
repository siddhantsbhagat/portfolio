"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function OffTheClock({ theme }) {
  const isWhite = theme === 'white';
  const divider = isWhite ? 'border-black/10' : 'border-white/10';
  const muted = isWhite ? 'text-black/40' : 'text-white/40';

  return (
    <section className={`w-full border-t ${divider} py-12 px-6 flex justify-center`}>
      <div className="w-full max-w-2xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`w-full max-w-[600px] border ${divider} rounded-xl px-10 py-8 relative flex flex-col items-center text-center`}
        >
          <span className={`absolute top-4 left-6 font-serif text-6xl leading-none opacity-[0.05] select-none ${isWhite ? 'text-black' : 'text-white'}`} aria-hidden="true">&ldquo;</span>
          <blockquote className={`font-sans text-lg md:text-xl leading-relaxed relative z-10 ${isWhite ? 'text-black/80' : 'text-white/80'}`}>
            Arise, awake, and stop not till the goal is reached.
          </blockquote>
          <p className={`font-sans text-xs mt-4 ${muted}`}>— Katha Upanishad</p>
        </motion.div>
      </div>
    </section>
  );
}

