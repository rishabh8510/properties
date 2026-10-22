"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, Moon, Phone, Sun, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Featured Properties", href: "/" },
  { name: "Property Types", href: "/" },
  { name: "About Us", href: "/" },
  { name: "London Zones", href: "/" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.14v5.86h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    queueMicrotask(() => setDark(isDark));

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      // hysteresis: flicker nahi hoga threshold ke paas
      setScrolled((prev) => (prev ? y > 10 : y > 60));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Spacer: header fixed hai, isliye content ko neeche rakhne ke liye */}
      <div className="h-21 md:h-36" aria-hidden="true" />

      {/* Fixed header: sirf transform animate hota hai (GPU) => layout shift / lag nahi */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
          scrolled ? "md:-translate-y-15" : "translate-y-0"
        }`}
      >
        {/* TOP BAR */}
        <div className="hidden h-15 bg-[#1f3d36] text-white md:block">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-6 text-sm lg:gap-8">
              <a
                href="tel:+442012345678"
                className="flex items-center gap-2 transition hover:text-green-400"
              >
                <Phone size={16} className="text-green-400" />
                +44 (0) 20 1234 5678
              </a>
              <a
                href="mailto:info@hanifproperties.co.uk"
                className="flex items-center gap-2 transition hover:text-green-400"
              >
                <Mail size={16} className="text-green-400" />
                info@hanifproperties.co.uk
              </a>
              <span className="hidden text-gray-400 xl:block">
                | Premium Commercial Spaces Across London &amp; UK
              </span>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={toggleDark}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm transition hover:bg-white/10"
              >
                {dark ? <Sun size={14} className="text-amber-300" /> : <Moon size={14} fill="currentColor" />}
                {dark ? "Light" : "Dark"}
              </button>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-green-400">
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:text-green-400">
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div
          className={`border-b border-gray-100 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 ${
            scrolled ? "shadow-md dark:shadow-black/50" : "shadow-none"
          }`}
        >
          <div className="mx-auto flex h-21 max-w-7xl items-center justify-between px-5 sm:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-green-700 text-2xl font-bold text-white shadow-lg shadow-green-600/30 sm:h-13 sm:w-13">
                H
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-[#141b34] dark:text-white sm:text-[26px]">
                  HANIF <span className="text-green-600 dark:text-green-400">PROPERTIES</span>
                </span>
                <span className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 sm:text-xs">
                  London Commercial
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-slate-700 transition hover:text-green-600 dark:text-slate-200 dark:hover:text-green-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/"
              className="hidden items-center gap-2 rounded-sm bg-gradient-to-r from-green-600 to-green-700 px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-green-600/25 transition hover:from-green-700 hover:to-green-800 lg:inline-flex"
            >
              Inquire Now <ArrowUpRight size={17} />
            </Link>

            {/* Mobile dark toggle & menu toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {dark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} fill="currentColor" />}
                {dark ? "Light" : "Dark"}
              </button>

              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <nav className="border-t border-gray-100 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900 lg:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-gray-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-green-400"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white"
              >
                Inquire Now <ArrowRight size={18} />
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}