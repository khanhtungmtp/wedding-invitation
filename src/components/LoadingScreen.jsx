import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let cancelled = false
    const startedAt = Date.now()

    const armHide = () => {
      const elapsed = Date.now() - startedAt
      const delay = Math.max(0, 850 - elapsed)
      window.setTimeout(() => {
        if (!cancelled) setVisible(false)
      }, delay)
    }

    const fallback = window.setTimeout(armHide, 2600)

    if (document.readyState === 'complete') armHide()
    else window.addEventListener('load', armHide, { once: true })

    return () => {
      cancelled = true
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <AnimatePresence onExitComplete={() => onDone?.()}>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center bg-blush-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative px-8 text-center">
            <motion.div
              className="mx-auto mb-5 h-16 w-16 rounded-full border border-white/70 bg-white/55 shadow-glow backdrop-blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <motion.p
              className="font-script text-[clamp(2.8rem,10vw,4.25rem)] text-blush-ink"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              Minh Anh & Hữu Quốc
            </motion.p>
            <motion.p
              className="mt-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-blush-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              Loading invitation…
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
