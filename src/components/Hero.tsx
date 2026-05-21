import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface HeroProps {
  heading: string;
  buttonText: string;
  subtitle: string;
  onScroll: () => void;
  lang: "bn" | "en";
}

export function Hero({ heading, buttonText, subtitle, onScroll, lang }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width / 14);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.4,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: (Math.random() - 0.5) * 0.25,
          opacity: Math.random() * 0.22 + 0.06, // Highly translucent dust matching "transferencey"
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce back nicely off borders
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = `rgba(108, 88, 66, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Use ResizeObserver for perfect responsive canvas size handling
    const container = canvas.parentElement;
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    if (container) {
      resizeObserver.observe(container);
    }

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background Map Image - The correct, actual map asset you provided, perfectly visible */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.76] saturate-[0.88] contrast-[0.98]"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD22ql-om_MKKmvqToN4DKROtRg8p41deFIHPlGfihN2fg-tXR2L-XrjvaoLoG3L-h7yCdwBFK6WXb9aiWflWRizNZ_ogSi5RcgCDz9O-FpPXXkbXMsIn_7OOs1pFGeX7axSi8WOYvU-05ruH2K9CQY5XKtf0TJM-wcfSSrJYmNjlEgOhnqXe6veemZ4Fm6ncbFJ2dZZTSPhuHVkEX8K5KK1Om5_AzdjNOdFucAvdfprtCzDZagxDDeMdfPn09DOI0F0X8QwbUk5I0')`
        }} 
      />

      {/* Advanced overlay mask for ultimate text legibility and cinematic vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FDFBF7]/35 via-[#FDFBF7]/82 to-[#FDFBF7] backdrop-blur-[1px] pointer-events-none" />

      {/* Dynamic Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-3xl flex flex-col items-center select-none px-4">
        {/* Animated Small tag */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-mono text-xs text-primary/70 tracking-[0.2em] uppercase mb-4"
        >
          {subtitle}
        </motion.p>

        {/* Cinematic Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: '"EB Garamond", serif' }}
          className="text-3xl md:text-5xl lg:text-6xl text-on-background mb-10 leading-tight tracking-tight font-light"
        >
          {heading}
        </motion.h1>

        {/* Custom Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onScroll}
          className="bg-primary hover:bg-primary-container text-white px-10 py-4 font-mono text-[11px] tracking-[0.25em] uppercase border border-primary/20 hover:border-primary/50 cursor-pointer shadow-lg hover:shadow-primary/10 transition-all duration-500 rounded-sm"
        >
          {buttonText}
        </motion.button>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
        onClick={onScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center text-primary/50 hover:text-primary transition-colors duration-300 z-20"
      >
        <span className="text-[10px] tracking-[0.15em] font-mono uppercase mb-2">
          {lang === "bn" ? "নিচে যান" : "scroll"}
        </span>
        <span className="material-symbols-outlined text-xl">expand_more</span>
      </motion.div>
    </section>
  );
}
