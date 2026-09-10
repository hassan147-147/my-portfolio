import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function ProfessionalLogo() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer ring */}
          <motion.circle
            cx="21"
            cy="21"
            r="20"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Inner gradient background */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5cff" />
              <stop offset="50%" stopColor="#7c88ff" />
              <stop offset="100%" stopColor="#ffb238" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5cff" />
              <stop offset="100%" stopColor="#7c88ff" />
            </linearGradient>
          </defs>
          {/* Background hexagon */}
          <path
            d="M21 2L37 11V31L21 40L5 31V11L21 2Z"
            fill="url(#grad2)"
            opacity="0.15"
          />
          {/* H letter */}
          <path
            d="M14 13V29M28 13V29M14 21H28"
            stroke="url(#grad1)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Decorative dots */}
          <circle cx="14" cy="13" r="2" fill="#4a5cff" />
          <circle cx="28" cy="13" r="2" fill="#7c88ff" />
          <circle cx="14" cy="29" r="2" fill="#7c88ff" />
          <circle cx="28" cy="29" r="2" fill="#ffb238" />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cobalt/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
      <div className="hidden sm:block">
        <span className="font-display text-lg font-bold tracking-tight text-paper block leading-tight">
          Hassan
        </span>
        <span className="text-[10px] text-slate font-mono tracking-wider">
          DEVELOPER
        </span>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-xl border-b border-line shadow-xl shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-18 py-4">
        <ProfessionalLogo />

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-slate hover:text-paper transition-colors rounded-lg hover:bg-white/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="ml-4 text-sm px-5 py-2.5 rounded-xl bg-gradient-to-r from-cobalt to-cobalt-soft text-paper font-medium hover:shadow-lg hover:shadow-cobalt/25 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's talk
          </motion.a>
        </div>

        <button
          className="md:hidden text-paper p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-b border-line"
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-slate hover:text-paper hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.05 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center text-sm px-5 py-3 rounded-xl bg-gradient-to-r from-cobalt to-cobalt-soft text-paper font-medium"
            initial={{ opacity: 0 }}
            animate={open ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's talk
          </motion.a>
        </div>
      </motion.div>
    </header>
  )
}
