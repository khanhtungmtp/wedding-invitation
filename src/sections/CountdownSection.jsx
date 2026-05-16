import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { useLiveCountdown } from '../hooks/useLiveCountdown'
import { WEDDING_DATE_ISO } from '../data/wedding'

function Unit({ label, value }) {
  return (
    <GlassCard hover={false} className="min-w-0 px-2 py-4 text-center sm:px-4 sm:py-5">
      <div className="font-script text-[clamp(2rem,9vw,3.5rem)] leading-none text-blush-ink">
        {value}
      </div>
      <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-blush-muted sm:mt-2 sm:text-[11px] sm:tracking-[0.34em]">
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
    <section id="countdown" className="section-pad overflow-hidden bg-blush-100">
      <div className="glow-orb -top-16 bg-blush-200/55" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Countdown"
            title="Đếm ngược khoảnh khắc"
            subtitle="Thời gian chậm rãi — nhưng khoảnh khắc “chạnh” thì chỉ một lần."
          />
        </Reveal>

        <motion.div
          className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-90px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {units.map((u) => (
            <motion.div
              key={u.label}
              className="min-w-0"
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
            className="mt-6 px-2 text-center text-sm font-semibold text-blush-ink sm:mt-8"
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
