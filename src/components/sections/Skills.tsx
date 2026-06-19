import { Section, SectionHeader } from "../ui/Section";
import { skills } from "../../data/content";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <Section id="Skills" className="pb-32">
      <SectionHeader
        title="My Skills"
        subtitle="Technologies and tools I use"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: i * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true, margin: "-40px" }}
            className="group"
          >
            {/* category title with left accent bar */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-[3px] h-5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <h3
                className="text-xs font-mono uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                {cat.title}
              </h3>
            </div>

            {/* tags — small, quiet, elegant */}
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    color: "var(--text-primary)",
                    backgroundColor: "var(--surface)",
                    border:
                      "1px solid color-mix(in srgb, var(--border) 20%, transparent)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
