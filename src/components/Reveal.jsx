import { motion, useReducedMotion } from 'framer-motion'
import { revealContainer, revealEase, revealItem } from './revealVariants'

export function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px', amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: revealEase }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -8% 0px', amount: 0.15 }}
      variants={revealContainer}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={revealItem}>
      {children}
    </motion.div>
  )
}
