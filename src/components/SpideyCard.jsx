"use client";

import React, { useState } from 'react';
import GlassSurface from './GlassSurface';

export default function SpideyCard() {
  const [theme, setTheme] = useState('peter'); // 'peter', 'miles', 'gwen'

  const themes = {
    peter: {
      bg: 'bg-[#1c5c96]',
      border: 'border-[#e0182c]',
      primary: 'text-[#e0182c]',
      secondary: 'text-white',
      accent: 'bg-[#e0182c]',
      glow: 'shadow-[0_0_20px_rgba(224,24,44,0.4)]',
      name: 'PETER PARKER',
      universe: 'EARTH-616'
    },
    miles: {
      bg: 'bg-[#0a0a0a]',
      border: 'border-[#ff003c]',
      primary: 'text-[#ff003c]',
      secondary: 'text-[#00f0ff]', // Miles' venom blast / cyan accents
      accent: 'bg-[#ff003c]',
      glow: 'shadow-[0_0_20px_rgba(255,0,60,0.4)]',
      name: 'MILES MORALES',
      universe: 'EARTH-1610'
    },
    gwen: {
      bg: 'bg-[#f2f2f0]',
      border: 'border-[#ff2a85]',
      primary: 'text-[#ff2a85]',
      secondary: 'text-[#00f0ff]',
      accent: 'bg-[#00f0ff]',
      glow: 'shadow-[0_0_20px_rgba(255,42,133,0.4)]',
      name: 'GWEN STACY',
      universe: 'EARTH-65'
    }
  };

  const current = themes[theme];

  return (
    <div className={`relative w-80 rounded-lg overflow-hidden transition-all duration-500 ${current.bg} ${current.glow} border-2 ${current.border}`}>
      
      {/* Background Web Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      
      {/* Glass Overlay for Holographic Feel */}
      <GlassSurface className={`h-full !p-0 !border-0 ${theme === 'gwen' ? '!bg-white/20' : ''}`}>
        <div className="p-5 flex flex-col h-full relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-4 border-b pb-2 border-white/20">
            <div>
              <div className={`font-pixel text-[10px] ${current.primary} tracking-widest`}>MULTIVERSE ID</div>
              <div className={`font-terminal text-sm ${current.secondary}`}>{current.universe}</div>
            </div>
            {/* Theme Switchers */}
            <div className="flex gap-1 z-20">
              <button onClick={() => setTheme('peter')} className={`w-3 h-3 rounded-full bg-[#e0182c] border ${theme === 'peter' ? 'border-white' : 'border-transparent'}`} title="Earth-616"></button>
              <button onClick={() => setTheme('miles')} className={`w-3 h-3 rounded-full bg-[#0a0a0a] border ${theme === 'miles' ? 'border-[#ff003c]' : 'border-transparent'}`} title="Earth-1610"></button>
              <button onClick={() => setTheme('gwen')} className={`w-3 h-3 rounded-full bg-[#f2f2f0] border ${theme === 'gwen' ? 'border-[#ff2a85]' : 'border-transparent'}`} title="Earth-65"></button>
            </div>
          </div>

          {/* Profile Picture & Glitch Container */}
          <div className={`relative w-32 h-32 mx-auto mb-4 border-2 ${current.border} rounded-sm overflow-hidden bg-black/50 p-1`}>
            {/* Scanline over image */}
            <div className="absolute inset-0 scanlines opacity-50 z-10 pointer-events-none"></div>
            <img 
              src="/pfp.png" 
              alt="Siddhant Avatar" 
              className={`w-full h-full object-cover rounded-sm transition-transform duration-300 hover:scale-110 filter ${theme === 'gwen' ? 'contrast-125' : ''}`}
            />
          </div>

          {/* User Details */}
          <div className="text-center space-y-1 mb-4">
            <h2 className={`font-display text-2xl uppercase tracking-wider ${theme === 'gwen' ? 'text-black' : 'text-white'}`}>
              Siddhant S. Bhagat
            </h2>
            <div className={`font-terminal text-lg ${current.primary} bg-black/40 inline-block px-2 rounded`}>
              THE WEB WEAVER
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 font-pixel text-[9px] tracking-wider">
            <div className={`bg-black/30 p-2 rounded border border-white/10 ${theme === 'gwen' ? 'text-black' : 'text-white'}`}>
              <div className={`mb-1 ${current.primary}`}>AGILITY</div>
              <div className="flex gap-1">
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className={`h-1.5 flex-1 ${current.accent}`}></div>
                <div className="h-1.5 flex-1 bg-white/20"></div>
              </div>
            </div>
            <div className={`bg-black/30 p-2 rounded border border-white/10 ${theme === 'gwen' ? 'text-black' : 'text-white'}`}>
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

          <div className="mt-4 flex items-center justify-between">
             {/* Fake Barcode */}
             <div className="flex h-6 gap-[2px] opacity-80 mix-blend-overlay">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`bg-white`} style={{ width: Math.random() > 0.5 ? '2px' : '4px', opacity: Math.random() }}></div>
                ))}
             </div>
             <div className={`font-pixel text-[10px] ${current.primary} animate-pulse`}>
               AUTHORIZED
             </div>
          </div>

        </div>
      </GlassSurface>
    </div>
  );
}
