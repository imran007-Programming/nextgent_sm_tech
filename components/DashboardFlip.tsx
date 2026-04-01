"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function DashboardFlip() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 0%" }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformOrigin: "50% 0%",
          willChange: "transform",
        }}
        className="w-[70vw] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={1600}
          height={1119}
          className="w-full h-auto rounded-2xl"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
