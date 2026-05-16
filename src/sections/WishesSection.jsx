import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiRefreshCw } from 'react-icons/fi'

import { GlassCard } from '../components/GlassCard'
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
      className="relative bg-gradient-to-b from-blush-100 via-white to-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-28 mx-auto h-72 max-w-xl rounded-full bg-blush-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
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
          </div>

          <motion.button
            type="button"
            onClick={() => void load()}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-white/75 bg-white/65 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-blush-ink shadow-sm backdrop-blur-xl disabled:opacity-55"
            whileTap={{ scale: 0.985 }}
          >
            <FiRefreshCw className={loading ? 'animate-spin' : ''} />
            Refresh
          </motion.button>
        </div>

        <div className="grid gap-4">
          {items.map((w, idx) => (
            <motion.div
              key={w.id || `${w.name}-${idx}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.55, delay: (idx % 6) * 0.05 }}
            >
              <GlassCard className="px-7 py-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <p className="font-script text-[clamp(2.2rem,8vw,3rem)] leading-none text-blush-ink">
                    {w.name}
                  </p>
                  <p className="rounded-full bg-blush-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blush-muted">
                    {w.createdAt ? dayjs(w.createdAt).format('DD/MM/YYYY') : '—'}
                  </p>
                </div>
                <p className="mt-5 whitespace-pre-wrap text-[15px] leading-relaxed text-blush-muted">
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
