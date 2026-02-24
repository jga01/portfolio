"use client";

import { motion } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Projects
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2 font-display">
            Selected work
          </h2>
          <motion.div
            className="h-px mb-12 bg-gradient-to-r from-accent via-accent/50 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
