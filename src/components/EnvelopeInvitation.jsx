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
        className="fixed inset-0 z-[200] flex w-full max-w-full items-center justify-center overflow-x-hidden overflow-y-auto overscroll-none bg-gradient-to-b from-blush-100 via-blush-200/40 to-blush-100 px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] touch-pan-y sm:px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.85),transparent_58%)]" />
        <FloatingFlowers density={10} soft />

        <motion.div
          className="relative w-full min-w-0 max-w-[min(340px,100%)]"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.div
            className="relative mx-auto w-full"
            animate={
              opening
                ? { scale: 1.03, opacity: 0, y: -32, filter: 'blur(6px)' }
                : { scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{ duration: 1.1, ease }}
          >
            <motion.div
              className="relative w-full overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-b from-[#f3e8ec] to-[#e8d4dc] shadow-[0_32px_64px_rgba(58,53,64,0.14)] sm:rounded-[28px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="mx-4 mt-14 rounded-[18px] border border-white/70 bg-white/90 px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:mx-5 sm:mt-16 sm:rounded-[22px] sm:px-6 sm:py-8"
                animate={opening ? { y: -24, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[10px] sm:tracking-[0.38em]">
                  Trân trọng kính mời
                </p>
                <p className="mt-3 font-script text-[clamp(1.85rem,9vw,3.4rem)] leading-none text-blush-ink sm:mt-4">
                  {COUPLE.bride}
                </p>
                <p className="my-0.5 font-script text-2xl text-blush-400 sm:my-1 sm:text-3xl">&</p>
                <p className="font-script text-[clamp(1.85rem,9vw,3.4rem)] leading-none text-blush-ink">
                  {COUPLE.groom}
                </p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-blush-muted sm:mt-5 sm:text-xs sm:tracking-[0.32em]">
                  {dateLine}
                </p>
              </motion.div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#d9b8c4]/35 to-transparent sm:h-24"
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="absolute left-0 right-0 top-0 z-[2] origin-top"
              style={{ transformStyle: 'preserve-3d' }}
              animate={
                opening
                  ? { rotateX: -168, y: -8, opacity: 0.2 }
                  : { rotateX: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 1.05, ease: [0.33, 1, 0.38, 1] }}
            >
              <div
                className="relative h-[132px] w-full sm:h-[148px]"
                style={{ clipPath: 'polygon(0 0, 50% 78%, 100% 0)' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-t-[24px] border border-white/75 bg-gradient-to-b from-[#faf5f6] via-[#f6dfe3] to-[#e9cad3] shadow-[0_18px_40px_rgba(217,184,196,0.35)] sm:rounded-t-[28px]"
                  animate={opening ? {} : { y: [0, -3, 0] }}
                  transition={
                    opening
                      ? {}
                      : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                  }
                />
              </div>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => void handleOpen()}
              disabled={opening}
              className="absolute left-1/2 top-[104px] z-[5] -translate-x-1/2 sm:top-[118px]"
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
              <span className="relative grid h-[68px] w-[68px] place-items-center rounded-full border-4 border-white/80 bg-gradient-to-br from-blush-300 to-blush-400 text-white shadow-[0_16px_40px_rgba(196,154,171,0.55)] sm:h-[76px] sm:w-[76px]">
                <FiPlay className="ml-0.5 text-2xl sm:ml-1 sm:text-3xl" />
                <span className="absolute inset-0 rounded-full ring-4 ring-white/25" />
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-blush-muted sm:mt-10 sm:text-[11px] sm:tracking-[0.42em]"
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
