import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { LoadingScreen } from './components/LoadingScreen'
import { MusicPlayer } from './components/MusicPlayer'
import { HeroSection } from './sections/HeroSection'
import { SaveDateSection } from './sections/SaveDateSection'
import { CountdownSection } from './sections/CountdownSection'
import { StorySection } from './sections/StorySection'
import { GallerySection } from './sections/GallerySection'
import { EventSection } from './sections/EventSection'
import { GiftSection } from './sections/GiftSection'
import { RSVPSection } from './sections/RSVPSection'
import { WishesSection } from './sections/WishesSection'
import { FooterSection } from './sections/FooterSection'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone ? <LoadingScreen onDone={() => setIntroDone(true)} /> : null}

      <div className={introDone ? '' : 'pointer-events-none opacity-0'}>
        <main className="bg-blush-100">
          <HeroSection />
          <SaveDateSection />
          <CountdownSection />
          <StorySection />
          <GallerySection />
          <EventSection />
          <GiftSection />
          <RSVPSection />
          <WishesSection />
          <FooterSection />
        </main>

        <MusicPlayer />
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2800,
          className:
            '!rounded-3xl !border !border-white/70 !bg-white/85 !text-blush-ink !shadow-lift !backdrop-blur-xl',
        }}
      />
    </>
  )
}
