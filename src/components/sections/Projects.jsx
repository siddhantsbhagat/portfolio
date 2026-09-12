"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects({ theme }) {
  const isWhite = theme === "white";
  const muted = isWhite ? "text-black/50" : "text-white/50";

  const placeholders = [
    { num: "01", label: "Coming soon" },
    { num: "02", label: "In development" },
    { num: "03", label: "Idea phase" },
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className={`font-sans text-xl font-bold ${isWhite ? 'text-black' : 'text-white'}`}>Projects</h2>
        <p className={`font-sans text-sm mt-1 ${muted}`}>Nothing shipped yet — but the ideas are brewing.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {placeholders.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group rounded-xl border transition-all duration-300 overflow-hidden cursor-not-allowed ${isWhite ? 'border-black/10 bg-black/[0.03] hover:bg-black/[0.06]' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'}`}
          >
            {/* Thumbnail */}
            <div className={`w-full h-28 flex items-center justify-center border-b ${isWhite ? 'border-black/8 bg-black/[0.02]' : 'border-white/8 bg-white/[0.02]'}`}>
              <span className={`font-sans text-4xl font-bold opacity-[0.06] select-none ${isWhite ? 'text-black' : 'text-white'}`}>{p.num}</span>
            </div>
            {/* Body */}
            <div className="p-4">
              <div className={`h-2.5 w-24 rounded-full mb-2.5 ${isWhite ? 'bg-black/8' : 'bg-white/8'}`} />
              <div className={`h-2 w-36 rounded-full mb-1.5 ${isWhite ? 'bg-black/5' : 'bg-white/5'}`} />
              <div className={`h-2 w-28 rounded-full ${isWhite ? 'bg-black/5' : 'bg-white/5'}`} />
              <span className={`inline-block mt-3 font-sans text-[10px] uppercase tracking-wider ${muted}`}>{p.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

