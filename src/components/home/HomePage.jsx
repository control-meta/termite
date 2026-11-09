"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Check,
  Plus,
  Minus,
  Search,
  Headphones,
} from "lucide-react";

/* ==========================================================================
   CUSTOM SVG ICONS & BADGES (1:1 Match with Screenshot)
   ========================================================================== */

const BrandLogo = () => (
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

const ExpertShieldBadge = () => (
  <div className="relative w-[110px] h-[132px] md:w-[126px] md:h-[148px] select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.28)]">
    <svg viewBox="0 0 130 154" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="130" y2="154" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#267337" />
          <stop offset="50%" stopColor="#135222" />
          <stop offset="100%" stopColor="#0a3313" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="130" y2="154" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e2e8df" />
          <stop offset="50%" stopColor="#9ab39e" />
          <stop offset="100%" stopColor="#d4dfd5" />
        </linearGradient>
      </defs>
      {/* Outer Shield */}
      <path
        d="M65 4L122 24V72C122 111 96 137 65 150C34 137 8 111 8 72V24L65 4Z"
        fill="url(#shieldGrad)"
        stroke="url(#rimGrad)"
        strokeWidth="4.5"
      />
      {/* Inner Shield Rim */}
      <path
        d="M65 12L114 29V71C114 105 91 129 65 141C39 129 16 105 16 71V29L65 12Z"
        stroke="#86b98b"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 pt-1">
      <span className="text-[24px] md:text-[28px] font-extrabold leading-none tracking-tight">
        100%
      </span>
      <span className="text-[15px] md:text-[17px] font-bold leading-tight mt-0.5">
        Expert
      </span>
      <span className="text-[14px] md:text-[16px] font-semibold leading-tight">
        Service
      </span>
      <div className="w-12 h-[1px] bg-white/40 my-1.5" />
      <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[3]" />
    </div>
  </div>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.06L2.1 21.9L7.08 20.63C8.52 21.44 10.2 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      stroke="#19672b"
      strokeWidth="2"
      fill="#e8f5e9"
    />
    <path
      d="M16.6 14.2C16.3 14.05 15 13.4 14.75 13.3C14.5 13.2 14.3 13.15 14.15 13.45C13.95 13.75 13.45 14.35 13.3 14.5C13.15 14.65 13 14.7 12.7 14.55C11.9 14.15 11.2 13.65 10.6 12.95C10.15 12.4 9.8 11.75 9.65 11.45C9.5 11.15 9.65 11 9.8 10.85C9.9 10.7 10.05 10.5 10.2 10.35C10.35 10.2 10.4 10.05 10.5 9.85C10.6 9.65 10.55 9.5 10.45 9.35C10.35 9.2 9.85 7.9 9.6 7.35C9.4 6.85 9.15 6.9 9 6.9H8.5C8.3 6.9 8 6.95 7.75 7.25C7.5 7.55 6.8 8.2 6.8 9.5C6.8 10.8 7.75 12.05 7.9 12.25C8.05 12.45 9.8 15.2 12.55 16.35C14.25 17.05 14.9 16.95 15.55 16.85C16.05 16.75 17.1 16.2 17.3 15.55C17.5 14.9 17.5 14.35 17.4 14.25C17.3 14.15 16.9 14.35 16.6 14.2Z"
      fill="#19672b"
    />
  </svg>
);

const GreenCheckBullet = ({ text }) => (
  <li className="flex items-start gap-2 text-[12px] sm:text-[12.5px] leading-[1.35] text-[#1c3321] font-medium">
    <span className="w-4 h-4 rounded-full bg-[#3ea629] text-white flex items-center justify-center shrink-0 mt-[1px]">
      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
    </span>
    <span>{text}</span>
  </li>
);

/* ==========================================================================
   DATA CONSTANTS (Exact Text & Structure from Screenshot)
   ========================================================================== */

const SERVICES_DATA = [
  {
    title: "Pre Construction",
    href: "/services/pre-construction",
    subtitle: "Prevent termite\nbefore it starts",
    image: "/images/home/service-pre-construction.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="14" width="8" height="6" rx="1" />
        <rect x="13" y="14" width="8" height="6" rx="1" />
        <rect x="7" y="6" width="10" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Post Construction",
    href: "/services/post-construction",
    subtitle: "Protect your property\nafter construction",
    image: "/images/home/service-post-construction.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Residential\nTermite Control",
    href: "/services/residential",
    subtitle: "Keep your home\ntermite-free",
    image: "/images/home/service-residential.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
        <path d="M9 21V13h6v8" />
      </svg>
    ),
  },
  {
    title: "Commercial\nTermite Control",
    href: "/services/commercial",
    subtitle: "Safeguard your business\npremises",
    image: "/images/home/service-commercial.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="3" width="10" height="18" rx="1" />
        <rect x="14" y="8" width="6" height="13" rx="1" />
        <path d="M7 7h4M7 11h4M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Annual Maintenance\nPlan",
    href: "/services/amc",
    subtitle: "Ongoing protection\nfor long-term peace of mind",
    image: "/images/home/service-amc.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

const INFO_QUADS = [
  {
    header: "Signs of Termite Infestation",
    image: "/images/home/sign-mud-tubes.jpg",
    items: [
      "Mud tubes on walls",
      "Hollow wooden furniture",
      "Discarded wings",
      "Damaged wood",
    ],
  },
  {
    header: "Our Termite Treatment Methods",
    image: "/images/home/method-drilling.jpg",
    items: [
      "Soil Treatment",
      "Drill-Fill-Seal",
      "Wood Treatment",
      "Pre-Construction",
    ],
  },
  {
    header: "Safety & Preparation",
    image: "/images/home/safety-treatment.jpg",
    items: [
      "Safe for family",
      "Simple prep steps",
      "When to re-enter",
      "Precautions",
    ],
  },
  {
    header: "Termite Warranty & Support",
    image: "/images/home/warranty-damage.jpg",
    items: [
      "Warranty coverage",
      "Follow-up service",
      "Reliable support",
      "Customer care",
    ],
  },
];

const PROCESS_STEPS = [
  {
    num: 1,
    title: "Inspection &\nAssessment",
    icon: <Search className="w-7 h-7 text-[#135925] stroke-[2.2]" />,
  },
  {
    num: 2,
    title: "Targeted Treatment",
    icon: (
      <svg className="w-7 h-7 text-[#135925]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
        <path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z" />
        <path d="M12 13V4" />
        <path d="M9 7l3-3 3 3" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Monitoring",
    icon: (
      <svg className="w-7 h-7 text-[#135925]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Expert Advice",
    icon: (
      <svg className="w-7 h-7 text-[#135925]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="9" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M5 4l1.5 1.5M19 4l-1.5 1.5M12 2v2" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "Long-Term Protection",
    icon: (
      <svg className="w-7 h-7 text-[#135925]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M6 12l6-5 6 5" />
        <path d="M8 11v6h8v-6" />
        <path d="M3 19h18" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"Excellent service! Our home is completely termite-free. Highly recommend!"',
    author: "– Ramesh Kumar",
    suffix: "",
    avatar: "/images/home/avatar-ramesh.jpg",
  },
  {
    quote: '"Professional team, quick service and great support."',
    author: "– Priya Nair",
    suffix: "Rony",
    avatar: "/images/home/avatar-priya.jpg",
  },
  {
    quote: '"Very satisfied with the service. Truly reliable and effective."',
    author: "– Suresh Menon",
    suffix: "",
    avatar: "/images/home/avatar-suresh.jpg",
  },
];

const CITIES = [
  {
    name: "Bengaluru",
    href: "/locations/bangalore",
    image: "/images/home/city-bangalore.jpg",
  },
  {
    name: "Pune",
    href: "/locations/pune",
    image: "/images/home/city-pune.jpg",
  },
  {
    name: "Mumbai",
    href: "/locations/mumbai",
    image: "/images/home/city-mumbai.jpg",
  },
  {
    name: "Goa",
    href: "/locations/goa",
    image: "/images/home/city-goa.jpg",
  },
  {
    name: "Delhi",
    href: "/locations/delhi",
    image: "/images/home/city-delhi.jpg",
  },
  {
    name: "Noida",
    href: "/locations/noida",
    image: "/images/home/city-noida.jpg",
  },
];

const FAQS = [
  "How do I know if my property has termites?",
  "How soon can I get the treatment?",
  "Is the treatment safe for my family and pets?",
  "How long does the treatment last?",
  "Do you provide warranty?",
];

/* ==========================================================================
   MAIN HOMEPAGE COMPONENT
   ========================================================================== */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      {/* Main Page Wrapper matching Screenshot Proportions */}
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">

        {/* ==============================================================
            1. TOP NAVIGATION BAR
           ============================================================== */}
        <SiteHeader active="home" />

        {/* ==============================================================
            2. HERO SECTION
           ============================================================== */}
        <section className="relative overflow-hidden bg-[#eef5e9]">
          {/* Background Image Layer with Left Fade Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/home/hero-technician.jpg"
              alt="Termite Control Technician Spraying Outside Home"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef6eb] via-[#eef6eb]/95 to-transparent w-full lg:w-[65%] xl:w-[55%]" />
          </div>

          {/* 100% Expert Service Floating Shield (Top Right) */}
          <div className="absolute top-3 right-3 sm:right-6 z-20">
            <ExpertShieldBadge />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-5 sm:px-8 pt-6 pb-8 lg:py-9 max-w-[660px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[#174d23] font-bold text-[14px] sm:text-[15.5px] mb-1.5">
              <span className="w-6 h-[1.5px] bg-[#174d23]" />
              <span>Expert Care. Lasting Protection.</span>
              <span className="w-6 h-[1.5px] bg-[#174d23]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold leading-[1.08] tracking-tight">
              <span className="block text-[#0e4a1f]">Termite Control</span>
              <span className="block text-[#1fa22a]">for a Worry-Free Home</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-2.5 text-[15px] sm:text-[16.5px] font-bold text-[#143d1d] leading-[1.35]">
              Protect Your Property with Our Professional
              <span className="block">Termite Control Services</span>
            </p>

            {/* 3 Feature Icons Row with Dividers */}
            <div className="mt-5 flex items-center gap-4 sm:gap-7 max-w-[460px]">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <svg className="w-8 h-8 text-[#166627] mb-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                </svg>
                <span className="text-[12px] sm:text-[12.5px] font-bold text-[#173b1f] leading-tight">
                  Long-Term
                  <br />
                  Protection
                </span>
              </div>

              <div className="w-[1px] h-12 bg-[#b8c9b4]" />

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center flex-1">
                <svg className="w-8 h-8 text-[#28a745] mb-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
                <span className="text-[12px] sm:text-[12.5px] font-bold text-[#173b1f] leading-tight">
                  Eco-Friendly
                  <br />
                  Solutions
                </span>
              </div>

              <div className="w-[1px] h-12 bg-[#b8c9b4]" />

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center flex-1">
                <svg className="w-8 h-8 text-[#166627] mb-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                <span className="text-[12px] sm:text-[12.5px] font-bold text-[#173b1f] leading-tight">
                  Safe for
                  <br />
                  Your Family
                </span>
              </div>
            </div>

            {/* 2 Hero CTA Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3.5">
              <a
                href="tel:9220312345"
                className="flex items-center gap-2.5 bg-[#125622] hover:bg-[#0c3e17] text-white font-extrabold text-[14.5px] px-6 py-2.5 rounded-full shadow-md transition"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now – 92203 12345</span>
              </a>

              <a
                href="https://wa.me/919220312345"
                className="flex items-center gap-2 bg-white hover:bg-[#f2faf0] text-[#15652c] border-2 border-[#239424] font-extrabold text-[14.5px] px-5 py-2 rounded-full shadow-xs transition"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* ==============================================================
            MAIN BODY CONTAINER (Padded Sections)
           ============================================================== */}
        <div className="px-4 sm:px-6 py-4 space-y-5">

          {/* ============================================================
              3. ABOUT TERMITE PROFESSIONALS BANNER
             ============================================================ */}
          <section
            id="about"
            className="relative rounded-2xl overflow-hidden border border-[#c6e1be] bg-[#ebf7e6] shadow-2xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 p-5 sm:p-6 z-10">
                <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0e481c]">
                  About Termite Professionals
                </h2>
                <p className="mt-2 text-[13.5px] sm:text-[14px] leading-[1.5] text-[#1a3d21] font-medium">
                  We are a trusted team of termite control experts, committed to
                  protecting your home and business with safe, effective and
                  long-lasting solutions. Our focus is on quality service,
                  customer satisfaction and a termite-free environment.
                </p>
                <Link
                  href="/about"
                  className="mt-3.5 inline-flex items-center gap-1.5 bg-[#166627] hover:bg-[#104e1e] text-white text-[13.5px] font-extrabold px-5 py-2 rounded-full shadow-xs transition"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>

              {/* Right House Photo */}
              <div className="lg:col-span-6 h-[190px] sm:h-[210px] relative">
                <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#ebf7e6] to-transparent z-10" />
                <img
                  src="/images/home/about-villa.jpg"
                  alt="Modern Termite-Free Home"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </section>

          {/* ============================================================
              4. OUR TERMITE CONTROL SERVICES (5-Card Grid)
             ============================================================ */}
          <section id="services">
            {/* Section Title with Side Lines */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] bg-[#b9ccb3] flex-1 max-w-[260px]" />
              <h2 className="text-[22px] sm:text-[25px] font-extrabold text-[#0f4d20] text-center">
                Our Termite Control Services
              </h2>
              <div className="h-[1px] bg-[#b9ccb3] flex-1 max-w-[260px]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {SERVICES_DATA.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href || "/services"}
                  className="rounded-xl overflow-hidden border border-[#cde0c5] bg-gradient-to-b from-white via-white to-[#edf7e8] shadow-2xs hover:shadow-md hover:border-[#86c766] transition flex flex-col items-center text-center pb-3.5 cursor-pointer group"
                >
                  {/* Top Image */}
                  <div className="relative w-full h-[106px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    {/* Overlapping Circular Green Icon Badge */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#239424] border-[3px] border-white shadow-md flex items-center justify-center group-hover:bg-[#166627] transition">
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Text */}
                  <div className="mt-6 px-2.5 flex-1 flex flex-col justify-between">
                    <h3 className="text-[14.5px] font-extrabold text-[#0e421d] leading-[1.2] whitespace-pre-line group-hover:text-[#166627] transition">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] text-[#2c5233] font-medium leading-[1.3] whitespace-pre-line">
                      {service.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ============================================================
              5. FOUR INFORMATION CARDS ROW (Signs, Methods, Safety, Warranty)
             ============================================================ */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {INFO_QUADS.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-[#cde0c5] bg-[#f4faef] shadow-2xs flex flex-col"
              >
                {/* Dark Forest Green Card Header */}
                <div className="bg-[#166627] text-white font-extrabold text-[14.5px] px-3.5 py-2 text-center">
                  {card.header}
                </div>

                {/* Split Body: Left Thumbnail + Right Checklist */}
                <div className="p-2.5 grid grid-cols-12 gap-2.5 items-center flex-1">
                  <div className="col-span-5 h-[112px] rounded-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ul className="col-span-7 space-y-1.5">
                    {card.items.map((item, i) => (
                      <GreenCheckBullet key={i} text={item} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* ============================================================
              6. OUR TERMITE TREATMENT PROCESS (5-Step Flow Bar)
             ============================================================ */}
          <section className="rounded-2xl bg-gradient-to-r from-[#e3f5d8] via-[#eaf7e2] to-[#ddf2d2] border border-[#c6e2b8] px-5 py-4 shadow-2xs">
            <h2 className="text-[21px] sm:text-[23px] font-extrabold text-[#0e4a1f] text-center mb-3.5">
              Our Termite Treatment Process
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1020px] mx-auto gap-4 md:gap-2">
              {PROCESS_STEPS.map((step, idx) => (
                <React.Fragment key={step.num}>
                  {/* Step Item */}
                  <div className="flex flex-col items-center text-center min-w-[130px]">
                    {/* Small Number Badge */}
                    <span className="w-5 h-5 rounded-full bg-[#166627] text-white text-[11px] font-bold flex items-center justify-center mb-1 shadow-xs">
                      {step.num}
                    </span>
                    {/* Step Icon */}
                    <div className="my-1">{step.icon}</div>
                    {/* Step Title */}
                    <span className="text-[13px] font-bold text-[#143d1d] leading-tight whitespace-pre-line">
                      {step.title}
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-[#166627]">
                      <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* ============================================================
              7. TWO-COLUMN SPLIT: WHY CHOOSE US & TERMITE COST
             ============================================================ */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Box: Why Choose Our Termite Professionals? */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#cde0c5] bg-white shadow-2xs flex flex-col">
              <div className="bg-[#166627] text-white font-extrabold text-[17px] sm:text-[18px] px-5 py-2.5">
                Why Choose Our Termite Professionals?
              </div>

              <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-12 items-center bg-gradient-to-r from-white via-[#f7fbf4] to-[#ebf5e6]">
                <ul className="sm:col-span-7 p-4 sm:p-5 space-y-2.5 z-10">
                  {[
                    "Experienced & Trained Technicians",
                    "Safe & Eco-Friendly Treatment",
                    "Advanced Techniques & Tools",
                    "Affordable & Transparent Pricing",
                    "Trusted by Thousands of Happy Customers",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-bold text-[#18391f]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#3ea629] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Happy Family Image on Right */}
                <div className="sm:col-span-5 h-[185px] sm:h-full relative">
                  <div className="hidden sm:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f7fbf4] to-transparent z-10" />
                  <img
                    src="/images/home/happy-family.jpg"
                    alt="Happy Termite-Free Family"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right Box: Termite Cost for Service */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#cde0c5] bg-white shadow-2xs flex flex-col">
              <div className="bg-[#166627] text-white font-extrabold text-[17px] sm:text-[18px] px-5 py-2.5">
                Termite Cost for Service
              </div>

              <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-12 items-center bg-gradient-to-r from-white via-[#f9fcf6] to-[#eef6e8]">
                <div className="sm:col-span-7 p-4 sm:p-5 z-10">
                  <p className="text-[14.5px] sm:text-[15px] font-bold text-[#18391f] leading-[1.4]">
                    Get the best value for your money with our affordable
                    termite control solutions.
                  </p>

                  {/* Gold Customized Quote Pill Button with Rupee Icon */}
                  <a
                    href="#quote"
                    className="mt-4 inline-flex items-center gap-3 bg-[#f5b82e] hover:bg-[#e5ab26] px-4 py-2 rounded-full shadow-md border border-[#dfa524] transition group"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#145826] text-[#f5b82e] flex items-center justify-center text-[20px] font-extrabold shrink-0">
                      ₹
                    </span>
                    <span className="text-left text-[13.5px] font-extrabold text-[#113819] leading-tight pr-2">
                      Contact us for a
                      <br />
                      Customized Quote
                    </span>
                  </a>
                </div>

                {/* Wooden Model House Image on Right */}
                <div className="sm:col-span-5 h-[185px] sm:h-full relative">
                  <div className="hidden sm:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f9fcf6] to-transparent z-10" />
                  <img
                    src="/images/home/cost-house-coins.jpg"
                    alt="Wooden House Model"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================
              8. OUR HAPPY CUSTOMERS SAY (3 Testimonials)
             ============================================================ */}
          <section id="reviews">
            <div className="flex items-center justify-center gap-4 mb-3.5">
              <div className="h-[1px] bg-[#b9ccb3] flex-1 max-w-[280px]" />
              <h2 className="text-[21px] sm:text-[24px] font-extrabold text-[#0f4d20] text-center">
                Our Happy Customers Say
              </h2>
              <div className="h-[1px] bg-[#b9ccb3] flex-1 max-w-[280px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-[#cfe2c8] p-3.5 shadow-2xs flex items-center gap-3.5"
                >
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#e2efe0] shrink-0"
                  />
                  <div className="text-[12.5px]">
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-0.5 text-[#f5b82e] text-[14px] mb-1">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <p className="text-[#233d29] font-medium leading-[1.35]">
                      {item.quote}
                    </p>
                    <p className="mt-1 font-extrabold text-[#11381a]">
                      {item.author}{" "}
                      {item.suffix && (
                        <span className="font-normal italic text-[#687d6b]">
                          {item.suffix}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================
              9. BOTTOM 3-COLUMN SECTION: LOCATIONS, FAQ, QUOTE FORM
             ============================================================ */}
          <section
            id="faq"
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Column 1: Our Service Locations (5 Cols) */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#cde0c5] bg-white shadow-2xs flex flex-col">
              <div className="bg-[#166627] text-white font-extrabold text-[16px] px-4 py-2">
                Our Service Locations
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-[12.5px] font-extrabold text-[#163a1e] text-center mb-2.5">
                  Professional Termite Control Services Across Major Cities
                </p>

                {/* 6 Cities Horizontal Thumbnail Row */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {CITIES.map((city, i) => (
                    <Link key={i} href={city.href || "/locations/" + city.name.toLowerCase()} className="group flex flex-col items-center text-center cursor-pointer">
                      <div className="w-full h-[76px] rounded-lg overflow-hidden border border-[#d6e5d0] shadow-2xs group-hover:border-[#166627] group-hover:shadow transition">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <span className="mt-1.5 text-[12px] font-extrabold text-[#163a1e] group-hover:text-[#166627] transition">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Frequently Asked Questions (4 Cols) */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white shadow-2xs flex flex-col">
              <div className="bg-[#166627] text-white font-extrabold text-[16px] px-4 py-2">
                Frequently Asked Questions
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between divide-y divide-[#e4eee0]">
                {FAQS.map((q, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-1.5 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-2 text-left text-[12.5px] font-bold text-[#193b20] hover:text-[#166627] transition"
                      >
                        <span>
                          {idx + 1}. {q}
                        </span>
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#166627] shrink-0 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#166627] shrink-0 stroke-[2.5]" />
                        )}
                      </button>
                      {isOpen && (
                        <p className="mt-1 text-[11.5px] text-[#3a5940] pl-4">
                          Our certified technicians use government-approved,
                          eco-friendly odorless treatments backed by long-term
                          service warranty.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Get a Free Quote Today Form (3 Cols) */}
            <div
              id="quote"
              className="lg:col-span-3 rounded-xl bg-[#155a27] p-3.5 text-white shadow-md flex flex-col justify-between"
            >
              <div className="text-center mb-2">
                <h3 className="text-[16px] font-extrabold leading-tight">
                  Get a Free Quote Today
                </h3>
                <p className="text-[10px] text-white/90 mt-0.5">
                  Fill in the form and our team will get back to you shortly.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-1.5 text-[#1b3921]"
              >
                <div className="bg-white rounded-md px-2.5 py-1">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full text-[11.5px] font-medium bg-transparent focus:outline-none placeholder:text-[#526b56]"
                  />
                </div>
                <div className="bg-white rounded-md px-2.5 py-1">
                  <input
                    type="tel"
                    placeholder="Your Mobile Number *"
                    className="w-full text-[11.5px] font-medium bg-transparent focus:outline-none placeholder:text-[#526b56]"
                  />
                </div>
                <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="w-full text-[11.5px] font-medium bg-transparent focus:outline-none placeholder:text-[#526b56]"
                  />
                  <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
                </div>
                <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-between">
                  <select
                    defaultValue=""
                    className="w-full text-[11.5px] font-medium bg-transparent focus:outline-none text-[#526b56] appearance-none"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="pre">Pre Construction</option>
                    <option value="post">Post Construction</option>
                    <option value="residential">Residential Termite Control</option>
                    <option value="commercial">Commercial Termite Control</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0 pointer-events-none" />
                </div>
                <div className="bg-white rounded-md px-2.5 py-1">
                  <input
                    type="text"
                    placeholder="Your Query / Message"
                    className="w-full text-[11.5px] font-medium bg-transparent focus:outline-none placeholder:text-[#526b56]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1.5 w-full bg-[#f5b82e] hover:bg-[#e5ab26] text-[#113819] font-extrabold text-[13.5px] py-2 rounded-full shadow flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Submit Enquiry</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* ==============================================================
            10. FOOTER (Trust Highlights Bar + Copyright Bar)
           ============================================================== */}
        <SiteFooter />
      </div>
    </div>
  );
}