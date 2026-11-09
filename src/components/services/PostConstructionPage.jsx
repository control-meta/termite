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

export function PostConstructionPage() {
  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        <SiteHeader active="services" />

      {/* HERO */}
      <section className="relative bg-[#eef5ea] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/post-con-hero.jpg"
            alt="Post-Construction Termite Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/90 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.08]">
              <span className="block text-[#0f5b24]">Post-Construction</span>
              <span className="block text-[#d61f1f]">Termite Treatment</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16.5px] font-extrabold text-[#12331a] leading-snug">
              Protect Your Property After Construction
              <br />
              with Expert Termite Control
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
                  Your Family
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
        {/* ABOUT + WHY IS IT IMPORTANT + HOUSE PHOTO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f4d20] leading-tight">
              About Our Post-Construction Termite Treatment
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.45] text-[#223d27] font-medium">
              After construction, your property can still be at risk from
              termites. Our post-construction termite treatment helps eliminate
              termite activity and provides long-lasting protection for your
              home, office or commercial building.
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
            <ul className="space-y-2">
              {[
                "Prevents termite infestation",
                "Protects your investment",
                "Avoids costly repairs",
                "Ensures long-term peace of mind",
              ].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[190px] rounded-xl overflow-hidden shadow-xs">
            <img
              src="/images/services/post-con-building.jpg"
              alt="Protected Home"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR POST-CONSTRUCTION TERMITE TREATMENT PROCESS (5 Cards) */}
        <section id="process">
          <PillSectionHeader title="Our Post-Construction Termite Treatment Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                n: 1,
                title: "Inspection &\nAssessment",
                desc: "We inspect your property to identify termite activity.",
                img: "/images/services/post-con-step1.jpg",
              },
              {
                n: 2,
                title: "Targeted Treatment",
                desc: "We apply treatment at key areas.",
                img: "/images/services/post-con-step2.jpg",
              },
              {
                n: 3,
                title: "Monitoring",
                desc: "We monitor the treated areas for effectiveness.",
                img: "/images/services/post-con-step3.jpg",
              },
              {
                n: 4,
                title: "Preventive Guidance",
                desc: "Get expert tips to prevent future attacks.",
                img: "/images/services/post-con-step4.jpg",
              },
              {
                n: 5,
                title: "Long-Term Protection",
                desc: "Enjoy a termite-free property for years.",
                img: "/images/services/post-con-step5.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#ecf7e7] border border-[#cde2c4] p-2.5 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#196929] text-white font-extrabold text-[12px] inline-flex items-center justify-center mb-1">
                    {s.n}
                  </span>
                  <h4 className="text-[13px] font-extrabold text-[#113d1b] leading-tight whitespace-pre-line min-h-[32px] flex items-center justify-center">
                    {s.title}
                  </h4>
                  <div className="my-2 h-[82px] rounded-lg overflow-hidden">
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

        {/* MIDDLE 3 COLUMNS: KEY BENEFITS, WHY CHOOSE US, SERVICE COVERAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Key Benefits */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              Key Benefits
            </div>
            <div className="p-3.5 flex-1 grid grid-cols-12 gap-2 items-center">
              <ul className="col-span-7 space-y-2">
                {[
                  "Effective Post-Construction Protection",
                  "Eco-Friendly & Odorless Treatment",
                  "Safe for Family & Pets",
                  "Long-Lasting Results",
                  "Transparent Pricing",
                ].map((b, i) => (
                  <CheckItem key={i} text={b} />
                ))}
              </ul>
              <div className="col-span-5 h-[135px] rounded-lg overflow-hidden">
                <img
                  src="/images/services/post-con-benefits.jpg"
                  alt="Building Structure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Why Choose A to Z Pest Solutions? */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              Why Choose A to Z Pest Solutions?
            </div>
            <div className="p-3.5 flex-1 flex items-center justify-between gap-3">
              <ul className="space-y-2">
                {[
                  "Experienced Termite Control Experts",
                  "Advanced & Safe Treatment Methods",
                  "On-Time Service & Transparent Pricing",
                  "12-Month Service Warranty",
                  "Trusted by 1,00,000+ Customers",
                ].map((w, i) => (
                  <CheckItem key={i} text={w} />
                ))}
              </ul>
              <GoldSealBadge
                topText="12-Month"
                midText="Service"
                bottomText="Warranty"
              />
            </div>
          </div>

          {/* Our Service Coverage */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              Our Service Coverage
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <p className="text-[11.5px] text-[#223d27] font-medium">
                We provide post-construction termite treatment across Mumbai,
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
                    src="/images/services/post-con-coverage.jpg"
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
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              What Our Customers Say
            </div>
            <div className="p-4 flex-1 flex items-center gap-3">
              <img
                src="/images/services/post-con-avatar.jpg"
                alt="Amit Sharma"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#186929] shrink-0"
              />
              <div className="text-[12px]">
                <p className="italic text-[#223d27] leading-snug">
                  "Excellent service! The team provided post-construction
                  termite treatment for our new home. Very professional and
                  effective."
                </p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  – Amit Sharma, Mumbai
                </p>
                <div className="text-[#f5b82e] text-[13px] mt-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FaqBox
              questions={[
                "What is post-construction termite treatment?",
                "How soon can I get the treatment?",
                "Is it safe for my family and pets?",
                "How long does the protection last?",
                "Do you provide warranty?",
              ]}
            />
          </div>

          <div className="lg:col-span-3 rounded-xl bg-[#135822] text-white p-4 flex flex-col items-center justify-center text-center">
            <h3 className="text-[16px] font-extrabold leading-tight">
              Need Post-Construction Termite Treatment?
            </h3>
            <p className="mt-1.5 text-[11.5px] text-white/90">
              Get expert help today and keep your property termite-free.
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

export default PostConstructionPage;
