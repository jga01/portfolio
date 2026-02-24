"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { type Project } from "@/data/projects";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const rotateX = useSpring(0, { damping: 20, stiffness: 200 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 200 });

  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(229, 126, 58, 0.1), transparent 40%)`;
  const glare = useMotionTemplate`radial-gradient(300px circle at ${spotlightX}px ${spotlightY}px, rgba(255, 255, 255, 0.03), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -6);
    rotateY.set(((x - centerX) / centerX) * 6);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className={`${project.gridClass}`} style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group rounded-2xl border border-card-border bg-card overflow-hidden h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlight }}
        />

        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glare }}
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
    </div>
  );
}
