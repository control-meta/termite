"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  User,
  Home,
  MapPin,
  Headphones,
  Award,
  Leaf,
} from "lucide-react";

export { default as SiteHeader, BrandLogo } from "@/components/layout/SiteHeader";
export { default as SiteFooter } from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/* Unified ServiceNavbar and Footers mapped directly to Homepage Header and Footer */
export const ServiceNavbar = SiteHeader;
export const CompactTrustWaveFooter = SiteFooter;

/* ==========================================================================
   SHARED LOGOS, ICONS & REUSABLE UI PRIMITIVES
   ========================================================================== */

export const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.25-5.01-4.45-.15-.2-1.2-1.59-1.2-3.04 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.49.22.57.35.07.12.07.72-.17 1.4z" />
  </svg>
);

/* TermiteProLogo re-export mapped to BrandLogo for consistency */
export const TermiteProLogo = () => (
  <div className="flex items-center gap-2.5 select-none">
    <svg width="44" height="42" viewBox="0 0 56 54" fill="none">
      <path d="M6 25L28 5L50 25" stroke="#2b9329" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M11 23V48H45V23" fill="#46af35" stroke="#186826" strokeWidth="2.5" />
      <rect x="17" y="28" width="9" height="10" fill="#fff" rx="1" />
      <rect x="30" y="28" width="9" height="18" fill="#186826" rx="1" />
      <circle cx="38" cy="18" r="9" fill="#d9fbe0" stroke="#186826" strokeWidth="2" />
      <path d="M35 18l2 2 4-4" stroke="#186826" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
    <div className="leading-[1.06]">
      <span className="block text-[19px] font-extrabold text-[#165825]">Termite</span>
      <span className="block text-[19px] font-extrabold text-[#0f3d19]">Professionals</span>
    </div>
  </div>
);

export const AtoZPestLogo = TermiteProLogo;

