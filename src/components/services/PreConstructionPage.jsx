"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Home,
  Leaf
} from "lucide-react";
import {
  WhatsAppIcon,
  ServiceNavbar,
  HeroQuoteForm,
  PillSectionHeader,
  CheckItem,
  GoldSealBadge,
  FaqBox,
  CompactTrustWaveFooter
, SiteHeader, SiteFooter } from "./shared";

export function PreConstructionPage() {
  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        <SiteHeader active="services" />

      {/* HERO */}
      <section className="relative bg-[#eef5ea] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/pre-con-hero.jpg"
            alt="Pre-Construction Termite Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/90 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.08]">
              <span className="block text-[#0f5b24]">Pre-Construction</span>
              <span className="block text-[#d61f1f]">Termite Treatment</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16.5px] font-extrabold text-[#12331a] leading-snug">
              Build Stronger, Worry-Free Structures
              <br />
              from the Very Beginning
            </p>

            <div className="mt-4 flex items-center gap-4 sm:gap-6 max-w-[430px]">
              <div className="flex flex-col items-center text-center flex-1">
                <ShieldCheck className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Long-Term
                  <br />
                  Protection
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Leaf className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Eco-Friendly
                  <br />
                  Solution
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Home className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Safe for
                  <br />
                  Your Future
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:9220312345"
                className="flex items-center gap-2 bg-[#df2020] text-white font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now – 92203 12345</span>
              </a>
              <a
                href="https://wa.me/919220312345"
                className="flex items-center gap-2 bg-[#43b02a] text-white font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <HeroQuoteForm
              title="Get a Free Quote"
              thirdFieldPlaceholder="Your Location"
              thirdFieldIcon="pin"
            />
          </div>
        </div>
      </section>

      {/* MAIN BODY */}
      <div className="px-4 sm:px-6 py-4 space-y-4">
        {/* ABOUT + WHY IS IT IMPORTANT + CONSTRUCTION BUILDING PHOTO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f4d20] leading-tight">
              About Our Pre-Construction Termite Treatment
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.45] text-[#223d27] font-medium">
              Prevent termites before they become a problem! Our
              pre-construction termite treatment creates a protective barrier in
              soil and foundation, ensuring your new home or building stays
              termite-free for years to come.
            </p>
            <a
              href="#process"
              className="mt-3 inline-flex items-center gap-1.5 bg-[#38a128] text-white text-[12.5px] font-bold px-4 py-1.5 rounded-full"
            >
              <span>Know More About Our Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-4 bg-[#eaf6e5] border border-[#cde3c4] rounded-xl p-3.5">
            <h3 className="text-[15.5px] font-extrabold text-[#0f4d20] mb-2">
              Why is it Important?
            </h3>
            <ul className="space-y-2.5">
              {[
                "Prevents termite infestation from the start",
                "Protects your investment",
                "Strengthens your building for long-term safety",
              ].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[190px] rounded-xl overflow-hidden shadow-xs">
            <img
              src="/images/services/pre-con-building.jpg"
              alt="Concrete Building Structure"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR PRE-CONSTRUCTION TERMITE TREATMENT PROCESS (4 Photo Cards) */}
        <section id="process">
          <PillSectionHeader title="Our Pre-Construction Termite Treatment Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              {
                n: 1,
                title: "Site Inspection\n& Soil Analysis",
                desc: "We inspect the site and analyse soil conditions.",
                img: "/images/services/pre-con-step1.jpg",
              },
              {
                n: 2,
                title: "Chemical Treatment\nin Soil",
                desc: "We apply high-quality termite control chemicals.",
                img: "/images/services/pre-con-step2.jpg",
              },
              {
                n: 3,
                title: "Foundation Protection",
                desc: "We create a protective barrier around the foundation.",
                img: "/images/services/pre-con-step3.jpg",
              },
              {
                n: 4,
                title: "Long-Term Safety",
                desc: "Enjoy a termite-free and secure structure.",
                img: "/images/services/pre-con-step4.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#ecf7e7] border border-[#cde2c4] p-3 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#196929] text-white font-extrabold text-[12px] inline-flex items-center justify-center mb-1">
                    {s.n}
                  </span>
                  <h4 className="text-[13px] font-extrabold text-[#113d1b] leading-tight whitespace-pre-line min-h-[32px] flex items-center justify-center">
                    {s.title}
                  </h4>
                  <div className="my-2 h-[88px] rounded-lg overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-[11.5px] text-[#223d27] font-medium leading-tight">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MIDDLE 3 COLUMNS: KEY BENEFITS, WHY CHOOSE, COVERAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#239424] text-white font-extrabold text-[15px] px-4 py-2">
              Key Benefits
            </div>
            <div className="p-3.5 flex-1 flex items-center">
              <ul className="space-y-2">
                {[
                  "Prevents termite attack before construction",
                  "Protects your property's value",
                  "Long-lasting protection",
                  "Eco-friendly and safe solution",
                  "Cost-effective in the long run",
                ].map((b, i) => (
                  <CheckItem key={i} text={b} />
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#239424] text-white font-extrabold text-[15px] px-4 py-2">
              Why Choose A to Z Pest Solutions?
            </div>
            <div className="p-3.5 flex-1 flex items-center justify-between gap-3">
              <ul className="space-y-2">
                {[
                  "Expert Pre-Construction Treatment",
                  "Advanced & Safe Chemicals",
                  "Trained & Professional Team",
                  "100% Satisfaction Guarantee",
                  "Trusted by Builders & Homeowners",
                ].map((w, i) => (
                  <CheckItem key={i} text={w} />
                ))}
              </ul>
              <GoldSealBadge
                topText="100%"
                midText="Protection"
                bottomText="Guarantee"
              />
            </div>
          </div>

          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#239424] text-white font-extrabold text-[15px] px-4 py-2">
              Our Service Coverage
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <p className="text-[11.5px] text-[#223d27] font-medium">
                We provide pre-construction termite treatment across Mumbai,
                including:
              </p>
              <div className="mt-2 grid grid-cols-12 gap-2 items-center">
                <ul className="col-span-6 space-y-1">
                  {["Andheri", "Bandra", "Dadar", "Thane", "Navi Mumbai & More..."].map(
                    (c, i) => (
                      <CheckItem key={i} text={c} />
                    )
                  )}
                </ul>
                <div className="col-span-6 h-[100px] rounded-lg overflow-hidden">
                  <img
                    src="/images/services/pre-con-coverage.jpg"
                    alt="Mumbai Gateway"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM 3 COLUMNS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#239424] text-white font-extrabold text-[15px] px-4 py-2">
              What Our Clients Say
            </div>
            <div className="p-4 flex-1 flex items-center gap-3">
              <img
                src="/images/home/avatar-ramesh.jpg"
                alt="Rohit Mehta"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#239424] shrink-0"
              />
              <div className="text-[12px]">
                <p className="italic text-[#223d27] leading-snug">
                  “Excellent service! The team provided pre-construction termite
                  treatment for our new home. Highly recommended!”
                </p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  — Rohit Mehta, Mumbai
                </p>
                <div className="text-[#f5b82e] text-[13px] mt-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FaqBox
              questions={[
                "When should I get pre-construction treatment?",
                "Is it safe for the environment?",
                "How long does the protection last?",
                "Will it affect the construction work?",
                "Do you provide warranty?",
              ]}
            />
          </div>

          <div className="lg:col-span-3 rounded-xl bg-[#135822] text-white p-4 flex flex-col items-center justify-center text-center">
            <h3 className="text-[16px] font-extrabold leading-tight">
              Secure Your Dream Project from Termites!
            </h3>
            <p className="mt-1.5 text-[11.5px] text-white/90">
              Get expert pre-construction termite treatment today.
            </p>
            <a
              href="tel:9220312345"
              className="mt-3 w-full flex items-center justify-center gap-1.5 bg-[#df2020] text-white font-extrabold text-[12px] py-2 rounded-full shadow"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now – 92203 12345</span>
            </a>
            <a
              href="https://wa.me/919220312345"
              className="mt-2 w-full flex items-center justify-center gap-1.5 bg-[#2d8a2c] border border-[#7be362] text-white font-extrabold text-[12px] py-2 rounded-full shadow"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>
      </div>

      <SiteFooter />
      </div>
    </div>
  );
}

export default PreConstructionPage;
