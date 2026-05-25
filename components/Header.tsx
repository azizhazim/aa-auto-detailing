"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#extras", label: "Extras" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#booking", label: "Book Now" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-mist-200 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl lg:text-3xl font-display font-bold text-navy-800 tracking-wider">
            A&amp;A
          </span>
          <span className="text-xs lg:text-sm uppercase tracking-[0.25em] text-coral font-semibold border-l border-mist-300 pl-2">
            Auto Detailing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider font-semibold text-navy-800 hover:text-coral transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15122298145"
            className="flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-coral transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (512) 229-8145
          </a>
          <a href="#booking" className="btn-primary !py-2.5 !px-5 text-xs">
            Book Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-navy-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-mist-200 shadow-soft">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wider font-semibold text-navy-800 hover:text-coral py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+15122298145"
              className="flex items-center gap-2 text-base font-semibold text-coral py-2 border-t border-mist-200 mt-1 pt-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (512) 229-8145
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
