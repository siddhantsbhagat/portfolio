import React from 'react';
import BrandMark from '@/components/BrandMark';
import SpideyCard from '@/components/SpideyCard';

export default function StylePreviewPage() {
  return (
    <main className="min-h-screen relative bg-[#1c5c96] flex flex-col items-center py-8 scanlines overflow-hidden">
      
      {/* Top Logo Area */}
      <div className="text-center mb-6 z-10 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)] tracking-tighter" style={{ WebkitTextStroke: '2px #000' }}>
          SIDDHANT
        </h1>
        <h2 className="text-tracker-yellow font-pixel text-lg md:text-xl tracking-widest mt-2 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          The Web Weaver
        </h2>
      </div>

      {/* Main Terminal Frame */}
      <div className="relative w-[95%] max-w-4xl bg-tracker-bg border-4 border-[#13325c] rounded-sm p-1 z-10 flex-1 min-h-[600px] shadow-[0_0_40px_rgba(0,0,0,0.7)]">
        
        {/* Inner Screen */}
        <div className="relative w-full h-full border-2 border-tracker-border overflow-hidden bg-[#0d2140] p-4 flex flex-col">
          
          {/* Background Dot-Matrix Spider */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <BrandMark className="w-[80%] h-[80%] text-tracker-text" />
          </div>

          {/* Interactive Spidey Identity Card (Multiverse Themes) */}
          <div className="absolute top-[10%] right-[5%] md:right-[10%] z-30 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
             <SpideyCard />
          </div>

          {/* Rulers (Left side) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-tracker-border/30 flex flex-col items-end py-16 opacity-50 z-10">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className={`h-px bg-tracker-text w-${i % 5 === 0 ? '4' : '2'} mb-2`} />
            ))}
          </div>

          {/* Header UI */}
          <div className="flex items-start gap-3 relative z-20 pl-8">
            <div className="w-16 h-16 border-2 border-tracker-text bg-[#1c385c] flex items-center justify-center shadow-[0_0_10px_rgba(101,158,207,0.5)]">
              {/* Pixel Spider Logo */}
              <svg viewBox="0 0 16 16" className="w-10 h-10 text-white fill-current shape-rendering-crispedges">
                <path d="M4 2h8v12H4z M6 4h4v2H6z M6 8h4v2H6z" />
                <path d="M2 4h2v2H2z M12 4h2v2h-2z" fill="#tracker-red"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-pixel text-2xl text-white tracking-widest drop-shadow-md">WEB_NODE_1</div>
              <div className="font-terminal text-sm text-tracker-text border-b border-tracker-text/50 uppercase tracking-widest pb-1">Siddhant Track Mark 1</div>
              <div className="flex gap-2 mt-1">
                <div className="w-2 h-2 bg-tracker-text animate-ping"></div>
                <div className="w-2 h-2 bg-tracker-text"></div>
                <div className="w-2 h-2 border border-tracker-text"></div>
              </div>
            </div>
            <div className="ml-auto border border-tracker-border p-2 bg-black/20">
              <div className="w-4 h-px bg-tracker-text mb-1"></div>
              <div className="w-4 h-px bg-tracker-text mb-1"></div>
              <div className="w-4 h-px bg-tracker-text"></div>
            </div>
          </div>

          <div className="flex-1"></div>

          {/* Terminal Boot Sequence */}
          <div className="relative z-20 font-terminal text-xl md:text-2xl text-tracker-text pl-8 space-y-1 bg-black/40 p-4 rounded border-l-4 border-tracker-cyan inline-block max-w-lg backdrop-blur-sm">
            <p className="animate-pulse text-white">INITIALIZING WEB-WEAVER OS v4.2.0...</p>
            <p>BOOTING CORE SERVICES <span className="text-tracker-green">[OK]</span></p>
            <p>INITIALIZING MAP RENDER PIPELINE...</p>
            <p className="border-t border-tracker-border/50 pt-1 mt-1">LOADING BASE ASSETS: FRAME UI <span className="text-tracker-green">[OK]</span></p>
            <p>LOADING BASE ASSETS: PORTFOLIO MODULE <span className="text-tracker-green">[OK]</span></p>
            <p>STARTING EVENT BUS <span className="text-tracker-green">[OK]</span></p>
            <p>CALIBRATING GLASS REFRACTION LAYER <span className="text-tracker-green">[OK]</span></p>
            <p>WARMING IMAGE CACHE...</p>
            <p>CHECKING GITHUB REPO SYNC <span className="text-tracker-green">[OK]</span></p>
          </div>
        </div>
      </div>
      
      {/* Ticker / Footer */}
      <div className="relative z-10 w-[95%] max-w-4xl mt-4 flex gap-4">
        <div className="flex-1 bg-[#13325c] border-4 border-[#0d2140] rounded text-white font-pixel p-3 flex items-center justify-between text-sm md:text-base shadow-lg">
          <span className="text-tracker-red">N X</span>
          <span className="animate-pulse text-tracker-cyan">LOCATE DEVELOPER SIGNAL</span>
          <span className="text-tracker-red">&#9632;</span>
        </div>
      </div>

    </main>
  );
}
