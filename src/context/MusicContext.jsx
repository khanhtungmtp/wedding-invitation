import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { MUSIC_URL } from '../data/wedding'

const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onCanPlay = () => setReady(true)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('canplay', onCanPlay)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  const playMusic = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return false
    try {
      audio.volume = 0.38
      await audio.play()
      return true
    } catch {
      return false
    }
  }, [])

  const pauseMusic = useCallback(() => {
    audioRef.current?.pause()
  }, [])

  const toggleMusic = useCallback(async () => {
    if (playing) {
      pauseMusic()
      return
    }
    await playMusic()
  }, [playing, pauseMusic, playMusic])

  return (
    <MusicContext.Provider
      value={{ playing, ready, playMusic, pauseMusic, toggleMusic }}
    >
      <audio ref={audioRef} src={MUSIC_URL} loop preload="metadata" />
      {children}
    </MusicContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- hook paired with provider
export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
