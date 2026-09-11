import React from 'react';
import BrandMark from '@/components/BrandMark';

export default function StylePreviewPage() {
  return (
    <main className="min-h-screen relative bg-[#1c5c96] flex flex-col items-center py-8 scanlines overflow-hidden">
      
      {/* Top Logo Area */}
      <div className="text-center mb-6 z-10 flex flex-col items-center">
        <div className="text-white font-display text-xs tracking-widest bg-red-600 px-1 mb-1">MARVEL STUDIOS</div>
        <h1 className="text-6xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)] tracking-tighter" style={{ WebkitTextStroke: '2px #000' }}>
          SPIDER-MAN
        </h1>
        <h2 className="text-tracker-yellow font-pixel text-lg md:text-xl tracking-widest mt-2 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Brand New Day
        </h2>
      </div>

      {/* Main Terminal Frame */}
      <div className="relative w-[95%] max-w-2xl bg-tracker-bg border-4 border-[#13325c] rounded-sm p-1 z-10 flex-1 min-h-[600px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* Inner Screen */}
        <div className="relative w-full h-full border-2 border-tracker-border overflow-hidden bg-[#0d2140] p-4 flex flex-col">
          
          {/* Background Dot-Matrix Spider */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <BrandMark className="w-[120%] h-[120%] text-tracker-border" />
          </div>

          {/* Rulers (Left side) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-tracker-border/30 flex flex-col items-end py-16 opacity-50">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className={`h-px bg-tracker-text w-${i % 5 === 0 ? '4' : '2'} mb-2`} />
            ))}
          </div>

          {/* Header UI */}
          <div className="flex items-start gap-3 relative z-10 pl-8">
            <div className="w-16 h-16 border-2 border-tracker-text bg-[#1c385c] flex items-center justify-center">
              {/* Pixel Spider Logo (Placeholder) */}
              <svg viewBox="0 0 16 16" className="w-10 h-10 text-white fill-current shape-rendering-crispedges">
                <path d="M4 2h8v12H4z M6 4h4v2H6z M6 8h4v2H6z" />
                <path d="M2 4h2v2H2z M12 4h2v2h-2z" fill="#fff"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-pixel text-2xl text-white tracking-widest">SMT_1</div>
              <div className="font-terminal text-sm text-tracker-text border-b border-tracker-text/50 uppercase tracking-widest pb-1">Spidey Track Mark 1</div>
              <div className="flex gap-2 mt-1">
                <div className="w-2 h-2 bg-tracker-text"></div>
                <div className="w-2 h-2 bg-tracker-text"></div>
                <div className="w-2 h-2 border border-tracker-text"></div>
              </div>
            </div>
            <div className="ml-auto border border-tracker-border p-2">
              <div className="w-4 h-px bg-tracker-text mb-1"></div>
              <div className="w-4 h-px bg-tracker-text mb-1"></div>
              <div className="w-4 h-px bg-tracker-text"></div>
            </div>
          </div>

          <div className="flex-1"></div>

          {/* Terminal Boot Sequence */}
          <div className="relative z-10 font-terminal text-xl text-tracker-text pl-8 space-y-1">
            <p className="animate-pulse">INITIALIZING SPIDEY TRACKER v4.2.0...</p>
            <p>BOOTING CORE SERVICES [OK]</p>
            <p>INITIALIZING MAP RENDER PIPELINE...</p>
            <p className="border-t border-tracker-border/50 pt-1 mt-1">LOADING BASE ASSETS: FRAME UI [OK]</p>
            <p>LOADING BASE ASSETS: TICKER MODULE [OK]</p>
            <p>STARTING EVENT BUS [OK]</p>
            <p>CALIBRATING SPRITESHEET RENDERER [OK]</p>
            <p>WARMING IMAGE CACHE...</p>
            <p>CHECKING FONT REGISTRY [OK]</p>
          </div>
        </div>
      </div>
      
      {/* Ticker / Footer */}
      <div className="relative z-10 w-[95%] max-w-2xl mt-4 flex gap-4">
        <div className="flex-1 bg-[#13325c] border-4 border-[#0d2140] rounded text-white font-pixel p-3 flex items-center justify-between text-sm shadow-md">
          <span>N X</span>
          <span className="animate-pulse text-tracker-text">SHARE YOUR SPIDEY SIGHT</span>
          <span>&#9632;</span>
        </div>
      </div>

    </main>
  );
}
