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

  // const iconFor = (type: string) => {
  //   if (type === "phone") return <HiOutlinePhone className="w-6 h-6" />;
  //   if (type === "email") return <HiOutlineMail className="w-6 h-6" />;
  //   if (type === "link") return <FaLinkedin className="w-6 h-6" />;
  //   return <FaGithub className="w-6 h-6" />;
  // };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="px-6 lg:px-24 xl:px-36 py-32 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          title="Get In Touch"
          subtitle="Choose the best way to reach out"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-2xl border-2 border-[var(--border)]/10 bg-[var(--bg-primary)] flex flex-col gap-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                  {c.type === "phone" ? (
                    <HiOutlinePhone className="w-6 h-6" />
                  ) : c.type === "email" ? (
                    <HiOutlineMail className="w-6 h-6" />
                  ) : c.id === "telegram" ? (
                    <FaTelegramPlane className="w-5 h-5" />
                  ) : c.id === "linkedin" ? (
                    <FaLinkedin className="w-5 h-5" />
                  ) : (
                    <FaGithub className="w-5 h-5" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(c.title, c.id)}
                    className="p-2 rounded-md border border-[var(--border)]/10 text-[var(--text-secondary)] hover:bg-[var(--surface)] transition-colors"
                    aria-label="Copy"
                  >
                    <FaCopy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl text-[var(--text-primary)] mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {c.subtitle}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--accent)]"
                >
                  <span>Open</span>
                </a>
                {copied === c.id && (
                  <span className="ml-3 text-sm text-[var(--accent)]">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
