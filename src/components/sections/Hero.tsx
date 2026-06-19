import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { heroContent, RESUME_LINK } from "../../data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      id="Hero"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-[var(--bg-primary)] pb-32"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-32 h-32 border-2 border-[var(--text-primary)] opacity-20 rotate-12"
        animate={{
          rotate: [12, 24, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-24 h-24 bg-[var(--text-secondary)] opacity-10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-24 xl:px-36 pt-24"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-[var(--text-primary)] border border-[var(--text-primary)] px-4 py-2">
            Software Engineer
          </span>
        </motion.div>

        {/* Giant Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight text-[var(--text-primary)] glitch-hover"
          >
            {heroContent.name.split(" ")[0]}
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-2 lg:-mt-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight text-transparent"
            style={{
              WebkitTextStroke: "2px var(--text-primary)",
            }}
          >
            {heroContent.name.split(" ")[1]}
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-xl"
        >
          <p className="text-xl lg:text-xl text-[var(--text-secondary)] leading-relaxed">
            {heroContent.intro}{" "}
            <span className="text-[var(--accent)] font-semibold">
              {/* {heroContent.highlight} */}
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons - FIXED VERSION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary: Hire Me / Contact */}
          <a
            href="#Contact"
            className="group relative inline-flex items-center gap-3 bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--text-primary)]"
          >
            <span className="relative z-10">
              {heroContent.callToAction || "Hire Me"}
            </span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Secondary: View Resume (PDF) */}
          {/* Resume */}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-[var(--text-primary)] px-6 py-3 font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Bethlehem-Tesfaye"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-[var(--text-primary)] px-6 py-3 font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </motion.div>

        {/* Optional: Download Resume alternative (if you want direct download instead of view) */}
        {/* Uncomment this if you want a direct download link instead of view */}
        {/* 
        <a
          href="/resume-bethlehem-tesfaye.pdf"
          download
          className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] link-hover hover:text-[var(--text-primary)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
        */}
      </motion.div>

      {/* Side decoration */}
      <div className="hidden lg:block absolute right-24 xl:right-36 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Coffee cup ASCII art */}
          <pre className="font-mono text-[var(--text-secondary)] text-xs leading-tight opacity-40 select-none">
            {`
    ( (
     ) )
  .______.
  |      |]
  \\      /
   \`----'
            `}
          </pre>
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5 }}
          >
            fueled by caffeine
          </motion.div>
        </motion.div>
      </div>

      {/* Grain Overlay */}
      <div className="grain" />
    </div>
  );
}
