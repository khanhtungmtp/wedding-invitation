import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { COUPLE, INVITATION_CONTENT, VENUE } from '../data/wedding'

export function InvitationSection() {
  return (
    <section id="invitation" className="section-pad overflow-hidden bg-white">
      <div className="glow-orb bg-blush-200/40" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Invitation"
            title="Lời mời trân trọng"
            subtitle="Kính gửi quý khách — lời mời chính thức từ gia đình hai bên."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <GlassCard className="px-5 py-8 text-center sm:px-8 sm:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[11px] sm:tracking-[0.36em]">
              {INVITATION_CONTENT.greeting}
            </p>

            <p className="mx-auto mt-6 max-w-md break-words font-script text-[clamp(2rem,8.5vw,3.25rem)] leading-tight text-blush-ink sm:mt-8">
              {COUPLE.groom}
              <span className="mx-2 text-blush-400 sm:mx-3">&</span>
              {COUPLE.bride}
            </p>

            <p className="mx-auto mt-6 max-w-lg text-[14px] leading-[1.8] text-blush-muted sm:mt-8 sm:text-[15px] sm:leading-[1.85]">
              {INVITATION_CONTENT.body}
            </p>

            <div className="mx-auto my-8 h-px w-20 bg-gradient-to-r from-transparent via-blush-400/70 to-transparent sm:my-10 sm:w-24" />

            <RevealStagger className="mx-auto max-w-sm space-y-3 sm:space-y-4">
              {INVITATION_CONTENT.schedule.map((item) => (
                <RevealItem key={item.label}>
                  <div className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/75 bg-white/65 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:rounded-3xl sm:px-5 sm:py-4">
                    <span className="min-w-0 text-left text-sm font-semibold text-blush-ink">
                      {item.label}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-blush-muted sm:text-sm">
                      {item.time}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-blush-muted sm:mt-8 sm:text-xs sm:tracking-[0.28em]">
              {VENUE.name}
            </p>
            <p className="mt-2 break-words px-1 text-sm leading-relaxed text-blush-muted">
              {VENUE.address}
            </p>

            <p className="mx-auto mt-8 max-w-lg px-1 text-[14px] leading-[1.8] italic text-blush-ink/90 sm:mt-10 sm:text-[15px]">
              {INVITATION_CONTENT.closing}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
