import { Section, SectionHeader } from "../ui/Section";
import { skills } from "../../data/content";

export default function Skills() {
  return (
    <Section id="Skills" className="pb-32">
      <SectionHeader
        title="My Skills"
        subtitle="Technologies and tools I use"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((cat) => (
          <div
            key={cat.id}
            className="border border-[var(--border)]/10 rounded-2xl p-6 bg-[var(--surface)]"
          >
            <h3 className="font-display text-xl mb-4 text-[var(--text-primary)]">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1 border border-[var(--border)]/10 rounded-md bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
