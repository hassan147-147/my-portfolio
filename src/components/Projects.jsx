import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import TiltCard from './TiltCard'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const projects = [
  {
    title: 'Vehicle Inspection Management System',
    role: 'Web Application',
    desc: 'A comprehensive web-based vehicle inspection management system built with HTML5, CSS3, and JavaScript for managing inspection workflows and vehicle data.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'from-cobalt to-cobalt-soft',
    github: 'https://github.com/hassannaveed',
  },
  {
    title: 'VerteX Company Website',
    role: 'Web Development',
    desc: 'Modern company website built with React and Tailwind CSS featuring responsive design, smooth animations, and a professional UI for business presence.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    accent: 'from-amber to-orange-400',
    github: 'https://github.com/hassannaveed',
  },
  {
    title: 'University Project Websites',
    role: 'Academic Projects',
    desc: 'Multiple academic project websites developed using HTML5, CSS3, JavaScript, and Bootstrap for university coursework with clean responsive layouts.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    accent: 'from-emerald-400 to-cobalt-soft',
    github: 'https://github.com/hassannaveed',
  },
  {
    title: 'React Frontend Applications',
    role: 'Frontend Development',
    desc: 'Collection of React.js applications showcasing component-based architecture, state management, hooks, and interactive modern UIs.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    accent: 'from-cobalt-soft to-purple-400',
    github: 'https://github.com/hassannaveed',
  },
  {
    title: 'Portfolio & Landing Pages',
    role: 'Design & Development',
    desc: 'Various portfolio websites and landing pages with clean design, responsive layouts, optimized performance, and modern aesthetics.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'from-rose-400 to-amber',
    github: 'https://github.com/hassannaveed',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-xl"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-amber mb-4"
        >
          Selected Work
        </motion.p>
        <h2 className="font-display text-2xl sm:text-[2.6rem] leading-tight text-balance">
          A few projects worth a closer look.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1, type: "spring" }}
            style={{ perspective: '1000px' }}
          >
            <TiltCard strength={8} className="h-full">
              <div className="group h-full rounded-2xl border border-line bg-ink-soft p-7 sm:p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:border-cobalt/30 hover:shadow-2xl hover:shadow-cobalt/10 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.accent} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <div className="flex items-center gap-2">
                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-ink border border-line flex items-center justify-center text-slate hover:text-paper hover:border-cobalt transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title="View on GitHub"
                      >
                        <GithubIcon />
                      </motion.a>
                      <motion.div
                        className="w-9 h-9 rounded-lg bg-ink border border-line flex items-center justify-center text-slate group-hover:text-paper group-hover:border-cobalt transition-all"
                        whileHover={{ scale: 1.1, y: -2, x: 2 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-slate mb-2">{p.role}</p>
                  <h3 className="font-display text-xl sm:text-2xl mb-3 text-paper group-hover:text-cobalt-soft transition-colors duration-300">{p.title}</h3>
                  <p className="text-slate text-sm leading-relaxed mb-5">{p.desc}</p>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.05 }}
                        className="text-xs px-3 py-1 rounded-full border border-line text-slate group-hover:border-cobalt/30 group-hover:text-paper transition-all"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cobalt-soft hover:text-paper transition-colors"
                  >
                    <ExternalLink size={12} />
                    View Source Code
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
