import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { COUPLE, SAVE_THE_DATE_TEXT, WEDDING_DATE_ISO } from '../data/wedding'
import dayjs from 'dayjs'

export function SaveDateSection() {
  const dateLine = dayjs(WEDDING_DATE_ISO).format('DD · MM · YYYY')

  return (
    <section
      id="wedding-date"
      className="section-pad overflow-hidden bg-gradient-to-b from-white via-blush-100 to-blush-100"
    >
      <div className="glow-orb bg-blush-200/55" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Wedding date"
            title="Hẹn một ngày đẹp trời"
            subtitle={SAVE_THE_DATE_TEXT}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="px-5 py-8 sm:px-7 sm:py-10">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:tracking-[0.34em]">
                  Trân trọng kính mời
                </p>
                <p className="mt-4 break-words font-script text-[clamp(2.25rem,10vw,4.25rem)] leading-none text-blush-ink sm:mt-5">
                  {COUPLE.bride}
                  <span className="mx-2 inline-block translate-y-[-4px] text-blush-400 sm:mx-3">
                    &
                  </span>
                  {COUPLE.groom}
                </p>
              </div>

              <div className="mx-auto grid w-full min-w-0 max-w-sm grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'Ngày', value: dayjs(WEDDING_DATE_ISO).format('DD') },
                  { label: 'Tháng', value: dayjs(WEDDING_DATE_ISO).format('MM') },
                  { label: 'Năm', value: dayjs(WEDDING_DATE_ISO).format('YYYY') },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    className="min-w-0 rounded-2xl border border-white/70 bg-white/70 px-2 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:rounded-3xl sm:px-3 sm:py-4"
                  >
                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blush-muted sm:text-[11px] sm:tracking-[0.28em]">
                      {cell.label}
                    </div>
                    <div className="mt-1.5 font-script text-3xl text-blush-ink sm:mt-2 sm:text-4xl">
                      {cell.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-xs sm:tracking-[0.34em]">
                  Mark your calendar
                </p>
                <p className="mt-2 text-base font-semibold text-blush-ink sm:mt-3 sm:text-lg">
                  {dateLine}
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
