"use client";

import React, { useRef, useState, useEffect } from "react";

export default function GlassSurface({ children, className = "" }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden transition-transform duration-300 ${
        isHovered ? "scale-[1.02] shadow-[0_8px_32px_rgba(224,24,44,0.15)]" : "shadow-lg"
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--light-x": `${position.x}%`,
        "--light-y": `${position.y}%`,
      }}
    >
      {/* SVG Filter for Refraction */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Base Layer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl saturate-[1.8] brightness-110 pointer-events-none z-0" />

      {/* Refraction Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backdropFilter: "url(#glass-distortion)",
          WebkitBackdropFilter: "url(#glass-distortion)"
        }} 
      />

      {/* Specular Highlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 motion-reduce:hidden"
        style={{
          background: `radial-gradient(circle 200px at var(--light-x) var(--light-y), rgba(255,255,255,${isHovered ? 0.15 : 0.05}), transparent)`,
        }}
      />

      {/* Edge Definition (Border) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 border border-transparent"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%) border-box",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Content */}
      <div className="relative z-30 p-6 h-full">
        {children}
      </div>
    </div>
  );
}
