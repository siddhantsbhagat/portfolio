"use client";

import React from 'react';
import GlassSurface from './GlassSurface';

export default function SpideyCard() {
  // Locked into the dark "Miles/Tech" aesthetic for maximum contrast and visibility
  const current = {
    bg: 'bg-[#0a0a0f]',
    border: 'border-tracker-cyan',
    primary: 'text-tracker-cyan',
    secondary: 'text-white',
    accent: 'bg-tracker-cyan',
    glow: 'shadow-[0_0_25px_rgba(94,234,212,0.15)]',
    name: 'SIDDHANT',
    universe: 'NODE-99'
  };

  const IconWrapper = ({ children, href, title }) => (
    <a href={href} title={title} className="text-white/60 hover:text-tracker-cyan transition-colors duration-300">
      {children}
    </a>
  );

  return (
    <div className={`relative w-80 rounded-lg overflow-hidden transition-all duration-500 ${current.bg} ${current.glow} border-2 ${current.border}`}>
      
      {/* Background Web Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      
      {/* Glass Overlay for Holographic Feel */}
      <GlassSurface variant="card" tier="full" className="h-full">
        <div className="p-5 flex flex-col h-full relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-4 border-b pb-2 border-white/20">
            <div>
              <div className={`font-pixel text-[10px] ${current.primary} tracking-widest`}>DEVELOPER ID</div>
              <div className={`font-terminal text-sm ${current.secondary}`}>{current.universe}</div>
            </div>
            {/* Status Indicator */}
            <div className="flex gap-1 z-20 items-center">
               <div className="w-2 h-2 rounded-full bg-tracker-red animate-pulse"></div>
               <span className="font-pixel text-[8px] text-tracker-red uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Profile Picture & Glitch Container */}
          <GlassSurface variant="bezel" className={`relative w-32 h-32 mx-auto mb-4 border-2 ${current.border} overflow-hidden bg-black/50`}>
            {/* Scanline over image */}
            <div className="absolute inset-0 scanlines opacity-50 z-10 pointer-events-none"></div>
            <img 
              src="/pfp.png" 
              alt="Siddhant Avatar" 
              className="w-full h-full object-cover rounded-sm transition-transform duration-300 hover:scale-110"
            />
          </GlassSurface>

          {/* User Details */}
          <div className="text-center space-y-1 mb-4">
            <h2 className="font-display text-2xl uppercase tracking-wider text-white">
              Siddhant S. Bhagat
            </h2>
            <div className={`font-terminal text-lg ${current.primary} bg-black/40 inline-block px-2 rounded border border-tracker-cyan/30`}>
              THE WEB WEAVER
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 font-pixel text-[9px] tracking-wider text-white">
            <div className="bg-black/40 p-2 rounded border border-white/10">
              <div className={`mb-1 ${current.primary}`}>AGILITY</div>
              <div className="flex gap-1">
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className="h-1.5 flex-1 bg-white/20"></div>
              </div>
            </div>
            <div className="bg-black/40 p-2 rounded border border-white/10">
              <div className={`mb-1 ${current.primary}`}>TECH</div>
              <div className="flex gap-1">
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between mb-4">
             {/* Fake Barcode */}
             <div className="flex h-6 gap-[2px] opacity-80 mix-blend-overlay">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="bg-white" style={{ width: Math.random() > 0.5 ? '2px' : '4px', opacity: Math.random() }}></div>
                ))}
             </div>
             <div className={`font-pixel text-[10px] ${current.primary} animate-pulse`}>
               AUTHORIZED
             </div>
          </div>

          {/* Social Links / Comm Channels (SVG Outlines) */}
          <div className="pt-4 border-t border-white/20">
            <div className="flex justify-between items-center px-1">
              {/* X / Twitter */}
              <IconWrapper href="#" title="X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M4 4l16 16m0-16L4 20" strokeLinecap="round" />
                </svg>
              </IconWrapper>

              {/* LinkedIn */}
              <IconWrapper href="#" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </IconWrapper>

              {/* GitHub */}
              <IconWrapper href="#" title="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </IconWrapper>

              {/* YouTube */}
              <IconWrapper href="#" title="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </IconWrapper>

              {/* Instagram */}
              <IconWrapper href="#" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </IconWrapper>

              {/* Email */}
              <IconWrapper href="#" title="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </IconWrapper>
            </div>
          </div>

        </div>
      </GlassSurface>
    </div>
  );
}
