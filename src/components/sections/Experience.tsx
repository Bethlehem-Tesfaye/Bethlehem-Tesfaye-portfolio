import { experiences } from "../../data/content";
import { Section, SectionHeader } from "../ui/Section";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <Section id="Experience">
      <SectionHeader title="Experience" subtitle="Where I've honed my craft" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--text-primary)] via-[var(--border)]/30 to-transparent" />

        <div className="flex flex-col gap-10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative group"
            >
              {/* dot on the line */}
              <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full border-2 border-[var(--text-primary)] bg-[var(--bg)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-xl md:text-2xl tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {exp.title}
                </h3>

                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors shrink-0 mt-1"
                >
                  Visit <HiArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
