import { motion } from 'framer-motion'
import { COUPLE } from '../data/wedding'

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative w-full max-w-full overflow-hidden bg-blush-ink px-4 pb-[calc(88px+env(safe-area-inset-bottom))] pt-12 text-white sm:px-6 sm:pb-[calc(96px+env(safe-area-inset-bottom))] sm:pt-16"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-xl -translate-x-1/2 rounded-full bg-blush-400/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full min-w-0 max-w-xl text-center">
        <motion.p
          className="break-words font-script text-[clamp(2rem,9vw,3.75rem)] leading-[1.1] text-white"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65 }}
        >
          “Ở đâu có nhau, ở đó có nhà.”
        </motion.p>

        <motion.p
          className="mx-auto mt-5 max-w-md px-1 text-[14px] leading-relaxed text-white/72 sm:mt-6 sm:text-[15px]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Cảm ơn bạn đã dành thời gian cho khoảnh khắc nhỏ của {COUPLE.bride} &amp;{' '}
          {COUPLE.groom}. Hẹn gặp trong tiếng cười và những cái ôm ấm.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:mt-10 sm:w-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="mt-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 sm:mt-8 sm:text-[11px] sm:tracking-[0.42em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          With love — MA & HQ
        </motion.p>
      </div>
    </footer>
  )
}
