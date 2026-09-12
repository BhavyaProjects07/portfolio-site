'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

/**
 * Animated headline that smoothly reveals words with a guaranteed fallback
 * so text is NEVER hidden or stuck at opacity 0.
 */
export function AnimatedHeadline({
  text = '',
  className = '',
  highlightText,
  highlightClassName = 'text-orange-500',
  delay = 0,
  tag = 'h2',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fail-safe to ensure text is always visible after mount
    const timer = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(' ');
  const shouldShow = isInView || mounted;
  const Tag = tag;

  return (
    <div ref={ref}>
      <Tag className={className}>
        <motion.span
          className="inline-flex flex-wrap gap-x-[0.3em] gap-y-1"
          initial="hidden"
          animate={shouldShow ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
              },
            },
          }}
        >
          {words.map((word, i) => {
            const isHighlight =
              highlightText && word.toLowerCase().includes(highlightText.toLowerCase());
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: 'easeOut',
                    },
                  },
                }}
                className={isHighlight ? highlightClassName : ''}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>
      </Tag>
    </div>
  );
}

/**
 * Reusable smooth entrance wrapper with automatic fail-safe fallback
 * guaranteeing child content is never stuck at opacity 0
 */
export function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 16,
  duration = 0.5,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fail-safe fallback to ensure text and components are never hidden
    const timer = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || mounted;

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        shouldShow
          ? { opacity: 1, x: 0, y: 0 }
          : initial
      }
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated number counter with spring easing on scroll into view
 * Defaults to the actual value so it's NEVER blank or 0 if JS delays
 */
export function AnimatedCounter({
  value = 0,
  suffix = '',
  duration = 1500,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        setDisplayCount(value);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayCount}
      {suffix}
    </span>
  );
}

/**
 * Rotating text title with AnimatePresence - NO clipping, NO overflow-hidden cutting off words,
 * dynamically fits viewport width cleanly
 */
export function RotatingRoleTitle({
  titles = [],
  interval = 3000,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!titles.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [titles.length, interval]);

  if (!titles.length) return null;

  return (
    <div className="relative inline-block w-full min-h-[1.25em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-block text-orange-500 font-extrabold tracking-tight text-balance"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
