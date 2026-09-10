import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDownRight, Mail, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import MagneticButton from './MagneticButton'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/hassannaveed', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/hassan-naveed-82a81131a/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hassan16naveed@gmail.com', label: 'Email' },
]

const word = (text, delay) => ({
  initial: { y: '110%', rotateX: -80 },
  animate: { y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function Hero() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 18 })
  const springY = useSpring(y, { stiffness: 60, damping: 18 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const floatY = useTransform(springY, [-0.5, 0.5], [10, -10])

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* animated 3D grid floor */}
      <div
        className="absolute inset-0 grid-floor opacity-[0.35] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
        }}
      />

      {/* 3D Floating orbs with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-cobalt/15 rounded-full blur-[120px]"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-amber/15 rounded-full blur-[100px]"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative max-w-6xl w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* Left: headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cobalt/10 border border-cobalt/20 mb-6"
          >
            <Sparkles size={14} className="text-cobalt-soft" />
            <span className="font-mono text-xs text-cobalt-soft">Available for projects</span>
          </motion.div>

          <div className="overflow-hidden mb-3" style={{ perspective: '600px' }}>
            <motion.p
              {...word('', 2.3)}
              className="font-mono text-sm text-amber"
            >
              Web Developer &amp; Graphic Designer — Karachi, Pakistan
            </motion.p>
          </div>

          <h1 className="font-display font-semibold text-[11vw] leading-[0.95] sm:text-[6.2rem] sm:leading-[0.92] tracking-tight text-balance" style={{ perspective: '800px' }}>
            <span className="block overflow-hidden">
              <motion.span {...word('', 2.4)} className="block" style={{ transformOrigin: 'bottom' }}>
                Building Digital
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span {...word('', 2.52)} className="block bg-gradient-to-r from-cobalt-soft to-amber bg-clip-text text-transparent" style={{ transformOrigin: 'bottom' }}>
                Experiences
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span {...word('', 2.64)} className="block" style={{ transformOrigin: 'bottom' }}>
                with Passion.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.6 }}
            className="mt-8 max-w-md"
          >
            <p className="text-slate text-base sm:text-lg leading-relaxed">
              I'm Hassan — a passionate Computer Science student building responsive and modern web applications.{' '}
              <span className="text-paper">
                <TypeAnimation
                  sequence={[
                    'Frontend Development.', 1400,
                    'React Applications.', 1400,
                    'Responsive Design.', 1400,
                    'UI/UX Solutions.', 1400,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-9">
              <MagneticButton
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cobalt to-cobalt-soft text-paper text-sm font-medium transition-all hover:shadow-xl hover:shadow-cobalt/30"
              >
                See the work
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-7 py-3.5 rounded-xl border border-line text-sm font-medium text-paper hover:border-paper/30 hover:bg-white/5 transition-all"
              >
                Start a project
              </MagneticButton>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.6 }}
            className="flex items-center gap-3 mt-10"
          >
            {socialLinks.map((s, i) => (
              <MagneticButton key={s.label} href={s.href}>
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-line flex items-center justify-center text-slate hover:text-paper hover:border-cobalt hover:bg-cobalt/10 transition-all block"
                  initial={{ opacity: 0, y: 20, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: 3.1 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <s.icon />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Right: floating 3D artboard stack, tilts toward cursor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
          style={{ perspective: '1400px' }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative h-[420px]"
          >
            {/* Back card */}
            <motion.div
              style={{ transform: 'translateZ(-60px) translate(25px, 50px) rotate(-6deg)' }}
              className="absolute inset-0 rounded-2xl bg-ink-soft border border-line"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Middle card */}
            <motion.div
              style={{ transform: 'translateZ(-20px) translate(5px, 15px) rotate(2deg)' }}
              className="absolute inset-0 rounded-2xl bg-ink-soft border border-line"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Front card */}
            <motion.div
              style={{ transform: 'translateZ(20px)' }}
              className="absolute inset-0 rounded-2xl bg-ink-soft border border-line p-6 overflow-hidden"
            >
              {/* Glare effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              <div className="flex gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-cobalt-soft/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-paper/30" />
              </div>
              <div className="font-mono text-xs text-slate leading-6 relative z-10">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 }}
                >
                  <span className="text-cobalt-soft">const</span> developer = {'{'}
                </motion.p>
                <motion.p
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.1 }}
                >
                  name: <span className="text-amber">'Hassan Naveed'</span>,
                </motion.p>
                <motion.p
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.2 }}
                >
                  skills: [<span className="text-amber">'React'</span>, <span className="text-amber">'JavaScript'</span>],
                </motion.p>
                <motion.p
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.3 }}
                >
                  based_in: <span className="text-amber">'Pakistan'</span>,
                </motion.p>
                <motion.p
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.4 }}
                >
                  passion: <span className="text-amber">'Building UIs'</span>,
                </motion.p>
                <motion.p
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.5 }}
                >
                  status: <span className="text-emerald-400">'Available'</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.6 }}
                >
                  {'}'}
                </motion.p>
              </div>
            </motion.div>
            {/* Floating card */}
            <motion.div
              style={{ transform: 'translateZ(80px)' }}
              className="absolute -top-8 -left-8 w-44 h-32 rounded-xl bg-gradient-to-br from-cobalt to-cobalt-soft shadow-2xl shadow-cobalt/30"
              animate={{ y: [0, -15, 0], rotate: [-8, -4, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-4 h-full flex flex-col justify-end">
                <p className="text-white/80 text-xs font-mono">Current Status</p>
                <p className="text-white font-display text-lg font-semibold">Available</p>
              </div>
            </motion.div>
            {/* Circle decoration */}
            <motion.div
              style={{ transform: 'translateZ(100px)' }}
              className="absolute bottom-8 right-0 w-28 h-28 rounded-full border-2 border-amber/30"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
            />
            {/* Small floating dots */}
            <motion.div
              className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-cobalt-soft"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-amber"
              animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
