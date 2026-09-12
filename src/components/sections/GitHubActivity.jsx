"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubActivity({ theme }) {
  const isWhite = theme === 'white';
  const divider = isWhite ? 'border-black/10' : 'border-white/10';
  const muted = isWhite ? 'text-black/40' : 'text-white/40';

  const darkColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
  const lightColors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

  return (
    <section className={`w-full border-t ${divider} py-12 px-6 flex justify-center`}>
      <div className="w-full max-w-[850px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className={`font-sans text-xl font-bold ${isWhite ? 'text-black' : 'text-white'}`}>
                GitHub Activity
              </h2>
              <p className={`font-sans text-xs mt-1 ${muted}`}>
                siddhantsbhagat — real contribution graph
              </p>
            </div>
            <a
              href="https://github.com/siddhantsbhagat"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-xs px-3 py-1.5 rounded-lg border transition-colors ${isWhite ? 'border-black/10 text-black/50 hover:bg-black/5' : 'border-white/10 text-white/40 hover:bg-white/5'}`}
            >
              View profile →
            </a>
          </div>

          <div className={`rounded-xl border ${divider} p-6 overflow-x-auto flex justify-center`}>
            <GitHubCalendar
              username="siddhantsbhagat"
              colorScheme={isWhite ? 'light' : 'dark'}
              theme={{
                dark: darkColors,
                light: lightColors,
              }}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
