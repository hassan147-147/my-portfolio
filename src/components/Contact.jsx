import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle, Send, Sparkles } from 'lucide-react'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
)

export default function Contact() {
  const [activeTab, setActiveTab] = useState('whatsapp')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-ink-soft border border-line text-slate hover:text-paper'
            }`}
          >
            <WhatsAppIcon />
            WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'email'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-ink-soft border border-line text-slate hover:text-paper'
            }`}
          >
            <Mail size={18} />
            Email
          </button>
        </div>

        <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-12">
          {/* Left Side - Info Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-ink-soft border border-line flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-cobalt/15 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-cobalt-soft" />
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-medium">EMAIL</p>
                <p className="text-paper font-medium">hassan16naveed@gmail.com</p>
                <p className="text-xs text-slate mt-1">Send me an email</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-2xl bg-ink-soft border border-line flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-medium">LOCATION</p>
                <p className="text-paper font-medium">Karachi, Pakistan</p>
                <p className="text-xs text-slate mt-1">Remote work</p>
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-ink-soft border border-line flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-paper font-medium">Available for work</p>
                </div>
                <p className="text-xs text-slate mt-1">Response within 24h</p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 pt-2"
            >
              {[
                { icon: GithubIcon, href: 'https://github.com/hassannaveed', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/hassan-naveed-82a81131a/', label: 'LinkedIn' },
                { icon: WhatsAppIcon, href: 'https://wa.me/923192945394', label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-ink-soft border border-line flex items-center justify-center text-slate hover:text-paper hover:border-cobalt hover:bg-cobalt/10 transition-all"
                >
                  <s.icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-2xl bg-ink-soft border border-cobalt/30"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-cobalt-soft" />
                <h3 className="font-display text-xl font-semibold text-paper">Send a message</h3>
              </div>
              <p className="text-xs text-slate hidden sm:block">* Email app will open automatically</p>
            </div>

            {activeTab === 'whatsapp' ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target
                  const name = form.querySelector('[name="name"]').value
                  const subject = form.querySelector('[name="subject"]').value
                  const message = form.querySelector('[name="message"]').value
                  const text = `Hi Hassan, I'm ${name}. ${subject}. ${message}`
                  window.open(`https://wa.me/923192945394?text=${encodeURIComponent(text)}`, '_blank')
                  setSubmitted(true)
                  setTimeout(() => setSubmitted(false), 4000)
                  form.reset()
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate mb-2">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  Send via WhatsApp
                </button>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target
                  const name = form.querySelector('[name="name"]').value
                  const email = form.querySelector('[name="email"]').value
                  const subject = form.querySelector('[name="subject"]').value
                  const message = form.querySelector('[name="message"]').value
                  const mailSubject = encodeURIComponent(`Portfolio Inquiry: ${subject}`)
                  const mailBody = encodeURIComponent(`Hi Hassan,\n\nI'm ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`)
                  window.location.href = `mailto:hassan16naveed@gmail.com?subject=${mailSubject}&body=${mailBody}`
                  setSubmitted(true)
                  setTimeout(() => setSubmitted(false), 4000)
                  form.reset()
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate mb-2">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-line text-paper placeholder:text-slate/50 focus:outline-none focus:border-cobalt transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cobalt text-paper font-medium hover:bg-cobalt-soft transition-all hover:shadow-lg hover:shadow-cobalt/25 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send via Email
                </button>
              </form>
            )}

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <p className="text-sm text-emerald-400">
                    Email app opened! Send the message and Hassan will reply within 24h.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
