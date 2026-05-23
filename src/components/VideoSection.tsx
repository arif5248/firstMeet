import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CinemagraphVideo } from '../types'

interface VideoSectionProps {
  cinemagraphs: CinemagraphVideo[]
  lang: 'bn' | 'en'
}

export function VideoSection({ cinemagraphs, lang }: VideoSectionProps) {
  const [activeMedia, setActiveMedia] = useState<CinemagraphVideo | null>(null)

  const handlePlayClick = (item: CinemagraphVideo) => {
    setActiveMedia(item)
  }

  const handleClose = () => {
    setActiveMedia(null)
  }

  return (
    <section className='py-24 px-6 md:px-16 max-w-6xl mx-auto'>
      <div className='text-center mb-16'>
        <span className='font-mono text-xs text-primary/60 tracking-[0.25em] uppercase block mb-3'>
          {lang === 'bn' ? 'চলমান মুহূর্ত' : 'MOVING MEMORIES'}
        </span>

        <h2
          style={{ fontFamily: '"EB Garamond", serif' }}
          className='text-3xl md:text-4xl text-on-background font-normal'
        >
          {lang === 'bn' ? 'চলমান স্মৃতি' : 'Cinemagraph Stories'}
        </h2>

        <p className='text-xs text-on-surface-variant/50 font-mono mt-2 tracking-wider'>
          {lang === 'bn'
            ? '(প্লে করতে স্মৃতি নির্বাচন করুন)'
            : '(Select a memory to experience)'}
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {cinemagraphs.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1 }}
            onClick={() => handlePlayClick(item)}
            className='relative group overflow-hidden cursor-pointer bg-neutral-900 rounded-sm shadow-md flex'
          >
            <div className='w-full aspect-video overflow-hidden relative'>
              <video
                src={item.image}
                muted
                loop
                playsInline
                className='w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out select-none'
              />

              <div className='absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-[1200ms]'>
                <div className='w-16 h-16 rounded-full border border-white/50 bg-black/20 group-hover:bg-primary/80 group-hover:border-primary flex items-center justify-center transition-all duration-500 transform group-hover:scale-110'>
                  <span className='material-symbols-outlined text-white text-3xl pl-1 select-none'>
                    play_arrow
                  </span>
                </div>
              </div>

              <div className='absolute bottom-4 left-6 text-white font-mono text-[10px] tracking-[0.25em] bg-black/30 backdrop-blur-sm px-3 py-1.5 uppercase select-none rounded-sm border border-white/10'>
                {lang === 'bn'
                  ? item.titleBn.split(' ')[0].toUpperCase()
                  : item.titleEn.toUpperCase()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-neutral-950/95 flex flex-col items-center justify-center p-4 md:p-8 select-none'
          >
            <button
              onClick={handleClose}
              className='absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-55 transition-all text-sm uppercase font-mono tracking-wider flex items-center space-x-1 cursor-pointer'
            >
              <span className='material-symbols-outlined text-base'>close</span>
              <span>{lang === 'bn' ? 'বন্ধ করুন' : 'Close'}</span>
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='w-full max-w-4xl bg-black rounded-lg border border-neutral-800/80 shadow-2xl overflow-hidden relative'
            >
              <div className='relative aspect-video w-full bg-neutral-950'>
                <video
                  src={activeMedia.image}
                  autoPlay
                  controls
                  playsInline
                  className='w-full h-full object-cover'
                />

                <div className='absolute top-4 left-4 pt-1 flex items-center space-x-2 text-[10px] text-red-500 font-mono tracking-widest bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span className='w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse' />
                  <span>REC ● PLAY</span>
                </div>

                <div className='absolute top-4 right-4 pt-1 flex items-center text-[10px] text-white/70 font-mono tracking-wider bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span>ISO 400 - 24 FPS</span>
                </div>
              </div>

              <div className='bg-neutral-900 px-6 py-4 text-white'>
                <h3 className='font-bold text-sm text-white/95 tracking-wide'>
                  {lang === 'bn' ? activeMedia.titleBn : activeMedia.titleEn}
                </h3>
                <p className='text-[11px] text-neutral-400 mt-0.5'>
                  {lang === 'bn'
                    ? activeMedia.subtitleBn
                    : activeMedia.subtitleEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
