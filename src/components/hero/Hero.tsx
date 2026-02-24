"use client";

import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ShaderBg } from "./ShaderBg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ShaderBg />

      {/* Gradient fade at bottom — warm background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-accent-light mb-6"
        >
          Fullstack Engineer
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight text-neutral-100 leading-[0.9] font-display"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Tiago
          <br />
          Goossen
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 max-w-xl mx-auto"
        >
          <TextGenerateEffect
            text="I ship fullstack products — multi-tenant SaaS, AI agent systems, and marketplaces built end-to-end."
            className="text-lg text-neutral-400 leading-relaxed"
            delay={1.2}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 transition-colors inline-block"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-full text-sm font-medium hover:border-neutral-500 hover:text-neutral-100 transition-colors inline-block"
          >
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
