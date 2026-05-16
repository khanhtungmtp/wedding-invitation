import { motion } from 'framer-motion'

export function GlassCard({ children, className = '', hover = true, ...rest }) {
  return (
    <motion.div
      {...rest}
      className={`relative overflow-hidden rounded-[28px] border border-white/70 bg-white/55 shadow-card backdrop-blur-xl ${className}`}
      whileHover={
        hover
          ? { y: -3, boxShadow: '0 26px 54px rgba(58,53,64,0.12)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.75),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(246,223,227,0.55),transparent_52%)]" />
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  )
}
