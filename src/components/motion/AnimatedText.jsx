import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * AnimatedText Component
 * Character/Word-by-word scroll opacity reveal from 0.2 to 1.0.
 */
export default function AnimatedText({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'text-white font-semibold',
  mode = 'word' // 'word' | 'char'
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={`inline-block flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            isHighlight={isHighlight}
            highlightClass={highlightClass}
          />
        );
      })}
    </span>
  );
}

function Word({ word, range, progress, isHighlight, highlightClass }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.28em] mb-[0.1em] transition-colors duration-200 ${
        isHighlight ? highlightClass : ''
      }`}
    >
      {word}
    </motion.span>
  );
}
