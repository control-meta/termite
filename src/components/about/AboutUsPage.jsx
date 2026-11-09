"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  Calendar,
  Home,
  Building2,
  MapPin,
  Users,
  Settings,
  Leaf,
  Search,
  Clock,
  Award,
  FileText,
  Target,
  Eye,
  Gem,
  ClipboardCheck,
} from "lucide-react";
import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.25-5.01-4.45-.15-.2-1.2-1.59-1.2-3.04 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.49.22.57.35.07.12.07.72-.17 1.4z" />
  </svg>
);

/* Our Growth Journey Ascending Step Illustration */
const GrowthJourneyGraphic = () => (
  <div className="relative bg-[#f3faf0] border border-[#cfe3c6] rounded-xl p-3 flex flex-col justify-between h-full min-h-[155px]">
    <div className="text-center">
      <span className="text-[12px] font-extrabold text-[#11421d] block leading-tight">
        Our
      </span>
      <span className="text-[13px] font-extrabold text-[#11421d] block leading-tight">
        Growth Journey
      </span>
    </div>

    {/* SVG Stepped Arrow & Person */}
    <svg viewBox="0 0 240 95" className="w-full h-20 my-1 overflow-visible">
      {/* Stepped Green Stairs */}
      <path
        d="M15 80 H60 V62 H110 V44 H160 V26 H215"
        fill="none"
        stroke="#278a28"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upward Curved Arrow */}
      <path
        d="M25 65 Q110 20 205 12"
        fill="none"
        stroke="#4bb534"
        strokeWidth="3"
        strokeDasharray="3 3"
      />
      <polygon points="205,7 216,12 205,17" fill="#4bb534" />
      {/* Stepping Person Silhouette */}
      <circle cx="66" cy="30" r="5" fill="#134e1f" />
      <path
        d="M66 36 L62 50 L54 61 M62 50 L72 60 M66 40 L76 45 M66 40 L56 46"
        stroke="#134e1f"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>

    {/* 4 Milestone Columns */}
    <div className="grid grid-cols-4 gap-1 text-center border-t border-[#d5e6ce] pt-1.5">
      <div>
        <span className="block text-[11px] font-black text-[#124d20]">2015</span>
        <span className="block text-[8.5px] text-[#2c4c32] font-semibold leading-tight">
          Started
          <br />
          Operations
        </span>
      </div>
      <div>
        <span className="block text-[11px] font-black text-[#124d20]">2018</span>
        <span className="block text-[8.5px] text-[#2c4c32] font-semibold leading-tight">
          Expanded
          <br />
          Services
        </span>
      </div>
      <div>
        <span className="block text-[11px] font-black text-[#124d20]">2021</span>
        <span className="block text-[8.5px] text-[#2c4c32] font-semibold leading-tight">
          Pan-India
          <br />
          Reach
        </span>
      </div>
      <div>
        <span className="block text-[11px] font-black text-[#124d20]">2024</span>
        <span className="block text-[8.5px] text-[#2c4c32] font-semibold leading-tight">
          Trusted by
          <br />
          Thousands
        </span>
      </div>
    </div>
  </div>
);

/* Section Heading with Right Horizontal Line */
const LineSectionHeading = ({ title }) => (
  <div className="flex items-center gap-3 mb-2.5">
    <h2 className="text-[18px] sm:text-[20px] font-extrabold text-[#0f4d20] shrink-0">
      {title}
    </h2>
    <div className="h-[1px] bg-[#c5d9be] flex-1" />
  </div>
);

/* Green Check Bullet Item */
const GreenBullet = ({ text }) => (
  <li className="flex items-start gap-2 text-[12px] font-semibold text-[#1b3921] leading-[1.35]">
    <span className="w-4 h-4 rounded-full bg-[#369c27] text-white flex items-center justify-center shrink-0 mt-[1px]">
      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
    </span>
    <span>{text}</span>
  </li>
);

