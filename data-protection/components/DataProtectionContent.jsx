"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const sections = [
  {
    num: "1.",
    title: "Controller",
    content: (
      <div className="flex flex-col gap-1 text-sm leading-relaxed text-[#8a8683]">
        <p>The controller responsible for data processing on this website is:</p>
        <p className="mt-2">Benjamin Kriener (sole proprietorship)</p>
        <p>Fabrikstrasse 1</p>
        <p>8820 Wädenswil</p>
        <p>Switzerland</p>
        <a
          href="mailto:welox.team@gmail.com"
          className="mt-2 w-fit text-[#c8a96e] transition-colors hover:text-[#e8d5a3]"
        >
          welox.team@gmail.com
        </a>
      </div>
    ),
  },
  {
    num: "2.",
    title: "Collection and Storage of Personal Data",
    body: "When visiting our website, information is automatically collected via server logs (IP address, date, time, browser type). This data cannot be assigned to specific individuals. This data is not merged with other data sources.",
  },
  {
    num: "3.",
    title: "Contact Form",
    body: "If you send us inquiries via the contact form, your details from the form, including the contact data you provide, will be stored for the purpose of processing the request and for possible follow-up questions.",
  },
  {
    num: "4.",
    title: "Cookies",
    body: "Our website uses cookies. Cookies are small text files stored on your device. You can control the use of cookies via your browser settings or via our cookie banner.",
  },
  {
    num: "5.",
    title: "Analytics Tools",
    body: "We use Vercel Analytics for anonymous analysis of website usage. No personal data is collected.",
  },
  {
    num: "6.",
    title: "Your Rights",
    body: "You have the right to access, rectification, deletion, restriction of processing, data portability, and objection.",
  },
];

export function DataProtectionContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 pt-32 pb-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]"
        >
          Legal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] text-[#f0ede6]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Data Protection
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-12"
        >
          {sections.map((s, i) => (
            <div key={i} className="border-t border-[#1e1e1e] pt-10">
              <h2
                className="mb-6 text-xl font-bold text-[#f0ede6]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {s.num} {s.title}
              </h2>
              {s.content ?? (
                <p className="text-sm leading-relaxed text-[#8a8683]">{s.body}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
