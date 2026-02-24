"use client";

import { motion } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skills, type Skill } from "@/data/projects";

function ProficiencyDot({ level }: { level: Skill["level"] }) {
  if (level === "daily") {
    return (
      <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1.5 shrink-0" />
    );
  }
  if (level === "frequent") {
    return (
      <span className="relative inline-block w-2 h-2 rounded-full border border-accent mr-1.5 shrink-0 overflow-hidden">
        <span className="absolute bottom-0 left-0 right-0 h-1/2 bg-accent" />
      </span>
    );
  }
  return (
    <span className="inline-block w-2 h-2 rounded-full border border-neutral-500 mr-1.5 shrink-0" />
  );
}

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Skills
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2 font-display">
            My toolkit
          </h2>
          <motion.div
            className="h-px mb-12 bg-gradient-to-r from-accent via-accent/50 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </SectionReveal>

        {/* Legend */}
        <SectionReveal delay={0.15}>
          <div className="flex items-center gap-6 mb-8 text-xs text-neutral-500">
            <span className="flex items-center">
              <ProficiencyDot level="daily" /> Daily driver
            </span>
            <span className="flex items-center">
              <ProficiencyDot level="frequent" /> Frequent
            </span>
            <span className="flex items-center">
              <ProficiencyDot level="familiar" /> Familiar
            </span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], catIndex) => (
            <SectionReveal key={category} delay={0.1 * catIndex}>
              <div className="rounded-2xl border border-card-border bg-card p-6 h-full">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(229, 126, 58, 0.15)",
                        borderColor: "rgba(229, 126, 58, 0.5)",
                      }}
                      className="flex items-center text-sm px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700/50 transition-colors cursor-default"
                    >
                      <ProficiencyDot level={skill.level} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
