import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Users } from 'lucide-react'

function Counter({ to, suffix = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const duration = 1500
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * to))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-semibold text-paper">
      {val}{suffix}
    </span>
  )
}

const stats = [
  { to: 10, suffix: '+', label: 'Projects Completed', icon: Code, color: 'from-cobalt to-cobalt-soft' },
  { to: 12, suffix: '+', label: 'Skills Mastered', icon: Palette, color: 'from-purple-500 to-purple-400' },
  { to: 2, suffix: '+', label: 'Years Learning', icon: Zap, color: 'from-amber to-orange-400' },
  { to: 8, suffix: '+', label: 'Happy Collaborators', icon: Users, color: 'from-emerald-400 to-emerald-300' },
]

const education = [
  { degree: 'Intermediate (ADSE)', field: 'Aptech - ADSE', institution: 'Aptech Pakistan', location: 'Karachi', status: 'Batch 2024-2027' },
  { degree: 'Matriculation', field: 'Computer Science', institution: 'Board of Secondary Education', location: 'Karachi', status: '75% (Grade A)' },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-amber mb-4"
          >
            About Me
          </motion.p>
          <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight text-balance mb-6">
            Building digital experiences with passion and precision.
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-cobalt to-cobalt-soft rounded-full mb-6"
          />
          <p className="text-slate text-base leading-relaxed">
            Based in Karachi, Pakistan — I'm a dedicated Computer Science student at Aptech (ADSE Batch 2024-2027) with a strong foundation in front-end web development. I specialize in building responsive, modern, and user-friendly web applications using HTML5, CSS3, JavaScript, and React.js.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          className="space-y-6"
        >
          <p className="text-slate text-lg leading-relaxed">
            I'm a fast learner with excellent problem-solving skills and a keen interest in Artificial Intelligence and Software Engineering. My goal is to pursue a Bachelor's degree in Computer Science and continually enhance my technical competencies in full-stack web engineering.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, working on personal projects, or diving into the latest trends in web development and AI.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 150 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-5 rounded-2xl bg-ink-soft border border-line relative overflow-hidden group"
                style={{ perspective: '600px' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <motion.div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <s.icon size={18} className="text-white" />
                  </motion.div>
                  <Counter to={s.to} suffix={s.suffix} />
                  <p className="text-xs text-slate mt-1 leading-snug">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 border-t border-line">
            <p className="font-mono text-sm text-amber mb-4">Education</p>
            <div className="space-y-3">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-4 rounded-xl bg-ink-soft border border-line hover:border-cobalt/30 transition-all"
                >
                  <div>
                    <p className="font-display text-base text-paper">{e.degree}</p>
                    <p className="text-xs text-slate">{e.institution}, {e.location}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-line text-amber whitespace-nowrap self-start">{e.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
