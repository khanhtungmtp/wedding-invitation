import { FiExternalLink, FiMapPin } from 'react-icons/fi'
import dayjs from 'dayjs'

import { GlassCard } from '../components/GlassCard'
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { MAPS_QUERY, VENUE, WEDDING_DATE_ISO, WEDDING_EVENTS } from '../data/wedding'

export function EventSection() {
  const mapsHref = `https://maps.app.goo.gl/73FWLy6ZgmhZL88i9`
  const datePretty = dayjs(WEDDING_DATE_ISO).format('dddd, DD/MM/YYYY')

  return (
    <section
      id="event"
      className="relative bg-gradient-to-b from-blush-100 via-white to-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-xl rounded-full bg-blush-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <SectionTitle
            eyebrow="Event"
            title="Thông tin tiệc cưới"
            subtitle="Chúng mình đã chọn một không gian ấm — mong được đón bạn đúng giờ."
          />
        </Reveal>

        <Reveal className="mb-8" delay={0.06}>
          <GlassCard className="px-7 py-8">
            <div className="flex items-start gap-3">
              <span className="mt-1 grid h-11 w-11 place-items-center rounded-2xl bg-blush-100 text-blush-ink shadow-sm">
                <FiMapPin />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
                  Địa điểm
                </p>
                <p className="mt-3 text-lg font-semibold text-blush-ink">{VENUE.name}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-blush-muted">
                  {VENUE.address}
                </p>
                <p className="mt-4 text-sm font-semibold text-blush-ink">{datePretty}</p>
              </div>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-blush-ink px-5 py-4 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-black"
            >
              Mở Google Maps
              <FiExternalLink />
            </a>
          </GlassCard>
        </Reveal>

        <RevealStagger className="grid gap-4">
          {WEDDING_EVENTS.map((b) => (
            <RevealItem key={b.key}>
              <GlassCard className="px-7 py-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
                      {b.key === 'ceremony' ? 'Ceremony' : 'Reception'}
                    </p>
                    <p className="mt-3 font-script text-[clamp(2.4rem,9vw,3.4rem)] leading-none text-blush-ink">
                      {b.title}
                    </p>
                  </div>
                  <span className="rounded-full bg-blush-100 px-4 py-2 text-xs font-bold text-blush-ink shadow-sm">
                    {b.time}
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  {b.lines.map((line) => (
                    <p key={line} className="text-[15px] leading-relaxed text-blush-muted">
                      {line}
                    </p>
                  ))}
                  <p className="text-sm font-semibold text-blush-ink">{b.detail}</p>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
