import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-ink text-paper flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-lg"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-cobalt/20 flex items-center justify-center mx-auto">
            <CheckCircle size={48} className="text-cobalt-soft" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl font-semibold mb-4"
        >
          Thank You! 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-cobalt-soft font-medium mb-3"
        >
          Your message has been sent successfully.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate text-lg leading-relaxed mb-10"
        >
          I'll get back to you as soon as possible. Usually within 24 hours. 
          Thanks for reaching out — I appreciate your interest!
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-px bg-line mb-10"
        />

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-slate"
        >
          <a href="mailto:hassan16naveed@gmail.com" className="inline-flex items-center gap-2 hover:text-paper transition-colors">
            <Mail size={16} className="text-cobalt-soft" />
            hassan16naveed@gmail.com
          </a>
          <a href="tel:+923192945394" className="inline-flex items-center gap-2 hover:text-paper transition-colors">
            <Phone size={16} className="text-cobalt-soft" />
            +92 319 2945394
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-cobalt-soft" />
            Karachi, Pakistan
          </span>
        </motion.div>

        {/* Back Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          href="/"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cobalt text-paper text-sm font-medium hover:bg-cobalt-soft transition-all hover:shadow-lg hover:shadow-cobalt/25"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </motion.a>
      </motion.div>
    </div>
  )
}
