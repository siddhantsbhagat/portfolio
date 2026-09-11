"use client";

import React, { useState } from 'react';
import GlassSurface from '@/components/GlassSurface';
import BrandMark from '@/components/BrandMark';
import SpideyCard from '@/components/SpideyCard';

export default function StylePreviewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ambientTint, setAmbientTint] = useState('rgba(0,0,0,0)');

  return (
    <main 
      className="min-h-screen relative bg-[#1c5c96] flex flex-col items-center py-24 scanlines overflow-x-hidden"
      style={{ '--ambient-tint': ambientTint }}
    >
      
      {/* 1. NAV Variant */}
      <GlassSurface variant="nav">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BrandMark className="w-8 h-8 text-tracker-cyan" />
            <span className="font-pixel tracking-widest text-white">WEB_OS</span>
          </div>
          <div className="flex gap-4 font-terminal text-tracker-cyan">
            <button className="hover:text-white transition-colors">SYSTEM</button>
            <button className="hover:text-white transition-colors">MODULES</button>
            <button className="hover:text-white transition-colors">SETTINGS</button>
          </div>
        </div>
      </GlassSurface>

      {/* Main Terminal Frame */}
      <div className="relative w-[95%] max-w-6xl bg-tracker-bg border-4 border-[#13325c] rounded-sm p-1 z-10 shadow-[0_0_40px_rgba(0,0,0,0.7)] mt-12">
        
        {/* Inner Screen */}
        <div className="relative w-full h-full border-2 border-tracker-border overflow-hidden bg-[#0d2140] p-8 flex flex-col gap-12">
          
          {/* Background Dot-Matrix Spider */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <BrandMark className="w-[120%] h-[120%] text-tracker-text" />
          </div>

          {/* Interactive Spidey Identity Card (Multiverse Themes) - FLOATING OVERLAY */}
          <div className="absolute top-[5%] right-[5%] z-30 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-pulse" style={{ animationDuration: '6s' }}>
             <SpideyCard />
          </div>

          <h1 className="relative z-20 text-4xl font-display text-white border-b-2 border-tracker-cyan pb-2 inline-block">
            COMPONENT DIAGNOSTICS
          </h1>

          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 2. CARD Variant (Full vs Flat) */}
            <div className="space-y-4">
              <h2 className="font-pixel text-tracker-yellow">variant="card"</h2>
              <div className="flex flex-col gap-4">
                <GlassSurface variant="card" tier="full" className="p-6 border border-tracker-cyan/30">
                  <h3 className="font-terminal text-2xl text-white mb-2">FULL TIER</h3>
                  <p className="text-tracker-text text-sm">Rich refraction, mouse-tracking specular highlight, thick glass edge.</p>
                </GlassSurface>
                <GlassSurface variant="card" tier="flat" className="p-6 border border-tracker-cyan/30">
                  <h3 className="font-terminal text-2xl text-white mb-2">FLAT TIER</h3>
                  <p className="text-tracker-text text-sm">Pure CSS blur, static highlights. Used automatically for prefers-reduced-motion.</p>
                </GlassSurface>
              </div>
            </div>

            {/* 3. BUTTON Variant */}
            <div className="space-y-4">
              <h2 className="font-pixel text-tracker-yellow">variant="button"</h2>
              <div className="flex flex-col items-start gap-4">
                <GlassSurface variant="button" onClick={() => alert("Primary action clicked")} className="px-6 py-3 font-terminal text-xl text-white border border-tracker-green/50">
                  <span className="text-tracker-green mr-2">[+]</span> INITIALIZE SEQUENCE
                </GlassSurface>
                <GlassSurface variant="button" onClick={() => setIsModalOpen(true)} className="px-6 py-3 font-terminal text-xl text-tracker-cyan border border-tracker-cyan/50">
                  OPEN SECURE MODAL
                </GlassSurface>
              </div>
            </div>

            {/* 4. INPUT Variant */}
            <div className="space-y-4">
              <h2 className="font-pixel text-tracker-yellow">variant="input"</h2>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-2 font-terminal text-tracker-text">
                  OVERRIDE KEY
                  <GlassSurface variant="input" type="password" placeholder="Enter secure key..." />
                </label>
                <label className="flex flex-col gap-2 font-terminal text-tracker-text">
                  DIRECTIVE LOG
                  <GlassSurface variant="input" as="textarea" rows="3" placeholder="Awaiting input..." className="resize-none py-2" />
                </label>
              </div>
            </div>

            {/* 5. BEZEL Variant (Image/Avatar container) */}
            <div className="space-y-4">
              <h2 className="font-pixel text-tracker-yellow">variant="bezel"</h2>
              <GlassSurface variant="bezel" className="inline-block p-2 bg-black/40">
                <img src="/pfp.png" alt="Bezel Test" className="w-24 h-24 object-cover" />
              </GlassSurface>
              <p className="font-terminal text-sm text-tracker-text max-w-xs">
                A thin, 1px glass border optimized for image framing and avatars.
              </p>
            </div>

          </div>

          {/* Ambient Tint Control (Bonus Feature) */}
          <div className="relative z-20 mt-8 p-6 bg-black/30 border border-white/10 rounded">
            <h2 className="font-pixel text-tracker-yellow mb-4">AMBIENT TINT OVERRIDE</h2>
            <div className="flex gap-4">
              <GlassSurface variant="button" className="px-4 py-2 text-white border border-transparent" onClick={() => setAmbientTint('rgba(0,0,0,0)')}>NONE</GlassSurface>
              <GlassSurface variant="button" className="px-4 py-2 text-tracker-red border border-tracker-red/30" onClick={() => setAmbientTint('rgba(224,24,44,0.1)')}>CRISIS (RED)</GlassSurface>
              <GlassSurface variant="button" className="px-4 py-2 text-tracker-green border border-tracker-green/30" onClick={() => setAmbientTint('rgba(116,168,116,0.1)')}>SAFE (GREEN)</GlassSurface>
            </div>
            <p className="font-terminal text-tracker-text text-sm mt-2">Applies a global tint to all glass variants reflecting the environment.</p>
          </div>

        </div>
      </div>

      {/* 7. MODAL Variant */}
      <GlassSurface 
        variant="modal" 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        className="p-8 border-t-[4px] border-t-tracker-red border-l-tracker-border border-r-tracker-border border-b-tracker-border"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 id="modal-title" className="font-pixel text-2xl text-white">SECURE DIRECTIVE</h2>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-tracker-text hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tracker-red rounded"
            aria-label="Close modal"
          >
            [X]
          </button>
        </div>
        <div className="font-terminal text-lg text-tracker-text space-y-4">
          <p>WARNING: Unauthorized access to the multiverse grid detected.</p>
          <p>This dialog uses the <span className="text-white">variant="modal"</span> property. It features a heavy backdrop blur, a focus trap (simulated), and entrance spring animations.</p>
          <div className="pt-4 border-t border-white/10 flex justify-end gap-4 mt-8">
             <GlassSurface variant="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-white border border-tracker-cyan/50">
               ACKNOWLEDGE
             </GlassSurface>
          </div>
        </div>
      </GlassSurface>

    </main>
  );
}
