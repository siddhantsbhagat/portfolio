"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    category: 'Languages',
    items: 'JavaScript, TypeScript, Python, HTML, CSS'
  },
  {
    id: 2,
    category: 'Frameworks',
    items: 'React.js, Next.js, Node.js, Express, Tailwind CSS'
  },
  {
    id: 3,
    category: 'Tools & Cloud',
    items: 'Git, GitHub, Vercel, AWS, Docker'
  }
];

export default function Skills({ theme }) {
  const isWhite = theme === 'white';

  return (
    <section className="relative w-full max-w-4xl mx-auto py-24 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-sans text-3xl font-bold mb-12 ${isWhite ? 'text-black' : 'text-white'}`}
      >
        Tech Stack
      </motion.h2>

      <div className="flex flex-col gap-10">
        {skillCategories.map((skill, i) => (
          <motion.div 
            key={skill.id} 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-transparent hover:border-current transition-colors pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex flex-col gap-1">
              <h3 className={`font-sans text-xl font-bold ${isWhite ? 'text-black' : 'text-white'}`}>
                {skill.category}
              </h3>
            </div>
            
            <div className="flex flex-col md:items-end gap-1 text-left md:text-right">
              <p className={`font-sans text-base ${isWhite ? 'text-black/60' : 'text-white/60'}`}>
                {skill.items}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
