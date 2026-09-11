"use client";

import React, { useState } from 'react';
import SpideyCard from '@/components/SpideyCard';
import { HangingSpidey, SittingSpidey, SpiderIcon } from '@/components/PixelSprites';

export default function StylePreviewPage() {
  const [soundEnabled, setSoundEnabled] = useState(null);

  return (
    <main className="h-screen w-screen bg-[#0d2140] flex items-center justify-center p-2 md:p-6 overflow-hidden scanlines selection:bg-tracker-cyan selection:text-black">
      
      {/* Outer Blue Hardware Frame */}
      <div className="relative w-full max-w-6xl h-full max-h-[900px] border-[4px] md:border-[8px] border-[#3b82f6] rounded-2xl bg-[#3b82f6] shadow-[0_0_60px_rgba(0,0,0,0.9)] flex items-center justify-center">
        
        {/* Top Left Icon (Spider Eyes / Badge) */}
        <div className="absolute -top-4 md:-top-6 left-4 w-12 h-12 md:w-16 md:h-16 bg-[#1a1a1a] border-4 border-[#e07a3f] rounded-full z-40 flex items-center justify-center shadow-lg">
           <div className="flex gap-1">
             <div className="w-2 h-3 md:w-3 md:h-4 bg-white rounded-full transform -rotate-12"></div>
             <div className="w-2 h-3 md:w-3 md:h-4 bg-white rounded-full transform rotate-12"></div>
           </div>
        </div>

        {/* Top Right Icon (Spider) */}
        <div className="absolute -top-4 md:-top-6 right-4 w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-[#1a1a1a] rounded-xl z-40 flex items-center justify-center shadow-lg">
           <SpiderIcon className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        {/* Top Center Badge */}
        <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 md:gap-3 bg-[#1e3a8a] border-[3px] md:border-4 border-[#1a1a1a] rounded-full px-4 py-1 md:px-8 md:py-1.5 shadow-lg">
          <span className="text-white font-pixel text-xs md:text-xl uppercase tracking-widest text-shadow-sm">SIDDHANT</span>
          {/* Spidey Head Icon Mini */}
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-tracker-red border-2 border-[#1a1a1a] flex items-center justify-center">
             <div className="flex gap-0.5">
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             </div>
          </div>
          <span className="text-white font-pixel text-xs md:text-xl uppercase tracking-widest text-shadow-sm">TRACKER</span>
        </div>

        {/* Left Side Tabs */}
        <div className="absolute top-32 -left-6 md:-left-8 flex flex-col gap-4 z-40">
          <div className="w-6 h-10 md:w-8 md:h-12 bg-white border-4 border-r-0 border-[#1a1a1a] rounded-l-lg flex items-center justify-center shadow-lg">
             <SpiderIcon className="w-4 h-4 transform -rotate-90" />
          </div>
          <div className="w-6 h-10 md:w-8 md:h-12 bg-white border-4 border-r-0 border-[#1a1a1a] rounded-l-lg flex items-center justify-center shadow-lg">
             <SpiderIcon className="w-4 h-4 transform -rotate-90" />
          </div>
        </div>

        {/* Bottom Left Sitting Spidey */}
        <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-6 z-50">
           <div className="bg-[#5eead4] rounded-full p-2 border-4 border-[#1a1a1a]">
              <SittingSpidey className="w-10 h-14 md:w-12 md:h-16" />
           </div>
        </div>

        {/* Inner Screen Display */}
        <div className="relative w-[98%] h-[98%] border-[4px] md:border-[6px] border-[#1a1a1a] rounded-lg bg-[#2a2a2a] overflow-hidden flex flex-col items-center">
           
           {/* Subtle Background Grid */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           
           {/* Giant Background Spider Logo (Faint) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[80%] max-w-[600px]">
             <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
                <path d="M50 10 L60 30 L90 20 L70 50 L95 60 L70 70 L80 90 L60 80 L50 95 L40 80 L20 90 L30 70 L5 60 L30 50 L10 20 L40 30 Z" />
             </svg>
           </div>

           {/* Hanging Spidey (Swinging from top) */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 hover:translate-y-4 transition-transform duration-700 ease-in-out cursor-pointer">
              <div className="w-[2px] h-16 md:h-32 bg-white"></div>
              <HangingSpidey className="w-12 h-16 transform -translate-y-2" />
           </div>

           {/* Central Boot Sequence Content */}
           <div className="mt-40 md:mt-56 text-center z-20 flex flex-col items-center justify-center w-full px-4">
             <p className="text-tracker-cyan font-pixel text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] leading-loose text-shadow-[0_0_10px_rgba(94,234,212,0.5)]">
               WELCOME TO THE SIDDHANT TRACKER.<br/>
               INTERACT WITH THE MAP TO VIEW<br/>
               PROJECT SIGHTINGS<br/>
               ALL OVER THE WORLD.
             </p>

             {/* Loading Bar */}
             <div className="flex gap-1.5 md:gap-2 justify-center mt-8 h-4 md:h-5">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-3 md:w-4 ${i < 7 ? 'bg-tracker-cyan shadow-[0_0_8px_rgba(94,234,212,0.8)]' : 'bg-[#1a1a1a]'}`}></div>
                ))}
             </div>

             <p className="text-tracker-cyan font-pixel text-[10px] md:text-xs mt-8 uppercase tracking-[0.2em]">
               CHOOSE YOUR SETTINGS AND START TRACKING
             </p>

             <div className="flex gap-4 md:gap-6 justify-center mt-6">
               <button 
                 onClick={() => setSoundEnabled(true)}
                 className={`font-pixel text-xs px-6 py-2 border-2 rounded-full transition-all duration-300 ${soundEnabled === true ? 'bg-tracker-cyan text-[#1a1a1a] border-tracker-cyan shadow-[0_0_15px_rgba(94,234,212,0.6)]' : 'border-[#1a1a1a] bg-[#1a1a1a] text-white/50 hover:bg-[#333]'}`}
               >
                 SOUND ON
               </button>
               <button 
                 onClick={() => setSoundEnabled(false)}
                 className={`font-pixel text-xs px-6 py-2 border-2 rounded-full transition-all duration-300 ${soundEnabled === false ? 'bg-[#1a1a1a] text-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'border-[#1a1a1a] bg-[#1a1a1a] text-white/50 hover:bg-[#333]'}`}
               >
                 SOUND OFF
               </button>
             </div>
           </div>

           {/* Floating ID Card Overlay - Tucked beautifully to the side */}
           <div className="absolute top-1/2 -translate-y-1/2 right-[2%] lg:right-[5%] z-30 transform md:rotate-2 hover:rotate-0 transition-all duration-500 hidden md:block scale-75 lg:scale-90 xl:scale-100 origin-right hover:scale-95 lg:hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <SpideyCard />
           </div>

           {/* Bottom Status Bar UI */}
           <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-[#333] border-4 border-[#1a1a1a] rounded-lg px-8 py-2 md:py-3 w-[80%] max-w-2xl text-center z-30 flex items-center justify-between shadow-lg">
             <div className="flex-1 text-center">
               <span className="text-[#a0a0a0] font-pixel text-[10px] md:text-xs tracking-widest uppercase">
                 {soundEnabled === null ? 'SELECT SOUND OPTION' : 'INITIALIZATION COMPLETE'}
               </span>
             </div>
             {/* Speaker Icon Button */}
             <div className="absolute right-[-4px] md:right-[-20px] top-1/2 -translate-y-1/2 bg-[#e0e0e0] border-4 border-[#1a1a1a] rounded-lg p-1 md:p-2 cursor-pointer shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-[#1a1a1a]">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
             </div>
           </div>

        </div>
      </div>
      
      {/* Bottom Footer Info (Matches Spidey Tracker Footer) */}
      <div className="absolute bottom-2 text-center w-full z-10 flex flex-col items-center opacity-80">
         <p className="font-pixel text-[6px] md:text-[8px] text-white/60 tracking-widest uppercase mt-4">
           PRIVACY POLICY • TERMS OF USE • COOKIE CONSENT TOOL • CREDITS
         </p>
         <p className="font-pixel text-[6px] md:text-[8px] text-white/40 tracking-widest uppercase mt-1">
           © & TM 2026 SIDDHANT. ALL RIGHTS RESERVED.
         </p>
      </div>

    </main>
  );
}
