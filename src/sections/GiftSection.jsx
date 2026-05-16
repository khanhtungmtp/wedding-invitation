import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiCopy } from 'react-icons/fi'

import qrPlaceholder from '../assets/qr-placeholder.svg'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { BANK_INFO } from '../data/wedding'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

export function GiftSection() {
  const onCopy = async () => {
    const ok = await copyText(BANK_INFO.accountNumber)
    if (ok) toast.success('Đã copy số tài khoản')
    else toast.error('Không thể copy — vui lòng copy thủ công')
  }

  return (
    <section
      id="gift"
      className="relative bg-gradient-to-b from-blush-100 via-white to-blush-100 px-6 pb-24 pt-[clamp(72px,14vw,112px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-28 mx-auto h-72 max-w-xl rounded-full bg-blush-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <SectionTitle
          eyebrow="Gift"
          title="Hộp mừng cưới"
          subtitle="Sự hiện diện của bạn là món quà quý nhất — nếu tiện, bạn có thể gửi lời chúc qua QR demo."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55 }}
        >
          <GlassCard className="px-7 py-9">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="w-full max-w-[260px]">
                <div className="overflow-hidden rounded-[30px] border border-white/75 bg-white/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl">
                  <img
                    src={qrPlaceholder}
                    alt="QR quà mừng (demo)"
                    className="w-full rounded-[22px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-blush-muted">
                  QR demo — thay bằng VietQR của bạn
                </p>
              </div>

              <div className="w-full flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blush-muted">
                  Thông tin chuyển khoản (demo)
                </p>

                <div className="mt-5 space-y-4 rounded-[26px] border border-white/70 bg-white/65 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <div>
                    <p className="text-xs font-semibold text-blush-muted">Ngân hàng</p>
                    <p className="mt-2 text-base font-semibold text-blush-ink">{BANK_INFO.bankName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blush-muted">Chủ tài khoản</p>
                    <p className="mt-2 text-base font-semibold text-blush-ink">{BANK_INFO.accountName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blush-muted">Số tài khoản</p>
                    <p className="mt-2 font-mono text-lg font-semibold tracking-wide text-blush-ink">
                      {BANK_INFO.accountNumber}
                    </p>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={onCopy}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-blush-ink px-5 py-4 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-black"
                  whileTap={{ scale: 0.985 }}
                >
                  Copy số tài khoản
                  <FiCopy />
                </motion.button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
