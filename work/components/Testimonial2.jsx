"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const quotes = [
  { quote: "WELOX didn't just build us a website. They built us a revenue engine. Our conversion rate jumped 43% in the first quarter.", name: "Sarah Mitchell", role: "Founder, Luxe & Co" },
  { quote: "The process was seamless. They understood our vision immediately and delivered something that exceeded every expectation. Premium work, premium results.", name: "James Chen", role: "CEO, Momentum Labs" },
];

export function Testimonial2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#1e1e1e] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="mb-16 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Client voices
        </motion.p>
        <div className="grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col justify-between gap-10 bg-[#0a0a0a] p-10">
              <blockquote className="text-xl font-medium leading-relaxed text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
                "{q.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-[#f0ede6]">{q.name}</p>
                <p className="text-sm text-[#8a8683]">{q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
