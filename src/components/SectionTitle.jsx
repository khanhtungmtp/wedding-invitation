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
    <div className={`mb-8 flex w-full min-w-0 max-w-3xl flex-col gap-3 px-0.5 sm:mb-10 ${alignCls}`}>
      {eyebrow ? (
        <motion.span
          className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blush-400/90 sm:text-[11px] sm:tracking-[0.32em]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          {eyebrow}
        </motion.span>
      ) : null}

      <motion.h2
        className="break-words font-script text-[clamp(2rem,7.5vw,4rem)] leading-[1.05] text-blush-ink"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className={`flex w-full min-w-0 items-center gap-2 sm:gap-3 ${align === 'left' ? '' : 'justify-center'}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent sm:w-14" />
        <span className="text-blush-400">✦</span>
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent sm:w-14" />
      </motion.div>

      {subtitle ? (
        <motion.p
          className={`max-w-xl text-[14px] leading-relaxed text-blush-muted sm:text-[15px] ${align === 'left' ? 'text-left' : ''}`}
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
