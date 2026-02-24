"use client";

import { motion } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            About
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2 font-display">
            How I got here
          </h2>
          <motion.div
            className="h-px mb-8 bg-gradient-to-r from-accent via-accent/50 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </SectionReveal>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Photo */}
          <SectionReveal delay={0.15} direction="left">
            <div className="shrink-0 mx-auto md:mx-0">
              <motion.div
                className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-neutral-700"
                whileHover={{
                  borderColor: "rgba(229, 126, 58, 0.6)",
                  boxShadow: "0 0 30px rgba(229, 126, 58, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photo.jpeg"
                  alt="Tiago Goossen"
                  fill
                  className="object-cover"
                  sizes="160px"
                  priority
                />
              </motion.div>
            </div>
          </SectionReveal>

          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <SectionReveal delay={0.2}>
              <p>
                I started as an intern at Instituto Atlantico in 2022, working on .NET and Angular
                for enterprise clients. After being promoted to systems analyst, I contributed to
                architecture and feature development for large-scale applications.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p>
                Currently I&apos;m a fullstack developer at{" "}
                <span className="text-neutral-200">Blis AI</span> — an enterprise travel SaaS
                with multi-agent AI, .NET 8, Next.js, and LangGraph — and at{" "}
                <span className="text-neutral-200">Kortex</span>, a vehicle protection SaaS with
                database-per-tenant architecture, NestJS, and 30K+ boletos/month. Kortex is where
                I learned the most about building products end-to-end. I also co-founded{" "}
                <span className="text-neutral-200">Habilitaqui</span>, a driving instructor
                marketplace.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <p>
                I&apos;m pursuing my CS degree at Unifor. I care about understanding things
                deeply — which is why I built a 3D engine with raw OpenGL and an autonomous AI
                agent that handles tasks while I sleep.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
