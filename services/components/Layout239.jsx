"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const services = [
  {
    num: "01", title: "Web Design & Development",
    desc: "Custom-built websites engineered for speed, beauty, and conversion. From landing pages to full brand portals — every pixel intentional.",
    items: ["Custom UI/UX design", "React & Next.js development", "CMS integration", "Performance optimisation"],
  },
  {
    num: "02", title: "Brand Identity & Strategy",
    desc: "Visual systems that define your market presence. Logo, typography, colour, and tone — crafted into a cohesive identity that resonates.",
    items: ["Logo design", "Brand guidelines", "Typography systems", "Tone of voice"],
  },
  {
    num: "03", title: "Conversion Optimisation",
    desc: "Data-driven refinements that transform visitors into customers. We test, measure, and iterate until your site performs at its peak.",
    items: ["A/B testing", "Analytics setup", "UX audits", "Funnel optimisation"],
  },
  {
    num: "04", title: "Digital Strategy",
    desc: "Before we design, we think. Clear positioning, audience research, and competitive analysis shape every project we take on.",
    items: ["Market research", "Competitor analysis", "Content strategy", "SEO foundations"],
  },
];

export function Layout239() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 pt-32 pb-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          What we offer
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}>
          Services built for ambitious brands
        </motion.h1>

        <div className="flex flex-col gap-px bg-[#1e1e1e]">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group grid grid-cols-1 bg-[#0a0a0a] p-8 transition-colors duration-300 hover:bg-[#111111] lg:grid-cols-[80px_1fr_1fr] lg:gap-12 lg:p-10">
              <span className="mb-4 text-3xl font-bold text-[#1e1e1e] transition-colors group-hover:text-[#c8a96e] lg:mb-0"
                style={{ fontFamily: "Syne, sans-serif" }}>{s.num}</span>
              <div className="mb-6 lg:mb-0">
                <h3 className="mb-4 text-2xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#8a8683]">{s.desc}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#8a8683]">
                    <span className="h-px w-4 bg-[#c8a96e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
