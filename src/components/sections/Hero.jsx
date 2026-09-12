"use client";

import React from "react";
import { motion } from "framer-motion";
import SpideyCard from "@/components/SpideyCard";

import { MapPin, Briefcase, GraduationCap } from "lucide-react";

import MiniGame from "@/components/MiniGame";

export default function Hero({ theme }) {
  const isWhite = theme === "white";
  const muted = isWhite ? "text-black/50" : "text-white/50";
  const divider = isWhite ? "border-black/10" : "border-white/10";
  const badge = isWhite
    ? "bg-black/5 text-black/60 border-black/10"
    : "bg-white/5 text-white/60 border-white/10";
  const iconCls = isWhite ? "text-black/40" : "text-white/40";

  return (
    <section className="relative w-full pt-4 pb-16">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

        {/* LEFT: ID Card — tilted */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, rotate: -8, y: 30 }}
          animate={{ opacity: 1, rotate: 6, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
        >
          <SpideyCard theme={theme} />
        </motion.div>

        {/* RIGHT: Unique info only — no repeat from card */}
        <motion.div
          className="flex-1 flex flex-col gap-6 w-full"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mini-game inserted perfectly in the gap */}
          <MiniGame />

          {/* Status row */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Open to opportunities", icon: <Briefcase className={`w-3.5 h-3.5 ${iconCls}`} /> },
              { label: "Delhi, India", icon: <MapPin className={`w-3.5 h-3.5 ${iconCls}`} /> },
              { label: "First-year CSE", icon: <GraduationCap className={`w-3.5 h-3.5 ${iconCls}`} /> },
            ].map(b => (
              <span key={b.label} className={`font-sans text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${badge}`}>
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>

          {/* What I'm building */}
          <div className={`border-t ${divider} pt-6`}>
            <p className={`font-sans text-xs font-semibold uppercase tracking-widest mb-4 ${muted}`}>
              Currently building
            </p>
            <div className={`rounded-xl border border-dashed ${divider} p-6 flex flex-col gap-2`}>
              <p className={`font-sans text-sm ${isWhite ? "text-black/70" : "text-white/70"}`}>
                This portfolio — and the skills to fill it with real work.
              </p>
              <p className={`font-sans text-xs ${muted}`}>
                No experience yet. Working on changing that.
              </p>
            </div>
          </div>

          {/* New Philosophy row */}
          <div className={`border-t ${divider} pt-6`}>
            <p className={`font-sans text-xs font-semibold uppercase tracking-widest mb-4 ${muted}`}>
              Philosophy
            </p>
            <p className={`font-sans text-sm leading-relaxed ${isWhite ? "text-black/70" : "text-white/70"}`}>
              Building things, chasing ideas, becoming a polymath.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


