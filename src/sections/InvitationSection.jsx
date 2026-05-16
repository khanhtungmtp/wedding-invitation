import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { COUPLE, INVITATION_CONTENT, VENUE } from '../data/wedding'

export function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-white px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-80 max-w-md rounded-full bg-blush-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <SectionTitle
            eyebrow="Invitation"
            title="Lời mời trân trọng"
            subtitle="Kính gửi quý khách — lời mời chính thức từ gia đình hai bên."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <GlassCard className="px-8 py-10 text-center sm:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-blush-muted">
              {INVITATION_CONTENT.greeting}
            </p>

            <p className="mx-auto mt-8 max-w-md font-script text-[clamp(2.4rem,9vw,3.5rem)] leading-tight text-blush-ink">
              {COUPLE.groom}
              <span className="mx-3 text-blush-400">&</span>
              {COUPLE.bride}
            </p>

            <p className="mx-auto mt-8 max-w-lg text-[15px] leading-[1.85] text-blush-muted">
              {INVITATION_CONTENT.body}
            </p>

            <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent" />

            <RevealStagger className="mx-auto max-w-sm space-y-4">
              {INVITATION_CONTENT.schedule.map((item) => (
                <RevealItem key={item.label}>
                  <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/75 bg-white/65 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <span className="text-sm font-semibold text-blush-ink">{item.label}</span>
                    <span className="text-sm font-bold text-blush-muted">{item.time}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-blush-muted">
              {VENUE.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-blush-muted">{VENUE.address}</p>

            <p className="mx-auto mt-10 max-w-lg text-[15px] leading-[1.85] italic text-blush-ink/90">
              {INVITATION_CONTENT.closing}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
