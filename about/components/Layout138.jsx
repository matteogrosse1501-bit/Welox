"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function Layout138() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden pt-16">
      {/* Studio image full-bleed */}
      <div className="relative h-[70vh] w-full">
        <img src="/images/about-studio.jpg" alt="WELOX studio" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Text overlapping image bottom */}
      <div className="relative z-10 -mt-32 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
            Our story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.2] text-[#f0ede6]"
            style={{ fontFamily: "Syne, sans-serif" }}>
            Built for brands that demand more
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl text-lg leading-relaxed text-[#8a8683]">
            WELOX started with a simple observation. Most websites fail because they prioritise aesthetics over results.
            We built WELOX to change that — creating digital experiences that look remarkable and drive measurable outcomes for ambitious brands.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
