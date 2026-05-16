import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

function clampNonNegative(ms) {
  return ms > 0 ? ms : 0
}

export function useCountdownParts(targetDate, nowMs = Date.now()) {
  const target = dayjs(targetDate)
  const now = dayjs(nowMs)
  const ms = clampNonNegative(target.diff(now))

  const dur = dayjs.duration(ms)
  const days = Math.floor(dur.asDays())
  const hours = dur.hours()
  const minutes = dur.minutes()
  const seconds = dur.seconds()

  return {
    totalMs: ms,
    days,
    hours,
    minutes,
    seconds,
    isPast: ms === 0,
  }
}
