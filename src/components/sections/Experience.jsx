"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'ASBL',
    role: 'SDE-L1 (Full Stack)',
    dates: 'January 2026 - Present',
    location: 'Hyderabad, India (On-Site)',
    status: 'Working'
  },
  {
    id: 2,
    company: 'Promote',
    role: 'Founding Frontend Engineer',
    dates: 'August 2025 - December 2025',
    location: 'United States (Remote)'
  },
  {
    id: 3,
    company: 'Upsurge Labs',
    role: 'Backend Developer Intern',
    dates: 'June 2025 - July 2025',
    location: 'Bangalore, India (On-Site)'
  }
];

export default function Experience({ theme }) {
  const isWhite = theme === 'white';

  return (
    <section className="relative w-full max-w-4xl mx-auto py-24 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-sans text-3xl font-bold mb-12 ${isWhite ? 'text-black' : 'text-white'}`}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.id} 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-transparent hover:border-current transition-colors pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Left Column: Company & Role */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className={`font-sans text-xl font-bold ${isWhite ? 'text-black' : 'text-white'}`}>
                  {exp.company}
                </h3>
                {exp.status === 'Working' && (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0b2b16] border border-[#164a27]">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                    <span className="font-sans text-xs font-semibold text-white/90">Working</span>
                  </div>
                )}
              </div>
              <p className={`font-sans text-base ${isWhite ? 'text-black/60' : 'text-white/60'}`}>
                {exp.role}
              </p>
            </div>

            {/* Right Column: Dates & Location */}
            <div className="flex flex-col md:items-end gap-1 text-left md:text-right">
              <p className={`font-sans text-sm ${isWhite ? 'text-black/60' : 'text-white/60'}`}>
                {exp.dates}
              </p>
              <p className={`font-sans text-sm ${isWhite ? 'text-black/60' : 'text-white/60'}`}>
                {exp.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="w-full flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <button className={`font-sans text-sm font-medium px-6 py-2.5 rounded-lg border ${isWhite ? 'border-black/20 text-black hover:bg-black/5' : 'border-white/20 text-white hover:bg-white/5'} transition-colors`}>
          Show all work experiences
        </button>
      </motion.div>
    </section>
  );
}
