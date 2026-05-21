import { motion } from "motion/react";

interface MapSectionProps {
  title: string;
  locationStr: string;
  coordinates: string;
  lang: "bn" | "en";
}

export function MapSection({ title, locationStr, coordinates, lang }: MapSectionProps) {
  // Hotlinked vintage map and layout images from the HTML specification
  const mapOverlayImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD0gLob-Jr9N7SEtHED_uBeumYmvaM00m0Zsc8FToLVcuEjccV3HDokaB84_Xg8NV6OJELAdl0X_fwCPicgDVpDgjtLoC-pH5ReckAafHJXdwy5_ZjkOaJyq41w_6iSikI37zIohf_55Eonz4Hc1ieL85S-jDE-wnllK_ianl8UzKJ-pL485dgpFBr7SxdmN91c775siq2EvwwmTgPOFFuljC2YkDdSDEMD7N4KIdMl2L132TNTQpAUTjKoXJ0G74jISO-3NR-6eQQ";
  const mapBgImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD22ql-om_MKKmvqToN4DKROtRg8p41deFIHPlGfihN2fg-tXR2L-XrjvaoLoG3L-h7yCdwBFK6WXb9aiWflWRizNZ_ogSi5RcgCDz9O-FpPXXkbXMsIn_7OOs1pFGeX7axSi8WOYvU-05ruH2K9CQY5XKtf0TJM-wcfSSrJYmNjlEgOhnqXe6veemZ4Fm6ncbFJ2dZZTSPhuHVkEX8K5KK1Om5_AzdjNOdFucAvdfprtCzDZagxDDeMdfPn09DOI0F0X8QwbUk5I0";

  return (
    <section className="py-24 text-center px-6 md:px-16 selection-none bg-stone-50/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: '"EB Garamond", serif' }}
          className="text-2xl md:text-3xl text-[#1a1a1a] font-normal mb-3"
        >
          {title}
        </motion.h2>

        {/* Airport subtitle label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          className="text-[11px] font-label-caps tracking-[0.2em] font-medium text-primary mb-12 uppercase"
        >
          {locationStr}
        </motion.p>

        {/* Double-layered stylized canvas illustration map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[380px] bg-[#e0ddd8] border border-outline-variant/60 shadow-xl overflow-hidden relative group"
        >
          {/* Bottom Satellite outline level background */}
          <div
            style={{ backgroundImage: `url('${mapBgImg}')` }}
            className="absolute inset-0 opacity-[0.27] bg-cover bg-center mix-blend-multiply group-hover:scale-102 transition-transform duration-[10s] ease-out pointer-events-none"
          />

          {/* Classic Vintage Map Overlay */}
          <img
            src={mapOverlayImg}
            alt="Vintage map diagram grid"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.55] select-none pointer-events-none group-hover:opacity-[0.6] transition-opacity duration-1000"
          />

          {/* Grid lines styling overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(108,88,66,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,88,66,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Central radar signal and coordinate PIN indicators */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            {/* Animated sonar ring */}
            <span className="relative flex h-14 w-14 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/30"></span>
              <span className="animate-ping absolute inline-flex h-2/3 w-2/3 rounded-full bg-secondary/20"></span>
              <span className="material-symbols-outlined text-secondary text-5xl relative z-10 select-none animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
            </span>

            {/* Glowing coordinate display label */}
            <div className="mt-4 bg-[#fdfbf7]/90 backdrop-blur-md border border-primary/20 hover:border-primary/50 text-[#1a1a1a] px-4 py-2 hover:shadow-lg transition-all rounded-sm flex flex-col justify-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary/70">
                {lang === "bn" ? "ভৌগোলিক অবস্থান" : "COORDINATES"}
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider mt-0.5 text-[#1a1a1a]/95">
                {coordinates}
              </span>
            </div>
          </div>

          {/* Subtle vignette boundary */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(108,88,66,0.15))]" />
        </motion.div>

      </div>
    </section>
  );
}
