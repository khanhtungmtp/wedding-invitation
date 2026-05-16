import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { GalleryLightbox } from '../components/GalleryLightbox'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { IMAGES } from '../data/wedding'

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null)
  const slides = useMemo(() => IMAGES.gallery, [])

  const close = () => setActiveIndex(null)

  return (
    <section id="gallery" className="section-pad bg-gradient-to-b from-blush-100 via-white to-blush-100">
      <div className="glow-orb bg-blush-200/45" aria-hidden />

      <div className="section-inner max-w-5xl">
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="Những khoảnh khắc"
            subtitle="Vuốt trong lightbox để xem tiếp — mượt trên điện thoại."
          />
        </Reveal>

        <RevealStagger className="columns-2 gap-2.5 sm:columns-3 sm:gap-4">
          {slides.map((src, idx) => (
            <RevealItem key={src} className="mb-2.5 break-inside-avoid sm:mb-4">
              <button
                type="button"
                className="group w-full max-w-full overflow-hidden rounded-[18px] border border-white/70 bg-white/45 shadow-card backdrop-blur-xl sm:rounded-[22px]"
                onClick={() => setActiveIndex(idx)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full max-w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02] group-active:scale-[1.01]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70"
                    aria-hidden
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/75 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-blush-ink backdrop-blur-md sm:bottom-3 sm:left-3 sm:px-3 sm:text-[10px]">
                    Tap
                  </span>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <GalleryLightbox
            key="lightbox"
            slides={slides}
            initialIndex={activeIndex}
            onClose={close}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
