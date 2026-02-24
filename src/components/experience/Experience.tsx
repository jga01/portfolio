"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { experiences, education } from "@/data/projects";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Experience
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
            Where I&apos;ve worked
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-neutral-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <SectionReveal key={i} delay={0.1 * i}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />

                  <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                    <p className="text-sm text-neutral-500 md:min-w-[140px] shrink-0 mb-1 md:mb-0">
                      {exp.period}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-accent mb-2">
                        {exp.company} &middot; {exp.location}
                      </p>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}

            {/* Education */}
            <SectionReveal delay={0.1 * experiences.length}>
              <div className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-neutral-600 -translate-x-[3.5px]" />
                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <p className="text-sm text-neutral-500 md:min-w-[140px] shrink-0 mb-1 md:mb-0">
                    {education.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {education.school} &middot; {education.location}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
