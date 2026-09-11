"use client";

import React, { useState } from 'react';
import SpideyCard from '@/components/SpideyCard';
import { HangingSpidey } from '@/components/PixelSprites';

export default function StylePreviewPage() {
  const [soundEnabled, setSoundEnabled] = useState(null);
  const [theme, setTheme] = useState('black');

  // Define global theme variables
  const isWhite = theme === 'white';
  const pageBg = isWhite ? 'bg-[#f8f9fa]' : 'bg-[#050505]';
  const textColor = isWhite ? 'text-[#1a1a1a]' : 'text-white';
  const cyanAccent = isWhite ? 'text-[#ff2a85]' : 'text-tracker-cyan';
  const cyanBg = isWhite ? 'bg-[#ff2a85]' : 'bg-tracker-cyan';
  const cyanShadow = isWhite ? 'shadow-[0_0_20px_rgba(255,42,133,0.4)]' : 'shadow-[0_0_20px_rgba(94,234,212,0.4)]';
  const gridDots = isWhite ? '#000000' : '#ffffff';
  
  return (
    <main className={`relative h-screen w-screen ${pageBg} overflow-hidden flex flex-col items-center justify-center transition-colors duration-700`}>
      
      {/* Background Tech Details */}
      <div className={`absolute inset-0 scanlines opacity-[0.15] pointer-events-none z-10 ${isWhite ? 'invert' : ''}`}></div>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${gridDots} 1px, transparent 1px)`, backgroundSize: '32px 32px' }}></div>
      
      {/* Giant Background Spider Logo (Faint) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isWhite ? 'opacity-[0.04]' : 'opacity-[0.02]'} pointer-events-none w-[80%] max-w-[600px] z-0`}>
        <svg viewBox="0 0 100 100" fill="currentColor" className={`w-full h-full ${textColor}`}>
           <path d="M50 10 L60 30 L90 20 L70 50 L95 60 L70 70 L80 90 L60 80 L50 95 L40 80 L20 90 L30 70 L5 60 L30 50 L10 20 L40 30 Z" />
        </svg>
      </div>

      {/* --- CUTE DECORATIONS --- */}
      
      {/* Top Center Badge */}
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 ${isWhite ? 'bg-white border-[#ff2a85] shadow-[0_0_20px_rgba(255,42,133,0.3)]' : 'bg-[#0a0a0a] border-[#ff003c] shadow-[0_0_20px_rgba(255,0,60,0.4)]'} border-4 rounded-full px-8 py-2 transition-colors duration-500`}>
        <span className={`${isWhite ? 'text-[#ff2a85]' : 'text-[#ff003c]'} font-pixel text-lg md:text-xl uppercase tracking-widest`}>SIDDHANT</span>
        <div className={`w-8 h-8 rounded-full ${isWhite ? 'bg-[#ff2a85]' : 'bg-[#ff003c]'} border-2 ${isWhite ? 'border-white' : 'border-[#0a0a0a]'} flex items-center justify-center`}>
           <div className="flex gap-1">
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
           </div>
        </div>
        <span className={`${isWhite ? 'text-[#ff2a85]' : 'text-[#ff003c]'} font-pixel text-lg md:text-xl uppercase tracking-widest`}>TRACKER</span>
      </div>

      {/* --- CENTRAL BOOT SEQUENCE --- */}

      {/* Hanging Spidey (Swinging from top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-40 hover:translate-y-4 transition-transform duration-700 ease-in-out cursor-pointer">
         <div className={`w-[2px] h-24 md:h-32 ${isWhite ? 'bg-black/40' : 'bg-white/80'}`}></div>
         <HangingSpidey className={`w-20 h-32 transform -translate-y-2 ${isWhite ? 'drop-shadow-md' : 'drop-shadow-2xl'}`} />
      </div>

      {/* Central Boot Text */}
      <div className="mt-48 md:mt-56 text-center z-30 flex flex-col items-center justify-center w-full px-4">
        <p className={`${textColor} font-pixel text-sm md:text-base uppercase tracking-[0.2em] leading-loose ${isWhite ? '' : 'text-shadow-[0_0_15px_rgba(255,255,255,0.4)]'}`}>
          WELCOME TO THE SIDDHANT TRACKER.<br/>
          INTERACT WITH THE MAP TO VIEW<br/>
          PROJECT SIGHTINGS<br/>
          ALL OVER THE WORLD.
        </p>

        {/* Loading Bar */}
        <div className="flex gap-2 justify-center mt-10 h-5">
           {[...Array(12)].map((_, i) => (
             <div key={i} className={`w-4 ${i < 7 ? `${cyanBg} ${cyanShadow}` : (isWhite ? 'bg-black/10' : 'bg-white/10')}`}></div>
           ))}
        </div>

        <p className={`${cyanAccent} font-pixel text-xs mt-10 uppercase tracking-[0.2em] opacity-90`}>
          CHOOSE YOUR SETTINGS AND START TRACKING
        </p>

        <div className="flex gap-6 justify-center mt-8">
          <button 
            onClick={() => setSoundEnabled(true)}
            className={`font-pixel text-sm px-8 py-3 border-4 rounded-full transition-all duration-300 ${soundEnabled === true ? `${cyanBg} ${isWhite ? 'text-white' : 'text-black'} ${cyanShadow} border-transparent` : (isWhite ? 'border-black/20 text-black/50 hover:bg-black/5' : 'border-white/20 text-white/50 hover:bg-white/5')}`}
          >
            SOUND ON
          </button>
          <button 
            onClick={() => setSoundEnabled(false)}
            className={`font-pixel text-sm px-8 py-3 border-4 rounded-full transition-all duration-300 ${soundEnabled === false ? `${cyanBg} ${isWhite ? 'text-white' : 'text-black'} ${cyanShadow} border-transparent` : (isWhite ? 'border-black/20 text-black/50 hover:bg-black/5' : 'border-white/20 text-white/50 hover:bg-white/5')}`}
          >
            SOUND OFF
          </button>
        </div>
      </div>

      {/* --- ID CARD OVERLAY --- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] z-50 transform md:rotate-2 hover:rotate-0 transition-all duration-500 hidden lg:block scale-90 xl:scale-100 origin-right hover:scale-105 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
         <SpideyCard theme={theme} setTheme={setTheme} />
      </div>

      {/* --- FOOTER UI --- */}
      <div className="absolute bottom-2 text-center w-full z-20 flex flex-col items-center pointer-events-none">
         <p className={`font-pixel text-[8px] tracking-widest uppercase mt-4 ${isWhite ? 'text-black/50' : 'text-white/50'}`}>
           PRIVACY POLICY • TERMS OF USE • COOKIE CONSENT TOOL • CREDITS
         </p>
         <p className={`font-pixel text-[8px] tracking-widest uppercase mt-1 ${isWhite ? 'text-black/30' : 'text-white/30'}`}>
           © & TM 2026 SIDDHANT. ALL RIGHTS RESERVED.
         </p>
      </div>

    </main>
  );
}
