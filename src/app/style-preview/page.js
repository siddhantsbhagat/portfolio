import React from 'react';
import GlassSurface from '@/components/GlassSurface';
import BrandMark from '@/components/BrandMark';
import WebPattern from '@/components/WebPattern';
import { PixelSpider, PixelCorner } from '@/components/PixelAccents';

export default function StylePreviewPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-deep-bg text-off-white p-8">
      {/* Busy Background to show off glass refraction */}
      <div className="absolute inset-0 z-0">
        <WebPattern className="text-spider-red" opacity={0.15} />
        {/* Some colorful background blobs to make refraction obvious */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-spider-red/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="flex items-center gap-6 pb-8 border-b border-white/10">
          <BrandMark className="w-16 h-16 drop-shadow-[0_0_15px_rgba(224,24,44,0.3)]" />
          <div>
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-wider text-white">
              Web-Slinger Design System
            </h1>
            <p className="text-muted-slate text-lg mt-2">Tokens, Glass Components, & Typography</p>
          </div>
        </header>

        {/* Typography Section */}
        <section>
          <h2 className="text-sm font-bold tracking-widest text-spider-red uppercase mb-6 flex items-center gap-2">
            <PixelSpider className="w-4 h-4" /> Typography
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassSurface>
              <div className="space-y-4">
                <div className="text-xs text-muted-slate uppercase tracking-wider">Display Font (Oswald)</div>
                <h1 className="text-6xl font-display">Heading 1</h1>
                <h2 className="text-4xl font-display">Heading 2</h2>
                <h3 className="text-2xl font-display">Heading 3</h3>
              </div>
            </GlassSurface>
            <GlassSurface>
              <div className="space-y-4">
                <div className="text-xs text-muted-slate uppercase tracking-wider">Body Font (Space Grotesk)</div>
                <p className="text-lg text-off-white">
                  The quick brown fox jumps over the lazy dog. This text is used for readable paragraphs and longer form content across the application.
                </p>
                <p className="text-sm text-muted-slate">
                  Muted slate is used for secondary text, captions, and subtle supporting information.
                </p>
              </div>
            </GlassSurface>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h2 className="text-sm font-bold tracking-widest text-spider-red uppercase mb-6 flex items-center gap-2">
            <PixelSpider className="w-4 h-4" /> Color Tokens
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassSurface className="!p-4 text-center">
              <div className="w-full h-16 bg-deep-bg rounded-lg mb-3 border border-white/10" />
              <div className="font-mono text-xs">deep-bg</div>
              <div className="text-muted-slate text-xs">#0a0a0f</div>
            </GlassSurface>
            <GlassSurface className="!p-4 text-center">
              <div className="w-full h-16 bg-spider-red rounded-lg mb-3" />
              <div className="font-mono text-xs">spider-red</div>
              <div className="text-muted-slate text-xs">#e0182c</div>
            </GlassSurface>
            <GlassSurface className="!p-4 text-center">
              <div className="w-full h-16 bg-off-white rounded-lg mb-3" />
              <div className="font-mono text-xs text-deep-bg">off-white</div>
              <div className="text-muted-slate text-xs">#f2f2f0</div>
            </GlassSurface>
            <GlassSurface className="!p-4 text-center">
              <div className="w-full h-16 bg-muted-slate rounded-lg mb-3" />
              <div className="font-mono text-xs">muted-slate</div>
              <div className="text-muted-slate text-xs">#8a8a99</div>
            </GlassSurface>
          </div>
        </section>

        {/* Liquid Glass Showcase Section */}
        <section>
          <h2 className="text-sm font-bold tracking-widest text-spider-red uppercase mb-6 flex items-center gap-2">
            <PixelSpider className="w-4 h-4" /> Liquid Glass System
          </h2>
          <div className="relative">
            <GlassSurface className="min-h-[300px] flex flex-col justify-center items-center text-center">
              <PixelCorner position="top-left" className="absolute top-4 left-4 text-white/30" />
              <PixelCorner position="top-right" className="absolute top-4 right-4 text-white/30" />
              <PixelCorner position="bottom-left" className="absolute bottom-4 left-4 text-white/30" />
              <PixelCorner position="bottom-right" className="absolute bottom-4 right-4 text-white/30" />
              
              <BrandMark className="w-24 h-24 mb-6 text-white opacity-80" />
              <h3 className="text-3xl font-display mb-2">Refraction & Highlights</h3>
              <p className="max-w-md text-muted-slate">
                Hover over this surface to see the dynamic specular highlight track your cursor. 
                Notice the distortion of the background blobs through the liquid glass layer.
              </p>
            </GlassSurface>
          </div>
        </section>

      </div>
    </main>
  );
}
