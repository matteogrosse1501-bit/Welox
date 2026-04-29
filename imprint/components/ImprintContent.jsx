"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function ImprintContent() {
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
          Imprint
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-12"
        >
          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              Provider / Operator
            </h2>
            <div className="flex flex-col gap-1 text-sm leading-relaxed text-[#8a8683]">
              <p>Benjamin Kriener (sole proprietorship)</p>
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
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              Project / Brand
            </h2>
            <p className="text-sm leading-relaxed text-[#8a8683]">
              Angel WebAI (a project of the sole proprietorship Benjamin Kriener)
            </p>
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              UID
            </h2>
            <p className="text-sm leading-relaxed text-[#8a8683]">CHE-243.969.749</p>
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-[#8a8683]">
              The contents of this website have been created with the greatest possible care. However, we do not
              guarantee the accuracy, completeness, or timeliness of the information provided. To the extent
              permitted by law, liability claims for material or immaterial damages arising from access to, use or
              non-use of the published information, misuse of the connection, or technical faults are excluded.
            </p>
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              Liability for Links
            </h2>
            <p className="text-sm leading-relaxed text-[#8a8683]">
              This website may contain links to external third-party websites. We have no influence over their
              content. The respective provider or operator of the linked pages is always responsible for their
              content.
            </p>
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <h2 className="mb-6 text-xl font-bold text-[#f0ede6]" style={{ fontFamily: "Syne, sans-serif" }}>
              Copyright
            </h2>
            <p className="text-sm leading-relaxed text-[#8a8683]">
              The content and works on this website are subject to copyright law. Any use beyond the limits of
              copyright law requires the prior written consent of the rights holder.
            </p>
          </div>

          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="text-xs text-[#3a3a3a]">Status: February 12, 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
