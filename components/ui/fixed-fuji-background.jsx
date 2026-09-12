'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Sliders, Eye } from 'lucide-react';

export function FixedFujiBackground() {
  const [mounted, setMounted] = useState(false);
  const [bgChoice, setBgChoice] = useState('autumn');
  const [opacity, setOpacity] = useState(0.75);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const savedBg = localStorage.getItem('portfolio_bg_theme');
    if (savedBg === 'sakura' || savedBg === 'autumn') {
      setBgChoice(savedBg);
    }

    const savedOp = localStorage.getItem('portfolio_bg_opacity');
    if (savedOp) {
      const parsed = parseFloat(savedOp);
      if (!isNaN(parsed) && parsed >= 0.3 && parsed <= 1) {
        setOpacity(parsed);
      }
    }
    
    setMounted(true);
  }, []);

  const toggleBg = (theme) => {
    setBgChoice(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_bg_theme', theme);
    }
  };

  const handleOpacityChange = (newOp) => {
    setOpacity(newOp);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_bg_opacity', String(newOp));
    }
  };

  const imageSrc =
    bgChoice === 'autumn'
      ? '/mount-fuji-autumn.jpg'
      : '/mount-fuji-sakura.jpg';

  return (
    <>
      {/* Fixed Non-Movable Background Layer */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#09090b]"
        aria-hidden="true"
      >
        {/* The Fuji Wallpaper Layer with Smooth Cinematic Crossfade & Ambient Float */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bgChoice}
            initial={{ opacity: 0 }}
            animate={{
              opacity,
              scale: [1, 1.025, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeInOut' },
              scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={imageSrc}
              alt="Mount Fuji Background"
              fill
              priority
              quality={95}
              className="object-cover object-center filter brightness-105 contrast-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal Subtle Scrim to ensure crisp typography contrast while preserving the vivid landscape */}
        <div className="absolute inset-0 bg-neutral-950/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50 pointer-events-none" />
      </div>

      {/* Floating Background & Opacity Controller (Bottom Right) */}
      <aside aria-label="Wallpaper Controller" className="fixed bottom-4 right-4 z-50">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/80 text-xs shadow-2xl">
          <div className="px-2 py-1 flex items-center gap-1.5 text-neutral-300 font-mono text-[11px] hidden sm:flex">
            <ImageIcon className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span className="font-medium">Fuji:</span>
          </div>

          <button
            type="button"
            onClick={() => toggleBg('autumn')}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              bgChoice === 'autumn'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            Autumn Gate
          </button>

          <button
            type="button"
            onClick={() => toggleBg('sakura')}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              bgChoice === 'sakura'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            Sakura Torii
          </button>

          <div className="w-px h-4 bg-neutral-700 mx-0.5" />

          {/* Quick Opacity Adjuster */}
          <button
            type="button"
            onClick={() => setShowControls(!showControls)}
            title="Adjust wallpaper brightness"
            className={`p-1.5 rounded-full transition-colors flex items-center gap-1 text-[11px] font-mono ${
              showControls ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{Math.round(opacity * 100)}%</span>
          </button>
        </div>

        {/* Expanded Opacity Drawer */}
        {showControls && (
          <div className="mt-2 p-3 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-700 shadow-2xl text-xs space-y-2.5 w-60">
            <div className="flex items-center justify-between text-neutral-300 text-[11px] font-mono">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-orange-400" />
                <span>Wallpaper Opacity:</span>
              </span>
              <span className="font-bold text-orange-400">{Math.round(opacity * 100)}%</span>
            </div>

            <input
              type="range"
              min="0.35"
              max="0.95"
              step="0.05"
              value={opacity}
              onChange={(e) => handleOpacityChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />

            <div className="grid grid-cols-3 gap-1 pt-1 text-center font-mono text-[10px]">
              <button
                type="button"
                onClick={() => handleOpacityChange(0.55)}
                className={`py-1 rounded border transition-colors ${
                  opacity === 0.55 ? 'bg-orange-500/20 border-orange-500 text-orange-300' : 'border-neutral-800 text-neutral-400'
                }`}
              >
                55% Muted
              </button>
              <button
                type="button"
                onClick={() => handleOpacityChange(0.75)}
                className={`py-1 rounded border transition-colors ${
                  opacity === 0.75 ? 'bg-orange-500/20 border-orange-500 text-orange-300' : 'border-neutral-800 text-neutral-400'
                }`}
              >
                75% Vivid
              </button>
              <button
                type="button"
                onClick={() => handleOpacityChange(0.90)}
                className={`py-1 rounded border transition-colors ${
                  opacity === 0.90 ? 'bg-orange-500/20 border-orange-500 text-orange-300' : 'border-neutral-800 text-neutral-400'
                }`}
              >
                90% Bold
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
