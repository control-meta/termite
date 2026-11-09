"use client";

import React from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";

export const BrandLogo = () => (
  <div className="flex items-center gap-2.5 select-none">
    <svg
      width="48"
      height="44"
      viewBox="0 0 64 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Green Base Line */}
      <path d="M6 52H58" stroke="#15652C" strokeWidth="3.5" strokeLinecap="round" />
      {/* Green Side Pillars */}
      <path d="M12 28V52" stroke="#15652C" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M52 28V52" stroke="#15652C" strokeWidth="3.5" strokeLinecap="round" />
      {/* Red Double Roof */}
      <path
        d="M4 29L32 5L60 29"
        stroke="#D32F2F"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 31L32 12L54 31"
        stroke="#15652C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Red Prohibition Circle */}
      <circle cx="32" cy="34" r="14" stroke="#D32F2F" strokeWidth="3.5" fill="#FFF" />
      {/* Termite Silhouette */}
      <ellipse cx="32" cy="38" rx="3.5" ry="5" fill="#7B3F00" />
      <circle cx="32" cy="31" r="2.8" fill="#5C2E00" />
      <circle cx="32" cy="27.5" r="2" fill="#3E1F00" />
      {/* Legs & Antennae */}
      <path
        d="M29 33L25 31M29 36L24 36M29 39L25 42M35 33L39 31M35 36L40 36M35 39L39 42M31 26L28 23M33 26L36 23"
        stroke="#5C2E00"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Red Slash */}
      <line x1="22" y1="24" x2="42" y2="44" stroke="#D32F2F" strokeWidth="3.5" />
    </svg>
    <div className="leading-[1.08] tracking-tight">
      <span className="block text-[21px] font-extrabold text-[#19672b]">
        Termite
      </span>
      <span className="block text-[21px] font-extrabold text-[#0e3f1a]">
        Professionals
      </span>
    </div>
  </div>
);

export default function SiteHeader({ active = "home" }) {
  const locations = [
    { name: "Bangalore", href: "/locations/bangalore" },
    { name: "Mumbai", href: "/locations/mumbai" },
    { name: "Pune", href: "/locations/pune" },
    { name: "Goa", href: "/locations/goa" },
    { name: "Delhi", href: "/locations/delhi" },
    { name: "Noida", href: "/locations/noida" },
  ];

  return (
    <header className="bg-white/95 px-4 sm:px-7 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-[#e5ede0] relative z-40">
      <Link href="/" className="hover:opacity-95 transition">
        <BrandLogo />
      </Link>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center gap-6 text-[14.5px] font-bold text-[#1b3b22]">
        <Link
          href="/"
          className={`py-1 transition-colors ${
            active === "home"
              ? "text-[#19672b] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#19672b] after:rounded-full"
              : "hover:text-[#19672b]"
          }`}
        >
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <a
            href="/#services"
            className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
              active === "services"
                ? "text-[#19672b] border-b-2 border-[#19672b]"
                : "hover:text-[#19672b]"
            }`}
          >
            <span>Services</span>
            <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
          <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-white rounded-lg shadow-xl border border-[#d3e5cf] py-2 z-50">
            <Link
              href="/services/pre-construction"
              className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
            >
              Pre-Construction Treatment
            </Link>
            <Link
              href="/services/post-construction"
              className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
            >
              Post-Construction Treatment
            </Link>
            <Link
              href="/services/residential"
              className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
            >
              Residential Termite Control
            </Link>
            <Link
              href="/services/commercial"
              className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
            >
              Commercial Termite Control
            </Link>
            <Link
              href="/services/amc"
              className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
            >
              Annual Maintenance Plan (AMC)
            </Link>
          </div>
        </div>

        {/* Locations Dropdown */}
        <div className="relative group">
          <a
            href="/#locations"
            className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
              active === "locations"
                ? "text-[#19672b] border-b-2 border-[#19672b]"
                : "hover:text-[#19672b]"
            }`}
          >
            <span>Locations</span>
            <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
          <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-lg shadow-xl border border-[#d3e5cf] py-2 z-50">
            {locations.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="block px-4 py-2 text-[12.5px] font-medium text-[#1a3a21] hover:bg-[#eef8eb] hover:text-[#186826] transition"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className={`py-1 transition-colors ${
            active === "about"
              ? "text-[#19672b] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#19672b] after:rounded-full"
              : "hover:text-[#19672b]"
          }`}
        >
          About Us
        </Link>
        <a
          href="/#reviews"
          className="py-1 transition-colors hover:text-[#19672b]"
        >
          Reviews
        </a>
        <a
          href="/#faq"
          className="py-1 transition-colors hover:text-[#19672b]"
        >
          FAQ
        </a>
        <Link
          href="/contact"
          className={`py-1 transition-colors ${
            active === "contact"
              ? "text-[#19672b] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#19672b] after:rounded-full"
              : "hover:text-[#19672b]"
          }`}
        >
          Contact Us
        </Link>
      </nav>

      {/* Right Action Pills */}
      <div className="flex items-center gap-2.5">
        <a
          href="tel:+919220312345"
          className="flex items-center gap-2 bg-[#125622] hover:bg-[#0c3e17] text-white text-[13.5px] sm:text-[14.5px] font-bold px-4 py-2 rounded-full shadow-sm transition"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>+91 92203 12345</span>
        </a>
        <a
          href="/#quote"
          className="bg-[#28a745] hover:bg-[#218838] text-white text-[13.5px] sm:text-[14px] font-bold px-4 py-2 rounded-full shadow-sm transition"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
