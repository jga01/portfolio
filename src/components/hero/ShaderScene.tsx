"use client";

import { Canvas } from "@react-three/fiber";
import { ShaderGradient } from "@/components/three/ShaderGradient";
import { PerformanceMonitor } from "@react-three/drei";
import { useState } from "react";

export function ShaderScene() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      dpr={dpr}
      frameloop="always"
      camera={{ position: [0, 0, 1] }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: false, alpha: false }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(1.5)}
      >
        <ShaderGradient />
      </PerformanceMonitor>
    </Canvas>
  );
}
