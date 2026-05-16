import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Zoom } from 'swiper/modules'
import { FiX } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/zoom'

export function GalleryLightbox({ slides, initialIndex, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="gallery-lightbox"
        className="fixed inset-0 z-[90] flex max-w-full touch-pan-y items-center justify-center overscroll-none"
        role="dialog"
        aria-modal="true"
        aria-label="Gallery lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" aria-hidden />

        <motion.button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
          className="absolute right-[max(12px,env(safe-area-inset-right))] top-[max(12px,env(safe-area-inset-top))] z-[100] grid h-12 w-12 touch-manipulation place-items-center rounded-full border border-white/40 bg-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/30 active:scale-95"
          aria-label="Đóng"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.05, duration: 0.25 }}
          whileTap={{ scale: 0.92 }}
        >
          <FiX className="text-2xl" />
        </motion.button>

        <motion.div
          className="relative z-[95] flex h-full w-full max-w-full items-center justify-center px-3 pb-[env(safe-area-inset-bottom)] pt-[calc(56px+env(safe-area-inset-top))] sm:px-4"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <motion.div
            className="h-full w-full max-w-[min(92vw,980px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Swiper
              modules={[Keyboard, Zoom]}
              zoom
              keyboard={{ enabled: true }}
              initialSlide={initialIndex}
              className="h-full w-full"
              slidesPerView={1}
              spaceBetween={0}
            >
              {slides.map((src, idx) => (
                <SwiperSlide key={src} className="!flex items-center justify-center">
                  <div className="swiper-zoom-container flex w-full items-center justify-center">
                    <motion.img
                      src={src}
                      alt={`Ảnh cưới ${idx + 1}`}
                      className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_24px_64px_rgba(0,0,0,0.45)]"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
