import { motion, useScroll, useTransform } from 'framer-motion'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'

import { FloatingFlowers } from '../components/FloatingFlowers'
import { COUPLE, IMAGES, WEDDING_DATE_ISO } from '../data/wedding'

dayjs.locale('vi')

const ease = [0.22, 1, 0.36, 1]

function Polaroid({ src, fallback, alt, className, delay, rotate }) {
  return (
    <motion.figure
      className={`absolute w-[min(46vw,200px)] ${className}`}
      initial={{ opacity: 0, y: 120, rotate: rotate - 8 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.05, delay, ease }}
    >
      <motion.div
        className="overflow-hidden rounded-[18px] border-[6px] border-white bg-white p-2 pb-10 shadow-[0_28px_60px_rgba(58,53,64,0.18)]"
        whileHover={{ y: -4, rotate: rotate + 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] w-full rounded-[12px] object-cover"
          decoding="async"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.src = fallback
          }}
        />
        <figcaption className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-blush-ink">
          {alt}
        </figcaption>
      </motion.div>
    </motion.figure>
  )
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 400], [0, 60])
  const prettyDate = dayjs(WEDDING_DATE_ISO).format('dddd, DD/MM/YYYY')

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-blush-200/35 via-blush-100 to-white pt-[calc(12px+env(safe-area-inset-top))]"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_55%)]"
      />

      <FloatingFlowers density={14} />

      <div className="relative z-[2] mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pb-[calc(32px+env(safe-area-inset-bottom))]">
        {/* Polaroid stack */}
        <motion.div
          className="relative mx-auto mt-6 h-[min(58vw,320px)] w-full max-w-[340px] flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Polaroid
            src={IMAGES.groom}
            fallback={IMAGES.groomFallback}
            alt={COUPLE.groom}
            className="left-0 top-6 z-[1]"
            delay={0.15}
            rotate={-7}
          />
          <Polaroid
            src={IMAGES.bride}
            fallback={IMAGES.brideFallback}
            alt={COUPLE.bride}
            className="right-0 top-0 z-[2]"
            delay={0.28}
            rotate={6}
          />
        </motion.div>

        <motion.div
          className="mt-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-blush-muted">
            Wedding Invitation
          </p>

          <h1 className="mt-4 font-script text-[clamp(3rem,12vw,4.5rem)] leading-none text-blush-ink">
            {COUPLE.bride}
            <span className="mx-3 inline-block translate-y-[-4px] text-blush-400">&</span>
            {COUPLE.groom}
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-blush-muted">
            Một lời mời nhỏ — mang theo niềm vui lớn.
          </p>

          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-blush-ink/80">
            {prettyDate}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-2 text-blush-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.42em]">
            Scroll
          </span>
          <motion.span
            className="flex h-11 w-[26px] items-start justify-center rounded-full border border-blush-300/70 pt-2"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="block h-2 w-2 rounded-full bg-blush-400" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
