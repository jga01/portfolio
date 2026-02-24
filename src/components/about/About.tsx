"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8">
            A bit about me
          </h2>
        </SectionReveal>

        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
          <SectionReveal delay={0.2}>
            <p>
              I&apos;m a fullstack engineer based in Fortaleza, Brazil, currently
              pursuing a CS degree at Unifor. My work spans a pretty wide range
              — I&apos;ve built a 3D graphics engine from scratch in C, architected
              multi-tenant enterprise SaaS platforms, and shipped AI-powered
              agent systems to production.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <p>
              Right now I&apos;m building at{" "}
              <span className="text-neutral-200">Blis AI</span>, where I work
              across the full stack of a travel management platform — from .NET
              APIs to React frontends to Python multi-agent orchestration. I also
              co-founded{" "}
              <span className="text-neutral-200">HabilitAqui</span>, a driving
              instructor marketplace that I built end-to-end and shipped in 40
              days.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <p>
              I care about understanding things deeply. Whether it&apos;s writing GLSL
              shaders to learn how GPUs actually render, or diving into CQRS
              patterns to build maintainable enterprise systems — I&apos;d rather know
              how something works than just use it.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
