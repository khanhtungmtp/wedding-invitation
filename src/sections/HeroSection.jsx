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
      className={`absolute w-[min(40vw,168px)] max-w-[46%] ${className}`}
      initial={{ opacity: 0, y: 80, rotate: rotate - 6 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.05, delay, ease }}
    >
      <motion.div
        className="overflow-hidden rounded-[16px] border-[5px] border-white bg-white p-1.5 pb-8 shadow-[0_20px_48px_rgba(58,53,64,0.16)] sm:rounded-[18px] sm:border-[6px] sm:p-2 sm:pb-10"
        whileHover={{ y: -4, rotate: rotate + 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] w-full max-w-full rounded-[10px] object-cover sm:rounded-[12px]"
          decoding="async"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.src = fallback
          }}
        />
        <figcaption className="absolute bottom-2 left-0 right-0 truncate px-1 text-center font-script text-base text-blush-ink sm:bottom-3 sm:text-lg">
          {alt}
        </figcaption>
      </motion.div>
    </motion.figure>
  )
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 400], [0, 40])
  const prettyDate = dayjs(WEDDING_DATE_ISO).format('dddd, DD/MM/YYYY')

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full max-w-full flex-col overflow-hidden bg-gradient-to-b from-blush-200/35 via-blush-100 to-white pt-[calc(8px+env(safe-area-inset-top))]"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_55%)]"
      />

      <FloatingFlowers density={12} />

      <div className="relative z-[2] mx-auto flex w-full min-w-0 max-w-xl flex-1 flex-col px-4 pb-[calc(28px+env(safe-area-inset-bottom))] sm:px-6">
        <motion.div
          className="relative mx-auto mt-4 h-[min(52vw,280px)] w-full min-w-0 max-w-[min(100%,320px)] flex-shrink-0 sm:mt-6 sm:h-[min(58vw,320px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Polaroid
            src={IMAGES.groom}
            fallback={IMAGES.groomFallback}
            alt={COUPLE.groom}
            className="left-0 top-5 z-[1] sm:top-6"
            delay={0.15}
            rotate={-6}
          />
          <Polaroid
            src={IMAGES.bride}
            fallback={IMAGES.brideFallback}
            alt={COUPLE.bride}
            className="right-0 top-0 z-[2]"
            delay={0.28}
            rotate={5}
          />
        </motion.div>

        <motion.div
          className="mt-auto min-w-0 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[11px] sm:tracking-[0.38em]">
            Wedding Invitation
          </p>

          <h1 className="mt-3 break-words font-script text-[clamp(2.25rem,11vw,4.25rem)] leading-[1.05] text-blush-ink sm:mt-4">
            {COUPLE.bride}
            <span className="mx-2 inline-block translate-y-[-3px] text-blush-400 sm:mx-3">&</span>
            {COUPLE.groom}
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-[14px] leading-relaxed text-blush-muted sm:mt-5 sm:text-[15px]">
            Một lời mời nhỏ — mang theo niềm vui lớn.
          </p>

          <p className="mt-3 break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-blush-ink/80 sm:mt-4 sm:text-[13px] sm:tracking-[0.24em]">
            {prettyDate}
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-2 text-blush-muted sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.36em] sm:tracking-[0.42em]">
            Lướt lên
          </span>
          <motion.span
            className="flex h-11 w-[26px] items-start justify-center rounded-full border border-blush-300/70 pt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="block h-2 w-2 rounded-full bg-blush-400" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
