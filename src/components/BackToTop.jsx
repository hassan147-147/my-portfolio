import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setScrollPercent(total > 0 ? (current / total) * 100 : 0)
      setShow(current > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 18

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-ink-soft/80 backdrop-blur-xl border border-line flex items-center justify-center group hover:border-cobalt/50 transition-all shadow-2xl shadow-black/30"
          aria-label="Back to top"
        >
          {/* Progress Circle */}
          <svg className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] -rotate-90" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="rgba(74, 92, 255, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="url(#btnGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - scrollPercent / 100)}
            />
            <defs>
              <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a5cff" />
                <stop offset="100%" stopColor="#ffb238" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp size={18} className="text-paper relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
