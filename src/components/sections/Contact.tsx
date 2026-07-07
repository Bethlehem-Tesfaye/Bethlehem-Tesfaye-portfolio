import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "../ui/Section";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTelegramPlane, FaCopy } from "react-icons/fa";
import { contactMethods } from "../../data/content";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1800);
    } catch (err) {
      // ignore
    }
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="px-6 lg:px-24 xl:px-36 py-32 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          title="Get In Touch"
          subtitle="Choose the best way to reach out"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactMethods.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-xl border border-[var(--border)]/10 bg-[var(--surface)] flex flex-col gap-3 h-full transition-colors hover:bg-[var(--bg-secondary)]"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg border border-[var(--border)]/15 bg-[var(--text-primary)]/5 flex items-center justify-center text-[var(--text-primary)]">
                  {c.type === "phone" ? (
                    <HiOutlinePhone className="w-5 h-5" />
                  ) : c.type === "email" ? (
                    <HiOutlineMail className="w-5 h-5" />
                  ) : c.id === "telegram" ? (
                    <FaTelegramPlane className="w-4 h-4" />
                  ) : c.id === "linkedin" ? (
                    <FaLinkedin className="w-4 h-4" />
                  ) : (
                    <FaGithub className="w-4 h-4" />
                  )}
                </div>
                <button
                  onClick={() => handleCopy(c.title, c.id)}
                  className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Copy"
                >
                  <FaCopy className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="font-display text-lg text-[var(--text-primary)] mb-0.5">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {c.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-primary)] hover:text-[var(--accent)]"
                >
                  <span>Visit</span>
                </a>
                {copied === c.id && (
                  <span className="text-sm text-[var(--accent)]">Copied!</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
