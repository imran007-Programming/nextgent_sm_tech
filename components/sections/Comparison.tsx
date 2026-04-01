"use client";

import { motion } from "framer-motion";
import { GitCompare, SquareCheckBig, FileX } from "lucide-react";
import Image from "next/image";
import { painPoints, nexgentFeatures } from "@/data/comparison";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Comparison() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6">
            <GitCompare className="w-4 h-4" />
            Comparison
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Why Choose <span className="font-light italic">Nexgent</span>
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            See how our smart task management platform compares with
            spreadsheets, basic to-do apps, and tools.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-52 items-start max-w-4xl mx-auto">
          {/* VS divider */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-8 z-10">
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-2 px-6 py-2 rounded-2xl bg-black text-white text-2xl font-md flex items-center justify-center shrink-0"
              >
                vs
              </motion.span>
              <div className="flex items-start gap-2">
                <Image
                  src="/rightcurved.svg"
                  alt="left curve"
                  width={96}
                  height={40}
                />
                <div className="w-9 -mx-4" />
                <Image
                  src="/left-curved.svg"
                  alt="right curve"
                  width={96}
                  height={40}
                />
              </div>
            </div>
          </div>
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-gray-100 shadow-sm p-8"
          >
            <div className="w-full h-40 rounded-xl bg-[#F7F7F7] flex items-center justify-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Other Platforms
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-500 text-base"
                >
                  <FileX className="w-5 h-5 text-black shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="rounded-2xl border border-[#1CAF61]/30 shadow-sm p-8 bg-white overflow-hidden"
          >
            <div className="w-full h-40 relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/hero.webp"
                alt="Nexgent"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Image
                  src="/nextgen.svg"
                  alt="Nexgent Logo"
                  width={36}
                  height={36}
                  className="mr-2"
                />
                <span className="text-white font-bold text-xl">Nexgent</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {nexgentFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 text-base"
                >
                  <SquareCheckBig className="w-5 h-5 text-black shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
