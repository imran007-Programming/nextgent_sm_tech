"use client";

import { motion } from "framer-motion";

export default function JoinButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="https://webflow.com/templates/designers/olynex-agency"
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden px-8 py-3 text-base font-semibold text-black bg-white ${className}`}
    >
      <motion.span
        variants={{
          rest: { x: "100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ backgroundColor: "#1CAF62" }}
      />
      <span className="relative z-10">Join Now</span>
    </motion.a>
  );
}
