"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const isWhite = theme === 'white';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Work', 'Projects', 'Resume'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? isWhite
          ? 'bg-[#f8f9fa]/90 border-b border-black/10 backdrop-blur-md'
          : 'bg-[#100f0f]/90 border-b border-white/10 backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between relative">
        
        {/* Empty left side to balance, or could be a logo if wanted later */}
        <div className="flex-1 hidden md:block"></div>

        {/* Center: Nav links */}
        <nav className="flex-1 flex justify-start md:justify-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href="#"
              className={`font-sans text-sm transition-colors ${isWhite ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Search + Theme */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Search shortcut pill */}
          <button className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-colors ${isWhite ? 'border-black/10 text-black/40 hover:bg-black/5' : 'border-white/10 text-white/40 hover:bg-white/5'}`}>
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:flex items-center gap-1">
              <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-sans ${isWhite ? 'bg-black/8 text-black/50' : 'bg-white/10 text-white/50'}`}>Ctrl</kbd>
              <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-sans ${isWhite ? 'bg-black/8 text-black/50' : 'bg-white/10 text-white/50'}`}>K</kbd>
            </span>
          </button>

          {/* Sun/Moon toggle */}
          <button
            onClick={() => setTheme(isWhite ? 'black' : 'white')}
            title="Toggle theme"
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${isWhite ? 'border-black/10 text-black/50 hover:bg-black/5' : 'border-white/10 text-white/40 hover:bg-white/5'}`}
          >
            {isWhite ? (
              /* Sun icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
