"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Timer, Users, Link, PieChart, LayoutGrid } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const benefits = [
  {
    icon: <Rocket className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Get More Done, Faster",
    description: "Focus on the right tasks with clear priorities and real-time progress.",
  },
  {
    icon: <Brain className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Reduce Mental Overload",
    description: "Everything is organized in one place, so your team doesn't have to remember.",
  },
  {
    icon: <Timer className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Never Miss a Deadline",
    description: "Smart reminders and live status updates keep work moving on time.",
  },
  {
    icon: <Users className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Work Better as a Team",
    description: "Collaborate smoothly with comments, mentions, and shared task ownership.",
  },
  {
    icon: <Link className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Adapt to Any Workflow",
    description: "Customize boards, statuses, and processes to match how your team works.",
  },
  {
    icon: <PieChart className="w-[35px] h-[35px] text-white" />,
    bg: "bg-[#1CAF61]",
    title: "Make Smarter Decisions",
    description: "Track performance and productivity with clear insights and analytics.",
  },
];

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
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
            <p className="text-[#5D5D5D] text-lg leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
