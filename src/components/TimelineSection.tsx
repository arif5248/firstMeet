import { motion } from "motion/react";
import { TimelineEvent } from "../types";

interface TimelineSectionProps {
  title: string;
  events: TimelineEvent[];
  lang: "bn" | "en";
}

export function TimelineSection({ title, events, lang }: TimelineSectionProps) {
  return (
    <section className="py-24 bg-surface-container select-none px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="font-mono text-xs text-primary/60 tracking-[0.25em] uppercase block mb-3 animate-pulse">
            {lang === "bn" ? "মাইলস্টোন" : "MILESTONES"}
          </span>
          <h2
            style={{ fontFamily: '"EB Garamond", serif' }}
            className="text-3xl md:text-4xl text-on-background font-normal"
          >
            {title}
          </h2>
          <div className="w-8 h-[1px] bg-primary/30 mt-6" />
        </div>

        {/* Vertical Timeline Body */}
        <div className="relative border-l border-primary/20 ml-6 pl-10 space-y-16 py-2">
          {events.map((event, index) => {
            // Give specific decorative highlights
            const isCriticalPoint = index === 2; // Airport meeting gets a beautiful crimson pulse

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Node circle on the border */}
                <span className="absolute -left-[50px] top-1 flex items-center justify-center">
                  {isCriticalPoint ? (
                    <span className="relative flex h-[18px] w-[18px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-[18px] w-[18px] bg-secondary border-4 border-surface shadow-md"></span>
                    </span>
                  ) : (
                    <span className="h-[14px] w-[14px] rounded-full bg-primary/70 border-4 border-surface shadow-sm" />
                  )}
                </span>

                {/* Event Contents */}
                <div>
                  <h3
                    style={{ fontFamily: '"EB Garamond", serif' }}
                    className={`text-xl md:text-2xl font-light mb-2 transition-colors ${
                      isCriticalPoint ? "text-secondary font-medium" : "text-on-background"
                    }`}
                  >
                    {lang === "bn" ? event.titleBn : event.titleEn}
                  </h3>
                  
                  <p className="text-body-md text-on-surface-variant/80 font-light leading-relaxed">
                    {lang === "bn" ? event.descBn : event.descEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
