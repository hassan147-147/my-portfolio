import { motion } from 'framer-motion'
import { Code, Palette, Layout, Globe, Smartphone, Server } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern, fast, and scalable web applications using React, JavaScript, and latest technologies.',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive interfaces with clean code and smooth interactions.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Websites that look and work perfectly on every device — mobile, tablet, and desktop.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centered design with focus on usability, accessibility, and visual appeal.',
  },
  {
    icon: Globe,
    title: 'Portfolio Websites',
    desc: 'Personal portfolio websites that showcase your work and help you stand out.',
  },
  {
    icon: Server,
    title: 'Web Hosting',
    desc: 'Deployment and hosting setup to get your website live and running smoothly.',
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-xl"
      >
        <p className="font-mono text-sm text-amber mb-4">What I Do</p>
        <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight text-balance">
          Services I can help you with.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-line bg-ink-soft p-7 hover:border-paper/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-cobalt/10 flex items-center justify-center mb-5 group-hover:bg-cobalt/20 transition-colors">
              <s.icon size={22} className="text-cobalt-soft" />
            </div>
            <h3 className="font-display text-xl mb-2">{s.title}</h3>
            <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
