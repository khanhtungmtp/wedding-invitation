import { FiExternalLink, FiMapPin } from 'react-icons/fi'
import dayjs from 'dayjs'

import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { VENUE, WEDDING_DATE_ISO, WEDDING_EVENTS } from '../data/wedding'

export function EventSection() {
  const mapsHref = `https://maps.app.goo.gl/4UrUqNiyXGqC3oF66`;
  const datePretty = dayjs(WEDDING_DATE_ISO).format('dddd, DD/MM/YYYY')

  return (
    <section
      id="event"
      className="section-pad overflow-hidden bg-gradient-to-b from-blush-100 via-white to-blush-100"
    >
      <div className="glow-orb bg-blush-200/45" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Event"
            title="Thông tin tiệc cưới"
            subtitle="Chúng mình đã chọn một không gian ấm — mong được đón bạn đúng giờ."
          />
        </Reveal>

        <Reveal className="mb-6 sm:mb-8" delay={0.06}>
          <GlassCard className="px-5 py-7 sm:px-7 sm:py-8">
            <div className="flex min-w-0 items-start gap-3">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blush-100 text-blush-ink shadow-sm sm:h-11 sm:w-11">
                <FiMapPin />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[11px] sm:tracking-[0.34em]">
                  Địa điểm
                </p>
                <p className="mt-2 text-base font-semibold text-blush-ink sm:mt-3 sm:text-lg">
                  {VENUE.name}
                </p>
                <p className="mt-2 break-words text-[14px] leading-relaxed text-blush-muted sm:text-[15px]">
                  {VENUE.address}
                </p>
                <p className="mt-3 break-words text-xs font-semibold text-blush-ink sm:mt-4 sm:text-sm">
                  {datePretty}
                </p>
              </div>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full max-w-full items-center justify-center gap-2 rounded-3xl bg-blush-ink px-4 py-3.5 text-sm font-semibold text-white shadow-lift transition active:scale-[0.99] sm:mt-7 sm:px-5 sm:py-4"
            >
              Mở Google Maps
              <FiExternalLink className="shrink-0" />
            </a>
          </GlassCard>
        </Reveal>

        <RevealStagger className="grid gap-3 sm:gap-4">
          {WEDDING_EVENTS.map((b) => (
            <RevealItem key={b.key}>
              <GlassCard className="px-5 py-6 sm:px-7 sm:py-7">
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[11px] sm:tracking-[0.34em]">
                      {b.key === 'ceremony' ? 'Ceremony' : 'Reception'}
                    </p>
                    <p className="mt-2 break-words font-script text-[clamp(2rem,8vw,3.2rem)] leading-none text-blush-ink sm:mt-3">
                      {b.title}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-blush-100 px-3 py-1.5 text-[10px] font-bold text-blush-ink shadow-sm sm:px-4 sm:py-2 sm:text-xs">
                    {b.time}
                  </span>
                </div>

                <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
                  {b.lines.map((line) => (
                    <p key={line} className="text-[14px] leading-relaxed text-blush-muted sm:text-[15px]">
                      {line}
                    </p>
                  ))}
                  <p className="break-words text-sm font-semibold text-blush-ink">{b.detail}</p>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
