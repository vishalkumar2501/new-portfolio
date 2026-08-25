import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnet Component
 * Follows mouse physics with customizable padding and strength.
 * Moves with mouse in an active ease-out transition, and returns with ease-in-out on release.
 */
export default function Magnet({ 
  children, 
  padding = 150, 
  strength = 3, 
  className = '',
  active = true
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!active || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < padding) {
      // Pull strength factor
      const pullFactor = (padding - distance) / padding;
      const x = (distanceX / (strength * 4)) * pullFactor * 2.5;
      const y = (distanceY / (strength * 4)) * pullFactor * 2.5;
      setPosition({ x, y });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 160,
        mass: 0.6,
      }}
      className={`inline-block gpu-accel ${className}`}
    >
      {children}
    </motion.div>
  );
}
