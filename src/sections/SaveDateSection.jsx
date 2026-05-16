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
      className="relative overflow-hidden bg-gradient-to-b from-white via-blush-100 to-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-xl rounded-full bg-blush-200/55 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <SectionTitle
            eyebrow="Wedding date"
            title="Hẹn một ngày đẹp trời"
            subtitle={SAVE_THE_DATE_TEXT}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="px-7 py-10 sm:px-10">
            <div className="flex flex-col gap-8">
              <div className="text-center">
                <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
                  Trân trọng kính mời
                </p>
                <p className="mt-5 font-script text-[clamp(3rem,11vw,4.75rem)] leading-none text-blush-ink">
                  {COUPLE.bride}
                  <span className="mx-3 inline-block translate-y-[-6px] text-blush-400">
                    &
                  </span>
                  {COUPLE.groom}
                </p>
              </div>

              <div className="mx-auto grid w-full max-w-sm grid-cols-3 gap-3">
                {[
                  { label: 'Ngày', value: dayjs(WEDDING_DATE_ISO).format('DD') },
                  { label: 'Tháng', value: dayjs(WEDDING_DATE_ISO).format('MM') },
                  { label: 'Năm', value: dayjs(WEDDING_DATE_ISO).format('YYYY') },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    className="rounded-3xl border border-white/70 bg-white/70 px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blush-muted">
                      {cell.label}
                    </div>
                    <div className="mt-2 font-script text-4xl text-blush-ink">
                      {cell.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blush-muted">
                  Mark your calendar
                </p>
                <p className="mt-3 text-lg font-semibold text-blush-ink">{dateLine}</p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
