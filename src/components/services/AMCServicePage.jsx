"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Check,
  ShieldCheck,
  Calendar,
  Wrench,
  Home,
  Headphones,
  Award,
  Users,
  Settings,
  Leaf,
  Handshake
} from "lucide-react";
import {
  WhatsAppIcon,
  ServiceNavbar,
  HeroQuoteForm,
  PillSectionHeader,
  CheckItem,
  FaqBox,
  SkylineBand
, SiteHeader, SiteFooter } from "./shared";

export function AMCServicePage() {
  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        <SiteHeader active="services" />

      {/* HERO SECTION */}
      <section className="relative bg-[#eef5ea] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/amc-hero.jpg"
            alt="Termite AMC Technician"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/90 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            <h1 className="text-[30px] sm:text-[38px] font-extrabold leading-[1.08] tracking-tight">
              <span className="block text-[#0f5b24]">Termite Annual</span>
              <span className="block text-[#d61f1f]">Maintenance</span>
              <span className="block text-[#d61f1f]">Service Plan (AMC)</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16.5px] font-extrabold text-[#12331a] leading-snug">
              Year-Round Termite Protection
              <br />
              for Your Property
            </p>

            {/* 3 Feature Icons */}
            <div className="mt-4 flex items-center gap-4 sm:gap-6 max-w-[430px]">
              <div className="flex flex-col items-center text-center flex-1">
                <ShieldCheck className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Continuous
                  <br />
                  Termite Protection
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Calendar className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Scheduled
                  <br />
                  Inspections
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Wrench className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Preventive
                  <br />
                  Treatment &amp; Care
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919220312345"
                className="flex items-center gap-2 bg-[#df2020] hover:bg-[#c01818] text-white font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now - +91 92203 12345</span>
              </a>
              <a
                href="https://wa.me/919220312345"
                className="flex items-center gap-2 bg-[#43b02a] hover:bg-[#369620] text-white font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 flex justify-end">
            <HeroQuoteForm
              title="Get a Free Inspection"
              thirdFieldPlaceholder="Property Type"
              thirdFieldIcon="home"
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#e7f4e2] border-y border-[#cde2c4] px-5 py-2.5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="flex items-center justify-center gap-2.5">
          <Users className="w-7 h-7 text-[#186826]" />
          <div className="text-[12px] leading-tight">
            <span className="block font-extrabold text-[13.5px]">1,00,000+</span>
            <span className="text-[#2c4c32] font-semibold">Happy Customers</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Award className="w-7 h-7 text-[#186826]" />
          <div className="text-[12px] leading-tight">
            <span className="block font-extrabold text-[13.5px]">12-Month</span>
            <span className="text-[#2c4c32] font-semibold">Service Warranty</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Calendar className="w-7 h-7 text-[#186826]" />
          <div className="text-[12px] leading-tight">
            <span className="block font-extrabold text-[13.5px]">Annual</span>
            <span className="text-[#2c4c32] font-semibold">Maintenance Plan</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Headphones className="w-7 h-7 text-[#186826]" />
          <span className="font-extrabold text-[13.5px]">24/7 Support</span>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="px-4 sm:px-6 py-4 space-y-4">
        {/* ABOUT + WHY CHOOSE AMC + IMAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f4d20] leading-tight">
              About Our Termite Annual Maintenance Service Plan
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.45] text-[#223d27] font-medium">
              Our Termite Annual Maintenance Service Plan (AMC) provides
              continuous and proactive protection against termite threats. With
              regular inspections, preventive treatments, and expert monitoring,
              we keep your property termite-free all year round, ensuring
              long-term safety, structural strength, and peace of mind.
            </p>
            <a
              href="#know-more"
              className="mt-3 inline-flex items-center gap-1.5 bg-[#38a128] hover:bg-[#2c851e] text-white text-[12.5px] font-bold px-4 py-1.5 rounded-full shadow-xs"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-4 bg-[#eaf6e5] border border-[#cde3c4] rounded-xl p-3.5">
            <h3 className="text-[15.5px] font-extrabold text-[#0f4d20] mb-2">
              Why Choose a Termite AMC Plan?
            </h3>
            <ul className="space-y-1.5">
              {[
                "Year-round termite protection",
                "Early detection of termite activity",
                "Preventive treatment & re-treatment",
                "Extends the life of your property",
                "Cost-effective and hassle-free",
                "Priority support & timely service",
              ].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[195px] rounded-xl overflow-hidden shadow-xs">
            <img
              src="/images/services/amc-building.jpg"
              alt="Termite Protected Modern Property"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR COMPLETE TERMITE CONTROL SOLUTIONS (4 Cards) */}
        <section>
          <PillSectionHeader title="Our Complete Termite Control Solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              {
                title: "Pre-Construction\nTermite Control >",
                desc: "Build a strong, termite-resistant foundation from day one.",
                btn: "Explore Pre-Construction",
                img: "/images/services/amc-sol-1.jpg",
              },
              {
                title: "Post-Construction\nTermite Control >",
                desc: "Eliminate existing termites and prevent future infestations.",
                btn: "Explore Post-Construction",
                img: "/images/services/amc-sol-2.jpg",
              },
              {
                title: "Residential\nTermite Control >",
                desc: "Safe and effective termite protection for your home.",
                btn: "Explore Residential Service",
                img: "/images/services/amc-sol-3.jpg",
              },
              {
                title: "Commercial\nTermite Control >",
                desc: "Reliable termite control solutions for offices, warehouses and businesses.",
                btn: "Explore Commercial Service",
                img: "/images/services/amc-sol-4.jpg",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#cde2c4] bg-[#f2faee] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="relative h-[105px]">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-4 left-3 w-9 h-9 rounded-full bg-[#196929] border-2 border-white text-white flex items-center justify-center shadow">
                      <Home className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="pt-5 px-3 pb-2 text-center">
                    <h3 className="text-[14px] font-extrabold text-[#103d1a] leading-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] text-[#2c4932] leading-tight">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div className="px-3 pb-3 text-center">
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 bg-[#2b8729] hover:bg-[#1f691e] text-white text-[11px] font-bold px-3.5 py-1 rounded-full"
                  >
                    <span>{card.btn}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR TERMITE ANNUAL MAINTENANCE PLAN COVERS (6 Cards) */}
        <section>
          <PillSectionHeader title="Our Termite Annual Maintenance Plan Covers" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              {
                title: "Periodic Termite\nInspections",
                img: "/images/services/amc-cov-1.jpg",
              },
              {
                title: "Preventive\nTreatment",
                img: "/images/services/amc-cov-2.jpg",
              },
              {
                title: "Termite\nMonitoring",
                img: "/images/services/amc-cov-3.jpg",
              },
              {
                title: "Re-treatment\n(as required)",
                img: "/images/services/amc-cov-4.jpg",
              },
              {
                title: "Detailed Service\nReports",
                img: "/images/services/amc-cov-5.jpg",
              },
              {
                title: "Priority Support\n& Reminders",
                img: "/images/services/amc-cov-6.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#cde2c4] bg-[#f2faee] flex flex-col justify-between text-center pb-2.5"
              >
                <div className="h-[82px]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="mt-2 px-1.5 text-[12px] font-extrabold text-[#113d1b] leading-tight whitespace-pre-line">
                  {item.title}
                </h4>
                <div className="mt-2">
                  <a
                    href="#service"
                    className="inline-flex items-center gap-1 bg-[#2b8729] text-white text-[10.5px] font-bold px-3 py-1 rounded-full"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE TERMITE PROFESSIONALS BANNER */}
        <section className="rounded-xl overflow-hidden bg-[#125b22] text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-9 p-4 sm:p-5">
            <h2 className="text-[19px] font-extrabold mb-3">
              Why Choose Termite Professionals?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 divide-x divide-white/20">
              {[
                { icon: ShieldCheck, label: "Experienced\nTermite Control\nExperts" },
                { icon: Settings, label: "Customized\nAMC Plans" },
                { icon: Leaf, label: "Safe & Responsible\nMethods" },
                { icon: Handshake, label: "Transparent\nPricing" },
                { icon: Headphones, label: "Dedicated\nSupport" },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center px-2">
                    <Icon className="w-6 h-6 text-[#80e563] mb-1.5" />
                    <span className="text-[11.5px] font-semibold leading-tight whitespace-pre-line">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3 h-[135px] lg:h-full">
            <img
              src="/images/services/comm-conference.jpg"
              alt="Modern Property"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR TERMITE AMC SERVICE PROCESS (4 Steps) */}
        <section>
          <PillSectionHeader title="Our Termite AMC Service Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                n: 1,
                title: "Initial Inspection &\nRisk Assessment",
                desc: "Check for termite activity and identify vulnerable areas.",
              },
              {
                n: 2,
                title: "Customized AMC Plan",
                desc: "Create an annual maintenance plan as per your property needs.",
              },
              {
                n: 3,
                title: "Scheduled Maintenance",
                desc: "Conduct periodic inspections and preventive treatments.",
              },
              {
                n: 4,
                title: "Ongoing Support",
                desc: "Provide re-treatment (if required) and ensure continuous protection.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative rounded-xl bg-[#ecf7e7] border border-[#cde2c4] p-3 text-center"
              >
                <span className="w-6 h-6 rounded-full bg-[#196929] text-white font-extrabold text-[12px] inline-flex items-center justify-center mb-1">
                  {s.n}
                </span>
                <h4 className="text-[13px] font-extrabold text-[#113d1b] leading-tight whitespace-pre-line">
                  {s.title}
                </h4>
                <p className="mt-1 text-[11.5px] text-[#2c4932] leading-tight">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM 3 COLUMNS: CLIENTS SAY, FAQ, ENSURE PROTECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Col 1: What Our Clients Say */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white shadow-xs flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              What Our Clients Say
            </div>
            <div className="p-4 flex-1 flex items-center gap-3 relative">
              <img
                src="/images/services/comm-avatar.jpg"
                alt="Rahul Mehta"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#186929] shrink-0"
              />
              <div className="text-[12px]">
                <p className="italic text-[#223d27] leading-snug">
                  "The Annual Maintenance Plan from Termite Professionals keeps
                  my property termite-free throughout the year. Very reliable
                  and timely service!"
                </p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  – Rahul Mehta, Mumbai
                </p>
                <div className="text-[#f5b82e] text-[13px] mt-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Col 2: FAQ */}
          <div className="lg:col-span-5">
            <FaqBox
              questions={[
                "What is a Termite Annual Maintenance Service Plan (AMC)?",
                "How often will my property be inspected?",
                "Does the AMC include re-treatment if termites are found?",
                "Is the AMC plan suitable for both homes and offices?",
                "What are the benefits of an annual termite plan?",
                "Do you provide a service report after each visit?",
              ]}
            />
          </div>

          {/* Col 3: Ensure Year-Round Termite Protection */}
          <div className="lg:col-span-3 rounded-xl bg-[#eaf6e5] border border-[#cde2c4] p-4 flex flex-col items-center justify-center text-center">
            <div className="w-9 h-9 rounded-full bg-[#186929] text-white flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-[16px] font-extrabold text-[#103d1a] leading-tight">
              Ensure
              <br />
              Year-Round
              <br />
              Termite Protection!
            </h3>
            <p className="mt-1.5 text-[11.5px] text-[#28472e] font-medium">
              Get a customized Termite Annual Maintenance Plan today.
            </p>
            <a
              href="tel:+919220312345"
              className="mt-3 w-full flex items-center justify-center gap-1.5 bg-[#df2020] text-white font-extrabold text-[12px] py-2 rounded-full shadow"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now - +91 92203 12345</span>
            </a>
            <a
              href="https://wa.me/919220312345"
              className="mt-2 w-full flex items-center justify-center gap-1.5 bg-[#43b02a] text-white font-extrabold text-[12px] py-2 rounded-full shadow"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <SiteFooter />
      </div>
    </div>
  );
}

export default AMCServicePage;
