import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StorySection } from './components/StorySection'
import { GallerySection } from './components/GallerySection'
import { VideoSection } from './components/VideoSection'
import { TimelineSection } from './components/TimelineSection'
import { SecretSection } from './components/SecretSection'
import { MapSection } from './components/MapSection'
import { EditorPanel } from './components/EditorPanel'
import { initialMemoryData } from './data'
import { MemoryData } from './types'
import { ambientSynth } from './components/MusicSynth'

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn')
  const [isMusicActive, setIsMusicActive] = useState(false)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [memoryData, setMemoryData] = useState<MemoryData>(initialMemoryData)

  // Load customized memories from localStorage on startup
  useEffect(() => {
    try {
      const saved = localStorage.getItem('smriti_memory_space_v1')
      if (saved) {
        setMemoryData(JSON.parse(saved))
      }
    } catch (e) {
      console.error('Could not load local memory data:', e)
    }
  }, [])

  // Save memory changes to State and LocalStorage
  const handleSaveMemory = (updated: MemoryData) => {
    setMemoryData(updated)
    try {
      localStorage.setItem('smriti_memory_space_v1', JSON.stringify(updated))
    } catch (e) {
      console.error('Could not save to localStorage:', e)
    }
  }

  // Reset to original Shah Amanat Airport default story data
  const handleResetMemory = () => {
    setMemoryData(initialMemoryData)
    try {
      localStorage.removeItem('smriti_memory_space_v1')
    } catch (e) {
      console.error('Could not clear localStorage:', e)
    }
  }

  // Smooth scroll helper
  const handleScrollToStory = () => {
    const el = document.getElementById('first-meeting')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Turn ambient pad tones on or off
  const handleToggleMusic = () => {
    const isPlayingNow = ambientSynth.toggle()
    setIsMusicActive(isPlayingNow)
  }

  return (
    <div className='relative min-h-screen bg-[#FDFBF7] text-stone-800 selection:bg-primary/20 selection:text-primary overflow-x-hidden pb-0'>
      {/* Dynamic Cinematic Film Grain effect overlay */}
      <div className='fixed inset-0 w-full h-full pointer-events-none z-50 film-grain-layer opacity-[0.035]' />

      {/* Floating Header Navbar */}
      <Navbar
        logoText={
          lang === 'bn' ? memoryData.coupleNameBn : memoryData.coupleNameEn
        }
        lang={lang}
        setLang={setLang}
        isMusicActive={isMusicActive}
        onToggleMusic={handleToggleMusic}
        onToggleEditor={() => setIsEditorOpen(true)}
      />

      {/* 1. Starry Dust Canvas Hero Screen */}
      <Hero
        heading={
          lang === 'bn' ? memoryData.heroHeadingBn : memoryData.heroHeadingEn
        }
        buttonText={lang === 'bn' ? 'আমাদের গল্প দেখো' : 'EXPLORE OUR STORY'}
        subtitle={
          lang === 'bn' ? 'একটি জায়গা, একটি মুহূর্ত' : 'A PLACE, A MOMENT'
        }
        onScroll={handleScrollToStory}
        lang={lang}
      />

      {/* 2. Portrait Story Area (Airport First Meeting) */}
      <StorySection
        id='first-meeting'
        header={
          lang === 'bn'
            ? memoryData.reunionHeaderBn
            : memoryData.reunionHeaderEn
        }
        locationText={
          lang === 'bn'
            ? memoryData.reunionLocationBn
            : memoryData.reunionLocationEn
        }
        imageUrl={memoryData.reunionImage}
        storyText={
          lang === 'bn' ? memoryData.reunionTextBn : memoryData.reunionTextEn
        }
        lang={lang}
      />

      {/* 3. Memory Polaroid Grid Box Section */}
      <div id='photos-gallery'>
        <GallerySection
          title={
            lang === 'bn'
              ? memoryData.galleryTitleBn
              : memoryData.galleryTitleEn
          }
          photos={memoryData.photos}
          lang={lang}
        />
      </div>

      {/* 4. Movie Projection Room (Cinemagraph Clips) */}
      <div id='cinemagraph-videos'>
        <VideoSection cinemagraphs={memoryData.cinemagraphs} lang={lang} />
      </div>

      {/* 5. Pathways Milestones Scroll-Reveal Checklist Timeline */}
      <div id='timeline-milestones'>
        <TimelineSection
          title={
            lang === 'bn'
              ? memoryData.timelineTitleBn
              : memoryData.timelineTitleEn
          }
          events={memoryData.timelineEvents}
          lang={lang}
        />
      </div>

      {/* 6. Love Letter Envelope Interactive Lockbox */}
      <SecretSection
        title={
          lang === 'bn'
            ? memoryData.secretBoxTitleBn
            : memoryData.secretBoxTitleEn
        }
        message={
          lang === 'bn'
            ? memoryData.secretMessageBn
            : memoryData.secretMessageEn
        }
        quizQuestion={
          lang === 'bn'
            ? memoryData.secretQuizQuestionBn
            : memoryData.secretQuizQuestionEn
        }
        quizAnswer={memoryData.secretQuizAnswer}
        lang={lang}
      />

      {/* 7. Coordinates & Vintage Map representation Overlay Section */}
      <MapSection
        title={lang === 'bn' ? memoryData.mapTitleBn : memoryData.mapTitleEn}
        locationStr={
          lang === 'bn'
            ? memoryData.mapLocationStrBn
            : memoryData.mapLocationStrEn
        }
        coordinates={memoryData.coordinates}
        lang={lang}
      />

      {/* 8. Elegant Footer Card */}
      <footer className='bg-surface-container py-20 px-6 border-t border-stone-200/50 flex flex-col items-center select-none'>
        <div className='max-w-3xl text-center space-y-6'>
          <h2
            style={{ fontFamily: '"EB Garamond", serif' }}
            className='text-2xl md:text-3xl text-[#1a1a1a]/90 font-light'
          >
            {lang === 'bn' ? memoryData.coupleNameBn : memoryData.coupleNameEn}
          </h2>

          <p className='text-[#6c5842] italic text-base md:text-lg max-w-xl font-light'>
            {lang === 'bn' ? memoryData.bottomTextBn : memoryData.bottomTextEn}
          </p>

          <div className='flex space-x-8 justify-center pt-2 font-mono text-xs text-stone-500'>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='hover:text-primary transition-colors cursor-pointer'
            >
              {lang === 'bn' ? 'শুরু থেকে' : 'TO TOP'}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('first-meeting')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className='hover:text-primary transition-colors cursor-pointer'
            >
              {lang === 'bn' ? 'গোপন চিরকুট' : 'SECRET BOX'}
            </button>
          </div>

          <div className='pt-6 border-t border-[#6c5842]/10 flex flex-col items-center'>
            <p className='text-stone-400 text-xs tracking-wider'>
              {lang === 'bn'
                ? '© ২০২১ আমাদের গল্প। শাহ আমানত বিমানবন্দর, চট্টগ্রাম।'
                : '© 2021 Our Memory Space. Shah Amanat Airport, Chattogram.'}
            </p>
          </div>
        </div>
      </footer>

      {/* Customize Memory sliding Drawer panel */}
      <EditorPanel
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={memoryData}
        onSave={handleSaveMemory}
        onReset={handleResetMemory}
      />

      {/* Extra cinematic custom styles */}
      <style>{`
        /* Animated dynamic film grain background loop */
        .film-grain-layer {
          background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqnMpLcWtFGnybKUP_mI3mV14bark8wvoAXFsZtNXAkfBLgN8HTj5kOx1SrvLMeK0F5ihw8WuKSwOUlMrAEkrt1HQ0wNNl_DOZTHjJriwLbKjEaQa9MevAA0EvtMNPKxCOhiX8RlXC7rWjOgKYyGTLye8bqxk1-B52ApDLz9FSK2P3p5RsJzFKcGw2tvfXptsxPB6vWlejqZ-856aQgom_ymKlagO2hRP_npntwYj8zCjXvoxL3Aoe7tIw0UwnJRZGfCgQZrvTRVk");
          animation: filmScratchCycle 7s steps(10) infinite;
        }
        @keyframes filmScratchCycle {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-3%, -7%); }
          20% { transform: translate(-12%, 4%); }
          30% { transform: translate(6%, -18%); }
          40% { transform: translate(-4%, 17%); }
          50% { transform: translate(-11%, 8%); }
          60% { transform: translate(12%, 0%); }
          71% { transform: translate(0%, 12%); }
          82% { transform: translate(2%, 24%); }
          90% { transform: translate(-7%, 8%); }
        }
      `}</style>
    </div>
  )
}
