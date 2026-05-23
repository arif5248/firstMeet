import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface SecretSectionProps {
  title: string
  message: string
  quizQuestion: string
  quizAnswer: string
  lang: 'bn' | 'en'
}

export function SecretSection({
  title,
  message,
  quizQuestion,
  quizAnswer,
  lang,
}: SecretSectionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizInput, setQuizInput] = useState('')
  const [quizError, setQuizError] = useState(false)

  const handleOpenEnvelopeClick = () => {
    // If a quiz answer is configured, prompt the quiz first!
    if (quizAnswer && quizAnswer.trim() !== '') {
      setShowQuiz(true)
    } else {
      setIsOpen(true)
    }
  }

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (quizInput.toLowerCase().trim() === quizAnswer.toLowerCase().trim()) {
      setIsOpen(true)
      setShowQuiz(false)
      setQuizError(false)
    } else {
      setQuizError(true)
      // reset error tag flash smoothly
      setTimeout(() => setQuizError(false), 2000)
    }
  }

  return (
    <section className='py-24 px-6 select-none bg-radial to-cream from-surface-container-low max-w-4xl mx-auto flex flex-col items-center'>
      <div className='w-full max-w-2xl text-center flex flex-col items-center'>
        {/* Title */}
        <span className='font-mono text-xs text-primary/60 tracking-[0.2em] uppercase block mb-2'>
          {lang === 'bn' ? 'গোপন বার্তা' : 'THE LETTERBOX'}
        </span>
        <h2
          style={{ fontFamily: '"EB Garamond", serif' }}
          className='text-2xl md:text-3xl text-on-background font-normal mb-12'
        >
          {title}
        </h2>

        {/* Dynamic envelope wrapper container */}
        <div className='relative w-full max-w-md h-[280px] flex items-center justify-center'>
          <AnimatePresence mode='wait'>
            {/* 1. CLOSED STATE (SEALED ENVELOPE) */}
            {!isOpen && !showQuiz && (
              <motion.div
                key='closed-envelope'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={handleOpenEnvelopeClick}
                className='w-full max-w-sm h-52 bg-stone-100 border border-stone-200 shadow-lg rounded-sm cursor-pointer relative flex flex-col items-center justify-center p-6 group hover:shadow-2xl transition-shadow duration-500 overflow-hidden'
              >
                {/* Triangular shadow fold overlays */}
                <div className='absolute top-0 left-0 right-0 h-0 border-t-[90px] border-t-white/80 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent pointer-events-none' />
                <div className='absolute bottom-0 left-0 right-0 h-0 border-b-[110px] border-b-neutral-200/40 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent pointer-events-none' />

                {/* Vintage Wax Seal button */}
                <span className='absolute z-10 w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-700/100 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-500 ring-4 ring-red-200/40'>
                  <span className='material-symbols-outlined text-white text-3xl animate-pulse select-none'>
                    favorite
                  </span>
                </span>

                <span className='relative z-10 mt-20 text-[11px] font-mono tracking-[0.15em] text-on-surface-variant/80 uppercase group-hover:text-primary transition-colors'>
                  {lang === 'bn'
                    ? 'তোমার জন্য একটি কথা (খোল)'
                    : 'A Secret For You (Click to open)'}
                </span>
              </motion.div>
            )}

            {/* 2. SECURITY AFFIRMATION QUIZ STATE */}
            {showQuiz && (
              <motion.form
                key='quiz-box'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleQuizSubmit}
                className='w-full max-w-sm bg-white p-6 md:p-8 rounded-sm shadow-xl border border-stone-200/60 flex flex-col justify-center'
              >
                <span className='material-symbols-outlined text-secondary text-3xl mb-4 select-none self-center animate-bounce'>
                  lock_open
                </span>

                <h3 className='text-sm font-bold text-primary tracking-wide mb-3 uppercase font-mono text-center'>
                  {lang === 'bn' ? 'স্মৃতি লক কোড' : 'Memory Unlocked Code'}
                </h3>

                <p className='text-xs md:text-sm text-on-surface-variant leading-relaxed mb-5 text-center px-2'>
                  {quizQuestion}
                </p>

                <div className='flex flex-col space-y-3'>
                  <input
                    type='text'
                    required
                    placeholder={
                      lang === 'bn' ? 'উত্তর দিন...' : 'Your answer here...'
                    }
                    value={quizInput}
                    onChange={(e) => setQuizInput(e.target.value)}
                    className={`border rounded-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-center tracking-wide font-sans ${
                      quizError
                        ? 'border-red-500 bg-red-50 animate-shake'
                        : 'border-stone-300'
                    }`}
                  />

                  {quizError && (
                    <p className='text-[10px] text-red-500 font-mono tracking-wider text-center'>
                      ❌{' '}
                      {lang === 'bn'
                        ? 'উত্তর হয়নি, আবার চেষ্টা করো'
                        : 'Incorrect response. Try again!'}
                    </p>
                  )}

                  <div className='flex space-x-2 pt-2'>
                    <button
                      type='button'
                      onClick={() => setShowQuiz(false)}
                      className='w-1/2 py-2 text-[10px] font-mono tracking-widest text-neutral-500 hover:bg-neutral-50 rounded-sm border border-stone-200 uppercase'
                    >
                      {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                    </button>

                    <button
                      type='submit'
                      className='w-1/2 py-2 text-[10px] font-mono tracking-widest text-white bg-primary hover:bg-primary-container rounded-sm uppercase cursor-pointer'
                    >
                      {lang === 'bn' ? 'আনলক' : 'Unlock'}
                    </button>
                  </div>
                </div>
              </motion.form>
            )}

            {/* 3. OPENED LETTER MESSAGE */}
            {isOpen && (
              <motion.div
                key='open-letter'
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='w-full max-w-lg bg-stone-50 p-8 md:p-12 border border-stone-200 shadow-2xl relative rounded-sm flex flex-col justify-between overflow-hidden'
              >
                {/* Nostalgic watermarks */}
                <div className='absolute top-2 right-4 text-primary/10 select-none'>
                  <span className='material-symbols-outlined text-6xl'>
                    favorite
                  </span>
                </div>
                <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[length:100%_24px] pointer-events-none top-8' />

                {/* Return to seal envelope toggle */}
                <button
                  onClick={() => setIsOpen(false)}
                  className='absolute top-2 right-2 text-stone-400 hover:text-stone-700 p-1.5 transition-colors cursor-pointer'
                  title='Seal Envelope'
                >
                  <span className='material-symbols-outlined text-[18px]'>
                    lock
                  </span>
                </button>

                {/* Letter prose body */}
                <div className='relative z-10'>
                  <p
                    style={{ fontFamily: '"EB Garamond", serif' }}
                    className='text-lg md:text-xl text-on-background items-center italic leading-relaxed text-justify px-2 py-4 border-b border-primary/10 overflow-y-auto'
                  >
                    {message}
                  </p>
                </div>

                <div className='relative z-10 flex justify-between items-center pt-5 px-2 font-mono text-[9px] tracking-widest text-[#938377]'>
                  <span>TRUE DEVOTION</span>
                  <span>UNLOCKED SECURELY</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 3;
        }
      `}</style>
    </section>
  )
}
