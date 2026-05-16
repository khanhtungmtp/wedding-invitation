import { FiClock, FiHome, FiUsers } from 'react-icons/fi'

import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { BRIDE_FAMILY } from '../data/wedding'

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

export function BrideFamilySection() {
  return (
    <section
      id="bride-family"
      className="section-pad overflow-hidden bg-gradient-to-b from-blush-100 via-white to-blush-100"
    >
      <div className="glow-orb bg-blush-200/45" aria-hidden />
      <span className="pointer-events-none absolute right-3 top-32 text-2xl opacity-40 sm:right-4 sm:text-3xl" aria-hidden>
        ❀
      </span>

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Bride's family"
            title={BRIDE_FAMILY.title}
            subtitle={BRIDE_FAMILY.note}
          />
        </Reveal>

        <RevealStagger className="grid gap-3 sm:gap-4">
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiUsers />} label="Phụ huynh" value={BRIDE_FAMILY.parents} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiHome />} label="Địa chỉ" value={BRIDE_FAMILY.address} />
            </GlassCard>
          </RevealItem>
          <RevealItem>
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
              <InfoRow icon={<FiClock />} label="Thời gian lễ" value={BRIDE_FAMILY.ceremonyTime} />
            </GlassCard>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
