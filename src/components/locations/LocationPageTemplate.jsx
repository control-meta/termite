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
  Calendar,
  Wrench,
  User,
  Home,
  MapPin,
  Users,
  Leaf,
  Search,
  Clock,
  RefreshCw,
  Lock,
  FileCheck,
  ClipboardList,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.25-5.01-4.45-.15-.2-1.2-1.59-1.2-3.04 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.49.22.57.35.07.12.07.72-.17 1.4z" />
  </svg>
);

const GoldSatisfactionBadge = () => (
  <div className="relative flex flex-col items-center select-none shrink-0 pr-1">
    {/* Red Bottom Ribbons */}
    <div className="absolute -bottom-2.5 flex gap-2 z-0">
      <div
        className="w-4 h-6 bg-[#d32f2f] rotate-12"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
      />
      <div
        className="w-4 h-6 bg-[#b71c1c] -rotate-12"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
      />
    </div>
    {/* Gold Seal */}
    <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-gradient-to-b from-[#ffe77a] via-[#f5c22b] to-[#d49613] p-1 shadow-md border-2 border-[#fff3a8] flex items-center justify-center text-center">
      <div className="w-full h-full rounded-full border border-dashed border-[#7a4f02] flex flex-col items-center justify-center px-1">
        <span className="text-[15px] font-black text-[#1d1302] leading-none">
          100%
        </span>
        <span className="text-[9.5px] font-extrabold text-[#1d1302] leading-tight mt-0.5">
          Satisfaction
        </span>
        <span className="text-[9.5px] font-extrabold text-[#1d1302] leading-tight">
          Guarantee
        </span>
      </div>
    </div>
  </div>
);

const GoogleWordmark = () => (
  <div className="text-[23px] font-extrabold tracking-tight leading-none select-none">
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </div>
);

const ProhibitedTermiteCircle = () => (
  <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-white border-[5px] border-[#e52421] shadow-lg flex items-center justify-center relative shrink-0 select-none">
    {/* Termite Illustration */}
    <svg viewBox="0 0 64 64" className="w-11 h-11">
      {/* Antennae */}
      <path d="M28 16C24 11 19 10 16 11" stroke="#6d3b14" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36 16C40 11 45 10 48 11" stroke="#6d3b14" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <path
        d="M25 26L15 22M24 33L13 33M25 40L15 46M39 26L49 22M40 33L51 33M39 40L49 46"
        stroke="#6d3b14"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Head, Thorax, Abdomen */}
      <circle cx="32" cy="19" r="5" fill="#7c4316" />
      <ellipse cx="32" cy="27" rx="5.5" ry="4.5" fill="#9c5720" />
      <ellipse cx="32" cy="41" rx="8" ry="11" fill="#b86b2b" />
      {/* Segment lines on abdomen */}
      <path d="M25 38H39M25 43H39M27 48H37" stroke="#7c4316" strokeWidth="1.3" />
    </svg>
    {/* Red Diagonal Slash */}
    <div className="absolute w-full h-[5px] bg-[#e52421] rotate-45" />
  </div>
);

const DrillIcon = () => (
  <svg className="w-7 h-7 text-[#176928]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 7h10l2 2h6v2h-6l-2 2H9l-1 5H5l1-5H3V7z" />
  </svg>
);

const CoinsIcon = () => (
  <svg className="w-7 h-7 text-[#176928]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="9" cy="7" rx="6" ry="2.5" />
    <path d="M3 7v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V7" />
    <path d="M3 11v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" />
    <ellipse cx="16" cy="12" rx="5" ry="2" />
    <path d="M11 12v4c0 1.1 2.24 2 5 2s5-.9 5-2v-4" />
  </svg>
);

/* ==========================================================================
   CITY DATA CONFIGURATION (Exact Copy, Landmarks, Areas & Reviews per Screenshot)
   ========================================================================== */

const CITY_CONFIGS = {
  bangalore: {
    city: "Bangalore",
    headerTagline: "Safe Home. Healthy Life.",
    heroServiceWord: "Termite Treatment",
    heroDesc:
      "Protect your home, office and property from damaging termites with expert and reliable solutions in Bangalore.",
    firstBadgeLabel: "Expert\nInspection",
    heroBgImage: "/images/locations/bangalore-hero.jpg",
    aboutTitle: "About Our Termite Treatment Services in Bangalore",
    whyTitle: "Why Is Termite Treatment Important in Bangalore?",
    whyBullets: [
      "Prevent costly damage",
      "Protect your property value",
      "Maintain structural strength",
      "Avoid major repair expenses",
      "Ensure long-term peace of mind",
    ],
    servicesBannerTitle:
      "Our Comprehensive Termite Treatment Services in Bangalore",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nand safe.",
      commercial: "Protect your business\ninfrastructure.",
      pre: "Build with long-lasting\ntermite protection.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Experienced & Certified Professionals",
      "Bangalore-Wide Service Coverage",
      "Advanced & Guaranteed Treatment Methods",
      "Transparent & Affordable Pricing",
      "Customized Solutions for All Property Types",
      "Dedicated Customer Support",
    ],
    costText:
      "The cost depends on property size, infestation level and treatment type (pre or post-construction). Get a customized quote today for the best price in Bangalore.",
    reviewCountText: "Based on 1,000+ Reviews",
    reviewQuote:
      '"Excellent termite control service in Bangalore. The team was professional, punctual and effective."',
    reviewAuthor: "– Anil Kumar, Bangalore",
    areasText:
      "We cover all major areas in Bangalore including Whitefield, Koramangala, Indiranagar, HSR Layout, Jayanagar, Rajaji Nagar, Marathahalli and more.",
    areasThumb: "/images/locations/bangalore-landmark.jpg",
    drillLabel: "Drilling &\nInjection (If required)",
    faq2: "Do you provide residential termite treatment?",
  },

  goa: {
    city: "Goa",
    headerTagline: "Safe. Effective. Healthy Life.",
    heroServiceWord: "Termite Control",
    heroDesc:
      "Protect your home, office and property from termites with expert and reilable solutions in Goa.",
    firstBadgeLabel: "Expert\nTechnician",
    heroBgImage: "/images/locations/goa-hero.jpg",
    aboutTitle: "About Our Termite Control Services in Goa",
    whyTitle: "Why is Termite Control Important in Goa?",
    whyBullets: [
      "Prevents costly property damage",
      "Protects wooden structures",
      "Maintains structural strength",
      "Avoids health risks from termites",
      "Ensures long-term peace of mind",
    ],
    servicesBannerTitle: "Our Comprehensive Termite Control Services in Goa",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nin Goa.",
      commercial: "Protect your business\npremises in Goa.",
      pre: "Build with termite protection\nfrom day one.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Expert team of certified professionals",
      "Safe & advanced treatment methods",
      "Customized solutions for Goa homes & businesses",
      "Affordable and transparent pricing",
      "Dedicated customer support",
    ],
    costText:
      "The cost depends on property size, construction type and severity of infestation. Get a customized quote today for the best termite control service in Goa.",
    reviewCountText: "Based on 1000+ Reviews",
    reviewQuote:
      '"Very professional and reliable termite control service in Goa. Highly recommended!"',
    reviewAuthor: "– Customer, Goa",
    areasText:
      "We provide termite control services across Goa including Panaji, Margao, Vasco da Gama, Mapusa, Calangute, Baga and more.",
    areasThumb: "/images/locations/goa-landmark.jpg",
    drillLabel: "Drilling &\nInjection (Liquid)",
    faq2: "Do you provide residential termite treatment in Goa?",
  },

  mumbai: {
    city: "Mumbai",
    headerTagline: "Safe Home. Healthy Life.",
    heroServiceWord: "Termite Treatment",
    heroDesc:
      "Protect your home, office and property from damaging termites with expert and reliable solutions in Mumbai.",
    firstBadgeLabel: "Expert\nInspection",
    heroBgImage: "/images/locations/mumbai-hero.jpg",
    aboutTitle: "About Our Termite Treatment Services in Mumbai",
    whyTitle: "Why Is Termite Treatment Important in Mumbai?",
    whyBullets: [
      "Prevent costly damage",
      "Protect your property value",
      "Maintain structural strength",
      "Avoid major repair expenses",
      "Ensure long-term peace of mind",
    ],
    servicesBannerTitle:
      "Our Comprehensive Termite Treatment Services in Mumbai",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nand safe.",
      commercial: "Protect your business\ninfrastructure.",
      pre: "Build with long-lasting\ntermite protection.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Experienced & Certified Professionals",
      "Mumbai-Wide Service Coverage",
      "Advanced & Guaranteed Treatment Methods",
      "Transparent & Affordable Pricing",
      "Customized Solutions for All Property Types",
      "Dedicated Customer Support",
    ],
    costText:
      "The cost depends on property size, infestation level and treatment type (pre or post-construction). Get a customized quote today for the best price in Mumbai.",
    reviewCountText: "Based on 1,000+ Reviews",
    reviewQuote:
      '"Excellent termite control service in Mumbai. The team was professional, punctual and effective."',
    reviewAuthor: "– Priya Sharma, Mumbai",
    areasText:
      "We cover all major areas in Mumbai including Andheri, Bandra, Borivali, Chembur, Dadar, Thane (Mumbai region), Powai, Kurla, Ghatkopar and more.",
    areasThumb: "/images/locations/mumbai-landmark.jpg",
    drillLabel: "Drilling &\nInjection (If required)",
    faq2: "Do you provide residential termite treatment?",
  },

  noida: {
    city: "Noida",
    headerTagline: "Safe Home. Healthy Life.",
    heroServiceWord: "Termite Treatment",
    heroDesc:
      "Protect your home, office and property from damaging termites with expert and reliable solutions in Noida.",
    firstBadgeLabel: "Expert\nInspection",
    heroBgImage: "/images/locations/noida-hero.jpg",
    aboutTitle: "About Our Termite Treatment Services in Noida",
    whyTitle: "Why Is Termite Treatment Important in Noida?",
    whyBullets: [
      "Prevent costly damage",
      "Protect your property value",
      "Maintain structural strength",
      "Avoid major repair expenses",
      "Ensure long-term peace of mind",
    ],
    servicesBannerTitle:
      "Our Comprehensive Termite Treatment Services in Noida",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nand safe.",
      commercial: "Protect your business\ninfrastructure.",
      pre: "Build with long-lasting\ntermite protection.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Experienced & Certified Professionals",
      "Noida-Wide Service Coverage",
      "Advanced & Guaranteed Treatment Methods",
      "Transparent & Affordable Pricing",
      "Customized Solutions for All Property Types",
      "Dedicated Customer Support",
    ],
    costText:
      "The cost depends on property size, infestation level and treatment type (pre or post-construction). Get a customized quote today for the best price in Noida.",
    reviewCountText: "Based on 1,000+ Reviews",
    reviewQuote:
      '"Very professional and reliable termite control service in Noida. Highly recommended!"',
    reviewAuthor: "– Ankit Singh, Noida",
    areasText:
      "We cover all major areas in Noida including Sector 18, Sector 62, Sector 63, Sector 137, Sector 150, Greater Noida (West) and more.",
    areasThumb: "/images/locations/noida-landmark.jpg",
    drillLabel: "Drilling &\nInjection (If required)",
    faq2: "Do you provide residential termite treatment?",
  },

  pune: {
    city: "Pune",
    headerTagline: "Safe Home. Healthy Life.",
    heroServiceWord: "Termite Treatment",
    heroDesc:
      "Protect your home, office and property from damaging termites with expert and reliable solutions in Pune.",
    firstBadgeLabel: "Expert\nInspection",
    heroBgImage: "/images/locations/pune-hero.jpg",
    aboutTitle: "About Our Termite Treatment Services in Pune",
    whyTitle: "Why Is Termite Treatment Important in Pune?",
    whyBullets: [
      "Prevent costly damage",
      "Protect your property value",
      "Maintain structural strength",
      "Avoid major repair expenses",
      "Ensure long-term peace of mind",
    ],
    servicesBannerTitle:
      "Our Comprehensive Termite Treatment Services in Pune",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nand safe.",
      commercial: "Protect your business\ninfrastructure.",
      pre: "Build with long-lasting\ntermite protection.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Experienced & Certified Professionals",
      "Pune-Wide Service Coverage",
      "Advanced & Guaranteed Treatment Methods",
      "Transparent & Affordable Pricing",
      "Customized Solutions for All Property Types",
      "Dedicated Customer Support",
    ],
    costText:
      "The cost depends on property size, infestation level and treatment type (pre or post-construction). Get a customized quote today for the best price in Pune.",
    reviewCountText: "Based on 1,000+ Reviews",
    reviewQuote:
      '"Very professional and effective termite treatment service in Pune. Highly recommended!"',
    reviewAuthor: "– Sneha Patil, Pune",
    areasText:
      "We cover all major areas in Pune including Kothrud, Aundh, Baner, Wakad, Hinjewadi, Pimpri-Chinchwad, Hadapsar, Kondhwa and more.",
    areasThumb: "/images/locations/pune-landmark.jpg",
    drillLabel: "Drilling &\nInjection (If required)",
    faq2: "Do you provide residential termite treatment?",
  },

  delhi: {
    city: "Delhi",
    headerTagline: "Safe Home. Healthy Life.",
    heroServiceWord: "Termite Treatment",
    heroDesc:
      "Protect your home, office and property from damaging termites with expert and reliable solutions in Delhi.",
    firstBadgeLabel: "Expert\nInspection",
    heroBgImage: "/images/locations/delhi-hero.jpg",
    aboutTitle: "About Our Termite Treatment Services in Delhi",
    whyTitle: "Why Is Termite Treatment Important in Delhi?",
    whyBullets: [
      "Prevent costly damage",
      "Protect your property value",
      "Maintain structural strength",
      "Avoid major repair expenses",
      "Ensure long-term peace of mind",
    ],
    servicesBannerTitle:
      "Our Comprehensive Termite Treatment Services in Delhi",
    serviceSubtitles: {
      residential: "Keep your home termite-free\nand safe.",
      commercial: "Protect your business\ninfrastructure.",
      pre: "Build with long-lasting\ntermite protection.",
      post: "Eliminate existing termites\nand prevent re-infestation.",
      amc: "Year-round protection with\nregular inspection & treatment.",
    },
    amcCardImg: "/images/locations/loc-service-amc.jpg",
    whyChooseBullets: [
      "Experienced & Certified Professionals",
      "Delhi-Wide Service Coverage",
      "Advanced & Guaranteed Treatment Methods",
      "Transparent & Affordable Pricing",
      "Customized Solutions for All Property Types",
      "Dedicated Customer Support",
    ],
    costText:
      "The cost depends on property size, infestation level and treatment type (pre or post-construction). Get a customized quote today for the best price in Delhi.",
    reviewCountText: "Based on 1,000+ Reviews",
    reviewQuote:
      '"Professional and effective termite treatment service in Delhi. Highly recommended!"',
    reviewAuthor: "– Rohit Verma, Delhi",
    areasText:
      "We cover all major areas in Delhi including Connaught Place, Rohini, Dwarka, Janakpuri, Laxmi Nagar, Saket, Vasant Kunj and more.",
    areasThumb: "/images/locations/delhi-landmark.jpg",
    drillLabel: "Drilling &\nInjection (If required)",
    faq2: "Do you provide residential termite treatment?",
  },
};

