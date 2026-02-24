"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { experiences, education } from "@/data/projects";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const beamHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6" ref={sectionRef}>
      <div className="mx-auto max-w-4xl">
        <div className="sticky top-20 z-10 bg-background/80 backdrop-blur-sm pb-4 -mx-6 px-6">
          <SectionReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Experience
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 font-display">
              Where I&apos;ve worked
            </h2>
            <motion.div
              className="h-px mt-4 bg-gradient-to-r from-accent via-accent/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </SectionReveal>
        </div>

        <div className="relative mt-12">
          {/* Static timeline track */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-neutral-800" />

          {/* Animated scroll beam */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-accent via-accent to-transparent origin-top"
            style={{ height: beamHeight }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <SectionReveal key={i} delay={0.1 * i}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot with glow */}
                  <motion.div
                    className="absolute left-0 md:left-8 top-1.5 -translate-x-[5px]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/30"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: 2.5, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>

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
                <motion.div
                  className="absolute left-0 md:left-8 top-1.5 -translate-x-[5px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                </motion.div>
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
