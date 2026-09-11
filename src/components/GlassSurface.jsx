"use client";

import React, { useRef, useState, useEffect, useId } from "react";

export default function GlassSurface({ 
  children, 
  className = "", 
  variant = "card", 
  tier = "full", 
  ambientTint = "transparent",
  isOpen = false, // for modal
  onClose, // for modal
  as,
  ...props 
}) {
  const containerRef = useRef(null);
  const reactId = useId();
  const filterId = `glass-distortion-${reactId.replace(/:/g, "")}`;
  
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion for performance fallback
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Nav scroll listener
  useEffect(() => {
    if (variant !== "nav") return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  // Modal focus trap & Escape key
  useEffect(() => {
    if (variant !== "modal" || !isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [variant, isOpen, onClose]);

  // Auto-focus modal on open
  useEffect(() => {
    if (variant === "modal" && isOpen && containerRef.current) {
      containerRef.current.focus();
    }
  }, [variant, isOpen]);

  // Force flat tier on low capabilities or reduced motion
  const effectiveTier = prefersReducedMotion ? "flat" : tier;

  const handleMouseMove = (e) => {
    if (effectiveTier === "flat" || variant === "nav") return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  // Determine Tag and Base Classes
  const baseClasses = "relative overflow-hidden transition-all duration-300 outline-none";
  let variantClasses = "";
  let Tag = "div";
  
  if (variant === "card") {
    variantClasses = `rounded-2xl ${isHovered && effectiveTier === "full" ? "scale-[1.02] shadow-[0_8px_32px_rgba(224,24,44,0.15)]" : "shadow-lg"}`;
  } else if (variant === "button") {
    Tag = "button";
    variantClasses = "rounded-lg active:scale-95 active:backdrop-blur-sm cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-tracker-cyan flex items-center justify-center";
  } else if (variant === "nav") {
    Tag = "nav";
    variantClasses = `fixed top-0 left-0 right-0 z-50 rounded-none border-b transition-all duration-500 ${
      isScrolled 
        ? "border-white/10 bg-white/5 backdrop-blur-md shadow-lg" 
        : "border-transparent bg-transparent backdrop-blur-none"
    }`;
  } else if (variant === "input") {
    Tag = as || "input";
    variantClasses = "rounded-md shadow-inner focus-visible:ring-2 focus-visible:ring-tracker-red border border-white/10 bg-black/20 focus:bg-tracker-red/5 backdrop-blur-sm";
  } else if (variant === "modal") {
    variantClasses = "rounded-xl shadow-2xl bg-white/10 border border-white/20 w-full max-w-lg overflow-y-auto max-h-[90vh]";
  } else if (variant === "bezel") {
    // Thin glass bezel around images
    variantClasses = "rounded-sm shadow-sm border border-white/20 bg-white/5 backdrop-blur-sm";
  }
  
  if (as && variant !== "input") Tag = as;

  // Specular Highlight Dynamic Background
  const specularOpacity = isHovered ? (variant === "button" ? 0.25 : 0.15) : 0.05;
  const specularBackground = effectiveTier === "full" && variant !== "nav" 
    ? variant === "input" 
      ? `radial-gradient(circle 100px at var(--light-x) var(--light-y), transparent, rgba(0,0,0,0.5))` 
      : `radial-gradient(circle ${variant === "button" ? "80px" : "200px"} at var(--light-x) var(--light-y), rgba(255,255,255,${specularOpacity}), transparent)`
    : "none";

  const renderInner = () => {
    return (
      <>
        {/* SVG Filter for Refraction */}
        {effectiveTier === "full" && variant !== "input" && variant !== "bezel" && (
          <svg className="absolute w-0 h-0 pointer-events-none">
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency={variant === 'button' ? "0.015" : "0.008"} numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={variant === 'nav' ? "5" : "30"} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
        )}

        {/* Base Layer */}
        {variant !== "nav" && variant !== "input" && variant !== "bezel" && (
          <div 
            className={`absolute inset-0 pointer-events-none z-0 ${variant === 'modal' ? 'backdrop-blur-none' : variant === 'button' ? 'backdrop-blur-sm saturate-[1.2]' : 'backdrop-blur-md saturate-[1.8] brightness-110'} bg-white/5`} 
            style={{ backgroundColor: 'var(--ambient-tint, rgba(255,255,255,0.05))' }} 
          />
        )}

        {/* Refraction Layer */}
        {effectiveTier === "full" && variant !== "input" && variant !== "bezel" && (
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backdropFilter: `url(#${filterId})`,
              WebkitBackdropFilter: `url(#${filterId})`
            }} 
          />
        )}

        {/* Specular Highlight Layer */}
        {effectiveTier === "full" && (
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 ${variant === 'input' ? 'mix-blend-overlay' : ''}`}
            style={{ background: specularBackground }}
          />
        )}

        {/* Gradient Edge Bezel */}
        {variant !== "input" && variant !== "nav" && (
          <div
            className={`absolute inset-0 pointer-events-none z-20 border border-transparent ${variant === 'button' ? 'rounded-lg' : variant === 'modal' ? 'rounded-xl' : variant === 'bezel' ? 'rounded-sm' : 'rounded-2xl'}`}
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        )}

        {/* Child Content */}
        {variant === "input" ? null : (
          <div className={`relative z-30 w-full h-full ${variant === 'bezel' ? 'p-1' : ''}`}>
            {children}
          </div>
        )}
      </>
    );
  };

  const interactiveProps = {
    ref: containerRef,
    className: `${baseClasses} ${variantClasses} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: {
      "--light-x": `${position.x}%`,
      "--light-y": `${position.y}%`,
      "--ambient-tint": ambientTint,
      ...props.style
    },
    ...(variant === "modal" ? { tabIndex: -1 } : {}),
    ...props
  };

  // 1. Modal Wrapper
  if (variant === "modal") {
    if (!isOpen) return null;
    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-[32px] transition-opacity duration-300" 
          onClick={onClose}
          aria-hidden="true"
        />
        <div 
          {...interactiveProps}
          className={`${interactiveProps.className} transform scale-100 opacity-100 transition-all duration-300 origin-center z-10`}
          style={{ animation: 'modalSpring 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards', ...interactiveProps.style }}
        >
          {renderInner()}
        </div>
        <style jsx global>{`
          @keyframes modalSpring {
            0% { transform: scale(0.96); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // 2. Input Element
  if (variant === "input") {
    return React.createElement(Tag, {
      ...interactiveProps,
      className: `${interactiveProps.className} px-4 py-2 z-30 relative text-white placeholder-white/50`,
    });
  }

  // 3. Normal variants (nav, card, button, bezel)
  return React.createElement(Tag, interactiveProps, renderInner());
}
