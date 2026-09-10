import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Understand',
    desc: 'A short discovery conversation — what the product does, who it\'s for, and what "done" looks like.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Wireframes into high-fidelity screens in Figma, refined with you before a single line of code is written.',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Component-driven React development, responsive from the first commit, reviewed against the design at every step.',
  },
  {
    n: '04',
    title: 'Ship',
    desc: 'Performance pass, accessibility check, deploy. Then I stick around for the small fixes that follow launch.',
  },
]

export default function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-xl"
      >
        <p className="font-mono text-sm text-amber mb-4">How it works</p>
        <h2 className="font-display text-2xl sm:text-[2.6rem] leading-tight text-balance">
          Four steps, no surprises.
        </h2>
      </motion.div>

      <div className="divide-y divide-line border-y border-line">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid sm:grid-cols-[80px_1fr_2fr] gap-4 sm:gap-8 py-8 items-start"
          >
            <span className="font-mono text-sm text-amber">{s.n}</span>
            <h3 className="font-display text-xl sm:text-2xl">{s.title}</h3>
            <p className="text-slate leading-relaxed max-w-lg">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
