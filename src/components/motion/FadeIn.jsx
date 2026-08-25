import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeIn Component
 * Staggered entrance animation with cubic bezier [0.25, 0.1, 0.25, 1].
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 30,
  className = '',
  viewportMargin = '-60px'
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 };
      case 'down': return { y: -distance, opacity: 0 };
      case 'left': return { x: distance, opacity: 0 };
      case 'right': return { x: -distance, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`gpu-accel ${className}`}
    >
      {children}
    </motion.div>
  );
}
