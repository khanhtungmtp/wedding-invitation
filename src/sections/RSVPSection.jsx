import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import { Reveal } from '../components/Reveal'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { submitRsvp } from '../services/rsvpApi'

function validate(form) {
  const errors = {}

  const name = form.fullName.trim()
  if (name.length < 2) errors.fullName = 'Vui lòng nhập họ tên đầy đủ'

  const phone = form.phone.trim()
  if (!/^\+?\d[\d\s.-]{7,}$/.test(phone)) {
    errors.phone = 'Số điện thoại chưa hợp lệ'
  }

  if (!['yes', 'no', 'maybe'].includes(form.attending)) {
    errors.attending = 'Vui lòng chọn trạng thái tham dự'
  }

  if (form.attending === 'yes') {
    const n = Number(form.guestCount)
    if (!Number.isFinite(n) || n < 1 || n > 30) {
      errors.guestCount = 'Số khách nên từ 1 đến 30'
    }
  }

  const msg = form.message.trim()
  if (msg.length > 600) errors.message = 'Lời chúc quá dài (tối đa 600 ký tự)'

  return errors
}

export function RSVPSection() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    attending: 'yes',
    guestCount: '2',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const attendingLabel = useMemo(() => {
    if (form.attending === 'yes') return 'Mình sẽ đến'
    if (form.attending === 'no') return 'Mình báo vắng'
    return 'Mình chưa chắc'
  }, [form.attending])

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      toast.error('Vui lòng kiểm tra lại thông tin')
      return
    }

    setSubmitting(true)
    try {
      const payload = {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        attending: form.attending,
        guestCount: form.attending === 'yes' ? Number(form.guestCount) : 0,
        message: form.message.trim(),
      }

      await submitRsvp(payload)
      toast.success('Cảm ơn bạn — đã ghi nhận RSVP!')
      setForm({
        fullName: '',
        phone: '',
        attending: 'yes',
        guestCount: '2',
        message: '',
      })
    } catch (err) {
      toast.error(err?.message || 'Gửi RSVP thất bại — thử lại sau nhé')
    } finally {
      setSubmitting(false)
    }
  }

  const fieldCls =
    'mt-2 w-full min-w-0 max-w-full rounded-3xl border border-white/75 bg-white/70 px-4 py-3 text-[15px] text-blush-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] outline-none ring-0 transition focus:border-blush-400/70 focus:shadow-[0_0_0_4px_rgba(217,184,196,0.25)]'

  return (
    <section id="rsvp" className="section-pad overflow-hidden bg-white">
      <div className="glow-orb bg-blush-200/45" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="RSVP"
            title="Xác nhận tham dự"
            subtitle="Giúp hai đứa chủ động số lượng khách — cảm ơn bạn rất nhiều."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <GlassCard hover={false} className="px-5 py-7 sm:px-7 sm:py-9">
            <form className="min-w-0 space-y-5 sm:space-y-6" onSubmit={onSubmit} noValidate>
              <div>
                <label className="text-xs font-semibold text-blush-muted" htmlFor="fullName">
                  Họ và tên
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  className={fieldCls}
                  value={form.fullName}
                  onChange={(e) => setField('fullName', e.target.value)}
                  placeholder="Nguyễn Văn A"
                />
                {errors.fullName ? (
                  <p className="mt-2 text-sm font-semibold text-red-600/85">{errors.fullName}</p>
                ) : null}
              </div>

              <div>
                <label className="text-xs font-semibold text-blush-muted" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  className={fieldCls}
                  value={form.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  placeholder="0901 234 567"
                />
                {errors.phone ? (
                  <p className="mt-2 text-sm font-semibold text-red-600/85">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <p className="text-xs font-semibold text-blush-muted">Trạng thái</p>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                  {[
                    { id: 'yes', label: 'Sẽ tham dự' },
                    { id: 'maybe', label: 'Chưa chắc' },
                    { id: 'no', label: 'Không thể đến' },
                  ].map((opt) => {
                    const active = form.attending === opt.id
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setField('attending', opt.id)}
                        className={`w-full max-w-full rounded-3xl border px-3 py-3 text-sm font-semibold shadow-sm transition sm:px-4 ${
                          active
                            ? 'border-blush-400/70 bg-blush-100 text-blush-ink'
                            : 'border-white/75 bg-white/65 text-blush-muted hover:border-blush-300/70'
                        }`}
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
                <p className="mt-3 text-xs font-semibold text-blush-muted">{attendingLabel}</p>
                {errors.attending ? (
                  <p className="mt-2 text-sm font-semibold text-red-600/85">{errors.attending}</p>
                ) : null}
              </div>

              <div className={form.attending === 'yes' ? '' : 'opacity-55'}>
                <label className="text-xs font-semibold text-blush-muted" htmlFor="guestCount">
                  Số khách đi cùng (bao gồm bạn)
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  className={`${fieldCls} appearance-none`}
                  disabled={form.attending !== 'yes'}
                  value={form.guestCount}
                  onChange={(e) => setField('guestCount', e.target.value)}
                >
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={String(n)}>
                      {n} người
                    </option>
                  ))}
                </select>
                {errors.guestCount ? (
                  <p className="mt-2 text-sm font-semibold text-red-600/85">{errors.guestCount}</p>
                ) : null}
              </div>

              <div>
                <label className="text-xs font-semibold text-blush-muted" htmlFor="message">
                  Lời chúc (tuỳ chọn)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${fieldCls} resize-none`}
                  value={form.message}
                  onChange={(e) => setField('message', e.target.value)}
                  placeholder="Gửi Minh Anh & Hữu Quốc một vài dòng yêu thương…"
                />
                {errors.message ? (
                  <p className="mt-2 text-sm font-semibold text-red-600/85">{errors.message}</p>
                ) : null}
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                className="relative w-full max-w-full overflow-hidden rounded-3xl bg-blush-ink px-4 py-3.5 text-sm font-semibold text-white shadow-lift disabled:cursor-not-allowed disabled:opacity-55 sm:px-5 sm:py-4"
                whileTap={{ scale: submitting ? 1 : 0.985 }}
              >
                <span className={submitting ? 'opacity-45' : ''}>
                  {submitting ? 'Đang gửi…' : 'Gửi đi'}
                </span>
                {submitting ? (
                  <motion.span
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)]"
                    initial={{ x: '-120%' }}
                    animate={{ x: '120%' }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : null}
              </motion.button>

              <p className="text-center text-xs leading-relaxed text-blush-muted">
                Khi chưa cấu hình Google Sheets, form vẫn hoạt động ở chế độ demo (giả lập gửi
                thành công).
              </p>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
