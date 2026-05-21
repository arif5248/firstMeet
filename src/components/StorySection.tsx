import { motion } from "motion/react";

interface StorySectionProps {
  id?: string;
  header: string;
  locationText: string;
  storyText: string;
  imageUrl: string;
  lang: "bn" | "en";
}

export function StorySection({ id, header, locationText, storyText, imageUrl, lang }: StorySectionProps) {
  return (
    <section id={id} className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Memory Picture Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <div className="bg-surface-container p-4 md:p-6 shadow-md border border-outline-variant/30 hover:shadow-xl transition-shadow duration-500 rounded-sm">
            <div className="relative overflow-hidden group select-none">
              <img
                src={imageUrl}
                alt={header}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-color-burn" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            <p 
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              className="mt-6 text-[11px] tracking-[0.2em] font-medium text-center uppercase text-on-surface-variant/80 select-none pb-2"
            >
              ✦ {locationText}
            </p>
          </div>
        </motion.div>

        {/* Story Narration Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-5 md:pl-8 flex flex-col justify-center"
        >
          <div className="w-12 h-[1px] bg-primary/40 mb-6" />
          
          <h2
            style={{ fontFamily: '"EB Garamond", serif' }}
            className="text-3xl md:text-4xl text-primary font-normal leading-tight mb-6"
          >
            {header}
          </h2>
          
          <p className="text-body-lg text-on-surface-variant/90 leading-relaxed font-light font-sans whitespace-pre-line text-justify md:text-left">
            {storyText}
          </p>

          <div className="mt-8 flex items-center space-x-2 text-primary/40 text-xs">
            <span className="material-symbols-outlined text-sm">favorite</span>
            <span className="font-mono uppercase tracking-widest text-[10px]">
              {lang === "bn" ? "অসীম ভালোবাসা" : "everlasting bond"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