/* Reusable Hero Right Inspection / Quote Form Card */
export const HeroQuoteForm = ({
  title = "Get a Free Inspection",
  thirdFieldPlaceholder = "Property Type",
  thirdFieldIcon = "home",
}) => (
  <div className="w-full max-w-[300px] rounded-xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.14)] border border-[#cfe2c9]">
    <div className="bg-[#146326] text-white text-center font-extrabold text-[16.5px] py-2.5 px-4">
      {title}
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="p-3.5 space-y-2.5">
      <div className="flex items-center gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
        <User className="w-4 h-4 text-[#18632b] shrink-0" />
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full text-[12px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#4b634f]"
        />
      </div>
      <div className="flex items-center gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
        <Phone className="w-4 h-4 text-[#18632b] shrink-0" />
        <input
          type="tel"
          placeholder="Mobile Number *"
          className="w-full text-[12px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#4b634f]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
        <div className="flex items-center gap-2 w-full">
          {thirdFieldIcon === "home" ? (
            <Home className="w-4 h-4 text-[#18632b] shrink-0" />
          ) : (
            <MapPin className="w-4 h-4 text-[#18632b] shrink-0" />
          )}
          <input
            type="text"
            placeholder={thirdFieldPlaceholder}
            className="w-full text-[12px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#4b634f]"
          />
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
      </div>
      <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
        <div className="flex items-center gap-2 w-full">
          <ShieldCheck className="w-4 h-4 text-[#18632b] shrink-0" />
          <select
            defaultValue=""
            className="w-full text-[12px] font-medium text-[#4b634f] focus:outline-none bg-transparent appearance-none"
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="amc">Annual Maintenance Plan (AMC)</option>
            <option value="commercial">Commercial Termite Control</option>
            <option value="post">Post-Construction Termite Treatment</option>
            <option value="pre">Pre-Construction Termite Treatment</option>
            <option value="residential">Residential Termite Control</option>
          </select>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
      </div>

      <button
        type="submit"
        className="w-full bg-[#156427] hover:bg-[#0e4b1c] text-white font-extrabold text-[13.5px] py-2 rounded-md shadow flex items-center justify-center gap-1.5 transition cursor-pointer"
      >
        <span>Submit Enquiry</span>
        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
      </button>

      <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-[#2d5234] font-semibold">
        <ShieldCheck className="w-3.5 h-3.5 text-[#2b9329]" />
        <span>Your details are safe with us.</span>
      </div>
    </form>
  </div>
);

/* Centered Green Pill Section Title with Horizontal Lines */
export const PillSectionHeader = ({ title }) => (
  <div className="flex items-center justify-center gap-3 my-3">
    <div className="h-[1px] bg-[#bfd4b8] flex-1" />
    <h2 className="bg-[#176928] text-white font-extrabold text-[15px] sm:text-[17px] px-6 py-1.5 rounded-full shadow-xs text-center">
      {title}
    </h2>
    <div className="h-[1px] bg-[#bfd4b8] flex-1" />
  </div>
);

/* Green Check List Item */
export const CheckItem = ({ text, bold = false }) => (
  <li className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#17381e] leading-[1.35]">
    <span className="w-4 h-4 rounded-full bg-[#38a128] text-white flex items-center justify-center shrink-0 mt-[1px]">
      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
    </span>
    <span className={bold ? "font-bold" : "font-semibold"}>{text}</span>
  </li>
);

/* Gold Seal Ribbon Badge (Used on Post-Construction & Pre-Construction) */
export const GoldSealBadge = ({ topText, midText, bottomText }) => (
  <div className="relative flex flex-col items-center select-none shrink-0">
    {/* Red Ribbons */}
    <div className="absolute -bottom-3 flex gap-2 z-0">
      <div className="w-5 h-7 bg-[#d32f2f] rotate-12 clip-ribbon" />
      <div className="w-5 h-7 bg-[#b71c1c] -rotate-12 clip-ribbon" />
    </div>
    {/* Gold Starburst Circle */}
    <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-gradient-to-b from-[#ffe46b] via-[#f6c42d] to-[#d99b16] p-1.5 shadow-md border-2 border-[#fff2a6] flex items-center justify-center text-center">
      <div className="w-full h-full rounded-full border border-dashed border-[#8c5c04] flex flex-col items-center justify-center px-1">
        <span className="text-[15px] font-black text-[#1d1302] leading-tight">
          {topText}
        </span>
        <span className="text-[11.5px] font-extrabold text-[#1d1302] leading-tight">
          {midText}
        </span>
        <span className="text-[11px] font-extrabold text-[#1d1302] leading-tight">
          {bottomText}
        </span>
      </div>
    </div>
  </div>
);

/* Reusable FAQ Box */
export const FaqBox = ({ questions }) => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="rounded-xl overflow-hidden border border-[#cde0c5] bg-white shadow-xs flex flex-col h-full">
      <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
        Frequently Asked Questions
      </div>
      <div className="p-3 flex-1 flex flex-col justify-between divide-y divide-[#e5efe1]">
        {questions.map((q, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="py-1.5 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-2 text-left text-[12px] font-bold text-[#18381f] hover:text-[#186929]"
              >
                <span>
                  {i + 1}. {q}
                </span>
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5 text-[#186929] shrink-0 stroke-[2.5]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-[#186929] shrink-0 stroke-[2.5]" />
                )}
              </button>
              {isOpen && (
                <p className="mt-1 text-[11px] text-[#3a5940] pl-3">
                  We use government-approved, eco-friendly, odorless treatments
                  delivered by certified specialists with service warranty.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* Green Silhouette Skyline Band */
export const SkylineBand = () => (
  <div className="w-full h-8 bg-[#0e471b] relative overflow-hidden flex items-end">
    <div
      className="w-full h-6 bg-[#3ba132]/40"
      style={{
        clipPath:
          "polygon(0% 100%, 0% 55%, 3% 55%, 3% 30%, 6% 30%, 6% 60%, 9% 60%, 9% 20%, 13% 20%, 13% 50%, 16% 50%, 16% 35%, 20% 35%, 20% 65%, 24% 65%, 24% 15%, 28% 15%, 28% 55%, 32% 55%, 32% 30%, 36% 30%, 36% 60%, 40% 60%, 40% 25%, 44% 25%, 44% 50%, 48% 50%, 48% 18%, 52% 18%, 52% 55%, 56% 55%, 56% 35%, 60% 35%, 60% 60%, 64% 60%, 64% 20%, 68% 20%, 68% 50%, 72% 50%, 72% 30%, 76% 30%, 76% 60%, 80% 60%, 80% 22%, 84% 22%, 84% 52%, 88% 52%, 88% 32%, 92% 32%, 92% 58%, 96% 58%, 96% 28%, 100% 28%, 100% 100%)",
      }}
    />
  </div>
);
