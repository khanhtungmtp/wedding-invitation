import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import dayjs from 'dayjs'

import { FloatingFlowers } from './FloatingFlowers'
import { COUPLE, WEDDING_DATE_ISO } from '../data/wedding'
import { useMusic } from '../context/MusicContext'

const ease = [0.22, 1, 0.36, 1]

export function EnvelopeInvitation({ onOpen }) {
  const reduceMotion = useReducedMotion()
  const { playMusic } = useMusic()
  const [opening, setOpening] = useState(false)

  const dateLine = dayjs(WEDDING_DATE_ISO).format('DD · MM · YYYY')

  const handleOpen = async () => {
    if (opening) return
    setOpening(true)
    await playMusic()
    window.setTimeout(() => onOpen?.(), reduceMotion ? 400 : 1400)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blush-100 via-blush-200/40 to-blush-100 px-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.85),transparent_58%)]" />
        <FloatingFlowers density={12} soft />

        <motion.div
          className="relative w-full max-w-[340px]"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease }}
        >
          {/* Envelope body */}
          <motion.div
            className="relative mx-auto"
            animate={
              opening
                ? { scale: 1.04, opacity: 0, y: -40, filter: 'blur(6px)' }
                : { scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{ duration: 1.1, ease }}
          >
            {/* Back panel */}
            <motion.div
              className="relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-b from-[#f3e8ec] to-[#e8d4dc] shadow-[0_40px_80px_rgba(58,53,64,0.14)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Inner card peek */}
              <motion.div
                className="mx-5 mt-16 rounded-[22px] border border-white/70 bg-white/90 px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                animate={opening ? { y: -28, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-blush-muted">
                  Trân trọng kính mời
                </p>
                <p className="mt-4 font-script text-[clamp(2.4rem,10vw,3.4rem)] leading-none text-blush-ink">
                  {COUPLE.bride}
                </p>
                <p className="my-1 font-script text-3xl text-blush-400">&</p>
                <p className="font-script text-[clamp(2.4rem,10vw,3.4rem)] leading-none text-blush-ink">
                  {COUPLE.groom}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-blush-muted">
                  {dateLine}
                </p>
              </motion.div>

              {/* Bottom fold */}
              <motion.div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#d9b8c4]/35 to-transparent"
                aria-hidden
              />
            </motion.div>

            {/* Flap */}
            <motion.div
              className="absolute left-0 right-0 top-0 z-[2] origin-top"
              style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
              animate={
                opening
                  ? { rotateX: -168, y: -8, opacity: 0.2 }
                  : { rotateX: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 1.05, ease: [0.33, 1, 0.38, 1] }}
            >
              <div
                className="relative h-[148px] w-full"
                style={{
                  clipPath: 'polygon(0 0, 50% 78%, 100% 0)',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-t-[28px] border border-white/75 bg-gradient-to-b from-[#faf5f6] via-[#f6dfe3] to-[#e9cad3] shadow-[0_18px_40px_rgba(217,184,196,0.35)]"
                  animate={opening ? {} : { y: [0, -3, 0] }}
                  transition={
                    opening
                      ? {}
                      : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                  }
                />
              </div>
            </motion.div>

            {/* Wax seal + open button */}
            <motion.button
              type="button"
              onClick={() => void handleOpen()}
              disabled={opening}
              className="absolute left-1/2 top-[118px] z-[5] -translate-x-1/2"
              aria-label="Mở thiệp mời"
              whileTap={{ scale: 0.94 }}
              animate={
                opening
                  ? { scale: 0.6, opacity: 0 }
                  : { scale: [1, 1.05, 1], opacity: 1 }
              }
              transition={
                opening
                  ? { duration: 0.5 }
                  : { scale: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }
              }
            >
              <span className="relative grid h-[76px] w-[76px] place-items-center rounded-full border-4 border-white/80 bg-gradient-to-br from-blush-300 to-blush-400 text-white shadow-[0_16px_40px_rgba(196,154,171,0.55)]">
                <FiPlay className="ml-1 text-3xl" />
                <span className="absolute inset-0 rounded-full ring-4 ring-white/25" />
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.42em] text-blush-muted"
            animate={opening ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
          >
            Nhấp để mở
          </motion.p>
          <motion.p
            className="mt-2 text-center text-xs text-blush-muted/80"
            animate={opening ? { opacity: 0 } : { opacity: 1 }}
          >
            Open Invitation
          </motion.p>
        </motion.div>

        {opening ? (
          <motion.div
            className="pointer-events-none absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0] }}
            transition={{ duration: 1.1, ease }}
          />
        ) : null}
      </motion.div>
    </AnimatePresence>
  )
}
