import { motion } from 'framer-motion';

export default function HolidayMessage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Main message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h1
          className="text-8xl font-bold tracking-wide"
          style={{
            fontFamily: "'Tangerine', cursive",
            color: '#3E2723',
            textShadow: '2px 2px 4px rgba(62, 39, 35, 0.1)',
          }}
        >
          Happy Holidays
        </h1>
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-64 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #3E2723 50%, transparent 100%)',
          opacity: 0.3,
        }}
      />

      {/* Decorative flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="opacity-40"
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 30 Q 30 10, 60 30 T 110 30"
            stroke="#3E2723"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="60" cy="30" r="3" fill="#3E2723" />
          <path
            d="M55 35 Q 60 40, 65 35"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M55 25 Q 60 20, 65 25"
            stroke="#3E2723"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Subtitle message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center space-y-4"
      >
        <p
          className="text-xl tracking-widest"
          style={{
            fontFamily: "'Tangerine', cursive",
            color: '#3E2723',
            opacity: 0.7,
          }}
        >
          Congrats on finishing your exams :3
        </p>
        <div className="flex flex-col items-center space-y-2 pt-4">
          <p
            className="text-2xl"
            style={{
              fontFamily: "'Tangerine', cursive",
              color: '#3E2723',
              opacity: 0.6,
            }}
          >
            To: Chrizztell
          </p>
          <p
            className="text-2xl"
            style={{
              fontFamily: "'Tangerine', cursive",
              color: '#3E2723',
              opacity: 0.6,
            }}
          >
            From: Kirvy
          </p>
        </div>
      </motion.div>
    </div>
  );
}
