import { googleScriptUrl } from '../data/config'
import { DEMO_WISHES } from '../data/wedding'

async function readJsonSafe(response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return { raw: text }
  }
}

export async function submitRsvp(payload) {
  if (!googleScriptUrl) {
    await new Promise((r) => window.setTimeout(r, 950))
    return { ok: true, demo: true }
  }

  const response = await fetch(googleScriptUrl, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  const data = await readJsonSafe(response)
  if (!response.ok) {
    throw new Error(data?.error || 'RSVP submission failed')
  }
  return data
}

export async function fetchWishes() {
  if (!googleScriptUrl) {
    await new Promise((r) => window.setTimeout(r, 450))
    return DEMO_WISHES
  }

  const url = new URL(googleScriptUrl)
  url.searchParams.set('action', 'wishes')

  const response = await fetch(url.toString(), {
    method: 'GET',
    redirect: 'follow',
  })

  const data = await readJsonSafe(response)
  if (!response.ok) {
    throw new Error(data?.error || 'Failed to load wishes')
  }

  if (Array.isArray(data?.wishes)) return data.wishes
  if (Array.isArray(data)) return data
  return DEMO_WISHES
}
