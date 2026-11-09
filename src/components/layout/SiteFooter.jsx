"use client";

import React from "react";
import Link from "next/link";
import { Headphones } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer id="contact" className="mt-6 text-white w-full">
      {/* Upper Trust Bar */}
      <div className="bg-[#125622] px-5 py-3.5 border-t border-[#29753b]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Trust Item 1 */}
          <div className="flex items-center gap-2.5">
            <svg
              className="w-8 h-8 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div className="text-[12.5px] leading-tight">
              <span className="block font-semibold text-white/90">Trusted by</span>
              <span className="font-extrabold text-[13.5px]">1,00,000+ Customers</span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/25" />

          {/* Trust Item 2 */}
          <div className="flex items-center gap-2.5">
            <svg
              className="w-8 h-8 text-[#f4c542] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div className="text-[12.5px] leading-tight">
              <span className="block font-extrabold text-[13.5px]">4.8/5 Customer</span>
              <span className="font-semibold text-white/90">Rating</span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/25" />

          {/* Trust Item 3 */}
          <div className="flex items-center gap-2.5">
            <svg
              className="w-8 h-8 text-[#8ce268] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <div className="text-[12.5px] leading-tight">
              <span className="block font-extrabold text-[13.5px]">Eco-Friendly</span>
              <span className="font-semibold text-white/90">Solutions</span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/25" />

          {/* Trust Item 4 */}
          <div className="flex items-center gap-2.5">
            <Headphones className="w-7 h-7 text-white shrink-0" />
            <span className="font-extrabold text-[13.5px]">24/7 Support</span>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/25" />

          {/* Social Media Icons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-extrabold text-[16px] shadow-xs hover:opacity-90"
            >
              f
            </a>
            {/* YouTube */}
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-xs hover:opacity-90"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            {/* Google */}
            <a
              href="#google"
              aria-label="Google"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-extrabold text-[15px] text-[#4285F4] shadow-xs hover:opacity-90"
            >
              G
            </a>
            {/* LinkedIn */}
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white font-extrabold text-[13px] shadow-xs hover:opacity-90"
            >
              in
            </a>
          </div>
        </div>
      </div>

      {/* Lower Copyright Bar */}
      <div className="bg-[#0a3815] px-5 py-3 border-t border-white/10 text-[11.5px] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/90 font-medium">
          © 2026 Termite Professionals. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2 text-white/90 font-medium">
          <Link href="/#privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/#terms" className="hover:underline">
            Terms &amp; Conditions
          </Link>
          <span>|</span>
          <Link href="/#sitemap" className="hover:underline">
            Sitemap
          </Link>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <span className="font-bold italic text-white text-[12px] tracking-wide">
            Keep Your Property Safe, Always!
          </span>
          <svg className="w-32 h-2 text-[#f5b82e] mt-0.5" viewBox="0 0 120 8" fill="none">
            <path d="M2 6C35 1 85 1 118 6" stroke="#f5b82e" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

