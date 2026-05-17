import { googleScriptUrl } from '../data/config'

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

  const formData = new URLSearchParams()
  formData.append("data", JSON.stringify(payload))

  console.log("SEND TO GAS:", payload)

  const response = await fetch(googleScriptUrl, {
    method: 'POST',
    body: formData, 
    redirect: 'follow',
  })

  const data = await readJsonSafe(response)

  console.log("RESPONSE GAS:", data)

  if (!response.ok) {
    throw new Error(data?.error || 'RSVP submission failed')
  }

  return data
}

export async function fetchWishes() {

  const url = new URL(googleScriptUrl)
  url.searchParams.set('action', 'wishes')

  const response = await fetch(url.toString(), {
    method: 'GET',
  })

  const data = await readJsonSafe(response)

  if (!response.ok) {
    throw new Error(data?.error || 'Failed to load wishes')
  }

  if (Array.isArray(data?.wishes)) return data.wishes
  if (Array.isArray(data)) return data
}