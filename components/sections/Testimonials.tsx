"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/data/reviews";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left w-full"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6 mx-auto lg:mx-0">
            <MessageSquareQuote className="w-4 h-4" />
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            What Our <br />
            <span className="font-light italic">Users Say</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-md">
            Real stories from teams using Taskboard to stay organized,
            collaborate better, and deliver work on time.
          </p>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <div className="relative w-40 h-40 sm:w-60 sm:h-60 shrink-0">
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 240 240"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 120,120 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  />
                </defs>
                <text style={{ fontSize: "19px", fill: "#0F0F0F" }}>
                  <textPath href="#circle" startOffset="0%">
                    over 1000 of the world - over 1000 of the world -over 1000
                    of the world - over 1000 of the world
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-7.5 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  fill
                  src="/quota.svg"
                  alt="Quote"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="bg-[#FFFFFF] border-[3px] border-gray-100 rounded-2xl p-5 sm:p-8 flex flex-col gap-6 min-h-[320px] sm:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-gray-600 text-xl font-bold leading-relaxed flex-1"
              >
                "{reviews[current].text}"
              </motion.p>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "user"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/people.svg"
                    alt="People"
                    className="h-14 w-14 object-contain shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {reviews[current].name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {reviews[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-0 border border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={prev}
                  className="px-3 py-2 flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <span className="px-3 text-sm text-gray-600 border-x border-gray-200">
                  {current + 1}/{reviews.length}
                </span>
                <button
                  onClick={next}
                  className="px-3 py-2 flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
