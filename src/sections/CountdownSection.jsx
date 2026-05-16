import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { useLiveCountdown } from '../hooks/useLiveCountdown'
import { WEDDING_DATE_ISO } from '../data/wedding'

function Unit({ label, value }) {
  return (
    <GlassCard hover={false} className="px-4 py-5 text-center">
      <div className="font-script text-[clamp(2.6rem,10vw,3.8rem)] leading-none text-blush-ink">
        {value}
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
        {label}
      </div>
    </GlassCard>
  )
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isPast } = useLiveCountdown(WEDDING_DATE_ISO)

  const units = isPast
    ? [
        { label: 'Ngày', value: '00' },
        { label: 'Giờ', value: '00' },
        { label: 'Phút', value: '00' },
        { label: 'Giây', value: '00' },
      ]
    : [
        { label: 'Ngày', value: String(days).padStart(2, '0') },
        { label: 'Giờ', value: String(hours).padStart(2, '0') },
        { label: 'Phút', value: String(minutes).padStart(2, '0') },
        { label: 'Giây', value: String(seconds).padStart(2, '0') },
      ]

  return (
    <section
      id="countdown"
      className="relative bg-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-blush-200/55 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <SectionTitle
            eyebrow="Countdown"
            title="Đếm ngược khoảnh khắc"
            subtitle="Thời gian chậm rãi — nhưng khoảnh khắc “chạnh” thì chỉ một lần."
          />
        </Reveal>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-90px' }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {units.map((u) => (
            <motion.div
              key={u.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <Unit label={u.label} value={u.value} />
            </motion.div>
          ))}
        </motion.div>

        {isPast ? (
          <motion.p
            className="mt-8 text-center text-sm font-semibold text-blush-ink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hôm nay là ngày trọng đại — hẹn gặp bạn tại tiệc cưới!
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
