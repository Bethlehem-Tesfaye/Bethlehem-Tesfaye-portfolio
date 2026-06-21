import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { heroContent, RESUME_LINK } from "../../data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [firstName, lastName] = heroContent.name.split(" ");

  return (
    <div
      id="Hero"
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] min-h-screen flex flex-col justify-center pb-24 pt-24 lg:pt-28"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-[28%] right-[12%] w-16 h-16 border border-[var(--text-primary)] opacity-[0.12] rotate-12 hidden md:block"
        animate={{
          rotate: [12, 18, 12],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[35%] left-[8%] w-14 h-14 bg-[var(--text-primary)] opacity-[0.04] rounded-full blur-2xl hidden md:block"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 lg:px-24 xl:px-36"
      >
        <div className="max-w-4xl">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-[var(--accent)]" />
            <span className="font-mono text-xs tracking-[0.28em] uppercase text-[var(--text-secondary)]">
              Software Engineer
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="font-display text-[clamp(4.75rem,14vw,12rem)] leading-[0.86] tracking-tight text-[var(--text-primary)] glitch-hover"
            >
              {firstName}
            </motion.h1>
          </div>
          <div className="overflow-hidden -mt-1 md:-mt-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="font-display text-[clamp(4.75rem,14vw,12rem)] leading-[0.86] tracking-tight text-transparent"
              style={{ WebkitTextStroke: "2px var(--text-primary)" }}
            >
              {lastName}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 md:mt-10 max-w-xl border-l-2 border-[var(--accent)] pl-6"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {heroContent.intro}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#Contact"
              className="group inline-flex items-center gap-2.5 bg-[var(--accent)] text-[var(--bg-primary)] px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_var(--text-primary)]"
            >
              <span>{heroContent.linkText}</span>
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[var(--border)]/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
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

            <a
              href="https://github.com/Bethlehem-Tesfaye"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[var(--border)]/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
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
        </div>
      </motion.div>

      {/* Side decoration */}
      <div className="hidden xl:block absolute right-24 xl:right-36 top-[42%] -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <pre className="font-mono text-[var(--text-secondary)] text-[10px] leading-tight opacity-30 select-none">
            {`
    ( (
     ) )
  .______.
  |      |]
  \\      /
   \`----'
            `}
          </pre>
          <motion.p
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-[var(--text-secondary)] whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 1.2 }}
          >
            fueled by caffeine
          </motion.p>
        </motion.div>
      </div>

      <div className="grain" />
    </div>
  );
}
