import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { STORY_MILESTONES } from '../data/wedding'

export function StorySection() {
  return (
    <section
      id="story"
      className="relative bg-white px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-22 mx-auto h-72 max-w-xl rounded-full bg-blush-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <SectionTitle
          eyebrow="Love story"
          title="Chuyện của hai đứa"
          subtitle="Không phải cổ tích — chỉ là hai người chọn nhau, điều chỉnh nhịp đập cho hợp."
        />

        <div className="relative">
          <div className="absolute left-[14px] top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-blush-400/55 to-transparent sm:left-5" />

          <div className="flex flex-col gap-8">
            {STORY_MILESTONES.map((m, idx) => (
              <motion.div
                key={m.year}
                className="relative pl-11 sm:pl-14"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
              >
                <span className="absolute left-[8px] top-6 grid h-4 w-4 place-items-center rounded-full border border-white bg-blush-200 shadow-[0_10px_28px_rgba(217,184,196,0.35)] sm:left-[11px]">
                  <span className="h-2 w-2 rounded-full bg-white/85" />
                </span>

                <GlassCard className="px-6 py-7 sm:px-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
                      Milestone
                    </p>
                    <p className="rounded-full bg-blush-100 px-4 py-2 text-xs font-bold text-blush-ink shadow-sm">
                      {m.year}
                    </p>
                  </div>
                  <p className="mt-4 font-script text-[clamp(2.2rem,8vw,3rem)] leading-none text-blush-ink">
                    {m.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-blush-muted">{m.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
