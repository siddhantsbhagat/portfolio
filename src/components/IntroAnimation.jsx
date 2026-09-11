"use client";

import React, { useEffect, useState } from 'react';

export default function IntroAnimation({ children }) {
  const [showAnim, setShowAnim] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Only play if not reduced motion and not seen before
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hasSeen = localStorage.getItem('hasSeenIntro');

    if (!hasSeen && !motionQuery.matches) {
      setShowAnim(true);
    }
    setHasChecked(true);
  }, []);

  useEffect(() => {
    if (showAnim) {
      const timer = setTimeout(() => {
        setShowAnim(false);
        localStorage.setItem('hasSeenIntro', 'true');
      }, 1800); // Wait for trace + fade out
      return () => clearTimeout(timer);
    }
  }, [showAnim]);

  // Don't render anything until we've checked localStorage (avoids hydration mismatch)
  if (!hasChecked) return null;

  return (
    <>
      {showAnim && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#0a192f] transition-opacity duration-500 delay-[1300ms] pointer-events-none" style={{ opacity: showAnim ? 1 : 0 }}>
          {/* Animated SVG Web Tracing */}
          <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-96 md:h-96">
            <g stroke="#e0182c" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Radial threads */}
              <path d="M100 100 L100 10 M100 100 L190 100 M100 100 L100 190 M100 100 L10 100 M100 100 L160 40 M100 100 L160 160 M100 100 L40 160 M100 100 L40 40" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" className="animate-web-trace" />
              
              {/* Spiral/ring threads */}
              <path d="M100 30 Q 130 40 170 100 Q 140 160 100 170 Q 60 160 30 100 Q 60 40 100 30" strokeWidth="1.5" strokeDasharray="300" strokeDashoffset="300" className="animate-web-trace ring-delay-1" />
              <path d="M100 60 Q 115 65 140 100 Q 115 135 100 140 Q 85 135 60 100 Q 85 65 100 60" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" className="animate-web-trace ring-delay-2" />
            </g>
          </svg>
        </div>
      )}
      
      <div className={`transition-opacity duration-700 h-full w-full ${showAnim ? 'opacity-0 delay-1000' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
