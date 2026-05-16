import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiRefreshCw } from 'react-icons/fi'

import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { DEMO_WISHES } from '../data/wedding'
import { googleScriptUrl } from '../data/config'
import { fetchWishes } from '../services/rsvpApi'

export function WishesSection() {
  const [items, setItems] = useState(DEMO_WISHES)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetchWishes()
      setItems(Array.isArray(data) ? data : DEMO_WISHES)
    } catch (e) {
      toast.error(e?.message || 'Không tải được lời chúc')
      setItems(DEMO_WISHES)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    void Promise.resolve().then(async () => {
      if (cancelled) return
      await load()
    })

    return () => {
      cancelled = true
    }
  }, [load])

  return (
    <section
      id="wishes"
      className="section-pad overflow-hidden bg-gradient-to-b from-blush-100 via-white to-blush-100"
    >
      <div className="glow-orb bg-blush-200/45" aria-hidden />

      <div className="section-inner">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <Reveal className="min-w-0 flex-1">
            <SectionTitle
              eyebrow="Wishes"
              title="Lời chúc ấm áp"
              subtitle={
                googleScriptUrl
                  ? 'Được đồng bộ từ Google Sheets qua Apps Script.'
                  : 'Đang hiển thị demo — kết nối Sheets để cập nhật realtime.'
              }
              align="left"
            />
          </Reveal>

          <motion.button
            type="button"
            onClick={() => void load()}
            disabled={loading}
            className="inline-flex max-w-full shrink-0 touch-manipulation items-center justify-center gap-2 self-start rounded-full border border-white/75 bg-white/65 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blush-ink shadow-sm backdrop-blur-xl disabled:opacity-55 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.26em]"
            whileTap={{ scale: 0.985 }}
          >
            <FiRefreshCw className={loading ? 'animate-spin' : ''} />
            Refresh
          </motion.button>
        </div>

        <div className="grid min-w-0 gap-3 sm:gap-4">
          {items.map((w, idx) => (
            <motion.div
              key={w.id || `${w.name}-${idx}`}
              className="min-w-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.55, delay: (idx % 6) * 0.05 }}
            >
              <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                  <p className="min-w-0 break-words font-script text-[clamp(1.75rem,7vw,2.75rem)] leading-none text-blush-ink">
                    {w.name}
                  </p>
                  <p className="shrink-0 rounded-full bg-blush-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blush-muted sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                    {w.createdAt ? dayjs(w.createdAt).format('DD/MM/YYYY') : '—'}
                  </p>
                </div>
                <p className="mt-4 break-words whitespace-pre-wrap text-[14px] leading-relaxed text-blush-muted sm:mt-5 sm:text-[15px]">
                  {w.message}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
