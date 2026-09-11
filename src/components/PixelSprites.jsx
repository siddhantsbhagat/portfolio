import React from 'react';

// Upgraded from crude pixels to sleek vector chibi style
export const HangingSpidey = ({ className = "" }) => (
  <svg viewBox="0 0 100 150" className={className}>
    {/* Web string */}
    <line x1="50" y1="0" x2="50" y2="70" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Body */}
    <rect x="35" y="75" width="30" height="20" rx="8" fill="#1c5c96" stroke="black" strokeWidth="2" />
    <rect x="42" y="75" width="16" height="20" fill="#e0182c" />
    
    {/* Legs clinging to web */}
    <path d="M 40 75 Q 30 50 48 45" fill="none" stroke="#e0182c" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 60 75 Q 70 50 52 45" fill="none" stroke="#e0182c" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Arms crossed on chest */}
    <path d="M 30 85 Q 50 100 70 85" fill="none" stroke="#e0182c" strokeWidth="7" strokeLinecap="round" />
    
    {/* Chibi Head (Upside down) */}
    <ellipse cx="50" cy="115" rx="32" ry="28" fill="#e0182c" stroke="black" strokeWidth="3" />
    
    {/* Left Eye */}
    <path d="M 46 130 Q 30 145 22 115 Q 30 105 46 110 Z" fill="white" stroke="black" strokeWidth="2.5" />
    
    {/* Right Eye */}
    <path d="M 54 130 Q 70 145 78 115 Q 70 105 54 110 Z" fill="white" stroke="black" strokeWidth="2.5" />
  </svg>
);

export const SittingSpidey = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {/* Legs hugging knees */}
    <ellipse cx="30" cy="80" rx="15" ry="12" fill="#1c5c96" stroke="black" strokeWidth="2" />
    <ellipse cx="70" cy="80" rx="15" ry="12" fill="#1c5c96" stroke="black" strokeWidth="2" />
    
    {/* Little Body */}
    <path d="M 35 60 Q 50 55 65 60 L 60 90 L 40 90 Z" fill="#1c5c96" stroke="black" strokeWidth="2" />
    <path d="M 42 60 L 58 60 L 55 90 L 45 90 Z" fill="#e0182c" />
    
    {/* Hands resting on knees */}
    <circle cx="35" cy="75" r="6" fill="#e0182c" stroke="black" strokeWidth="1.5" />
    <circle cx="65" cy="75" r="6" fill="#e0182c" stroke="black" strokeWidth="1.5" />

    {/* Chibi Head */}
    <ellipse cx="50" cy="40" rx="35" ry="30" fill="#e0182c" stroke="black" strokeWidth="3" />
    
    {/* Left Eye */}
    <path d="M 46 25 Q 30 15 20 40 Q 30 50 46 45 Z" fill="white" stroke="black" strokeWidth="2.5" />
    
    {/* Right Eye */}
    <path d="M 54 25 Q 70 15 80 40 Q 70 50 54 45 Z" fill="white" stroke="black" strokeWidth="2.5" />
  </svg>
);

export const SpiderIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C10.9 2 10 2.9 10 4V6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6V4C14 2.9 13.1 2 12 2M7 10C5.9 10 5 10.9 5 12C5 13.1 5.9 14 7 14H9C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10H7M17 10H15C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14H17C18.1 14 19 13.1 19 12C19 10.9 18.1 10 17 10M12 16C10.9 16 10 16.9 10 18V20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20V18C14 16.9 13.1 16 12 16Z" />
    <path d="M7 6L4 3M17 6L20 3M4 12H1M20 12H23M7 18L4 21M17 18L20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
