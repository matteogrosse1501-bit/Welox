"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { RxArrowRight } from "react-icons/rx";

const fields = [
  { id: "name",    label: "Your name",    type: "text",  placeholder: "Jane Doe" },
  { id: "email",   label: "Email",        type: "email", placeholder: "jane@company.com" },
  { id: "company", label: "Company",      type: "text",  placeholder: "Your company" },
  { id: "budget",  label: "Project budget", type: "text", placeholder: "e.g. €5,000–€15,000" },
];

export function Cta58() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  return (
    <section ref={ref} className="px-6 pt-32 pb-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">Let's talk</p>
            <h1 className="mb-8 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] text-[#f0ede6]"
              style={{ fontFamily: "Syne, sans-serif" }}>
              Start your project
              <br /><span className="text-[#c8a96e]">Get in touch.</span>
            </h1>
            <p className="mb-12 max-w-sm text-lg leading-relaxed text-[#8a8683]">
              Share your vision and let's create something remarkable together. We respond within 24 hours.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Email",    val: "welox.team@gmail.com" },
                { label: "Response", val: "Within 24 hours" },
              ].map((i) => (
                <div key={i.label} className="flex gap-6 border-b border-[#1e1e1e] pb-4">
                  <span className="w-24 text-sm text-[#8a8683]">{i.label}</span>
                  <span className="text-sm text-[#f0ede6]">{i.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 border border-[#1e1e1e] p-12">
                <span className="text-4xl font-bold text-[#c8a96e]" style={{ fontFamily: "Syne, sans-serif" }}>✓</span>
                <h3 className="text-2xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>Message sent!</h3>
                <p className="text-sm text-[#8a8683]">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                {fields.map((f) => (
                  <div key={f.id} className="flex flex-col gap-2">
                    <label htmlFor={f.id} className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8683]">{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      className="border-b border-[#2a2a2a] bg-transparent pb-3 text-[#f0ede6] placeholder-[#3a3a3a] outline-none transition-colors focus:border-[#c8a96e]" />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8683]">Tell us about your project</label>
                  <textarea rows={4} placeholder="What are you building?"
                    className="border-b border-[#2a2a2a] bg-transparent pb-3 text-[#f0ede6] placeholder-[#3a3a3a] outline-none transition-colors focus:border-[#c8a96e] resize-none" />
                </div>
                <button type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 bg-[#c8a96e] py-4 text-sm font-semibold text-[#0a0a0a] transition-all duration-200 hover:bg-[#e8d5a3]"
                  style={{ fontFamily: "Syne, sans-serif" }}>
                  Send message <RxArrowRight className="size-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
