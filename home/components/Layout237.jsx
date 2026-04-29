"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

const services = [
  { num: "01", title: "Webdesign that converts", desc: "Custom-built sites engineered for performance and measurable user engagement." },
  { num: "02", title: "Brand identity & positioning", desc: "Visual systems that define your market presence and resonate deeply with your audience." },
  { num: "03", title: "Optimisation & strategy", desc: "Data-driven refinements that improve conversion rates and user behaviour over time." },
];

export function Layout237() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#1e1e1e] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          What we do
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}>
          Built for brands that demand more
        </motion.h2>

        <div className="grid grid-cols-1 divide-y divide-[#1e1e1e] md:grid-cols-3 md:divide-x md:divide-y-0">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group flex flex-col gap-4 py-10 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0">
              <span className="text-4xl font-bold text-[#1e1e1e] transition-colors duration-300 group-hover:text-[#c8a96e]"
                style={{ fontFamily: "Syne, sans-serif" }}>{s.num}</span>
              <h3 className="text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#8a8683]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-12">
          <Link to="/services" className="flex w-fit items-center gap-2 border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-[#f0ede6] transition-all duration-200 hover:border-[#c8a96e] hover:text-[#c8a96e]"
            style={{ fontFamily: "Syne, sans-serif" }}>
            All services <RxArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
