import { useState } from "react";
import { motion } from "motion/react";
import { PolaroidPhoto } from "../types";

interface GallerySectionProps {
  title: string;
  photos: PolaroidPhoto[];
  lang: "bn" | "en";
}

export function GallerySection({ title, photos, lang }: GallerySectionProps) {
  // Store which cards have been clicked/flipped
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 bg-surface-container-low px-6">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Title with sub-decor */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 text-primary/60 text-xs font-mono tracking-widest uppercase mb-3"
          >
            <span>✨</span>
            <span>{lang === "bn" ? "অ্যালবাম" : "THE ALBUM"}</span>
            <span>✨</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ fontFamily: '"EB Garamond", serif' }}
            className="text-3xl md:text-4xl text-on-background font-normal"
          >
            {title}
          </motion.h2>

          <p className="text-xs text-on-surface-variant/60 font-mono mt-3 uppercase tracking-widest">
            {lang === "bn" ? "(ছবিতে ক্লিক করে পেছনে লেখা অনুভূতি দেখুন!)" : "(Click on a card to flip and view the handwritten note!)"}
          </p>
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => {
            const isFlipped = !!flippedCards[photo.id];

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="perspective-1000 cursor-pointer h-[380px] w-full"
                onClick={() => handleCardClick(photo.id)}
              >
                {/* Inner Flip Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT SIDE (POLAROID) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white p-4 shadow-md border border-neutral-200/50 flex flex-col justify-between rounded-sm">
                    <div className="relative w-full h-[260px] bg-neutral-100 overflow-hidden group">
                      <img
                        src={photo.image}
                        alt={photo.captionBn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      {/* Subtle Polaroid inner shadow & filter vignette */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                      <div className="absolute inset-0 bg-amber-500/5 mix-blend-color pointer-events-none" />
                    </div>

                    {/* Polaroid Bottom Margin Caption */}
                    <div className="pt-3 pb-1 flex flex-col items-center">
                      <span
                        style={{ fontFamily: '"EB Garamond", serif' }}
                        className="text-base text-primary/90 font-medium tracking-wide text-center"
                      >
                        {lang === "bn" ? photo.captionBn : photo.captionEn}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#a19f99] mt-1 select-none">
                        {photo.dateStr}
                      </span>
                    </div>
                  </div>

                  {/* BACK SIDE (DIARY WRITING) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-stone-50 p-6 shadow-md border-2 border-stone-200/80 flex flex-col justify-between rounded-sm relative overflow-hidden">
                    {/* Retro diary paper texture simulation */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:100%_24px] pointer-events-none opacity-40 top-8 px-6" />
                    <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-200/60 pointer-events-none" />

                    {/* Diary Content */}
                    <div className="relative z-10 pl-4">
                      {/* Signature-style header */}
                      <div className="flex justify-between items-center border-b border-primary/10 pb-2 mb-4 font-mono text-[9px] tracking-wider text-primary/50">
                        <span>POSTCARD NO. 0{index + 1}</span>
                        <span>{photo.dateStr}</span>
                      </div>

                      <p
                        style={{ fontFamily: '"EB Garamond", serif' }}
                        className="text-base text-primary-container leading-relaxed italic text-justify pt-1 pr-1 font-light"
                      >
                        {lang === "bn" ? photo.noteBn : photo.noteEn}
                      </p>
                    </div>

                    {/* Stamp and Heart Footer */}
                    <div className="relative z-10 pl-4 border-t border-primary/10 pt-3 flex justify-between items-center text-primary/40 text-xs">
                      <span className="font-mono text-[9px] tracking-widest">W/ LOVE FOREVER</span>
                      <span className="material-symbols-outlined text-red-400 select-none animate-pulse text-lg">
                        favorite
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tailwind helper utilities injection for card flipping in v4 support */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
