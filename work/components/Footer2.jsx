"use client";

import React from "react";
import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const nav = [
  { label: "Home",     to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work",     to: "/work" },
  { label: "About",    to: "/about" },
  { label: "Contact",  to: "/contact" },
];

export function Footer2() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a] px-6 pt-16 pb-10 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <span className="mb-4 block text-2xl font-bold tracking-widest text-[#f0ede6]"
              style={{ fontFamily: "Syne, sans-serif" }}>
              WELOX
            </span>
            <p className="text-sm leading-relaxed text-[#8a8683]">
              A digital agency building websites that perform — for brands that refuse to settle.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a96e]">Explore</p>
              <ul className="flex flex-col gap-3">
                {nav.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-[#8a8683] transition-colors hover:text-[#f0ede6]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a96e]">Connect</p>
              <ul className="flex flex-col gap-3">
                {["Instagram", "LinkedIn", "Twitter / X", "Dribbble"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-sm text-[#8a8683] transition-colors hover:text-[#f0ede6]">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a96e]">Rights</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/imprint" className="text-sm text-[#8a8683] transition-colors hover:text-[#f0ede6]">Imprint</Link>
                </li>
                <li>
                  <Link to="/data-protection" className="text-sm text-[#8a8683] transition-colors hover:text-[#f0ede6]">Data Protection</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-[#1e1e1e] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-[#8a8683]">© 2024 WELOX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#8a8683] transition-colors hover:text-[#c8a96e]"><BiLogoInstagram className="size-5" /></a>
            <a href="#" className="text-[#8a8683] transition-colors hover:text-[#c8a96e]"><FaXTwitter className="size-5" /></a>
            <a href="#" className="text-[#8a8683] transition-colors hover:text-[#c8a96e]"><BiLogoLinkedinSquare className="size-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
