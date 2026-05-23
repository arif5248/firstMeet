import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CinemagraphVideo } from '../types'

interface VideoSectionProps {
  cinemagraphs: CinemagraphVideo[]
  lang: 'bn' | 'en'
}

export function VideoSection({ cinemagraphs, lang }: VideoSectionProps) {
  const [activeMedia, setActiveMedia] = useState<CinemagraphVideo | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Simulate progress bar advancing during play
  useEffect(() => {
    let interval: any
    if (activeMedia && isPlaying) {
      interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsPlaying(false)
            return 0
          }
          return p + 0.5 // slow playback
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [activeMedia, isPlaying])

  const handlePlayClick = (item: CinemagraphVideo) => {
    setActiveMedia(item)
    setIsPlaying(true)
    setProgress(0)
  }

  const handleClose = () => {
    setActiveMedia(null)
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section className='py-24 px-6 md:px-16 max-w-6xl mx-auto'>
      {/* Section Heading */}
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

      {/* Grid of Cinemagraph items */}
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
            {/* Aspect Video Card Image */}
            <div className='w-full aspect-video overflow-hidden relative'>
              <video
                src={activeMedia.image}
                autoPlay
                muted
                loop
                playsInline
                controls
                className='w-full h-full object-cover'
              />

              {/* Classic Play Button overlay */}
              <div className='absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-[1200ms]'>
                <div className='w-16 h-16 rounded-full border border-white/50 bg-black/20 group-hover:bg-primary/80 group-hover:border-primary flex items-center justify-center transition-all duration-500 transform group-hover:scale-110'>
                  <span className='material-symbols-outlined text-white text-3xl pl-1 select-none'>
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Title Overlay Label bottom-left */}
              <div className='absolute bottom-4 left-6 text-white font-mono text-[10px] tracking-[0.25em] bg-black/30 backdrop-blur-sm px-3 py-1.5 uppercase select-none rounded-sm border border-white/10'>
                {lang === 'bn'
                  ? item.titleBn.split(' ')[0].toUpperCase()
                  : item.titleEn.toUpperCase()}
              </div>

              {/* Subtle film scratch noise overlay */}
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4))] pointer-events-none' />
            </div>
          </motion.div>
        ))}
      </div>

      {/* IMMERSIVE FILM PLAYER DIRECT MODAL */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-neutral-950/95 flex flex-col items-center justify-center p-4 md:p-8 select-none'
          >
            {/* Close button top-right */}
            <button
              onClick={handleClose}
              className='absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-55 transition-all text-sm uppercase font-mono tracking-wider flex items-center space-x-1 cursor-pointer'
            >
              <span className='material-symbols-outlined text-base'>close</span>
              <span>{lang === 'bn' ? 'বন্ধ করুন' : 'Close'}</span>
            </button>

            {/* Cinematic Player Outer Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='w-full max-w-4xl bg-black rounded-lg border border-neutral-800/80 shadow-2xl overflow-hidden relative'
            >
              {/* Actual Video Frame Simulation */}
              <div className='relative aspect-video w-full h-auto overflow-hidden bg-neutral-950 flex items-center justify-center'>
                {/* Moving movie image strip */}
                import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CinemagraphVideo } from '../types'

interface VideoSectionProps {
  cinemagraphs: CinemagraphVideo[]
  lang: 'bn' | 'en'
}

