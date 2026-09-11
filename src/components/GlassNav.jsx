"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassSurface from './GlassSurface';

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <GlassSurface 
          variant="nav" 
          tier="full" 
          className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${scrolled ? 'bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent border-transparent shadow-none'}`}
        >
          <Link href="/" className="font-display font-bold text-2xl text-white tracking-widest hover:text-tracker-cyan transition-colors z-10 relative">
            SIDDHANT<span className="text-tracker-red">.</span>
          </Link>
          
          <nav className="hidden md:flex gap-10 z-10 relative">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="font-pixel text-xs text-white/70 hover:text-white hover:scale-110 transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle placeholder */}
          <button className="md:hidden text-white z-10 relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </GlassSurface>
      </div>
    </header>
  );
}
