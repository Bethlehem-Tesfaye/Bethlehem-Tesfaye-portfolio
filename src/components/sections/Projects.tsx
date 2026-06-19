import { useState, useEffect } from "react";
import { projects } from "../../data/content";
import { Section, SectionHeader } from "../ui/Section";
import { AiFillGithub } from "react-icons/ai";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <Section id="Projects" className="pb-32">
      <SectionHeader title="Projects" subtitle="Things I've built" />

      <div className="flex flex-col">
        {projects.map((project, i) => {
          const isHovered = hoveredId === project.id;
          const isFeatured = i === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.07,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group flex items-center gap-8 py-16 px-4 -mx-4 border-t border-[var(--border)]/10 transition-all duration-300"
              style={{
                backgroundColor: isHovered
                  ? "color-mix(in srgb, var(--accent) 5%, transparent)"
                  : "transparent",
              }}
            >
              {/* row number */}
              <span
                className="absolute top-16 left-4 font-mono text-[11px] tracking-widest transition-colors duration-300"
                style={{
                  color: isHovered ? "var(--accent)" : "var(--text-secondary)",
                  opacity: isHovered ? 1 : 0.4,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* thumbnail */}
              <div
                className="shrink-0 overflow-hidden border transition-all duration-500"
                style={{
                  width: isFeatured ? "220px" : "180px",
                  height: isFeatured ? "148px" : "120px",
                  borderColor: isHovered
                    ? "var(--accent)"
                    : "color-mix(in srgb, var(--border) 15%, transparent)",
                  marginLeft: "2rem",
                }}
              >
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: isHovered ? "scale(1.07)" : "scale(1)" }}
                />
              </div>

              {/* info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  {isFeatured && (
                    <span
                      className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border"
                      style={{
                        color: "var(--accent)",
                        borderColor: "var(--accent)",
                        opacity: 0.7,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <h3
                  className="font-display text-2xl md:text-3xl tracking-tight leading-snug mb-2 transition-colors duration-300"
                  style={{
                    color: isHovered ? "var(--accent)" : "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-2 mb-3 max-w-2xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* tech tags */}
                {project.features && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.features.slice(0, 5).map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 font-mono leading-none transition-all duration-300"
                        style={{
                          border: `1px solid ${isHovered ? "var(--accent)" : "color-mix(in srgb, var(--accent) 30%, transparent)"}`,
                          color: "var(--accent)",
                          backgroundColor: isHovered
                            ? "color-mix(in srgb, var(--accent) 8%, transparent)"
                            : "transparent",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                    {project.features.length > 5 && (
                      <span
                        className="text-[11px] px-2 py-1 font-mono leading-none"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        +{project.features.length - 5}
                      </span>
                    )}
                  </div>
                )}

                {/* live + github */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:opacity-70"
                    style={{ color: "var(--accent)" }}
                  >
                    <HiArrowUpRight className="w-3.5 h-3.5" /> Live
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:opacity-70"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <AiFillGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* details button */}
              <button
                onClick={() => setSelected(project)}
                className="shrink-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 px-5 py-2.5"
                style={{
                  border: `1px solid ${isHovered ? "var(--accent)" : "color-mix(in srgb, var(--accent) 40%, transparent)"}`,
                  color: isHovered ? "white" : "var(--accent)",
                  backgroundColor: isHovered ? "var(--accent)" : "transparent",
                }}
              >
                Details <HiArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          );
        })}

        {/* closing border */}
        <div className="border-t border-[var(--border)]/10" />
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {selected && (
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
            // style={{ boxShadow: "-8px 0 32px rgba(0,0,0,0.15)" }}
            className="fixed top-0 right-0 h-full w-[600px] max-w-[90vw] z-50 overflow-y-auto flex flex-col border-l"
            style={{
              boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
              backgroundColor: "var(--bg)",
              borderColor: "color-mix(in srgb, var(--border) 20%, transparent)",
            }}
          >
            <div
              className="relative aspect-video w-full shrink-0 overflow-hidden"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <img
                src={selected.imageSrc}
                alt={selected.imageAlt}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--bg), transparent)",
                }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 border flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--accent)",
                  color: "white",
                }}
                aria-label="Close"
              >
                <HiXMark className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 p-6 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h2
                  className="font-display text-2xl md:text-3xl tracking-tight leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {selected.title}
                </h2>
                {selected.githubLink && (
                  <a
                    href={selected.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-9 h-9 border flex items-center justify-center transition-all"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                    }}
                    aria-label="GitHub"
                  >
                    <AiFillGithub size={18} />
                  </a>
                )}
              </div>

              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {selected.description}
              </p>

              {selected.highlights && selected.highlights.length > 0 && (
                <div
                  className="p-4 border relative"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--accent) 20%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 5%, transparent)",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    Development highlights
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {selected.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.tryThis && selected.tryThis.length > 0 && (
                <div
                  className="p-4 border relative"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--border) 15%, transparent)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 50%, transparent)",
                    }}
                  />
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What you can try
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {selected.tryThis.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--accent) 60%, transparent)",
                          }}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.features && (
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 font-medium"
                      style={{
                        border: "2px solid var(--accent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 10%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              <div
                className="mt-auto pt-4 border-t"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--border) 10%, transparent)",
                }}
              >
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  View live project <HiArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </Section>
  );
}
