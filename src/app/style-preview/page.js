"use client";

import React, { useState } from 'react';
import SpideyCard from '@/components/SpideyCard';
import { HangingSpidey, SittingSpidey, SpiderIcon } from '@/components/PixelSprites';

export default function StylePreviewPage() {
  const [soundEnabled, setSoundEnabled] = useState(null);

  return (
    <main className="relative h-screen w-screen bg-[#1c5c96] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Tech Details */}
      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none z-10"></div>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Top Center Badge (Red Accent) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-[#e0182c] border-4 border-black rounded-full px-8 py-2 shadow-[0_0_20px_rgba(224,24,44,0.6)]">
        <span className="text-white font-pixel text-lg md:text-xl uppercase tracking-widest text-shadow-sm">SIDDHANT</span>
        <div className="w-8 h-8 rounded-full bg-[#1c5c96] border-2 border-black flex items-center justify-center">
           <div className="flex gap-1">
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
           </div>
        </div>
        <span className="text-white font-pixel text-lg md:text-xl uppercase tracking-widest text-shadow-sm">TRACKER</span>
      </div>

      {/* --- CENTRAL BOOT SEQUENCE --- */}

      {/* Hanging Spidey (Swinging from top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-40 hover:translate-y-4 transition-transform duration-700 ease-in-out cursor-pointer">
         <div className="w-[2px] h-24 md:h-32 bg-white/80"></div>
         <HangingSpidey className="w-20 h-32 transform -translate-y-2 drop-shadow-2xl" />
      </div>

      {/* Central Boot Text */}
      <div className="mt-48 md:mt-56 text-center z-30 flex flex-col items-center justify-center w-full px-4">
        <p className="text-white font-pixel text-sm md:text-base uppercase tracking-[0.2em] leading-loose text-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          WELCOME TO THE SIDDHANT TRACKER.<br/>
          INTERACT WITH THE MAP TO VIEW<br/>
          PROJECT SIGHTINGS<br/>
          ALL OVER THE WORLD.
        </p>

        {/* Loading Bar (Red) */}
        <div className="flex gap-2 justify-center mt-10 h-5">
           {[...Array(12)].map((_, i) => (
             <div key={i} className={`w-4 ${i < 7 ? 'bg-[#e0182c] shadow-[0_0_12px_rgba(224,24,44,0.8)]' : 'bg-black/30'}`}></div>
           ))}
        </div>

        <p className="text-white/80 font-pixel text-xs mt-10 uppercase tracking-[0.2em]">
          CHOOSE YOUR SETTINGS AND START TRACKING
        </p>

        <div className="flex gap-6 justify-center mt-8">
          <button 
            onClick={() => setSoundEnabled(true)}
            className={`font-pixel text-sm px-8 py-3 border-4 rounded-full transition-all duration-300 ${soundEnabled === true ? 'bg-[#e0182c] text-white border-black shadow-[0_0_20px_rgba(224,24,44,0.8)]' : 'border-black bg-black/40 text-white/70 hover:bg-black/60'}`}
          >
            SOUND ON
          </button>
          <button 
            onClick={() => setSoundEnabled(false)}
            className={`font-pixel text-sm px-8 py-3 border-4 rounded-full transition-all duration-300 ${soundEnabled === false ? 'bg-[#e0182c] text-white border-black shadow-[0_0_20px_rgba(224,24,44,0.8)]' : 'border-black bg-black/40 text-white/70 hover:bg-black/60'}`}
          >
            SOUND OFF
          </button>
        </div>
      </div>

      {/* --- ID CARD OVERLAY --- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] z-50 transform md:rotate-2 hover:rotate-0 transition-all duration-500 hidden lg:block scale-90 xl:scale-100 origin-right hover:scale-105 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
         <SpideyCard />
      </div>

      {/* --- FOOTER UI --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-12 py-3 w-auto max-w-2xl text-center z-40 flex items-center shadow-lg">
        <span className="text-[#a0a0a0] font-pixel text-xs tracking-widest uppercase">
          {soundEnabled === null ? 'SELECT SOUND OPTION' : 'INITIALIZATION COMPLETE'}
        </span>
      </div>

      <div className="absolute bottom-2 text-center w-full z-20 flex flex-col items-center opacity-60 pointer-events-none">
         <p className="font-pixel text-[8px] text-white/60 tracking-widest uppercase mt-4">
           PRIVACY POLICY • TERMS OF USE • COOKIE CONSENT TOOL • CREDITS
         </p>
         <p className="font-pixel text-[8px] text-white/40 tracking-widest uppercase mt-1">
           © & TM 2026 SIDDHANT. ALL RIGHTS RESERVED.
         </p>
      </div>

    </main>
  );
}
