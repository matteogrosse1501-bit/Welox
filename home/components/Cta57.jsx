"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

const works = [
  { label: "E-Commerce", img: "/images/work-ecommerce.jpg", tag: "Brand & Web" },
  { label: "Fashion Brand", img: "/images/work-brand.jpg",    tag: "Identity & Design" },
  { label: "Fintech App",  img: "/images/work-fintech.jpg",   tag: "Product Design" },
  { label: "Real Estate",  img: "/images/work-realestate.jpg",tag: "Web & Strategy" },
];

export function Cta57() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.2] text-[#f0ede6]"
            style={{ fontFamily: "Syne, sans-serif" }}>
            Selected work
          </h2>
          <Link to="/work" className="flex items-center gap-2 text-sm font-semibold text-[#c8a96e] hover:text-[#e8d5a3] transition-colors"
            style={{ fontFamily: "Syne, sans-serif" }}>
            View all projects <RxArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {works.map((w, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-[#111111] aspect-[4/3] cursor-pointer"
            >
              <img src={w.img} alt={w.label}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#c8a96e]">{w.tag}</p>
                <h3 className="text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>{w.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
