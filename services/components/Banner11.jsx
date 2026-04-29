"use client";

import React from "react";

const words = [
  "Ambitious brands",
  "Pixel perfect",
  "Results driven",
  "Built to convert",
  "Excellence built",
  "Strategic design",
];

export function Banner11() {
  return (
    <section className="overflow-hidden border-y border-[#1e1e1e] bg-[#111111] py-5">
      <div className="flex w-max animate-marquee-left items-center">
        {[0, 1].map((set) =>
          words.map((w, i) => (
            <div
              key={`${set}-${i}`}
              className="flex shrink-0 items-center gap-6 px-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#8a8683]">
                {w}
              </span>
              <span className="text-[#2a2a2a]">◆</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
