import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import { EnvelopeInvitation } from './components/EnvelopeInvitation'
import { MusicPlayer } from './components/MusicPlayer'
import { MusicProvider } from './context/MusicContext'
import { HeroSection } from './sections/HeroSection'
import { SaveDateSection } from './sections/SaveDateSection'
import { CountdownSection } from './sections/CountdownSection'
import { GroomFamilySection } from './sections/GroomFamilySection'
import { BrideFamilySection } from './sections/BrideFamilySection'
import { EventSection } from './sections/EventSection'
import { InvitationSection } from './sections/InvitationSection'
import { GallerySection } from './sections/GallerySection'
import { GiftSection } from './sections/GiftSection'
import { RSVPSection } from './sections/RSVPSection'
import { WishesSection } from './sections/WishesSection'
import { FooterSection } from './sections/FooterSection'

const ease = [0.22, 1, 0.36, 1]

function InvitationContent() {
  return (
    <motion.main
      className="bg-blush-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease }}
    >
      <HeroSection />
      <SaveDateSection />
      <CountdownSection />
      <GroomFamilySection />
      <BrideFamilySection />
      <EventSection />
      <InvitationSection />
      <GallerySection />
      <GiftSection />
      <RSVPSection />
      <WishesSection />
      <FooterSection />
    </motion.main>
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <MusicProvider>
      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeInvitation key="envelope" onOpen={() => setOpened(true)} />
        ) : (
          <InvitationContent key="content" />
        )}
      </AnimatePresence>

      <MusicPlayer visible={opened} />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2800,
          className:
            '!rounded-3xl !border !border-white/70 !bg-white/85 !text-blush-ink !shadow-lift !backdrop-blur-xl',
        }}
      />
    </MusicProvider>
  )
}
