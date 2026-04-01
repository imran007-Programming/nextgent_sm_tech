"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { MoveUpRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const dashboardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end end"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rotateX = useSpring(rawRotateX, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  return (
    <section
      className="relative flex flex-col items-center text-white px-6 text-center"
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-2 mt-8 pt-24 px-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-base text-white/80 mb-6">
            <span className="flex gap-0.5 text-yellow-400 text-base">
              ★★★★★
            </span>
            <span className="font-bold text-xs sm:text-lg">
              10k Reviews · Rated 4.9 of 5
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight max-w-5xl">
            <span className="whitespace-normal sm:whitespace-nowrap">
              Take Control of{" "}
              <span className="italic font-light">Your Projects</span>
            </span>
            <br />
            With <span className="text-white">Nexgent</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-lg lg:text-xl text-white/65 leading-relaxed px-2">
            A smart task management platform that helps teams and individuals
            plan, prioritize, and complete work faster without stress.
          </p>

          <button className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-2xl overflow-hidden px-7 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold bg-green-500 text-black group">
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Get Template
            </span>
            <span className="relative z-10 w-4 h-4">
              <MoveUpRight className="w-4 h-4 transition-all duration-500 group-hover:text-black group-hover:opacity-0 group-hover:translate-x-2" />
              <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-500 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          ref={dashboardRef}
          className="relative z-80 w-[95vw] sm:w-[80vw] mt-4 mb-[-28vw]"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          <motion.div
            style={{
              rotateX,
              scale,
              opacity,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src="/dashboard.png"
              alt="Dashboard"
              width={1600}
              height={1119}
              className="w-full mx-auto rounded-2xl shadow-2xl"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
