"use client";

import { motion } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skills } from "@/data/projects";

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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
            Technologies I work with
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], catIndex) => (
            <SectionReveal key={category} delay={0.1 * catIndex}>
              <div className="rounded-2xl border border-card-border bg-card p-6 h-full">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(124, 58, 237, 0.15)",
                        borderColor: "rgba(124, 58, 237, 0.5)",
                      }}
                      className="text-sm px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700/50 transition-colors cursor-default"
                    >
                      {item}
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
