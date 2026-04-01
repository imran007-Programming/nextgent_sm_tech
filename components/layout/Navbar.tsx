"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import JoinButton from "./JoinButton";

const links = ["Features", "Benefits", "Pricing", "Comparison", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="absolute w-full z-50 bg-transparent pt-4"
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/nextgen.svg" alt="Nextgen Logo" width={32} height={32} priority />
          <span className="text-white text-xl font-extrabold tracking-tight">Nextgen</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white text-base font-medium hover:opacity-75 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Now Button */}
        <JoinButton className="hidden md:inline-flex" />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white text-sm font-medium hover:opacity-75 transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <JoinButton className="mt-2 w-full" />
        </div>
      )}
    </motion.nav>
  );
}
