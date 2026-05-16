import { motion } from 'framer-motion'
import { COUPLE } from '../data/wedding'

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-blush-ink px-6 pb-[calc(96px+env(safe-area-inset-bottom))] pt-16 text-white"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[140%] -translate-x-1/2 rounded-full bg-blush-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-xl text-center">
        <motion.p
          className="font-script text-[clamp(2.6rem,10vw,4rem)] leading-none text-white"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65 }}
        >
          “Ở đâu có nhau, ở đó có nhà.”
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/72"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Cảm ơn bạn đã dành thời gian cho khoảnh khắc nhỏ của {COUPLE.bride} &amp;{' '}
          {COUPLE.groom}. Hẹn gặp trong tiếng cười và những cái ôm ấm.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 h-px w-28 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="mt-8 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/55"
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
