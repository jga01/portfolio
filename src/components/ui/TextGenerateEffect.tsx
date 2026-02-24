"use client";

import { motion } from "motion/react";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextGenerateEffect({
  text,
  className,
  delay = 0,
}: TextGenerateEffectProps) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wi) => {
        const wordStart = charIndex;
        charIndex += word.length + 1; // +1 for space

        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  delay: delay + (wordStart + ci) * 0.02,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span>{"\u00A0"}</span>}
          </span>
        );
      })}
    </span>
  );
}
