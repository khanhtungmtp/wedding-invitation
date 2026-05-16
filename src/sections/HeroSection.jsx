import { motion, useScroll, useTransform } from 'framer-motion'
import { FloatingFlowers } from '../components/FloatingFlowers'
import { COUPLE, IMAGES, WEDDING_DATE_ISO } from '../data/wedding'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'

dayjs.locale('vi')

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 520], [0, 110])

  const prettyDate = dayjs(WEDDING_DATE_ISO).format('dddd, DD/MM/YYYY')

  const letters = `${COUPLE.bride} & ${COUPLE.groom}`.split('')

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-blush-100 pt-[calc(12px+env(safe-area-inset-top))]"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = IMAGES.heroFallback
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-blush-100" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      <FloatingFlowers density={16} />

      <div className="relative z-[2] mx-auto flex w-full max-w-xl flex-1 flex-col justify-end px-6 pb-[calc(28px+env(safe-area-inset-bottom))]">
        <motion.p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/85"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          Wedding Invitation
        </motion.p>

        <div className="mb-5 flex flex-wrap gap-x-[6px]">
          {letters.map((ch, idx) => (
            <motion.span
              key={`${ch}-${idx}`}
              className="inline-block font-script text-[clamp(2.85rem,11vw,4.25rem)] leading-none text-white drop-shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.06 + idx * 0.015,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {ch === ' ' ? '\u00a0' : ch}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="mb-10 max-w-md text-[15px] leading-relaxed text-white/88"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          Một lời mời nhỏ — mang theo niềm vui lớn.
          <span className="mt-2 block text-[13px] font-semibold uppercase tracking-[0.22em] text-white/78">
            {prettyDate}
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-2 text-white/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.42em]">
            Scroll
          </span>
          <motion.span
            className="flex h-11 w-[26px] items-start justify-center rounded-full border border-white/55 pt-2"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="block h-2 w-2 rounded-full bg-white/85" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
