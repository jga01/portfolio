"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-12"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <SectionReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            {project.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-100 mb-4">
            {project.title}
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-8">
            <span>{project.role}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>{project.period}</span>
            {project.link && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Live site
                </a>
              </>
            )}
            {project.github && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  GitHub
                </a>
              </>
            )}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex flex-wrap gap-2 mb-16">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/50"
              >
                {t}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Content */}
        <div className="space-y-16">
          <SectionReveal>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
                The Problem
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
                The Solution
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </SectionReveal>

          {project.contributions && (
            <SectionReveal>
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
                  My Contributions
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {project.contributions}
                </p>
              </div>
            </SectionReveal>
          )}

          <SectionReveal>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>

        {/* Navigation to other projects */}
        <SectionReveal>
          <div className="mt-24 pt-12 border-t border-neutral-800">
            <p className="text-sm text-neutral-500 mb-6">Other projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group rounded-xl border border-card-border bg-card p-6 hover:border-accent/30 transition-colors"
                  >
                    <p className="text-xs uppercase tracking-widest text-accent mb-1">
                      {p.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
