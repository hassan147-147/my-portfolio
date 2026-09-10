import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    const hoverEls = document.querySelectorAll('a, button, [data-hover]')
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    const onClick = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 150)
    }

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      el.addEventListener('click', onClick)
    })

    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll('a, button, [data-hover]')
      newEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.removeEventListener('click', onClick)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
        el.addEventListener('click', onClick)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.removeEventListener('click', onClick)
      })
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cobalt pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hovered ? 1.8 : clicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cobalt pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicked ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  )
}
