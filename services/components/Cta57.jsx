"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

export function Cta57() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#1e1e1e] bg-[#0a0a0a] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">Ready?</p>
            <h2 className="max-w-2xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.2] text-[#f0ede6]"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Let's build something
              <br />
              <span className="text-[#c8a96e]">remarkable.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4">
            <p className="max-w-xs text-sm leading-relaxed text-[#8a8683]">
              Tell us about your vision. We'll turn it into a website that converts visitors into loyal customers.
            </p>
            <Link to="/contact"
              className="flex w-fit items-center gap-2 bg-[#c8a96e] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-all duration-200 hover:bg-[#e8d5a3]"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Start a project <RxArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

