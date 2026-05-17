import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiCopy } from 'react-icons/fi'

import qrPlaceholder from '../assets/qr.jpg'
import { Reveal } from '../components/Reveal'
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
      className="section-pad overflow-hidden bg-gradient-to-b from-blush-100 via-white to-blush-100"
    >
      <div className="glow-orb bg-blush-200/45" aria-hidden />

      <div className="section-inner">
        <Reveal>
          <SectionTitle
            eyebrow="Gift"
            title="Hộp mừng cưới"
            subtitle="Sự hiện diện của bạn là món quà quý nhất — nếu tiện, bạn có thể gửi lời chúc qua QR demo."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <GlassCard className="px-5 py-7 sm:px-7 sm:py-9">
            <div className="flex min-w-0 flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="w-full min-w-0 max-w-[240px] sm:max-w-[260px]">
                <div className="overflow-hidden rounded-[24px] border border-white/75 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl sm:rounded-[30px] sm:p-5">
                  <img
                    src={qrPlaceholder}
                    alt="QR quà mừng"
                    className="mx-auto w-full max-w-full rounded-[18px] sm:rounded-[22px]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-full min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blush-muted sm:text-[11px] sm:tracking-[0.34em]">
                  Thông tin chuyển khoản
                </p>

                <div className="mt-4 space-y-3 rounded-[22px] border border-white/70 bg-white/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:mt-5 sm:space-y-4 sm:rounded-[26px] sm:p-6">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-blush-muted">Ngân hàng</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-blush-ink sm:mt-2 sm:text-base">
                      {BANK_INFO.bankName}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-blush-muted">Chủ tài khoản</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-blush-ink sm:mt-2 sm:text-base">
                      {BANK_INFO.accountName}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-blush-muted">Số tài khoản</p>
                    <p className="mt-1.5 break-all font-mono text-base font-semibold tracking-wide text-blush-ink sm:mt-2 sm:text-lg">
                      {BANK_INFO.accountNumber}
                    </p>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={onCopy}
                  className="mt-4 inline-flex w-full max-w-full items-center justify-center gap-2 rounded-3xl bg-blush-ink px-4 py-3.5 text-sm font-semibold text-white shadow-lift active:scale-[0.99] sm:mt-5 sm:px-5 sm:py-4"
                  whileTap={{ scale: 0.985 }}
                >
                  Copy số tài khoản
                  <FiCopy className="shrink-0" />
                </motion.button>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
