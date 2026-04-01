"use client";

import { useState } from "react";
import { MapPin, Mail, MoveUpRight, MoveRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white py-6 px-4 sm:px-6">
      <footer className="bg-black rounded-3xl px-6 sm:px-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">

          {/* CTA */}
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Get <span className="font-light italic">More Done</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg max-w-xl">
              Start organizing your tasks, collaborating with your team, and staying on top of deadlines all in one simple, powerful tool.
            </p>
            <button className="relative overflow-hidden bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base group flex items-center gap-2">
              <span className="absolute inset-0 bg-green-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Get Started</span>
              <span className="relative z-10 w-4 h-4">
                <MoveUpRight className="w-4 h-4 transition-all duration-300 group-hover:text-black group-hover:opacity-0 group-hover:translate-x-2" />
                <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0" />
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <img src="/nextgen.svg" alt="Nexgent Logo" className="w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
            <span className="text-5xl sm:text-8xl lg:text-[12rem] font-black text-white tracking-tight leading-none uppercase">Nexgent</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Footer Grid */}
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between">
            <div className="flex-none">
              <p className="text-white text-xl sm:text-2xl font-semibold">Join the 12,000+ businesses<br />using Nexgent</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Get in Touch</h3>
              <div className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                <span>123 Creative Street,<br />Innovation City, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a href="mailto:info@nexgent.com" className="hover:text-white transition">info@nexgent.com</a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full lg:max-w-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Subscribe to our Newsletter</h3>
              <p className="text-sm sm:text-base text-gray-400">Get productivity tips & insights straight to your inbox.</p>
              <div className="flex items-center gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-2.5 sm:py-3 text-sm text-white outline-none bg-transparent border border-gray-700 rounded-full placeholder-gray-600 min-w-0"
                />
                <button className="bg-white text-black text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-green-500 hover:text-black transition shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16">
            {["Features", "Benefits", "Pricing", "Comparison", "FAQ", "Changelog", "Style Guide", "License", "Password", "404"].map((l) => (
              <a key={l} href="#" className="text-sm sm:text-lg text-white hover:text-gray-400 transition">{l}</a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex items-center justify-center text-xs sm:text-base text-white text-center">
            <p>© 2026 Nexgent. All rights reserved. Designed by Olynex powered by Webflow</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
