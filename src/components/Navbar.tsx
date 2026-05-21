import { motion } from "motion/react";

interface NavbarProps {
  logoText: string;
  lang: "bn" | "en";
  setLang: (l: "bn" | "en") => void;
  isMusicActive: boolean;
  onToggleMusic: () => void;
  onToggleEditor: () => void;
}

export function Navbar({
  logoText,
  lang,
  setLang,
  isMusicActive,
  onToggleMusic,
  onToggleEditor,
}: NavbarProps) {
  
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-surface/80 backdrop-blur-md text-primary fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 md:px-16 py-4 w-full border-b border-primary/5 select-none font-sans">
      
      {/* Dynamic Title Logo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl md:text-2xl font-light text-primary hover:text-primary-container cursor-pointer transition-colors"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        {logoText}
      </motion.div>

      {/* Center Navigation Anchors */}
      <nav className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => handleScrollTo("first-meeting")}
          className="text-xs tracking-[0.1em] font-mono hover:text-[#ad302f] transition-colors uppercase cursor-pointer"
        >
          {lang === "bn" ? "গল্প" : "STORY"}
        </button>
        <button
          onClick={() => handleScrollTo("photos-gallery")}
          className="text-xs tracking-[0.1em] font-mono hover:text-[#ad302f] transition-colors uppercase cursor-pointer"
        >
          {lang === "bn" ? "গ্যালারি" : "GALLERY"}
        </button>
        <button
          onClick={() => handleScrollTo("cinemagraph-videos")}
          className="text-xs tracking-[0.1em] font-mono hover:text-[#ad302f] transition-colors uppercase cursor-pointer"
        >
          {lang === "bn" ? "ভিডিও" : "VIDEOS"}
        </button>
        <button
          onClick={() => handleScrollTo("timeline-milestones")}
          className="text-xs tracking-[0.1em] font-mono hover:text-[#ad302f] transition-colors uppercase cursor-pointer"
        >
          {lang === "bn" ? "পথচলা" : "PATHWAY"}
        </button>
      </nav>

      {/* Right Controls Panel */}
      <div className="flex items-center space-x-3 md:space-x-5">
        
        {/* Editor Launcher Toggle */}
        <button
          onClick={onToggleEditor}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/80 hover:bg-primary/5 active:scale-95 transition-all cursor-pointer text-[10px] md:text-xs font-mono font-medium text-primary tracking-widest uppercase"
        >
          <span className="material-symbols-outlined text-xs md:text-sm">edit_note</span>
          <span>{lang === "bn" ? "কাস্টমাইজ" : "CUSTOMIZE"}</span>
        </button>

        {/* Localized Switcher */}
        <div className="flex bg-primary/5 rounded-full p-0.5 border border-primary/10 text-[10px] md:text-xs font-mono font-medium select-none">
          <button
            onClick={() => setLang("bn")}
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              lang === "bn" ? "bg-primary text-white" : "text-primary hover:text-primary-container"
            }`}
          >
            বাং
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              lang === "en" ? "bg-primary text-white" : "text-primary hover:text-primary-container"
            }`}
          >
            EN
          </button>
        </div>

        {/* Music Synth Toggle */}
        <button
          onClick={onToggleMusic}
          className={`scale-100 active:scale-95 transition-transform flex items-center justify-center p-2 rounded-full border cursor-pointer hover:bg-primary/5 ${
            isMusicActive
              ? "border-secondary text-secondary bg-red-500/5 animate-musicPulse"
              : "border-primary/20 text-primary"
          }`}
          title={lang === "bn" ? "মিউজিক চালু/বন্ধ করুন" : "Toggle Ambient Soundscape"}
        >
          <span
            className="material-symbols-outlined text-[20px] md:text-[22px]"
            style={{ fontVariationSettings: isMusicActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            music_note
          </span>
        </button>

      </div>

      <style>{`
        @keyframes musicPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0px rgba(173, 48, 47, 0.2); }
          50% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(173, 48, 47, 0); }
        }
        .animate-musicPulse {
          animation: musicPulse 2s infinite ease-in-out;
        }
      `}</style>
    </header>
  );
}
