"use client";

import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export function Banner11() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-main.jpg" alt="WELOX studio" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 text-center lg:px-10">
        <motion.p {...fade(0.1)} className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Digital Agency — Est. 2024
        </motion.p>
        <motion.h1
          {...fade(0.25)}
          className="mb-8 font-bold leading-[1.2] tracking-tight text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem,8vw,7rem)" }}
        >
          We build websites
          <br />
          <span className="text-[#c8a96e]">that perform.</span>
        </motion.h1>
        <motion.p {...fade(0.4)} className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-[#8a8683]">
          WELOX crafts digital experiences for ambitious brands — strategic, beautiful, and built to convert.
        </motion.p>
        <motion.div {...fade(0.55)} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/work"
            className="flex items-center gap-2 bg-[#c8a96e] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-all duration-200 hover:bg-[#e8d5a3]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            See our work <RxArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="border border-[#f0ede6]/30 px-8 py-4 text-sm font-semibold text-[#f0ede6] transition-all duration-200 hover:border-[#f0ede6]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Start a project
          </Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8a8683]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-8 w-px bg-gradient-to-b from-[#8a8683] to-transparent" />
      </motion.div>
    </section>
  );
}
