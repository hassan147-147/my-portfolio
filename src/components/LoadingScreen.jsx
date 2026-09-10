import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const minDuration = 2000

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progressValue = Math.min((elapsed / minDuration) * 100, 100)

      setProgress(progressValue)

      if (progressValue >= 100) {
        clearInterval(timer)
        setTimeout(() => setLoading(false), 400)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
        >
          {/* Background orbs */}
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-cobalt/10 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-amber/10 rounded-full blur-[60px] animate-float" style={{ animationDelay: '-2s' }} />

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="mb-8 relative"
          >
            <svg width="80" height="80" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="loadGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a5cff" />
                  <stop offset="50%" stopColor="#7c88ff" />
                  <stop offset="100%" stopColor="#ffb238" />
                </linearGradient>
                <linearGradient id="loadGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a5cff" />
                  <stop offset="100%" stopColor="#7c88ff" />
                </linearGradient>
              </defs>
              {/* Outer ring */}
              <motion.circle
                cx="21"
                cy="21"
                r="20"
                stroke="url(#loadGrad1)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* Background hexagon */}
              <path
                d="M21 2L37 11V31L21 40L5 31V11L21 2Z"
                fill="url(#loadGrad2)"
                opacity="0.15"
              />
              {/* H letter */}
              <motion.path
                d="M14 13V29M28 13V29M14 21H28"
                stroke="url(#loadGrad1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              />
              {/* Decorative dots */}
              <motion.circle
                cx="14" cy="13" r="2"
                fill="#4a5cff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              />
              <motion.circle
                cx="28" cy="13" r="2"
                fill="#7c88ff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
              />
              <motion.circle
                cx="14" cy="29" r="2"
                fill="#7c88ff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
              <motion.circle
                cx="28" cy="29" r="2"
                fill="#ffb238"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              />
            </svg>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-cobalt/30 rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0.3], scale: [0.5, 1.2, 1] }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-display text-3xl font-bold text-paper mb-2"
          >
            Hassan Naveed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-slate text-sm mb-10 font-mono"
          >
            Web Developer & Graphic Designer
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 240 }}
            transition={{ delay: 0.8 }}
            className="h-1 bg-ink-soft rounded-full overflow-hidden relative"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cobalt via-cobalt-soft to-amber rounded-full relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 shimmer" />
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 mt-6"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-slate font-mono"
            >
              {progress < 100 ? 'Loading' : 'Welcome!'}
            </motion.span>
            {progress < 100 && (
              <span className="text-xs text-cobalt-soft font-mono">
                {Math.round(Math.min(progress, 100))}%
              </span>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
