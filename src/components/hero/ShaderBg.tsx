"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(
  () =>
    import("./ShaderScene").then((mod) => mod.ShaderScene),
  { ssr: false }
);

export function ShaderBg() {
  return (
    <div className="absolute inset-0 z-0">
      <Scene />
    </div>
  );
}
