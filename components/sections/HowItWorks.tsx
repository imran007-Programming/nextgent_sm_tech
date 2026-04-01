"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import { steps } from "@/data/steps";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 text-center overflow-hidden">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6"
      >
        <Snowflake className="w-4 h-4" />
        How Its Work
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl font-black text-gray-900 max-w-3xl mx-auto leading-tight"
      >
        How it <span className="font-light italic">Works</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
      >
        Easily request designs, collaborate with our team, and get high-quality
        work fast.
      </motion.p>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {steps[0].title}
          </h3>
          <p className="text-[#5D5D5D] text-sm leading-relaxed mb-3">
            {steps[0].description}
          </p>
          <div className="relative overflow-hidden rounded-xl h-72 mt-3">
            <div className="translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out h-full ">
              <Image
                src="/file_attacments.svg"
                alt="File Attachments"
                width={300}
                height={288}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        {steps.slice(1).map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: (i + 1) * 0.15,
            }}
            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left overflow-hidden"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {step.title}
            </h3>
            <p className="text-[#5D5D5D] text-sm leading-relaxed mb-3">
              {step.description}
            </p>
            {i === 0 && (
              <div className="relative overflow-hidden rounded-xl h-64 mt-3">
                <div className="translate-x-[-30px] group-hover:translate-x-0 transition-transform duration-500 ease-out h-full">
                  <Image
                    src="/ui_animationwebp.webp"
                    alt="UI Animation"
                    width={300}
                    height={256}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>
            )}
            {i === 1 && (
              <div className="flex flex-col gap-2 mt-3">
                <div className="relative h-[150px] overflow-hidden rounded-xl">
                  <div className="translate-x-[-30px] group-hover:translate-x-0 transition-transform duration-500 ease-out h-full">
                    <Image
                      src="/webdesignwebp.webp"
                      alt="Web Design"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="relative h-[150px] overflow-hidden rounded-xl">
                  <div className="translate-x-[30px] group-hover:translate-x-0 transition-transform duration-500 ease-out h-full">
                    <Image
                      src="/research.webp"
                      alt="Research"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
