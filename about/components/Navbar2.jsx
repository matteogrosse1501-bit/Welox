"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Work",     to: "/work" },
  { label: "About",   to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#1e1e1e] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span
            style={{ fontFamily: "Syne, sans-serif" }}
            className="text-xl font-bold tracking-widest text-[#f0ede6] uppercase"
          >
            WELOX
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-[#c8a96e]"
                  : "text-[#8a8683] hover:text-[#f0ede6]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden rounded-none border border-[#c8a96e] px-5 py-2 text-sm font-semibold text-[#c8a96e] transition-all duration-200 hover:bg-[#c8a96e] hover:text-[#0a0a0a] lg:block"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Start a project
          </Link>
          <button
            className="flex flex-col gap-[5px] p-2 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-[#f0ede6]"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-[#f0ede6]"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-[#f0ede6]"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#1e1e1e] bg-[#0a0a0a]"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === l.to ? "text-[#c8a96e]" : "text-[#f0ede6]"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 border border-[#c8a96e] px-5 py-3 text-center text-sm font-semibold text-[#c8a96e]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
