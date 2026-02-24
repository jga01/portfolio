"use client";

import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { ShaderBg } from "./ShaderBg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ShaderBg />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-accent-light mb-6"
        >
          Fullstack Engineer
        </motion.p>

        <TextReveal
          as="h1"
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-neutral-100 leading-[1.1]"
          delay={0.3}
          stagger={0.05}
        >
          Tiago Goossen
        </TextReveal>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6 max-w-xl mx-auto text-lg text-neutral-400 leading-relaxed"
        >
          Building production systems across the full stack — from 3D graphics
          engines in C to enterprise AI-powered SaaS platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 transition-colors"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-full text-sm font-medium hover:border-neutral-500 hover:text-neutral-100 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-neutral-600 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-neutral-500 rounded-full mt-1.5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