export function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const leftFaqs = [
    {
      q: "1. What are the signs of termite infestation?",
      a: "Common signs include mud tubes on walls, hollow-sounding wooden items, discarded insect wings near windows, clicking sounds inside drywall, and bubbling or peeling paint.",
    },
    {
      q: "2. How do Termite Professionals control termites?",
      a: "We conduct detailed inspections, locate hidden nests, and deploy government-approved non-repellent termiticides that create continuous chemical protective barriers and eliminate entire colonies.",
    },
    {
      q: "3. Is the treatment safe for my family and pets?",
      a: "Yes. We strictly use government-approved, low-toxicity, odorless, eco-friendly formulations that are completely safe for children, seniors, and pets when applied by our certified technicians.",
    },
    {
      q: "4. How long does the treatment take?",
      a: "A standard residential treatment typically takes between 2 to 4 hours depending on the property size and severity of infestation.",
    },
  ];

  const rightFaqs = [
    {
      q: "5. How much does termite control cost?",
      a: "Pricing depends on your property area (square feet), infestation level, and whether it is pre-construction, post-construction, or an annual maintenance plan. We provide free upfront quotes.",
    },
    {
      q: "6. Do you offer a service guarantee?",
      a: "Yes! We provide official service warranty certificates ranging from 1 to 5 years (and up to 10 years for pre-construction treatments) with free re-treatments if termites ever reappear.",
    },
    {
      q: "7. What is the best time for termite treatment?",
      a: "Termite treatment can be done year-round. However, early detection before monsoon season prevents extensive seasonal swarmers from nesting and expanding.",
    },
    {
      q: "8. How can I book a termite control service?",
      a: "Simply call us at +91 92203 12345, reach out via WhatsApp, or submit your details through our contact form. Our technician will schedule a convenient inspection slot.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        {/* 1. UNIFIED SITE HEADER */}
        <SiteHeader active="about" />

      {/* 2. HERO BANNER WITH CURVED SWOOSH */}
      <section className="relative bg-[#0f4d1e] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 px-5 sm:px-8 py-7 z-10">
            <p className="text-[12px] text-white/85 font-semibold mb-2 flex items-center gap-1.5">
              <Link href="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-[#a6f394]">About Us</span>
            </p>
            <h1 className="text-[30px] sm:text-[38px] lg:text-[42px] font-black leading-[1.1] tracking-tight">
              About Termite Professionals
            </h1>
            <p className="mt-2.5 text-[14.5px] sm:text-[16px] text-white/95 font-semibold max-w-[540px] leading-[1.4]">
              Your Trusted Partner for Safe, Effective and Long-Lasting Termite Control Solutions Across India.
            </p>

            {/* 4 Hero Icon Badges */}
            <div className="mt-6 grid grid-cols-4 gap-2 max-w-[480px] pt-4 border-t border-white/20">
              {[
                { icon: ShieldCheck, label: "Professional\nService" },
                { icon: Leaf, label: "Safe &\nEco-Friendly" },
                { icon: Users, label: "Trained\nExperts" },
                { icon: Clock, label: "On-Time\nService" },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center px-1 ${
                      i < 3 ? "border-r border-white/20" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6 text-[#80e563] mb-1" />
                    <span className="text-[11px] sm:text-[12px] font-bold leading-tight whitespace-pre-line">
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Technician Image with Green Curved Swoosh */}
          <div className="lg:col-span-5 relative h-[250px] sm:h-[300px]">
            {/* Diagonal Green Ribbon Divider */}
            <div
              className="hidden lg:block absolute inset-y-0 -left-12 w-24 bg-[#47b035] z-10"
              style={{
                clipPath: "polygon(60% 0, 100% 0, 40% 100%, 0% 100%)",
              }}
            />
            <img
              src="/images/about/about-hero.jpg"
              alt="Termite Professionals Technician"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* MAIN BODY CONTAINER */}
      <div className="px-4 sm:px-7 py-6 space-y-6">
        {/* 3. ROW 1: WHO WE ARE | OUR MISSION, VISION & VALUES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 6 Cols: Who We Are */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <LineSectionHeading title="Who We Are" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
              <div className="sm:col-span-7">
                <p className="text-[12.5px] sm:text-[13px] leading-[1.5] text-[#213d27] font-medium">
                  Termite Professionals is a dedicated pest control organization
                  specializing exclusively in advanced termite eradication and
                  preventive barriers. With a team of certified exterminators, modern
                  drill-and-inject technology, and government-approved eco-safe formulations,
                  we protect residential homes, luxury villas, commercial towers,
                  and industrial facilities with guaranteed results.
                </p>
                <div className="mt-3.5 flex items-center gap-3">
                  <Link
                    href="/services/residential"
                    className="inline-flex items-center gap-1.5 bg-[#19672b] hover:bg-[#124d20] text-white text-[12.5px] font-bold px-4 py-2 rounded-full shadow-sm transition"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-[#eef7ea] hover:bg-[#dff0d8] text-[#145a27] text-[12.5px] font-bold px-4 py-2 rounded-full border border-[#b8dcaf] transition"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
              <div className="sm:col-span-5 h-[175px] rounded-xl overflow-hidden shadow-xs border border-[#cde0c5]">
                <img
                  src="/images/about/who-we-are.jpg"
                  alt="Modern Termite Free Villa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Our Mission, Vision & Values */}
          <div className="lg:col-span-6 rounded-xl bg-[#eef7ea] border border-[#cde0c5] p-4">
            <h2 className="text-[18px] sm:text-[19px] font-extrabold text-[#0f4d20] mb-3">
              Our Mission, Vision &amp; Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 divide-y sm:divide-y-0 sm:divide-x divide-[#cfe2c8]">
              {/* Our Mission */}
              <div className="pr-1">
                <div className="flex items-center gap-1.5 font-extrabold text-[13.5px] text-[#113d1b] mb-1.5">
                  <Target className="w-5 h-5 text-[#278a28] shrink-0" />
                  <span>Our Mission</span>
                </div>
                <p className="text-[11.5px] text-[#223d27] leading-[1.42]">
                  To provide safe, effective and long-lasting termite control
                  solutions that permanently safeguard structures and families.
                </p>
              </div>

              {/* Our Vision */}
              <div className="sm:pl-3 pr-1 pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 font-extrabold text-[13.5px] text-[#113d1b] mb-1.5">
                  <Eye className="w-5 h-5 text-[#278a28] shrink-0" />
                  <span>Our Vision</span>
                </div>
                <p className="text-[11.5px] text-[#223d27] leading-[1.42]">
                  To be India’s most trusted and technologically advanced termite
                  management brand, celebrated for honesty, safety, and warranties.
                </p>
              </div>

              {/* Our Values */}
              <div className="sm:pl-3 pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 font-extrabold text-[13.5px] text-[#113d1b] mb-1.5">
                  <Gem className="w-5 h-5 text-[#278a28] shrink-0" />
                  <span>Our Values</span>
                </div>
                <ul className="space-y-1">
                  {[
                    "Customer First",
                    "Safety & Hygiene",
                    "Integrity & Pricing",
                    "Certified Quality",
                    "Eco-Friendly Formulations",
                  ].map((v, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#17381e]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[#369c27] text-white flex items-center justify-center shrink-0">
                        <Check className="w-2 h-2 stroke-[3.5]" />
                      </span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ROW 2: OUR JOURNEY | WHY CHOOSE TERMITE PROFESSIONALS? */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 5 Cols: Our Journey */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <LineSectionHeading title="Our Journey" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center flex-1">
              <div className="sm:col-span-6 text-[12px] leading-[1.5] text-[#213d27] font-medium">
                Termite Professionals started with a simple, resolute mission: to provide
                flawless, scientifically grounded termite control that homeowners and
                builders can depend upon for decades. Today, with verified technicians
                and specialized equipment across metropolitan hubs, we proudly protect
                over 1,00,000 satisfied customers.
              </div>
              <div className="sm:col-span-6 h-full">
                <GrowthJourneyGraphic />
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Why Choose Termite Professionals? */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <LineSectionHeading title="Why Choose Termite Professionals?" />
            <div className="rounded-xl bg-[#f3faef] border border-[#cde0c5] p-4 grid grid-cols-2 sm:grid-cols-6 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-[#d5e6ce] flex-1 items-center">
              {[
                {
                  icon: <Users className="w-6 h-6 text-[#278a28]" />,
                  label: "Experienced &\nTrained\nProfessionals",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#278a28]" />,
                  label: "Safe &\nEco-Friendly\nTreatments",
                },
                {
                  icon: <Settings className="w-6 h-6 text-[#278a28]" />,
                  label: "Customized\nTermite Control\nPlans",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#278a28]" />,
                  label: "Quick\nResponse &\nOn-Time Service",
                },
                {
                  icon: (
                    <span className="w-6 h-6 rounded-full bg-[#278a28] text-white font-black text-[13px] flex items-center justify-center">
                      ₹
                    </span>
                  ),
                  label: "Transparent &\nAffordable\nPricing",
                },
                {
                  icon: <Award className="w-6 h-6 text-[#278a28]" />,
                  label: "100%\nCustomer\nSatisfaction",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-1.5 pt-2 sm:pt-0"
                >
                  <div className="mb-1.5">{item.icon}</div>
                  <span className="text-[10.5px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ROW 3: OUR EXPERTISE & SERVICES | INDUSTRIES WE SERVE */}
        <section
          id="services"
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left 6 Cols: Our Expertise & Services */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <LineSectionHeading title="Our Expertise & Services" />
              <p className="text-[12px] text-[#223d27] font-medium mb-3">
                We offer a complete range of specialized termite control services
                backed by long-term warranty coverage:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { title: "Residential\nTermite Control", href: "/services/residential" },
                { title: "Commercial\nTermite Control", href: "/services/commercial" },
                { title: "Pre-Construction\nTermite Treatment", href: "/services/pre-construction" },
                { title: "Post-Construction\nTermite Treatment", href: "/services/post-construction" },
                { title: "Termite AMC\nPlans", href: "/services/amc" },
              ].map((srv, i) => (
                <Link
                  key={i}
                  href={srv.href}
                  className="rounded-xl bg-[#f2faee] hover:bg-[#e4f3de] border border-[#cde0c5] p-3 flex flex-col items-center text-center justify-center transition shadow-2xs hover:shadow-xs group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#dff2d8] group-hover:bg-[#c9e8bf] text-[#196929] flex items-center justify-center mb-1.5 transition">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-extrabold text-[#143d1d] leading-tight whitespace-pre-line">
                    {srv.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Industries We Serve */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <LineSectionHeading title="Industries We Serve" />
              <p className="text-[12px] text-[#223d27] font-medium mb-3">
                Tailored protection programs designed for critical commercial and
                institutional requirements:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                {
                  title: "Residential",
                  sub: "(Homes & Apartments)",
                  img: "/images/about/industry-residential.jpg",
                },
                {
                  title: "Commercial",
                  sub: "(Offices & Buildings)",
                  img: "/images/about/industry-commercial.jpg",
                },
                {
                  title: "Hospitality",
                  sub: "(Hotels & Resorts)",
                  img: "/images/about/industry-hospitality.jpg",
                },
                {
                  title: "Industrial",
                  sub: "(Factories & Warehouses)",
                  img: "/images/about/industry-industrial.jpg",
                },
                {
                  title: "Institutional",
                  sub: "(Schools, Hospitals, etc.)",
                  img: "/images/about/industry-institutional.jpg",
                },
              ].map((ind, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-white border border-[#cde0c5] flex flex-col items-center text-center pb-2 shadow-2xs"
                >
                  <div className="w-full h-[58px]">
                    <img
                      src={ind.img}
                      alt={ind.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-1.5 text-[11px] font-extrabold text-[#143d1d] leading-none">
                    {ind.title}
                  </span>
                  <span className="text-[9px] text-[#3a5940] font-medium leading-tight mt-0.5 px-1">
                    {ind.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ROW 4: OUR SERVICE PROCESS | OUR SAFETY & QUALITY COMMITMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 6 Cols: Our Service Process – How We Work */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <LineSectionHeading title="Our Service Process – How We Work" />
            <div className="rounded-xl bg-[#f3faef] border border-[#cde0c5] p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 flex-1">
              {[
                {
                  n: 1,
                  label: "Inspection &\nAssessment",
                  icon: <Search className="w-5 h-5 text-[#196929]" />,
                },
                {
                  n: 2,
                  label: "Infestation\nDiagnosis",
                  icon: <FileText className="w-5 h-5 text-[#196929]" />,
                },
                {
                  n: 3,
                  label: "Customized\nPlan",
                  icon: <Settings className="w-5 h-5 text-[#196929]" />,
                },
                {
                  n: 4,
                  label: "Precision\nTreatment",
                  icon: <ShieldCheck className="w-5 h-5 text-[#196929]" />,
                },
                {
                  n: 5,
                  label: "Warranty &\nFollow-Up",
                  icon: <Calendar className="w-5 h-5 text-[#196929]" />,
                },
              ].map((s, i, arr) => (
                <React.Fragment key={s.n}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-[70px]">
                    <span className="w-5 h-5 rounded-full bg-[#278a28] text-white text-[11px] font-bold flex items-center justify-center mb-1">
                      {s.n}
                    </span>
                    <div className="my-1">{s.icon}</div>
                    <span className="text-[10.5px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                      {s.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden sm:block w-4 h-4 text-[#2b6e34] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Our Safety & Quality Commitment */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <LineSectionHeading title="Our Safety & Quality Commitment" />
            <div className="rounded-xl bg-[#f3faef] border border-[#cde0c5] p-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center flex-1">
              <div className="sm:col-span-5 h-[125px] rounded-lg overflow-hidden">
                <img
                  src="/images/about/safety-commitment.jpg"
                  alt="Safety & Quality Commitment"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="sm:col-span-7 space-y-1.5">
                {[
                  "Use of CIB-approved and odorless treatment products",
                  "Background-verified & rigorously trained technicians",
                  "Child, pet and senior-safe eco-friendly formulations",
                  "Strict protocol adherence with zero furniture damage",
                  "Written warranty certificate with free re-visits",
                ].map((c, i) => (
                  <GreenBullet key={i} text={c} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. ROW 5: MEET OUR TEAM | CERTIFICATIONS, LICENCES & CREDENTIALS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 6 Cols: Meet Our Team */}
          <div className="lg:col-span-6 rounded-xl bg-white border border-[#cde0c5] p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-5 h-[155px] rounded-lg overflow-hidden">
              <img
                src="/images/about/team.jpg"
                alt="Termite Professionals Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7">
              <h3 className="text-[17.5px] font-extrabold text-[#0f4d20]">
                Meet Our Expert Team
              </h3>
              <p className="mt-1 text-[11.5px] text-[#223d27] leading-[1.4]">
                Our greatest asset is our cadre of certified field entomologists and
                experienced application specialists dedicated to solving termite issues
                safely and permanently.
              </p>
              <ul className="mt-2.5 space-y-1">
                {[
                  "Certified pest control specialists",
                  "Continuous quarterly technical training",
                  "Customer-first service etiquette & hygiene",
                ].map((t, i) => (
                  <GreenBullet key={i} text={t} />
                ))}
              </ul>
            </div>
          </div>

          {/* Right 6 Cols: Certifications, Licences & Credentials */}
          <div className="lg:col-span-6 rounded-xl bg-[#f3faef] border border-[#cde0c5] p-4 flex flex-col justify-between">
            <h3 className="text-[17.5px] font-extrabold text-[#0f4d20] text-center mb-2.5">
              Certifications, Licences &amp; Credentials
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-[#cfe2c8] flex-1 items-center">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-[#278a28]" />,
                  label: "Govt-Licensed\nOperator",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#278a28]" />,
                  label: "Certified\nSpecialists",
                },
                {
                  icon: <Award className="w-6 h-6 text-[#278a28]" />,
                  label: "ISO-Compliant\nQuality",
                },
                {
                  icon: <ClipboardCheck className="w-6 h-6 text-[#278a28]" />,
                  label: "Safety\nCompliant",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-[#278a28]" />,
                  label: "Eco-Friendly\nSolutions",
                },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-1.5 pt-2 sm:pt-0"
                >
                  <div className="mb-1.5">{cert.icon}</div>
                  <span className="text-[10.5px] font-extrabold text-[#16381e] leading-tight whitespace-pre-line">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OUR SERVICE AREAS FULL-WIDTH GREEN BANNER */}
        <section
          id="locations"
          className="rounded-xl bg-gradient-to-r from-[#115520] via-[#186828] to-[#1d782f] text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#ffd84d]" />
            </div>
            <div>
              <h3 className="text-[18px] font-extrabold leading-tight">
                Our Service Areas
              </h3>
              <p className="text-[12px] text-white/90">
                On-demand termite control across major metropolitan hubs:
              </p>
            </div>
          </div>

          {/* 6 Circular City Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              { name: "Bangalore", href: "/locations/bangalore" },
              { name: "Mumbai", href: "/locations/mumbai" },
              { name: "Pune", href: "/locations/pune" },
              { name: "Goa", href: "/locations/goa" },
              { name: "Delhi", href: "/locations/delhi" },
              { name: "Noida", href: "/locations/noida" },
            ].map((city, i) => (
              <Link
                key={i}
                href={city.href}
                className="flex flex-col items-center text-center hover:opacity-90 transition group"
              >
                <div className="w-11 h-11 rounded-full bg-white text-[#156324] group-hover:scale-105 flex items-center justify-center shadow-xs border-2 border-[#7be362] transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="mt-1 text-[11.5px] font-extrabold text-white">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/locations/bangalore"
            className="bg-white hover:bg-[#f0f7ee] text-[#124d20] font-extrabold text-[12px] px-4 py-2.5 rounded-full shadow flex items-center gap-1.5 transition"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* 9. ROW 7: OUR ACHIEVEMENTS | CUSTOMER TESTIMONIALS */}
        <section
          id="reviews"
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left 5 Cols: Our Achievements */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <LineSectionHeading title="Our Achievements" />
            <div className="rounded-xl bg-[#f3faef] border border-[#cde0c5] p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-[#cfe2c8] flex-1 items-center text-center">
              {[
                {
                  icon: <Users className="w-6 h-6 text-[#278a28] mx-auto" />,
                  num: "1,00,000+",
                  sub: "Happy\nCustomers",
                },
                {
                  icon: <Award className="w-6 h-6 text-[#278a28] mx-auto" />,
                  num: "12+",
                  sub: "Years of\nExperience",
                },
                {
                  icon: <Building2 className="w-6 h-6 text-[#278a28] mx-auto" />,
                  num: "50,000+",
                  sub: "Properties\nProtected",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#278a28] mx-auto" />,
                  num: "100%",
                  sub: "Satisfaction\nGuarantee",
                },
              ].map((stat, i) => (
                <div key={i} className="px-1 pt-2 sm:pt-0">
                  {stat.icon}
                  <span className="block mt-1 text-[15px] font-black text-[#113d1b]">
                    {stat.num}
                  </span>
                  <span className="block text-[10.5px] font-bold text-[#2c4c32] leading-tight whitespace-pre-line">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 7 Cols: Customer Testimonials */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <LineSectionHeading title="Customer Testimonials" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch flex-1">
              {/* Review 1 */}
              <div className="sm:col-span-5 rounded-xl bg-white border border-[#cde0c5] p-3 flex items-center gap-3 shadow-2xs">
                <img
                  src="/images/about/avatar-priya.jpg"
                  alt="Priya Sharma"
                  className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#278a28]"
                />
                <div className="text-[10.5px] leading-[1.35]">
                  <p className="text-[#223d27] italic">
                    “Excellent termite control service! The team was on time, very
                    thorough, and didn’t leave any odor or residue in our flat.”
                  </p>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-[#f5b82e] text-[11px]">★★★★★</span>
                    <span className="font-extrabold text-[#11381a]">
                      – Priya Sharma, Mumbai
                    </span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="sm:col-span-5 rounded-xl bg-white border border-[#cde0c5] p-3 flex items-center gap-3 shadow-2xs">
                <img
                  src="/images/about/avatar-rohit.jpg"
                  alt="Rohit Verma"
                  className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#278a28]"
                />
                <div className="text-[10.5px] leading-[1.35]">
                  <p className="text-[#223d27] italic">
                    “Very reliable and safe treatment. Saved our kitchen cabinets
                    from severe termite damage. Great after-sales warranty support.”
                  </p>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-[#f5b82e] text-[11px]">★★★★★</span>
                    <span className="font-extrabold text-[#11381a]">
                      – Rohit Verma, Pune
                    </span>
                  </div>
                </div>
              </div>

              {/* Google View All Reviews Box */}
              <div className="sm:col-span-2 rounded-xl bg-[#f7faf5] border border-[#cde0c5] p-2.5 flex flex-col items-center justify-center text-center">
                <span className="text-[26px] font-black text-[#4285F4] leading-none mb-1">
                  G
                </span>
                <span className="text-[10px] font-extrabold text-[#156324] mb-1">
                  4.8 ★★★★★
                </span>
                <Link
                  href="/contact"
                  className="bg-[#2b8729] hover:bg-[#20691f] text-white text-[9.5px] font-bold px-2.5 py-1 rounded-md leading-tight transition"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FREQUENTLY ASKED QUESTIONS (FAQs) */}
        <section>
          <LineSectionHeading title="Frequently Asked Questions (FAQs)" />
          <div className="rounded-xl bg-white border border-[#cde0c5] p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <div className="divide-y divide-[#e6f0e4]">
              {leftFaqs.map((faq, idx) => {
                const key = `L-${idx}`;
                const isOpen = openFaq === key;
                return (
                  <div key={key} className="py-2">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-2 text-left text-[12px] font-bold text-[#17381e] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#166627] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#166627] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-1.5 text-[11px] text-[#3a5940] pl-3 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="divide-y divide-[#e6f0e4]">
              {rightFaqs.map((faq, idx) => {
                const key = `R-${idx}`;
                const isOpen = openFaq === key;
                return (
                  <div key={key} className="py-2">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-2 text-left text-[12px] font-bold text-[#17381e] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#166627] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#166627] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-1.5 text-[11px] text-[#3a5940] pl-3 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* 11. PRE-FOOTER CTA SECTION */}
      <section className="mx-4 sm:mx-7 mb-2 bg-gradient-to-r from-[#0e4e1d] via-[#156327] to-[#19702d] text-white px-5 sm:px-7 py-4 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/15 border-2 border-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold leading-tight">
                Get a Safe, Termite-Free Home Today!
              </h3>
              <p className="text-[12px] text-white/90">
                Choose Termite Professionals for certified, reliable, and guaranteed protection.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="tel:+919220312345"
              className="flex items-center gap-2 bg-white text-[#124d20] font-extrabold text-[12.5px] px-4 py-2 rounded-full shadow hover:bg-white/95 transition"
            >
              <Phone className="w-4 h-4 fill-current text-[#166627]" />
              <div className="leading-tight text-left">
                <span className="block text-[10px] font-bold">Call Now</span>
                <span>+91 92203 12345</span>
              </div>
            </a>

            <a
              href="https://wa.me/919220312345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-[#124d20] font-extrabold text-[13px] px-4 py-2.5 rounded-full shadow hover:bg-white/95 transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25a233]" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-gradient-to-b from-[#f8d748] to-[#e6b822] hover:from-[#eec830] hover:to-[#d8a815] text-[#1b2b12] font-extrabold text-[13px] px-4 py-2.5 rounded-full shadow transition"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. UNIFIED HOMEPAGE FOOTER */}
      <SiteFooter />
      </div>
    </div>
  );
}

export default AboutUsPage;

