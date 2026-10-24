import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { data } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      handleDismiss();
    }, 1800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-[#F8FAFC] cursor-pointer select-none"
          role="dialog"
          aria-label="Monogram Introduction"
        >
          {/* Subtle geometric background accent with blue and green ambient glow */}
          <div className="absolute inset-0 pointer-events-none opacity-20 fine-grid-pattern" />
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-[#2563EB]/20 to-[#10B981]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Monogram Circle Frame */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 rounded-full border border-[#38BDF8]/40 flex items-center justify-center bg-[#0F172A] shadow-2xl shadow-blue-950/50"
            >
              {/* Animated outer blue-emerald drawing ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                  strokeDasharray="290"
                  strokeDashoffset="290"
                  className="animate-[dash_1.4s_ease-out_forwards]"
                />
              </svg>

              {/* Monogram letters */}
              <span className="font-serif text-3xl font-bold tracking-widest text-[#F8FAFC]">
                {data.monogram || 'AA'}
              </span>
            </motion.div>

            {/* Fine Blue-to-Green Gradient Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-[#10B981] my-5"
            />

            {/* Person Name & Field */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <h1 className="font-serif text-lg tracking-[0.25em] uppercase text-[#F8FAFC] font-semibold">
                {data.name}
              </h1>
              <p className="text-xs text-[#34D399] tracking-widest mt-1 uppercase font-mono">
                Finance · Data Analytics · Operations
              </p>
            </motion.div>
          </div>

          {/* Accessible Skip Button */}
          <div className="absolute bottom-8 right-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="px-3.5 py-1.5 rounded-full text-xs text-[#94A3B8] hover:text-[#F8FAFC] border border-[#38BDF8]/30 hover:border-[#10B981] transition-all bg-[#0F172A]/70"
            >
              Skip (ESC)
            </button>
          </div>

          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
