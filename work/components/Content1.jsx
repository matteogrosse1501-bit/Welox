"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery",  desc: "We listen. We ask the right questions about your brand, audience, and goals to define a clear brief." },
  { num: "02", title: "Strategy",   desc: "Research and insights shape a clear direction for design, messaging, and functionality." },
  { num: "03", title: "Design",     desc: "Every pixel serves a purpose — balancing visual impact with user experience and conversion." },
  { num: "04", title: "Launch",     desc: "Your website goes live, optimised, tested, and ready to perform from day one." },
];

export function Content1() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#1e1e1e] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Our process
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}>
          How we build your website
        </motion.h2>

        <div className="grid grid-cols-1 gap-px bg-[#1e1e1e] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              style={{ overflow: "visible" }}
              className="group flex flex-col gap-6 bg-[#0a0a0a] p-8 transition-colors duration-300 hover:bg-[#111111]">
              <span className="text-5xl font-bold text-[#1e1e1e] transition-colors group-hover:text-[#c8a96e]"
                style={{ fontFamily: "Syne, sans-serif" }}>{s.num}</span>
              <div className="overflow-visible">
                <h3 className="mb-3 pb-1 text-lg font-bold leading-normal text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#8a8683]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
