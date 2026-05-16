import { FiClock, FiHome, FiUsers } from 'react-icons/fi'

import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { GROOM_FAMILY } from '../data/wedding'

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blush-100 text-lg text-blush-ink shadow-sm sm:h-11 sm:w-11">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blush-muted sm:text-[11px] sm:tracking-[0.32em]">
          {label}
        </p>
        <p className="mt-1.5 break-words text-[14px] font-semibold leading-relaxed text-blush-ink sm:mt-2 sm:text-[15px]">
          {value}
        </p>
      </div>
    </div>
  )
}

export function GroomFamilySection() {
  return (
    <section
      id="groom-family"
      className="section-pad overflow-hidden bg-gradient-to-b from-white via-blush-100 to-white"
    >
      <div className="glow-orb bg-blush-200/50" aria-hidden />
      <span className="pointer-events-none absolute left-3 top-28 text-2xl opacity-40 sm:left-4 sm:text-3xl" aria-hidden>
        ✿
      </span>

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Groom's family"
            title={GROOM_FAMILY.title}
            subtitle={GROOM_FAMILY.note}
          />
        </Reveal>

        <RevealStagger className="grid gap-3 sm:gap-4">
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiUsers />} label="Phụ huynh" value={GROOM_FAMILY.parents} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiHome />} label="Địa chỉ" value={GROOM_FAMILY.address} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiClock />} label="Thời gian lễ" value={GROOM_FAMILY.ceremonyTime} />
            </GlassCard>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