/* ==========================================================================
   CORE LOCATION PAGE TEMPLATE (100% Pixel-Matched to Screenshots)
   ========================================================================== */


export { CITY_CONFIGS };

export default function LocationPageTemplate({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  const leftFaqs = [
    `1. How much does termite treatment cost in ${data.city}?`,
    `2. ${data.faq2}`,
    "3. What is pre-construction termite treatment?",
    "4. How long does termite treatment last?",
  ];

  const rightFaqs = [
    "5. Do you offer commercial termite control?",
    "6. Is termite treatment safe for families and pets?",
    "7. Do you provide an AMC (Annual Maintenance Contract) plan?",
    `8. How can I book termite treatment in ${data.city}?`,
  ];

  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        {/* ====================================================================
            1. TOP HEADER BAR
           ==================================================================== */}
        <SiteHeader active="locations" />

      {/* ====================================================================
          2. HERO SECTION
         ==================================================================== */}
      <section className="relative bg-[#eef5eb] overflow-hidden border-b border-[#d6e6d0]">
        {/* City Landmark + Technician Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroBgImage}
            alt={`Termite Control in ${data.city}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/92 to-transparent w-full lg:w-[66%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7">
            <h1 className="text-[31px] sm:text-[39px] font-black leading-[1.06] tracking-tight text-[#0d5220]">
              <span className="block">Professional</span>
              <span className="block">{data.heroServiceWord}</span>
              <span className="block">
                Services in{" "}
                <span className="text-[#e02020]">{data.city}</span>
              </span>
            </h1>

            <p className="mt-2.5 text-[13.5px] sm:text-[14.5px] font-semibold text-[#1c3922] max-w-[460px] leading-[1.38]">
              {data.heroDesc}
            </p>

            {/* 4 Feature Icon Badges with Dividers */}
            <div className="mt-4 flex items-center gap-3 sm:gap-5 max-w-[440px]">
              <div className="flex flex-col items-center text-center flex-1">
                <ShieldCheck className="w-6 h-6 text-[#176928] mb-1" />
                <span className="text-[11px] font-extrabold text-[#16361d] leading-tight whitespace-pre-line">
                  {data.firstBadgeLabel}
                </span>
              </div>
              <div className="w-[1px] h-9 bg-[#c2d4bd]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Home className="w-6 h-6 text-[#176928] mb-1" />
                <span className="text-[11px] font-extrabold text-[#16361d] leading-tight">
                  Safe &amp;
                  <br />
                  Effective
                </span>
              </div>
              <div className="w-[1px] h-9 bg-[#c2d4bd]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Leaf className="w-6 h-6 text-[#2d9429] mb-1" />
                <span className="text-[11px] font-extrabold text-[#16361d] leading-tight">
                  Eco-Friendly
                  <br />
                  Solutions
                </span>
              </div>
              <div className="w-[1px] h-9 bg-[#c2d4bd]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Users className="w-6 h-6 text-[#176928] mb-1" />
                <span className="text-[11px] font-extrabold text-[#16361d] leading-tight">
                  Trained
                  <br />
                  Professionals
                </span>
              </div>
            </div>

            {/* 2 Hero CTA Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="flex items-center gap-1.5 bg-[#e51f1f] hover:bg-[#c81919] text-white font-extrabold text-[13.5px] px-5 py-2 rounded-full shadow-md transition"
              >
                <span>Book a Free Inspection</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 bg-white hover:bg-[#f2f9ef] text-[#155724] border border-[#2b7a38] font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow-xs transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25a233]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5 flex justify-end" id="quote">
            <div className="w-full max-w-[295px] rounded-xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-[#cde0c6]">
              <div className="bg-[#125a22] text-white text-center font-extrabold text-[16px] py-2 px-4">
                Get a Free Quote
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="p-3 space-y-2"
              >
                <div className="flex items-center gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
                  <User className="w-3.5 h-3.5 text-[#176928] shrink-0" />
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full text-[11.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#49614d]"
                  />
                </div>
                <div className="flex items-center gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
                  <Phone className="w-3.5 h-3.5 text-[#176928] shrink-0" />
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    className="w-full text-[11.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#49614d]"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
                  <div className="flex items-center gap-2 w-full">
                    <Home className="w-3.5 h-3.5 text-[#176928] shrink-0" />
                    <input
                      type="text"
                      defaultValue={`Your Location (${data.city})`}
                      className="w-full text-[11.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent"
                    />
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-md px-2.5 py-1.5 bg-[#fbfdfb]">
                  <div className="flex items-center gap-2 w-full">
                    <Home className="w-3.5 h-3.5 text-[#176928] shrink-0" />
                    <select
                      defaultValue=""
                      className="w-full text-[11.5px] font-medium text-[#49614d] focus:outline-none bg-transparent appearance-none"
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="residential">Residential Termite Control</option>
                      <option value="commercial">Commercial Termite Control</option>
                      <option value="pre">Pre-Construction Termite Treatment</option>
                      <option value="post">Post-Construction Termite Treatment</option>
                      <option value="amc">Termite AMC Plans</option>
                    </select>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#135c23] hover:bg-[#0d461a] text-white font-extrabold text-[13.5px] py-1.5 rounded-full shadow flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Submit Enquiry</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <div className="flex items-center justify-center gap-1 pt-0.5 text-[10.5px] text-[#2d5234] font-semibold">
                  <Lock className="w-3 h-3 text-[#176928]" />
                  <span>Your details are safe with us.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MAIN BODY CONTAINER
         ==================================================================== */}
      <div className="px-4 sm:px-6 py-4 space-y-4">
        {/* ==================================================================
            3. ABOUT + WHY IMPORTANT + MACRO TERMITE PHOTO
           ================================================================== */}
        <section
          id="about"
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
        >
          {/* Left: About Text */}
          <div className="lg:col-span-4">
            <h2 className="text-[18px] sm:text-[19.5px] font-extrabold text-[#0f4d20] leading-[1.18]">
              {data.aboutTitle}
            </h2>
            <p className="mt-2 text-[12px] leading-[1.45] text-[#213d27] font-medium">
              Termites can silently damage wooden furniture, flooring and
              structural elements. Our expert termite control services in{" "}
              {data.city} offer comprehensive solutions for residential,
              commercial and construction properties with long-lasting
              protection.
            </p>
            <a
              href="#know-more"
              className="mt-3 inline-flex items-center gap-1.5 bg-[#1b6b29] hover:bg-[#13521e] text-white text-[12px] font-bold px-4 py-1.5 rounded-full shadow-xs"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Middle: Why Important Card */}
          <div className="lg:col-span-4 bg-[#eef7ea] border border-[#cfe3c6] rounded-xl p-3.5">
            <h3 className="text-[14.5px] font-extrabold text-[#0f4d20] leading-snug mb-2">
              {data.whyTitle}
            </h3>
            <ul className="space-y-1.5">
              {data.whyBullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[12px] font-bold text-[#1b3921]"
                >
                  <span className="w-4 h-4 rounded-full bg-[#369c27] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Close-up Termites Photo */}
          <div className="lg:col-span-4 h-[175px] rounded-xl overflow-hidden shadow-xs border border-[#d6e4cf]">
            <img
              src="/images/locations/termites-wood.jpg"
              alt="Termites on Damaged Wood"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ==================================================================
            4. OUR COMPREHENSIVE TERMITE SERVICES IN {CITY} (5 Cards)
           ================================================================== */}
        <section id="services">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] bg-[#bfd4b8] flex-1" />
            <h2 className="bg-[#166627] text-white font-extrabold text-[14.5px] sm:text-[16px] px-6 py-1.5 rounded-full shadow-xs text-center">
              {data.servicesBannerTitle}
            </h2>
            <div className="h-[1px] bg-[#bfd4b8] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                title: "Residential\nTermite Control",
                href: "/services/residential",
                sub: data.serviceSubtitles.residential,
                img: "/images/locations/loc-service-residential.jpg",
              },
              {
                title: "Commercial\nTermite Control",
                href: "/services/commercial",
                sub: data.serviceSubtitles.commercial,
                img: "/images/locations/loc-service-commercial.jpg",
              },
              {
                title: "Pre-Construction\nTermite Treatment",
                href: "/services/pre-construction",
                sub: data.serviceSubtitles.pre,
                img: "/images/locations/loc-service-pre.jpg",
              },
              {
                title: "Post-Construction\nTermite Treatment",
                href: "/services/post-construction",
                sub: data.serviceSubtitles.post,
                img: "/images/locations/loc-service-post.jpg",
              },
              {
                title: "Termite AMC Plans",
                href: "/services/amc",
                sub: data.serviceSubtitles.amc,
                img: data.amcCardImg,
              },
            ].map((srv, idx) => (
              <Link
                key={idx}
                href={srv.href || "/services"}
                className="rounded-xl overflow-hidden border border-[#cde0c5] bg-gradient-to-b from-white to-[#edf7e8] flex flex-col justify-between text-center pb-3 shadow-2xs hover:shadow-md hover:border-[#86c766] transition group cursor-pointer"
              >
                <div>
                  <div className="h-[88px] w-full overflow-hidden">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-2.5 pt-2.5">
                    <h3 className="text-[13.5px] font-extrabold text-[#113d1b] leading-[1.18] whitespace-pre-line">
                      {srv.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-[#28472e] font-medium leading-[1.28] whitespace-pre-line">
                      {srv.sub}
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 px-2">
                  <span
                    className="inline-flex items-center gap-1 bg-[#329626] group-hover:bg-[#267a1c] text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-2xs transition"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==================================================================
            5. BENEFITS OF OUR TERMITE TREATMENT SERVICES (6-Column Bar)
           ================================================================== */}
        <section className="pt-2">
          <div className="relative rounded-xl border border-[#cde0c5] bg-[#f3faef] pt-5 pb-3 px-3 shadow-2xs">
            {/* Overlapping Pill Header */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#166627] text-white font-extrabold text-[14px] sm:text-[15px] px-6 py-1 rounded-full shadow-xs whitespace-nowrap">
              Benefits of Our Termite Treatment Services
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#cfe0c8]">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#176928]" />,
                  label: "Long-Lasting\nProtection",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-[#176928]" />,
                  label: "Minimize\nStructural Damage",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-[#2d9429]" />,
                  label: "Safe &\nEco-Friendly",
                },
                {
                  icon: <CoinsIcon />,
                  label: "Cost-Effective\nSolution",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#176928]" />,
                  label: "Hassle-Free\nService",
                },
                {
                  icon: <Calendar className="w-6 h-6 text-[#176928]" />,
                  label: "Scheduled\nMaintenance",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center px-2 pt-2 sm:pt-0"
                >
                  <div className="mb-1">{b.icon}</div>
                  <span className="text-[11.5px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. SPLIT ROW: TREATMENT PROCESS (Left) & WHY CHOOSE US (Right)
           ================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Left 7 Cols: Our Termite Treatment Process */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#cde0c5] bg-[#f4faef] flex flex-col">
            <div className="bg-[#166627] text-white font-extrabold text-[14.5px] px-4 py-1.5 w-fit rounded-br-xl">
              Our Termite Treatment Process
            </div>

            <div className="p-3.5 flex-1 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
              {[
                {
                  n: 1,
                  label: "Inspection &\nAssessment",
                  icon: <Search className="w-5 h-5 text-[#166627]" />,
                },
                {
                  n: 2,
                  label: "Customized\nTreatment Plan",
                  icon: <ClipboardList className="w-5 h-5 text-[#166627]" />,
                },
                {
                  n: 3,
                  label: "Professional\nTreatment",
                  icon: <Users className="w-5 h-5 text-[#166627]" />,
                },
                {
                  n: 4,
                  label: "Post-Treatment\nVerification",
                  icon: <ShieldCheck className="w-5 h-5 text-[#166627]" />,
                },
                {
                  n: 5,
                  label: "Follow-Up\n& Monitoring",
                  icon: <Calendar className="w-5 h-5 text-[#166627]" />,
                },
              ].map((step, i, arr) => (
                <React.Fragment key={step.n}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-[85px]">
                    <span className="w-5 h-5 rounded-full bg-[#248428] text-white text-[11px] font-extrabold flex items-center justify-center mb-1">
                      {step.n}
                    </span>
                    <div className="my-1">{step.icon}</div>
                    <span className="text-[11px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                      {step.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden sm:block w-4 h-4 text-[#2b6e34] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Why Choose A to Z Pest Solutions? */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#cde0c5] bg-[#f4faef] flex flex-col">
            <div className="bg-[#166627] text-white font-extrabold text-[14.5px] px-4 py-1.5">
              Why Choose A to Z Pest Solutions?
            </div>
            <div className="p-3 flex-1 flex items-center justify-between gap-2">
              <ul className="space-y-1">
                {data.whyChooseBullets.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-[11.5px] font-bold text-[#17381e] leading-snug"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#369c27] text-white flex items-center justify-center shrink-0 mt-[1px]">
                      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <GoldSatisfactionBadge />
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. 3-COL ROW: COST | GOOGLE HAPPY CUSTOMERS | AREAS WE SERVE
           ================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Col 1 (4 Cols): Termite Treatment Cost */}
          <div className="lg:col-span-4 rounded-xl border border-[#cde0c5] bg-white p-3.5 flex flex-col justify-between relative overflow-hidden">
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-7 z-10">
                <h3 className="text-[14px] font-extrabold text-[#0f4d20] leading-tight">
                  Termite Treatment Cost in {data.city}
                </h3>
                <p className="mt-1.5 text-[11px] text-[#223d27] leading-[1.35]">
                  {data.costText}
                </p>
                <a
                  href="#quote"
                  className="mt-2.5 inline-flex items-center gap-1 bg-[#2b8729] hover:bg-[#1f691e] text-white text-[11px] font-bold px-3 py-1 rounded-full"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="col-span-5 h-[115px] rounded-lg overflow-hidden">
                <img
                  src="/images/home/cost-house-coins.jpg"
                  alt="Termite Treatment Cost"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Col 2 (4 Cols): Our Happy Customers (Google 4.8/5) */}
          <div
            id="reviews"
            className="lg:col-span-4 rounded-xl border border-[#cde0c5] bg-white p-3.5 flex flex-col justify-between"
          >
            <h3 className="text-[14px] font-extrabold text-[#0f4d20] text-center mb-1">
              Our Happy Customers
            </h3>
            <div className="grid grid-cols-12 gap-2.5 items-center my-auto">
              <div className="col-span-5 flex flex-col items-center text-center border-r border-[#e3eee0] pr-2">
                <GoogleWordmark />
                <div className="text-[#f5b82e] text-[14px] leading-none my-1">
                  ★★★★★
                </div>
                <div className="text-[16px] font-black text-[#14381c] leading-none">
                  4.8/5
                </div>
                <span className="text-[9.5px] text-[#4b634f] font-semibold mt-0.5">
                  {data.reviewCountText}
                </span>
              </div>
              <div className="col-span-7 text-[11px] leading-[1.35] text-[#223d27]">
                <p className="italic font-medium">{data.reviewQuote}</p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  {data.reviewAuthor}
                </p>
              </div>
            </div>
          </div>

          {/* Col 3 (4 Cols): Areas We Serve in {City} */}
          <div
            id="locations"
            className="lg:col-span-4 rounded-xl border border-[#cde0c5] bg-white p-3.5 flex flex-col justify-between"
          >
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8">
                <h3 className="flex items-center gap-1 text-[14px] font-extrabold text-[#0f4d20] leading-tight">
                  <MapPin className="w-4 h-4 text-[#2b8729] shrink-0" />
                  <span>Areas We Serve in {data.city}</span>
                </h3>
                <p className="mt-1.5 text-[10.5px] text-[#223d27] leading-[1.35]">
                  {data.areasText}
                </p>
                <a
                  href="#areas"
                  className="mt-2 inline-flex items-center gap-1 bg-[#2b8729] hover:bg-[#1f691e] text-white text-[11px] font-bold px-3 py-1 rounded-full"
                >
                  <span>Check Service Areas</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="col-span-4 h-[110px] rounded-lg overflow-hidden">
                <img
                  src={data.areasThumb}
                  alt={data.city}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. SPLIT ROW: SIGNS OF INFESTATION & TREATMENT METHODS
           ================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Left 6 Cols: Signs of Termite Infestation */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#166627] text-white font-extrabold text-[14px] px-4 py-1.5 w-fit rounded-br-xl">
              Signs of Termite Infestation
            </div>
            <div className="p-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 flex-1 items-center">
              {[
                {
                  label: "Mud Tubes\non Walls",
                  img: "/images/locations/sign-mud-tubes.jpg",
                },
                {
                  label: "Hollow\nSounding Wood",
                  img: "/images/locations/sign-hollow-wood.jpg",
                },
                {
                  label: "Discarded\nTermite Wings",
                  img: "/images/locations/sign-wings.jpg",
                },
                {
                  label: "Damaged\nFurniture",
                  img: "/images/locations/sign-furniture.jpg",
                },
              ].map((sign, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-full h-[64px] rounded-lg overflow-hidden border border-[#d6e4cf]">
                    <img
                      src={sign.img}
                      alt={sign.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1.5 text-[11px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                    {sign.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Our Termite Treatment Methods */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#166627] text-white font-extrabold text-[14px] px-4 py-1.5 w-fit rounded-br-xl">
              Our Termite Treatment Methods
            </div>
            <div className="p-3 grid grid-cols-2 sm:grid-cols-5 gap-2 divide-x divide-[#e2eee0] flex-1 items-center">
              {[
                {
                  icon: <Search className="w-6 h-6 text-[#176928]" />,
                  label: "Detailed\nInspection",
                },
                {
                  icon: <DrillIcon />,
                  label: data.drillLabel,
                },
                {
                  icon: <Leaf className="w-6 h-6 text-[#2d9429]" />,
                  label: "Soil\nTreatment\n(Pre-Construction)",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#176928]" />,
                  label: "Wood\nTreatment\n(Post-Construction)",
                },
                {
                  icon: <RefreshCw className="w-6 h-6 text-[#176928]" />,
                  label: "Monitoring\n& Prevention",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-1.5"
                >
                  <div className="mb-1.5">{m.icon}</div>
                  <span className="text-[10.5px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. FREQUENTLY ASKED QUESTIONS (2-Column 8-Question Grid)
           ================================================================== */}
        <section className="rounded-xl overflow-hidden border border-[#cde0c5] bg-white">
          <div className="bg-[#166627] text-white font-extrabold text-[14.5px] px-4 py-1.5 w-fit rounded-br-xl">
            Frequently Asked Questions
          </div>

          <div className="p-3.5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
            {/* Left Column (1-4) */}
            <div className="divide-y divide-[#e6f0e4]">
              {leftFaqs.map((q, idx) => {
                const key = `L-${idx}`;
                const isOpen = openFaq === key;
                return (
                  <div key={key} className="py-1.5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-2 text-left text-[11.5px] font-bold text-[#17381e] hover:text-[#166627]"
                    >
                      <span>{q}</span>
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#166627] shrink-0 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#166627] shrink-0 stroke-[2.5]" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-1 text-[11px] text-[#3a5940] pl-3">
                        We provide customized, government-approved odorless
                        termite treatments in {data.city} with multi-year
                        warranty protection.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (5-8) */}
            <div className="divide-y divide-[#e6f0e4]">
              {rightFaqs.map((q, idx) => {
                const key = `R-${idx}`;
                const isOpen = openFaq === key;
                return (
                  <div key={key} className="py-1.5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-2 text-left text-[11.5px] font-bold text-[#17381e] hover:text-[#166627]"
                    >
                      <span>{q}</span>
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#166627] shrink-0 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#166627] shrink-0 stroke-[2.5]" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-1 text-[11px] text-[#3a5940] pl-3">
                        Call us at +91 98765 43210 or submit the free quote form
                        above to schedule an inspection at your convenience.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ====================================================================
          10. BOTTOM CTA FOOTER BANNER
         ==================================================================== */}
      <div id="cta-banner" className="mt-6 bg-gradient-to-r from-[#0e4e1d] via-[#156327] to-[#19702d] text-white px-4 sm:px-6 py-4 rounded-xl mx-3 sm:mx-6 mb-4 border-2 border-[#4bb332]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Prohibited Termite Circle + Headline */}
          <div className="flex items-center gap-3.5">
            <ProhibitedTermiteCircle />
            <div>
              <h3 className="text-[17px] sm:text-[19.5px] font-extrabold leading-tight">
                Protect Your Property from Termites Today!
              </h3>
              <p className="text-[11.5px] sm:text-[12.5px] text-white/90 mt-0.5 max-w-[490px] leading-snug">
                Get professional, safe and long-lasting termite treatment
                services in {data.city} with A to Z Pest Solutions.
              </p>
            </div>
          </div>

          {/* Right 3 Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 bg-white hover:bg-[#f2f8f0] text-[#124d20] font-extrabold text-[12.5px] px-4 py-2 rounded-full shadow"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-[#166627]" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919876543210"
              className="flex items-center gap-1.5 bg-white hover:bg-[#f2f8f0] text-[#124d20] font-extrabold text-[12.5px] px-4 py-2 rounded-full shadow"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25a233]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#quote"
              className="flex items-center gap-1.5 bg-gradient-to-b from-[#f8d748] to-[#e6b822] hover:from-[#f0cd35] hover:to-[#d6a915] text-[#1b2b12] font-extrabold text-[12.5px] px-4 py-2 rounded-full shadow"
            >
              <span>Book an Inspection</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
      </div>
    </div>
  );
}

/* ==========================================================================
   6 EXPORTED INDIVIDUAL LOCATION PAGE COMPONENTS
   ========================================================================== */
