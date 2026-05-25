"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const navText = solid ? "text-navy-800" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-mist-200 bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold tracking-wider transition-colors lg:text-3xl ${navText}`}
          >
            A&amp;A
          </span>
          <span
            className={`border-l pl-2 text-xs font-semibold uppercase tracking-[0.25em] text-coral transition-colors lg:text-sm ${
              solid ? "border-mist-300" : "border-white/25"
            }`}
          >
            Auto Detailing
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-coral ${navText}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15122298145"
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-coral ${navText}`}
          >
            <PhoneIcon />
            (512) 229-8145
          </a>
          <a href="#booking" className="btn-primary !px-5 !py-2.5 text-xs">
            Book Now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`lg:hidden transition-colors ${navText}`}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-mist-200 bg-white shadow-soft lg:hidden">
          <nav className="flex flex-col gap-3 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold uppercase tracking-wider text-navy-800 transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="py-2 text-base font-semibold uppercase tracking-wider text-navy-800 transition-colors hover:text-coral"
            >
              Book Now
            </a>
            <div className="mt-1 grid grid-cols-2 gap-3 border-t border-mist-200 pt-4">
              <a
                href="sms:+15122298145"
                className="btn-secondary !px-4 !py-3 text-xs"
              >
                Text Us
              </a>
              <a
                href="tel:+15122298145"
                className="btn-primary !px-4 !py-3 text-xs"
              >
                Call Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
