"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const steps = [
  { phase: "2–4 Days",  title: "Discovery & Strategy",  desc: "Clarify goals, brand direction, structure, and key features." },
  { phase: "4–7 Days",  title: "Design",                desc: "High-fidelity mockups, design system creation, and iterative reviews until every detail is perfect." },
  { phase: "5–10 Days", title: "Development",           desc: "Build, animations, responsiveness, and integrations." },
  { phase: "2–3 Days",  title: "Launch & Handover",     desc: "Testing, optimization, deployment, and documentation." },
];

export function Timeline10() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#1e1e1e] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Timeline
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}>
          From brief to live in days
        </motion.h2>

        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#1e1e1e] lg:left-[120px]" />

          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="relative grid grid-cols-1 gap-4 py-10 pl-16 lg:grid-cols-[120px_1fr] lg:gap-12 lg:pl-0">
              <div className="lg:text-right">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a96e]">{s.phase}</span>
              </div>
              <div className="relative">
                {/* dot */}
                <div className="absolute -left-[49px] top-1 h-3 w-3 rounded-full border-2 border-[#c8a96e] bg-[#0a0a0a] lg:-left-[49px]" />
                <h3 className="mb-2 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#8a8683]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
