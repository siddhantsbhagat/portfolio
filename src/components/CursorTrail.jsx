"use client";

import React, { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only desktop and non-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(min-width: 1024px) and (pointer: fine)');

    if (motionQuery.matches || !pointerQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    let rafId = null;
    let points = [];
    
    // Mouse target position
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    // Spring tracking point
    let spring = { x: target.x, y: target.y, vx: 0, vy: 0 };
    
    // Spring physics constants
    const stiffness = 0.15;
    const damping = 0.7;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update spring physics
      const dx = target.x - spring.x;
      const dy = target.y - spring.y;
      
      spring.vx += dx * stiffness;
      spring.vy += dy * stiffness;
      
      spring.vx *= damping;
      spring.vy *= damping;
      
      spring.x += spring.vx;
      spring.y += spring.vy;
      
      // Record point
      points.push({ x: spring.x, y: spring.y, age: 0 });
      
      // Filter out old points (fade after ~60 frames = 1s)
      points = points.filter(p => p.age < 60);
      
      // Age points
      points.forEach(p => p.age++);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          // Quadratic bezier smoothing for a thread-like look
          const p0 = points[i - 1];
          const p1 = points[i];
          const xc = (p0.x + p1.x) / 2;
          const yc = (p0.y + p1.y) / 2;
          ctx.quadraticCurveTo(p0.x, p0.y, xc, yc);
        }
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1.5;
        // Fade opacity based on age (points at end of array are newest)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.stroke();
      }
      
      rafId = requestAnimationFrame(draw);
    };
    
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
