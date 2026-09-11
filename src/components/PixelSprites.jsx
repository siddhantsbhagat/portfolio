import React from 'react';

export const HangingSpidey = ({ className = "" }) => (
  <svg viewBox="0 0 20 25" className={`w-12 h-16 ${className}`} shapeRendering="crispEdges">
    {/* Web */}
    <rect x="9" y="0" width="2" height="5" fill="white" />
    
    {/* Legs holding web */}
    <rect x="7" y="5" width="2" height="4" fill="#e0182c" />
    <rect x="11" y="5" width="2" height="4" fill="#e0182c" />
    
    {/* Body */}
    <rect x="5" y="9" width="10" height="8" fill="#1c5c96" /> {/* Blue suit */}
    <rect x="8" y="9" width="4" height="8" fill="#e0182c" /> {/* Red center */}
    
    {/* Head (Upside down) */}
    <rect x="4" y="17" width="12" height="8" fill="#e0182c" />
    
    {/* Eyes (Upside down, so flat on top, curved on bottom) */}
    {/* Left eye */}
    <rect x="5" y="19" width="4" height="3" fill="white" />
    <rect x="4" y="19" width="1" height="3" fill="black" />
    <rect x="5" y="22" width="4" height="1" fill="black" />
    {/* Right eye */}
    <rect x="11" y="19" width="4" height="3" fill="white" />
    <rect x="15" y="19" width="1" height="3" fill="black" />
    <rect x="11" y="22" width="4" height="1" fill="black" />
  </svg>
);

export const SittingSpidey = ({ className = "" }) => (
  <svg viewBox="0 0 20 25" className={`w-12 h-16 ${className}`} shapeRendering="crispEdges">
    {/* Head */}
    <rect x="4" y="2" width="12" height="10" fill="#e0182c" />
    
    {/* Eyes */}
    <rect x="6" y="5" width="3" height="4" fill="white" />
    <rect x="5" y="5" width="1" height="4" fill="black" />
    <rect x="6" y="4" width="3" height="1" fill="black" />
    
    <rect x="11" y="5" width="3" height="4" fill="white" />
    <rect x="14" y="5" width="1" height="4" fill="black" />
    <rect x="11" y="4" width="3" height="1" fill="black" />
    
    {/* Body */}
    <rect x="6" y="12" width="8" height="8" fill="#e0182c" />
    
    {/* Arms/Legs crouching */}
    <rect x="3" y="14" width="3" height="7" fill="#1c5c96" />
    <rect x="14" y="14" width="3" height="7" fill="#1c5c96" />
    
    {/* Feet */}
    <rect x="2" y="21" width="4" height="3" fill="#e0182c" />
    <rect x="14" y="21" width="4" height="3" fill="#e0182c" />
  </svg>
);

export const SpiderIcon = ({ className = "" }) => (
  <svg viewBox="0 0 16 16" className={`w-6 h-6 ${className}`} shapeRendering="crispEdges">
    {/* Body */}
    <rect x="6" y="4" width="4" height="8" fill="black" />
    {/* Legs Left */}
    <rect x="3" y="4" width="3" height="1" fill="black" />
    <rect x="2" y="5" width="1" height="2" fill="black" />
    
    <rect x="4" y="7" width="2" height="1" fill="black" />
    <rect x="3" y="8" width="1" height="2" fill="black" />
    
    <rect x="4" y="10" width="2" height="1" fill="black" />
    <rect x="3" y="11" width="1" height="2" fill="black" />
    
    {/* Legs Right */}
    <rect x="10" y="4" width="3" height="1" fill="black" />
    <rect x="13" y="5" width="1" height="2" fill="black" />
    
    <rect x="10" y="7" width="2" height="1" fill="black" />
    <rect x="12" y="8" width="1" height="2" fill="black" />
    
    <rect x="10" y="10" width="2" height="1" fill="black" />
    <rect x="12" y="11" width="1" height="2" fill="black" />
  </svg>
);
