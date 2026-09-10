import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    skills: [
      { name: 'HTML5 & CSS3', level: 90, color: 'from-cobalt to-cobalt-soft' },
      { name: 'Responsive Web Design', level: 85, color: 'from-purple-500 to-purple-400' },
      { name: 'JavaScript (ES6+)', level: 75, color: 'from-cobalt to-cobalt-soft' },
      { name: 'React.js', level: 70, color: 'from-purple-500 to-purple-400' },
      { name: 'UI/UX Principles', level: 70, color: 'from-cobalt to-cobalt-soft' },
    ],
  },
  {
    title: 'DESIGN',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    skills: [
      { name: 'Web Development', level: 85, color: 'from-cobalt to-cobalt-soft' },
      { name: 'Graphic Design', level: 80, color: 'from-purple-500 to-purple-400' },
      { name: 'Microsoft Office', level: 85, color: 'from-cobalt to-cobalt-soft' },
    ],
  },
  {
    title: 'TOOLS',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
    skills: [
      { name: 'Git & Version Control', level: 75, color: 'from-cobalt to-cobalt-soft' },
      { name: 'Technical Research', level: 80, color: 'from-purple-500 to-purple-400' },
      { name: 'VS Code', level: 90, color: 'from-cobalt to-cobalt-soft' },
      { name: 'AI Tools', level: 85, color: 'from-purple-500 to-purple-400' },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cobalt-soft" />
          <span className="text-sm text-paper font-medium">{name}</span>
        </div>
        <span className="text-xs text-slate font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-ink rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-display text-4xl sm:text-5xl font-semibold">
          Tech stack
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-ink-soft border border-line"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-cobalt-soft">{cat.icon}</span>
              <h3 className="font-display text-sm font-semibold tracking-wider text-paper">{cat.title}</h3>
            </div>
            <div>
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={j}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
