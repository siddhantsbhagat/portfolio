"use client";

import React from 'react';
import GlassSurface from './GlassSurface';

export default function SpideyCard({ theme = 'black', setTheme }) {
  const themes = {
    black: {
      bg: 'bg-[#0a0a0a]',
      border: 'border-[#ff003c]',
      primary: 'text-[#ff003c]',
      hoverPrimary: 'hover:text-[#ff003c]',
      secondary: 'text-[#00f0ff]',
      accent: 'bg-[#ff003c]',
      glow: 'shadow-[0_0_20px_rgba(255,0,60,0.4)]',
      name: 'MILES MORALES',
      universe: 'EARTH-1610'
    },
    white: {
      bg: 'bg-[#f2f2f0]',
      border: 'border-[#ff2a85]',
      primary: 'text-[#ff2a85]',
      hoverPrimary: 'hover:text-[#ff2a85]',
      secondary: 'text-[#00f0ff]',
      accent: 'bg-[#00f0ff]',
      glow: 'shadow-[0_0_20px_rgba(255,42,133,0.4)]',
      name: 'GWEN STACY',
      universe: 'EARTH-65'
    }
  };

  const current = themes[theme] || themes.black;
  const textContrast = theme === 'white' ? 'text-black' : 'text-white';
  const labelContrast = theme === 'white' ? 'text-black/70' : 'text-tracker-cyan/90';
  const boxContrast = theme === 'white' ? 'bg-black/5 border-black/10' : 'bg-black/60 border-white/20';

  const IconWrapper = ({ children, href, title }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={title} 
      className={`${theme === 'white' ? 'text-black/50' : 'text-white/60'} ${current.hoverPrimary} transition-all duration-300 transform hover:scale-125 inline-block`}
    >
      {children}
    </a>
  );

  return (
    <div className={`relative w-80 rounded-lg overflow-hidden transition-all duration-500 ${current.bg} ${current.glow} border-2 ${current.border}`}>
      
      <div className={`absolute inset-0 opacity-10 pointer-events-none ${theme === 'white' ? 'text-black' : 'text-white'}`} style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      
      <GlassSurface variant="card" tier="full" className={`h-full ${theme === 'white' ? '!bg-white/20' : ''}`}>
        <div className="p-5 flex flex-col h-full relative z-10">
          
          <div className="flex justify-between items-start mb-4 border-b pb-2 border-current/20">
            <div>
              <div className={`font-pixel text-[10px] ${current.primary} tracking-widest`}>DEVELOPER ID</div>
              <div className={`font-terminal text-sm ${current.secondary}`}>{current.universe}</div>
            </div>
            {setTheme && (
              <div className="flex gap-2 z-20 items-center">
                <button onClick={() => setTheme('black')} className={`w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 ${theme === 'black' ? 'border-[#ff003c]' : 'border-black/20'} transition-colors shadow-sm`} title="Black Theme"></button>
                <button onClick={() => setTheme('white')} className={`w-3.5 h-3.5 rounded-full bg-[#f2f2f0] border-2 ${theme === 'white' ? 'border-[#ff2a85]' : 'border-white/20'} transition-colors shadow-sm`} title="White Theme"></button>
              </div>
            )}
          </div>

          {/* Profile Picture Container */}
          <GlassSurface variant="bezel" className={`relative w-32 h-32 mx-auto mb-4 border-2 ${current.border} overflow-hidden bg-black/50`}>
            <img 
              src="/pfp.png" 
              alt="Siddhant Avatar" 
              className={`w-full h-full object-cover rounded-sm transition-transform duration-300 hover:scale-110 ${theme === 'gwen' ? 'contrast-125' : ''}`}
            />
          </GlassSurface>

          {/* User Details */}
          <div className="text-center mb-3">
            <h2 className={`font-display text-3xl uppercase tracking-wider ${textContrast}`}>
              Siddhant S. Bhagat
            </h2>
          </div>

          {/* Bio Text */}
          <div className="mb-6 text-center px-2">
             <p className={`font-display text-sm md:text-base leading-relaxed border-t border-b py-3 font-medium ${theme === 'gwen' ? 'text-black/80 border-black/20' : 'text-tracker-cyan border-tracker-cyan/30'}`}>
               Currently in "conceptual phase" | First-year CSE student who reads startup teardowns for fun
             </p>
          </div>

          {/* Bio Data Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6 text-center">
             <div className={`${boxContrast} p-2.5 rounded flex flex-col justify-center shadow-inner`}>
                <span className={`font-pixel text-[9px] tracking-widest mb-1.5 uppercase ${labelContrast}`}>DOB</span>
                <span className={`font-display text-sm font-semibold tracking-wide ${textContrast}`}>01.SEP.07</span>
             </div>
             <div className={`${boxContrast} p-2.5 rounded flex flex-col justify-center shadow-inner`}>
                <span className={`font-pixel text-[9px] tracking-widest mb-1.5 uppercase ${labelContrast}`}>BLD</span>
                <span className={`font-display text-sm font-semibold tracking-wide ${textContrast}`}>O+</span>
             </div>
             <div className={`${boxContrast} p-2.5 rounded flex flex-col justify-center shadow-inner`}>
                <span className={`font-pixel text-[9px] tracking-widest mb-1.5 uppercase ${labelContrast}`}>LOC</span>
                <span className={`font-display text-sm font-semibold tracking-wide ${textContrast}`}>DELHI</span>
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
