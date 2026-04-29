"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  { title: "Luxe & Co",        tag: "E-Commerce & Branding",  img: "/images/work-ecommerce.jpg",  result: "+43% conversion rate" },
  { title: "Maison Editorial", tag: "Fashion Brand Identity",  img: "/images/work-brand.jpg",      result: "2× organic traffic" },
  { title: "Momentum Labs",    tag: "Fintech Product Design",  img: "/images/work-fintech.jpg",    result: "Raised Series A post-launch" },
  { title: "Archaus Group",    tag: "Real Estate & Web",       img: "/images/work-realestate.jpg", result: "89% lead-quality increase" },
];

export function Layout298() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 pt-32 pb-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Selected work
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}>
          Projects that move the needle
        </motion.h1>

        <div className="flex flex-col gap-px bg-[#1e1e1e]">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group grid grid-cols-1 bg-[#0a0a0a] transition-colors duration-300 hover:bg-[#111111] md:grid-cols-[2fr_1fr]">
              <div className="flex items-center gap-6 overflow-hidden p-6 lg:p-8">
                <div className="h-20 w-32 shrink-0 overflow-hidden">
                  <img src={p.img} alt={p.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#c8a96e]">{p.tag}</p>
                  <h3 className="text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{p.title}</h3>
                </div>
              </div>
              <div className="hidden items-center px-8 md:flex">
                <span className="text-sm text-[#8a8683]">{p.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
