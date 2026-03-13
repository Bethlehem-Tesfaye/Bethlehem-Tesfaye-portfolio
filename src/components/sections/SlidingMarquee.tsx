import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { skills } from "../../data/content";

export default function SlidingMarquee() {
  const langCategory = skills.find(
    (s) =>
      s.id === "programming-langs" ||
      s.title.toLowerCase().includes("programming"),
  );
  const languages = langCategory?.items ?? [];

  if (languages.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 bg-[var(--bg-secondary)] overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      {/* Marquee with gradient masks showing languages */}
      <div className="relative mask-marquee">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {languages.map((lang, i) => (
            <div key={lang + i} className="inline-flex items-center mx-8">
              <span className="font-display text-2xl tracking-wide text-[var(--text-primary)]">
                {lang}
              </span>
              <span className="mx-8 text-[var(--accent-muted)] opacity-40">
                /
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
    </motion.div>
  );
}
