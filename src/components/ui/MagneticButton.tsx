"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "a" | "button";
  [key: string]: unknown;
}

export function MagneticButton({
  children,
  className,
  strength = 6,
  as = "a",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: ((e.clientX - centerX) / rect.width) * strength,
      y: ((e.clientY - centerY) / rect.height) * strength,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const Component = motion[as] as typeof motion.a;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        className={className}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </Component>
    </motion.div>
  );
}
