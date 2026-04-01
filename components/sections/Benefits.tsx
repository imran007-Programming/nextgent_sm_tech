"use client";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { benefits } from "@/data/benefits";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Benefits() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6"
      >
        <LayoutGrid className="w-4 h-4" />
        Benefits
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl font-black text-gray-900 max-w-3xl mx-auto leading-tight"
      >
        Why Choose Us To{" "}<br />
        <span className="font-light italic">Grow Smarter</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
      >
        Unlock unmatched growth, efficiency, and innovation with our powerful Task solutions.
      </motion.p>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-left hover:shadow-md transition-shadow duration-300"
          >
            <div className={`w-13 h-13 rounded-xl ${benefit.bg} flex items-center justify-center mb-5`}>
              <benefit.icon className="w-[35px] h-[35px] text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
            <p className="text-[#5D5D5D] text-lg leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
