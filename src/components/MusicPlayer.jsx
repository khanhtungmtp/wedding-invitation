import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiMusic, FiPause } from 'react-icons/fi'
import { useMusic } from '../context/MusicContext'

export function MusicPlayer({ visible = true }) {
  const reduceMotion = useReducedMotion() ?? false
  const { playing, ready, toggleMusic } = useMusic()

  if (!visible) return null

  return (
    <motion.button
      type="button"
      onClick={() => void toggleMusic()}
      aria-label={playing ? 'Tạm dừng nhạc nền' : 'Phát nhạc nền'}
      className="fixed bottom-[max(12px,env(safe-area-inset-bottom))] right-[max(12px,env(safe-area-inset-right))] z-[60] grid h-12 w-12 touch-manipulation place-items-center rounded-full border border-white/70 bg-white/70 text-blush-ink shadow-lift backdrop-blur-xl sm:h-14 sm:w-14"
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{
        opacity: 1,
        scale: reduceMotion ? 1 : [1, 1.03, 1],
        y: 0,
      }}
      transition={{
        opacity: { duration: 0.45 },
        y: { duration: 0.45 },
        scale: reduceMotion ? { duration: 0 } : { duration: 4.5, repeat: Infinity },
      }}
      whileTap={{ scale: 0.94 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {playing ? (
          <motion.span
            key="pause"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 10 }}
            transition={{ duration: 0.2 }}
            className="text-xl"
          >
            <FiPause />
          </motion.span>
        ) : (
          <motion.span
            key="play"
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -10 }}
            transition={{ duration: 0.2 }}
            className="text-xl"
          >
            <FiMusic />
          </motion.span>
        )}
      </AnimatePresence>

      {!ready ? (
        <span className="absolute -top-2 left-1/2 max-w-[4.5rem] -translate-x-1/2 truncate rounded-full bg-blush-200 px-2 py-0.5 text-[9px] font-semibold text-blush-ink shadow-sm sm:text-[10px]">
          Demo
        </span>
      ) : null}
    </motion.button>
  )
}
