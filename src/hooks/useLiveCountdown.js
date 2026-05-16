import { useEffect, useState } from 'react'
import { useCountdownParts } from './useCountdown'

export function useLiveCountdown(targetDate, intervalMs = 1000) {
  const [nowMs, setNowMs] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])

  return useCountdownParts(targetDate, nowMs)
}
