import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HolidayMessage from './HolidayMessage';

interface ParchmentScrollProps {
  onUnroll?: () => void;
  onReroll?: () => void;
}

export default function ParchmentScroll({ onUnroll, onReroll }: ParchmentScrollProps) {
  const [isUnrolled, setIsUnrolled] = useState(false);

  const handleClick = () => {
    if (!isUnrolled) {
      setIsUnrolled(true);
      onUnroll?.();
    } else {
      setIsUnrolled(false);
      onReroll?.();
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isUnrolled ? (
          <motion.div
            key="rolled"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <RolledScroll />
          </motion.div>
        ) : (
          <motion.div
            key="unrolled"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="cursor-pointer origin-top"
            onClick={handleClick}
          >
            <UnrolledScroll />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RolledScroll() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="relative"
      style={{
        filter: 'drop-shadow(0 20px 40px rgba(26, 15, 10, 0.5))',
      }}
    >
      {/* PNG Image as button */}
      <img 
        src="/image_2025-12-11_182954649.png" 
        alt="Rolled Parchment Scroll"
        className="w-auto h-64 object-contain"
      />

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 40px rgba(244, 236, 216, 0.6)',
        }}
      />
    </motion.div>
  );
}

function UnrolledScroll() {
  return (
    <div
      className="relative w-[600px] min-h-[700px] rounded-lg overflow-hidden"
      style={{
        filter: 'drop-shadow(0 10px 30px rgba(26, 15, 10, 0.3))',
      }}
    >
      {/* Main parchment body */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(180deg, #E8DCC8 0%, #F4ECD8 5%, #F4ECD8 95%, #E8DCC8 100%)',
        }}
      />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 rounded-lg opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      {/* Aged stains and variations */}
      <div
        className="absolute top-20 right-16 w-32 h-32 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #8B6F47 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-32 left-20 w-40 h-40 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #8B6F47 0%, transparent 70%)',
        }}
      />

      {/* Edge darkening */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 60px rgba(139, 111, 71, 0.15)',
        }}
      />

      {/* Top curl effect */}
      <div
        className="absolute top-0 left-0 right-0 h-12 rounded-t-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(212, 196, 168, 0.4) 0%, transparent 100%)',
        }}
      />

      {/* Bottom curl effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 rounded-b-lg"
        style={{
          background: 'linear-gradient(0deg, rgba(212, 196, 168, 0.4) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[700px] p-16">
        <HolidayMessage />
      </div>

      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 90 Q 10 10, 90 10"
            stroke="#3E2723"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 85 Q 5 15, 85 15"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-16 h-16 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 90 Q 10 10, 90 10"
            stroke="#3E2723"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 85 Q 5 15, 85 15"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 w-16 h-16 opacity-20 scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 90 Q 10 10, 90 10"
            stroke="#3E2723"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 85 Q 5 15, 85 15"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20 scale-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 90 Q 10 10, 90 10"
            stroke="#3E2723"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 85 Q 5 15, 85 15"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
