"use client";

import { motion } from "framer-motion";
import { Check, Tag, MoveUpRight, MoveRight, SquareCheckBig } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const plans = [
  {
    name: "Basic",
    desc: "One request at a time. Pause or cancel anytime.",
    price: "$19",
    highlight: false,
    features: [
      "Up to 3 projects",
      "Unlimited personal tasks",
      "Basic task boards",
      "Due dates & reminders",
      "Mobile app access",
    ],
  },
  {
    name: "Standard",
    desc: "One request at a time. Pause or cancel anytime.",
    price: "$49",
    highlight: true,
    features: [
      "Unlimited projects & tasks",
      "Team collaboration & comments",
      "Custom workflows & boards",
      "Real-time progress tracking",
      "200+ integrations",
    ],
  },
  {
    name: "Premium",
    desc: "One request at a time. Pause or cancel anytime.",
    price: "$99",
    highlight: false,
    features: [
      "Everything in Pro",
      "Advanced permissions & roles",
      "Automation & rules",
      "Advanced productivity analytics",
      "Team workload management",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6">
            <Tag className="w-4 h-4" />
            Pricing
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Flexible Pricing for <br />
            <span className="font-light italic">Every Teams</span>
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Choose the plan that fits your team's workflow. Start free and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-2xl p-10 flex flex-col gap-8 bg-white border-[3px] border-gray-100 shadow-sm hover:border-[#1CAF61] transition-colors duration-300 min-h-[580px]"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.desc}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                <span className="text-base mb-2 text-gray-500">/mo</span>
              </div>

              {plan.highlight ? (
                <button className="relative w-full py-4 rounded-xl font-semibold text-base text-white bg-black overflow-hidden group flex items-center justify-center gap-2">
                  <span className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-xl origin-bottom" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get Started</span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 w-4 h-4">
                    <MoveUpRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2" />
                    <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </button>
              ) : (
                <button className="relative w-full py-4 rounded-xl font-semibold text-base text-black bg-white border border-gray-200 overflow-hidden group flex items-center justify-center gap-2">
                  <span className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-xl origin-bottom" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 w-4 h-4">
                    <MoveUpRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2" />
                    <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </button>
              )}

              <div>
                <p className="text-sm font-semibold mb-4 text-gray-600">What's Included:</p>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <SquareCheckBig className="w-4 h-4 text-gray-600 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
