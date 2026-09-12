"use client";

import React, { useRef, useEffect, useState } from 'react';

export default function MiniGame() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  
  const [gameState, setGameState] = useState('START'); // 'START', 'PLAYING', 'GAMEOVER'
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const gameStateRef = useRef('START');
  const resetGameRef = useRef(null);
  const triggerJumpRef = useRef(null);

  // Sync state to ref for the requestAnimationFrame loop
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let currentScale = 1;

    // For handling resize
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      
      const rect = parent.getBoundingClientRect();
      const displayWidth = rect.width;
      // Height is now dynamically determined by the video element
      const displayHeight = rect.height > 10 ? rect.height : 120; 
      
      currentScale = displayHeight / 120;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      ctx.scale(dpr, dpr);
      
      return { width: displayWidth, height: displayHeight };
    };

    let { width, height } = resizeCanvas();
    window.addEventListener('resize', () => {
      const dims = resizeCanvas();
      width = dims.width;
      height = dims.height;
    });

    let animationFrameId;
    let lastTime = 0;
    
    // Game state variables
    let scrollOffset = 0;
    const baseScrollSpeed = 200; 

    // Images
    const playerImg = new Image();
    playerImg.src = '/runner.png';
    const enemyImg = new Image();
    enemyImg.src = '/enemy.png';
    
    // Video reference using React ref
    const video = videoRef.current;
    if (video) {
      video.load(); 
      video.play().catch(e => console.log('Video autoplay prevented:', e));
    }

    const player = {
      x: 0,
      y: 0,
      vy: 0,
      isJumping: false,
    };

    const baseGravity = 1600; 
    const baseJumpVelocity = -380; 

    // Game logic state
    let internalGameOver = false;
    let obstacles = [];
    let spawnTimer = 1.0; 
    let internalScore = 0;
    let internalBestScore = bestScore; // inherit from React state

    const resetGame = () => {
      internalGameOver = false;
      obstacles = [];
      spawnTimer = 1.0;
      scrollOffset = 0;
      player.y = 0;
      player.vy = 0;
      player.isJumping = false;
      internalScore = 0;
      setScore(0);
    };
    resetGameRef.current = resetGame;

    const jump = () => {
      // First input starts the game AND triggers the first jump
      if (gameStateRef.current === 'START') {
        setGameState('PLAYING');
      } 
      
      if ((gameStateRef.current === 'START' || gameStateRef.current === 'PLAYING') && !player.isJumping && !internalGameOver) {
        player.isJumping = true;
        player.vy = baseJumpVelocity * currentScale;
      } else if (gameStateRef.current === 'GAMEOVER') {
        resetGame();
        setGameState('PLAYING');
      }
    };
    triggerJumpRef.current = jump;

    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (e.target === document.body) {
          e.preventDefault(); 
        }
        jump();
      }
    };
    
    const handlePointerDown = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
      jump();
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('pointerdown', handlePointerDown);

    const render = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = Math.min((time - lastTime) / 1000, 0.1); 
      lastTime = time;

      const isPlaying = gameStateRef.current === 'PLAYING';
      const isGameOver = gameStateRef.current === 'GAMEOVER';

      // Dynamically scale player size
      player.width = 50 * currentScale;
      player.height = 50 * currentScale;

      if (isPlaying && !internalGameOver) {
        scrollOffset += (baseScrollSpeed * currentScale) * deltaTime;
        
        // Spawn Obstacles
        spawnTimer -= deltaTime;
        if (spawnTimer <= 0) {
          const enemyW = 35 * currentScale;
          const enemyH = 25 * currentScale;
          obstacles.push({
            x: width + enemyW,
            y: height - (20 * currentScale) - enemyH, // sitting on baseline
            width: enemyW,
            height: enemyH,
            passed: false
          });
          spawnTimer = 1.5 + Math.random() * 1.5; 
        }
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const baselineY = height - (20 * currentScale);
      
      // Player Physics Update
      player.x = width * 0.15; 
      const groundY = baselineY - player.height;

      if (isPlaying || isGameOver) {
        if (player.isJumping) {
          player.vy += (baseGravity * currentScale) * deltaTime;
          player.y += player.vy * deltaTime;

          if (player.y >= groundY) {
            player.y = groundY;
            player.isJumping = false;
            player.vy = 0;
          }
        } else {
          player.y = groundY;
        }
      } else {
        // START phase
        player.y = groundY;
      }

      // Draw Baseline (floor)
      ctx.strokeStyle = '#2de6e6'; 
      ctx.lineWidth = 1 * currentScale;
      ctx.beginPath();
      ctx.moveTo(0, baselineY);
      ctx.lineTo(width, baselineY);
      ctx.stroke();

      // Draw Tick Marks scrolling LEFT
      ctx.strokeStyle = '#39d353'; 
      ctx.lineWidth = 2 * currentScale;
      
      const tickSpacing = 80 * currentScale;
      const startX = -(scrollOffset % tickSpacing);
      
      for (let x = startX; x < width + tickSpacing; x += tickSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, baselineY);
        ctx.lineTo(x, baselineY + (6 * currentScale));
        ctx.stroke();
      }

      // Obstacles update & draw
      for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        
        if (isPlaying && !internalGameOver) {
          obs.x -= (baseScrollSpeed * currentScale) * deltaTime;
          
          // Score tracking
          if (!obs.passed && obs.x + obs.width < player.x) {
            obs.passed = true;
            internalScore += 1;
            setScore(internalScore);
            if (internalScore > internalBestScore) {
              internalBestScore = internalScore;
              setBestScore(internalBestScore);
            }
          }

          // AABB Collision Detection 
          const shrinkX = player.width * 0.25; 
          const shrinkY = player.height * 0.15; 
          
          const pLeft = player.x + shrinkX;
          const pRight = player.x + player.width - shrinkX;
          const pTop = player.y + shrinkY;
          const pBottom = player.y + player.height; 
          
          const oShrinkLeft = obs.width * 0.20; 
          const oShrinkRight = obs.width * 0.10; 
          const oShrinkTop = obs.height * 0.20; 
          
          const oLeft = obs.x + oShrinkLeft;
          const oRight = obs.x + obs.width - oShrinkRight;
          const oTop = obs.y + oShrinkTop;
          const oBottom = obs.y + obs.height; 

          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            internalGameOver = true;
            setGameState('GAMEOVER');
          }
        }

        // Draw Tiger enemy
        if (enemyImg.complete) {
          let enemyBob = 0;
          let enemyTilt = 0;
          
          if (isPlaying && !internalGameOver) {
            const stepSpeed = 15; 
            enemyBob = -Math.abs(Math.sin((time / 1000) * stepSpeed)) * (3 * currentScale);
            enemyTilt = Math.cos((time / 1000) * stepSpeed) * (4 * Math.PI / 180);
          }

          ctx.save();
          ctx.translate(obs.x + obs.width / 2, obs.y + obs.height + enemyBob);
          ctx.rotate(enemyTilt);
          ctx.scale(-1, 1);
          ctx.drawImage(enemyImg, -obs.width / 2, -obs.height, obs.width, obs.height);
          ctx.restore();
        } else {
          ctx.fillStyle = '#ff2d55';
          ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
        }
      }

      // Draw Player
      if (playerImg.complete) {
        const runTime = time / 1000;
        let bobOffset = 0;
        let tiltAngle = 0;

        if (gameStateRef.current === 'START') {
           // Idle breathing animation
           bobOffset = -Math.abs(Math.sin(runTime * 4)) * (2 * currentScale);
        } else if (!player.isJumping && !internalGameOver) {
          const stepSpeed = 18; 
          bobOffset = -Math.abs(Math.sin(runTime * stepSpeed)) * (3 * currentScale); 
          tiltAngle = Math.cos(runTime * stepSpeed) * (3 * Math.PI / 180);
        } else if (player.isJumping) {
          tiltAngle = 5 * Math.PI / 180;
        }

        ctx.save();
        ctx.translate(player.x + player.width / 2, player.y + player.height + bobOffset);
        ctx.rotate(tiltAngle);
        ctx.scale(-1, 1);
        ctx.drawImage(playerImg, -player.width / 2, -player.height, player.width, player.height);
        ctx.restore();
      } else {
        ctx.fillStyle = '#ff2d55';
        ctx.fillRect(player.x, player.y, player.width, player.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(45,230,230,0.1)] relative group select-none">
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(45,230,230,0.05)] z-20" />
      
      {/* Fallback Image */}
      <img
        src="/bg_real.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        alt="background"
      />
      
      {/* Seamless Looping Video Background */}
      <video 
        ref={videoRef}
        src="/bg_video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        onLoadedMetadata={() => window.dispatchEvent(new Event('resize'))}
        className="w-full h-auto block pointer-events-none z-0 relative" 
      />
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block z-10 cursor-pointer"
      />

      {/* HUD - Score Counters */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20 pointer-events-none font-mono text-xs sm:text-sm font-bold tracking-widest text-[#a8b2d1] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        <div>STREAK {String(score).padStart(6, '0')}</div>
        <div>BEST {String(bestScore).padStart(6, '0')}</div>
      </div>

      {/* UI Overlay - START */}
      {gameState === 'START' && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <button 
            onClick={() => { if (triggerJumpRef.current) triggerJumpRef.current(); }}
            className="hover:scale-105 active:scale-95 transition-transform cursor-pointer w-[60%] max-w-[280px]"
          >
            <img src="/start_game.png" alt="Start Game" className="w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
          </button>
        </div>
      )}

      {/* UI Overlay - GAME OVER */}
      {gameState === 'GAMEOVER' && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[3px] gap-6">
          <img src="/game_over.png" alt="Game Over" className="w-[70%] max-w-[350px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
          <button 
            onClick={() => {
              if (resetGameRef.current) resetGameRef.current();
              setGameState('PLAYING');
            }}
            className="hover:scale-105 active:scale-95 transition-transform cursor-pointer w-[35%] max-w-[160px]"
          >
            <img src="/retry.png" alt="Retry" className="w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
          </button>
        </div>
      )}
    </div>
  );
}
