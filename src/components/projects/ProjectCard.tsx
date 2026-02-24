"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { type Project } from "@/data/projects";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl border border-card-border bg-card overflow-hidden ${project.gridClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: hovered
            ? `radial-gradient(400px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(124, 58, 237, 0.1), transparent 40%)`
            : "none",
        }}
      />

      <Link
        href={`/projects/${project.slug}`}
        className="block p-6 md:p-8 h-full relative z-10"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-100">
                {project.title}
              </h3>
            </div>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neutral-600 group-hover:text-accent transition-colors mt-1 shrink-0"
              animate={hovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </motion.svg>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/50"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-500">
                +{project.tech.length - 6}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
