import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/zoom'

import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { IMAGES } from '../data/wedding'
import { FiX } from 'react-icons/fi'

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null)
  const slides = useMemo(() => IMAGES.gallery, [])

  const close = () => setActiveIndex(null)

  const lightbox =
    activeIndex === null
      ? null
      : createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[90] bg-black/92 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Gallery lightbox"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-[calc(14px+env(safe-area-inset-right))] top-[calc(14px+env(safe-area-inset-top))] z-[95] grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md"
                aria-label="Đóng"
              >
                <FiX className="text-xl" />
              </button>

              <Swiper
                modules={[Keyboard, Zoom]}
                zoom
                keyboard={{ enabled: true }}
                initialSlide={activeIndex}
                className="h-[100svh] w-full pt-[calc(52px+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)]"
                slidesPerView={1}
                spaceBetween={0}
              >
                {slides.map((src, idx) => (
                  <SwiperSlide key={src} className="!flex items-center justify-center">
                    <div className="swiper-zoom-container px-6">
                      <img
                        src={src}
                        alt={`Ảnh cưới ${idx + 1}`}
                        className="max-h-[82svh] w-auto max-w-[min(92vw,980px)] rounded-[26px] object-contain shadow-lift"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-blush-100 via-white to-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-28 mx-auto h-72 max-w-xl rounded-full bg-blush-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="Những khoảnh khắc"
            subtitle="Vuốt trong lightbox để xem tiếp — mượt trên điện thoại."
          />
        </Reveal>

        <RevealStagger className="columns-2 gap-3 sm:columns-3 sm:gap-4">
          {slides.map((src, idx) => (
            <RevealItem key={src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              className="group w-full overflow-hidden rounded-[22px] border border-white/70 bg-white/45 shadow-card backdrop-blur-xl"
              onClick={() => setActiveIndex(idx)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition group-hover:opacity-95" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-ink backdrop-blur-md">
                  Tap
                </span>
              </div>
            </button>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      {lightbox}
    </section>
  )
}
