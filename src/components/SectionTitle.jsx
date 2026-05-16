import { motion } from 'framer-motion'

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) {
  const alignCls =
    align === 'left'
      ? 'items-start text-left'
      : 'items-center text-center mx-auto'

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-3 px-1 ${alignCls}`}>
      {eyebrow ? (
        <motion.span
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blush-400/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          {eyebrow}
        </motion.span>
      ) : null}

      <motion.h2
        className="font-script text-[clamp(2.6rem,8vw,4rem)] leading-none text-blush-ink"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className={`flex items-center gap-3 ${align === 'left' ? '' : 'justify-center'}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <span className="h-px w-14 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent" />
        <span className="text-blush-400">✦</span>
        <span className="h-px w-14 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent" />
      </motion.div>

      {subtitle ? (
        <motion.p
          className={`max-w-xl text-[15px] leading-relaxed text-blush-muted ${align === 'left' ? 'text-left' : ''}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
