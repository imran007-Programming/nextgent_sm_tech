"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Trusted() {
  return (
    <div className="overflow-hidden">
      {/* Trusted Section */}
      <section className="bg-white pt-[28vw] pb-20 px-6 text-center relative z-0 overflow-hidden">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-black text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 mt-10 whitespace-nowrap"
        >
          Trusted by teams at over 1,000 of the world
        </motion.p>

        {/* Logo Grid */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-xs sm:max-w-none mx-auto">
          {[
            "/logoipsum1.svg",
            "/ipsum2.svg",
            "/ipsum3.svg",
            "/ipsum4.svg",
            "/ipsum5.svg",
          ].map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
              className="w-[28%] sm:w-auto"
            >
              <Image
                src={src}
                alt="logo"
                width={200}
                height={72}
                className="grayscale hover:grayscale-0 transition w-full sm:w-[200px]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
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
          Powerful Features
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 max-w-3xl mx-auto leading-tight"
        >
          Power Up Your Projects
          <br />
          With <span className="text-black font-light italic">Nexgent</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          Simplify planning, enhance collaboration, and increase
          <br />
          productivity with Nexgent.
        </motion.p>
      </section>

      {/* Feature Grids */}
      <section className="bg-white pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          {/* Row 1: 50/50 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full sm:w-1/2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[260px] shadow-sm"
            >
              <h3 className="text-xl sm:text-3xl font-medium text-gray-900 mb-3">
              </h3>
              <p className="text-[#5D5D5D] text-sm sm:text-lg leading-relaxed">
                <br />
                priorities, and labels for better productivity.
              </p>
              <div className="mt-6 relative w-[85%] mx-auto overflow-hidden p-4">
                <Image
                  src="/1st grid.webp"
                  alt="Smart Task Management"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-out hover:rotate-[5deg]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="w-full sm:w-1/2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[260px] shadow-sm group"
              whileHover="hovered"
            >
              <div className="relative w-[55%] mx-auto p-4">
                <Image
                  src="/1st.webp"
                  alt="Grid 2"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
                <div className="absolute inset-0 flex gap-3 p-4 items-center justify-center group">
                  <motion.div
                    className="flex flex-col gap-3 w-1/2"
                    variants={{
                      hidden: { x: -65, y: -70 },
                      visible: { x: -65, y: -70 },
                      hovered: { x: -45, y: -70 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ zIndex: 999 }}
                  >
                    <Image
                      src="/completed.svg"
                      alt="Complete"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                    <Image
                      src="/remaining.svg"
                      alt="Remaining"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                      style={{ position: "relative", left: "-15px" }}
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col gap-3 w-1/2"
                    variants={{
                      hidden: { x: 65, y: -70 },
                      visible: { x: 65, y: -70 },
                      hovered: { x: 45, y: -70 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ zIndex: 999 }}
                  >
                    <Image
                      src="/process.svg"
                      alt="Process"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                    <Image
                      src="/newtask.svg"
                      alt="New Task"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-3xl font-medium text-gray-900 mb-3 mt-6">
                Calendar & Deadlines
              </h3>
              <p className="text-[#5D5D5D] text-lg leading-relaxed">
                Visualize deadlines with calendar and timeline views
                <br />
                for clearer planning and time management.
              </p>
            </motion.div>
          </div>
          {/* Row 2: 60/40 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full sm:w-[75%] bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 max-h-none sm:max-h-[460px] shadow-sm overflow-hidden group/collab"
            >
              <h3 className="text-3xl font-medium text-gray-900 mb-3">
                Team Collaboration
              </h3>
              <p className="text-[#5D5D5D] text-lg leading-relaxed">
                Comment, tag teammates, share files, and stay aligned
                <br />
                in real time across tasks.
              </p>
              <div className="mt-6 relative flex items-end justify-center gap-4 translate-y-8">
                <Image
                  src="/3rd.webp"
                  alt="3rd"
                  width={380}
                  height={600}
                  className="rounded-xl object-cover h-[250px] w-[30%] translate-x-4"
                />
                <Image
                  src="/2nd.webp"
                  alt="2nd"
                  width={420}
                  height={720}
                  className="rounded-xl object-cover h-[300px] translate-x-10 group-hover/collab:-translate-y-[30px] transition-transform duration-500 ease-out"
                />
                <Image
                  src="/4th.webp"
                  alt="4th"
                  width={380}
                  height={600}
                  className="rounded-xl object-cover h-[250px] translate-x-16"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-500 group-hover/collab:opacity-40" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="w-full sm:w-[40%] bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[260px] shadow-sm overflow-hidden flex flex-col justify-between"
              whileHover="hovered"
            >
              <div className="mt-6 flex flex-col items-center gap-3 px-8">
                <motion.div
                  className="w-full"
                  variants={{ hidden: { x: -40 }, visible: { x: -40 }, hovered: { x: 0 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image src="/projectmanage.svg" alt="Project Manage" width={220} height={120} className="w-full rounded-xl object-cover" />
                </motion.div>
                <Image src="/inprogress.webp" alt="In Progress" width={220} height={120} className="w-full rounded-xl object-cover" />
                <motion.div
                  className="w-full"
                  variants={{ hidden: { x: 40 }, visible: { x: 40 }, hovered: { x: 0 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image src="/projectmanage (2).svg" alt="Project Manage 2" width={220} height={120} className="w-full rounded-xl object-cover" />
                </motion.div>
              </div>
              <div className="mt-6">
                <h3 className="text-3xl font-medium text-gray-900 mb-3">Smart Notifications</h3>
                <p className="text-[#5D5D5D] text-lg leading-relaxed">Never miss a task with real-time reminders and alerts that keep you on schedule.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
