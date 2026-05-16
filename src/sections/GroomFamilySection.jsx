import { FiClock, FiHome, FiUsers } from 'react-icons/fi'

import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { GROOM_FAMILY } from '../data/wedding'

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blush-100 text-lg text-blush-ink shadow-sm">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blush-muted">
          {label}
        </p>
        <p className="mt-2 text-[15px] font-semibold leading-relaxed text-blush-ink">{value}</p>
      </div>
    </div>
  )
}

export function GroomFamilySection() {
  return (
    <section
      id="groom-family"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blush-100 to-white px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-72 max-w-xl rounded-full bg-blush-200/50 blur-3xl" />
      <span className="pointer-events-none absolute left-4 top-28 text-3xl opacity-40" aria-hidden>
        ✿
      </span>
      <span className="pointer-events-none absolute right-6 top-40 text-2xl opacity-35" aria-hidden>
        🌸
      </span>

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <SectionTitle
            eyebrow="Groom's family"
            title={GROOM_FAMILY.title}
            subtitle={GROOM_FAMILY.note}
          />
        </Reveal>

        <RevealStagger className="grid gap-4">
          <RevealItem>
            <GlassCard className="px-7 py-7">
              <InfoRow icon={<FiUsers />} label="Phụ huynh" value={GROOM_FAMILY.parents} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-7 py-7">
              <InfoRow icon={<FiHome />} label="Địa chỉ" value={GROOM_FAMILY.address} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-7 py-7">
              <InfoRow icon={<FiClock />} label="Thời gian lễ" value={GROOM_FAMILY.ceremonyTime} />
            </GlassCard>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
