import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function Background3D() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.6, 0.6, 0.3])

  const springRotateX = useSpring(rotateX, { stiffness: 50, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 20 })
  const springScale = useSpring(scale, { stiffness: 50, damping: 20 })

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Main background image with 3D parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <motion.div
          className="absolute inset-[-5%] w-[110%] h-[110%]"
          style={{ y: y1 }}
        >
          <img
            src="/bg-dev.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4) saturate(1.2)' }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
        </motion.div>
      </motion.div>

      {/* Floating 3D cubes - hidden on mobile for performance */}
      <div className="hidden sm:block">
        <motion.div
          className="absolute top-[15%] left-[8%] w-16 h-16 opacity-40"
          style={{ y: y2 }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotateX: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cobalt/30 to-purple-500/20 border border-cobalt/20 rounded-lg backdrop-blur-sm" 
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateZ(45deg)' }} />
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[12%] w-12 h-12 opacity-30"
          style={{ y: y3 }}
          animate={{
            rotateX: [360, 0],
            rotateZ: [0, 360],
            y: [0, 15, 0],
          }}
          transition={{
            rotateX: { duration: 18, repeat: Infinity, ease: 'linear' },
            rotateZ: { duration: 12, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber/20 to-cobalt/20 border border-amber/20 rounded-md backdrop-blur-sm"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(30deg)' }} />
        </motion.div>

        <motion.div
          className="absolute bottom-[30%] left-[15%] w-10 h-10 opacity-25"
          animate={{
            rotateY: [0, 360],
            rotateZ: [360, 0],
            y: [0, -12, 0],
          }}
          transition={{
            rotateY: { duration: 14, repeat: Infinity, ease: 'linear' },
            rotateZ: { duration: 10, repeat: Infinity, ease: 'linear' },
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-cobalt/20 border border-emerald-400/20 rounded-sm backdrop-blur-sm"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg) rotateZ(60deg)' }} />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[8%] w-20 h-20 opacity-20"
          style={{ y: y2 }}
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            y: [0, -25, 0],
          }}
          transition={{
            rotateX: { duration: 25, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cobalt-soft/15 to-purple-500/15 border border-cobalt-soft/15 rounded-xl backdrop-blur-sm"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateZ(20deg)' }} />
        </motion.div>
      </div>

      {/* Floating particles - reduced on mobile */}
      <div className="hidden sm:block">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cobalt-soft/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30 - i * 5, 0],
              x: [0, (i % 2 ? 10 : -10), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated lines - hidden on mobile for performance */}
      <div className="hidden sm:block">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full opacity-10"
          style={{ y: y2 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-cobalt-soft to-transparent" />
        </motion.div>
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full opacity-10"
          style={{ y: y3 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-amber to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}