export function VideoSection({ cinemagraphs, lang }: VideoSectionProps) {
  const [activeMedia, setActiveMedia] = useState<CinemagraphVideo | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Simulate progress bar advancing during play
  useEffect(() => {
    let interval: any
    if (activeMedia && isPlaying) {
      interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsPlaying(false)
            return 0
          }
          return p + 0.5 // slow playback
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [activeMedia, isPlaying])

  const handlePlayClick = (item: CinemagraphVideo) => {
    setActiveMedia(item)
    setIsPlaying(true)
    setProgress(0)
  }

  const handleClose = () => {
    setActiveMedia(null)
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section className='py-24 px-6 md:px-16 max-w-6xl mx-auto'>
      {/* Section Heading */}
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

      {/* Grid of Cinemagraph items */}
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
            {/* Aspect Video Card Image */}
            <div className='w-full aspect-video overflow-hidden relative'>
              <video
                src={activeMedia.image}
                autoPlay
                muted
                loop
                playsInline
                controls
                className='w-full h-full object-cover'
              />

              {/* Classic Play Button overlay */}
              <div className='absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-[1200ms]'>
                <div className='w-16 h-16 rounded-full border border-white/50 bg-black/20 group-hover:bg-primary/80 group-hover:border-primary flex items-center justify-center transition-all duration-500 transform group-hover:scale-110'>
                  <span className='material-symbols-outlined text-white text-3xl pl-1 select-none'>
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Title Overlay Label bottom-left */}
              <div className='absolute bottom-4 left-6 text-white font-mono text-[10px] tracking-[0.25em] bg-black/30 backdrop-blur-sm px-3 py-1.5 uppercase select-none rounded-sm border border-white/10'>
                {lang === 'bn'
                  ? item.titleBn.split(' ')[0].toUpperCase()
                  : item.titleEn.toUpperCase()}
              </div>

              {/* Subtle film scratch noise overlay */}
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4))] pointer-events-none' />
            </div>
          </motion.div>
        ))}
      </div>

      {/* IMMERSIVE FILM PLAYER DIRECT MODAL */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-neutral-950/95 flex flex-col items-center justify-center p-4 md:p-8 select-none'
          >
            {/* Close button top-right */}
            <button
              onClick={handleClose}
              className='absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-55 transition-all text-sm uppercase font-mono tracking-wider flex items-center space-x-1 cursor-pointer'
            >
              <span className='material-symbols-outlined text-base'>close</span>
              <span>{lang === 'bn' ? 'বন্ধ করুন' : 'Close'}</span>
            </button>

            {/* Cinematic Player Outer Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='w-full max-w-4xl bg-black rounded-lg border border-neutral-800/80 shadow-2xl overflow-hidden relative'
            >
              {/* Actual Video Frame Simulation */}
              <div className='relative aspect-video w-full h-auto overflow-hidden bg-neutral-950 flex items-center justify-center'>
                {/* Moving movie image strip */}
                <img
                  src={activeMedia.image}
                  alt={activeMedia.titleBn}
                  referrerPolicy='no-referrer'
                  className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
                    isPlaying ? 'scale-105' : ''
                  }`}
                />

                {/* Animated Vintage Projector Scratch Effect */}
                <div className='absolute inset-0 pointer-events-none bg-radial-gradient brightness-95 opacity-[0.06] flex' />

                {/* Vintage REC indicators */}
                <div className='absolute top-4 left-4 pt-1 flex items-center space-x-2 text-[10px] text-red-500 font-mono tracking-widest bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-red-600 ${isPlaying ? 'animate-pulse' : ''}`}
                  />
                  <span>REC ● PLAY</span>
                </div>

                <div className='absolute top-4 right-4 pt-1 flex items-center text-[10px] text-white/70 font-mono tracking-wider bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span>ISO 400 - 24 FPS</span>
                </div>

                {/* CENTRAL REVELATION TEXT OR PAUSE BUTTON OVERLAY */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white space-y-3 hover:text-primary transition-colors cursor-pointer group'
                  >
                    <span className='material-symbols-outlined text-6xl group-hover:scale-110 transition-transform'>
                      play_circle
                    </span>
                    <span className='font-mono text-xs uppercase tracking-[0.2em]'>
                      RESUME EXPERIENCING
                    </span>
                  </button>
                )}

                {/* SUBTITLE BAR LAYER */}
                {isPlaying && (
                  <div className='absolute bottom-6 left-6 right-6 text-center z-10 z-index bg-black/70 py-3 px-6 rounded-md border border-white/10 max-w-xl mx-auto backdrop-blur-md'>
                    <motion.p
                      key={Math.floor(progress / 20)} // stagger subtitle changes
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-white text-sm md:text-base tracking-wide leading-relaxed font-sans text-center'
                    >
                      {lang === 'bn'
                        ? progress < 30
                          ? activeMedia.subtitleBn
                          : progress < 70
                            ? activeMedia.descriptionBn.split('।')[0] + '।'
                            : activeMedia.descriptionBn.split('।')[1] ||
                              activeMedia.subtitleBn
                        : progress < 30
                          ? activeMedia.subtitleEn
                          : progress < 70
                            ? activeMedia.descriptionEn.split('.')[0] + '.'
                            : activeMedia.descriptionEn.split('.')[1] ||
                              activeMedia.subtitleEn}
                    </motion.p>
                  </div>
                )}
              </div>

              {/* PLAYBACK HARDWARE PANEL */}
              <div className='bg-neutral-900 px-6 py-4 flex flex-col space-y-3'>
                {/* Progress bar line */}
                <div className='relative w-full h-1 bg-neutral-800 rounded-full overflow-hidden cursor-pointer'>
                  <div
                    style={{ width: `${progress}%` }}
                    className='h-full bg-primary transition-all duration-100 ease-linear'
                  />
                </div>

                {/* Controls and metadata descriptions */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 text-white select-none'>
                  <div>
                    <h3 className='font-bold text-sm text-white/95 tracking-wide'>
                      {lang === 'bn'
                        ? activeMedia.titleBn
                        : activeMedia.titleEn}
                    </h3>
                    <p className='text-[11px] text-neutral-400 mt-0.5'>
                      {lang === 'bn'
                        ? activeMedia.subtitleBn
                        : activeMedia.subtitleEn}
                    </p>
                  </div>

                  {/* Play actions panel */}
                  <div className='flex items-center space-x-4'>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className='text-white hover:text-primary transition-colors cursor-pointer text-xs uppercase font-mono tracking-widest flex items-center space-x-1'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                      <span>
                        {isPlaying
                          ? lang === 'bn'
                            ? 'থামুন'
                            : 'PAUSE'
                          : lang === 'bn'
                            ? 'চালু'
                            : 'PLAY'}
                      </span>
                    </button>

                    <button
                      onClick={() => setProgress(0)}
                      className='text-white/60 hover:text-white transition-colors cursor-pointer text-xs uppercase font-mono tracking-widest flex items-center space-x-1'
                    >
                      <span className='material-symbols-outlined text-base'>
                        restart_alt
                      </span>
                      <span>{lang === 'bn' ? 'পুনরায়' : 'REPLAY'}</span>
                    </button>

                    <span className='text-neutral-500 font-mono text-[10px] tracking-widest'>
                      {Math.floor(progress / 10)}s / 10s
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


                {/* Animated Vintage Projector Scratch Effect */}
                <div className='absolute inset-0 pointer-events-none bg-radial-gradient brightness-95 opacity-[0.06] flex' />

                {/* Vintage REC indicators */}
                <div className='absolute top-4 left-4 pt-1 flex items-center space-x-2 text-[10px] text-red-500 font-mono tracking-widest bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-red-600 ${isPlaying ? 'animate-pulse' : ''}`}
                  />
                  <span>REC ● PLAY</span>
                </div>

                <div className='absolute top-4 right-4 pt-1 flex items-center text-[10px] text-white/70 font-mono tracking-wider bg-black/40 px-3 py-1.5 rounded-sm'>
                  <span>ISO 400 - 24 FPS</span>
                </div>

                {/* CENTRAL REVELATION TEXT OR PAUSE BUTTON OVERLAY */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white space-y-3 hover:text-primary transition-colors cursor-pointer group'
                  >
                    <span className='material-symbols-outlined text-6xl group-hover:scale-110 transition-transform'>
                      play_circle
                    </span>
                    <span className='font-mono text-xs uppercase tracking-[0.2em]'>
                      RESUME EXPERIENCING
                    </span>
                  </button>
                )}

                {/* SUBTITLE BAR LAYER */}
                {isPlaying && (
                  <div className='absolute bottom-6 left-6 right-6 text-center z-10 z-index bg-black/70 py-3 px-6 rounded-md border border-white/10 max-w-xl mx-auto backdrop-blur-md'>
                    <motion.p
                      key={Math.floor(progress / 20)} // stagger subtitle changes
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-white text-sm md:text-base tracking-wide leading-relaxed font-sans text-center'
                    >
                      {lang === 'bn'
                        ? progress < 30
                          ? activeMedia.subtitleBn
                          : progress < 70
                            ? activeMedia.descriptionBn.split('।')[0] + '।'
                            : activeMedia.descriptionBn.split('।')[1] ||
                              activeMedia.subtitleBn
                        : progress < 30
                          ? activeMedia.subtitleEn
                          : progress < 70
                            ? activeMedia.descriptionEn.split('.')[0] + '.'
                            : activeMedia.descriptionEn.split('.')[1] ||
                              activeMedia.subtitleEn}
                    </motion.p>
                  </div>
                )}
              </div>

              {/* PLAYBACK HARDWARE PANEL */}
              <div className='bg-neutral-900 px-6 py-4 flex flex-col space-y-3'>
                {/* Progress bar line */}
                <div className='relative w-full h-1 bg-neutral-800 rounded-full overflow-hidden cursor-pointer'>
                  <div
                    style={{ width: `${progress}%` }}
                    className='h-full bg-primary transition-all duration-100 ease-linear'
                  />
                </div>

                {/* Controls and metadata descriptions */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 text-white select-none'>
                  <div>
                    <h3 className='font-bold text-sm text-white/95 tracking-wide'>
                      {lang === 'bn'
                        ? activeMedia.titleBn
                        : activeMedia.titleEn}
                    </h3>
                    <p className='text-[11px] text-neutral-400 mt-0.5'>
                      {lang === 'bn'
                        ? activeMedia.subtitleBn
                        : activeMedia.subtitleEn}
                    </p>
                  </div>

                  {/* Play actions panel */}
                  <div className='flex items-center space-x-4'>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className='text-white hover:text-primary transition-colors cursor-pointer text-xs uppercase font-mono tracking-widest flex items-center space-x-1'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                      <span>
                        {isPlaying
                          ? lang === 'bn'
                            ? 'থামুন'
                            : 'PAUSE'
                          : lang === 'bn'
                            ? 'চালু'
                            : 'PLAY'}
                      </span>
                    </button>

                    <button
                      onClick={() => setProgress(0)}
                      className='text-white/60 hover:text-white transition-colors cursor-pointer text-xs uppercase font-mono tracking-widest flex items-center space-x-1'
                    >
                      <span className='material-symbols-outlined text-base'>
                        restart_alt
                      </span>
                      <span>{lang === 'bn' ? 'পুনরায়' : 'REPLAY'}</span>
                    </button>

                    <span className='text-neutral-500 font-mono text-[10px] tracking-widest'>
                      {Math.floor(progress / 10)}s / 10s
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
