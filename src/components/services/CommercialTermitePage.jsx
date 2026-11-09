"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Home,
  Building2,
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

export function CommercialTermitePage() {
  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        <SiteHeader active="services" />

      {/* HERO */}
      <section className="relative bg-[#eef5ea] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-hero.jpg"
            alt="Commercial Termite Control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/90 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.08]">
              <span className="block text-[#0f5b24]">Commercial</span>
              <span className="block text-[#d61f1f]">Termite Control</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16.5px] font-extrabold text-[#12331a] leading-snug">
              Protect Your Business Premises with
              <br />
              Expert Termite Treatment Solutions
            </p>

            <div className="mt-4 flex items-center gap-4 sm:gap-6 max-w-[430px]">
              <div className="flex flex-col items-center text-center flex-1">
                <ShieldCheck className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Long-Lasting
                  <br />
                  Protection
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Building2 className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Safe &amp; Eco-Friendly
                  <br />
                  Treatment
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Handshake className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Minimize Business
                  <br />
                  Disruption
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919220312345"
                className="flex items-center gap-2 bg-[#df2020] text-white font-extrabold text-[13.5px] px-4 py-2 rounded-full shadow"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now - +91 92203 12345</span>
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
              title="Get a Free Inspection"
              thirdFieldPlaceholder="Your Business Type"
              thirdFieldIcon="pin"
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
          <Building2 className="w-7 h-7 text-[#186826]" />
          <div className="text-[12px] leading-tight">
            <span className="block font-extrabold text-[13.5px]">Commercial</span>
            <span className="text-[#2c4c32] font-semibold">Specialists</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Headphones className="w-7 h-7 text-[#186826]" />
          <span className="font-extrabold text-[13.5px]">24/7 Support</span>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="px-4 sm:px-6 py-4 space-y-4">
        {/* ABOUT + WHY IT'S IMPORTANT + OFFICE PHOTO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f4d20] leading-tight">
              About Our Commercial Termite Control Services
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.45] text-[#223d27] font-medium">
              Termites can cause major damage to your commercial property,
              affecting infrastructure, equipment and business operations. Our
              expert team provides advanced termite control solutions for
              offices, retail spaces, warehouses and industries across Mumbai.
            </p>
            <a
              href="#know-more"
              className="mt-3 inline-flex items-center gap-1.5 bg-[#38a128] text-white text-[12.5px] font-bold px-4 py-1.5 rounded-full"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-4 bg-[#eaf6e5] border border-[#cde3c4] rounded-xl p-3.5">
            <h3 className="text-[15.5px] font-extrabold text-[#0f4d20] mb-2">
              Why It's Important?
            </h3>
            <ul className="space-y-1.5">
              {[
                "Prevents structural damage",
                "Protects valuable assets",
                "Maintains business continuity",
                "Avoids costly repairs",
                "Ensures a safe workplace",
              ].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[190px] rounded-xl overflow-hidden shadow-xs">
            <img
              src="/images/services/commercial-building.jpg"
              alt="Commercial Building"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR COMMERCIAL TERMITE CONTROL SERVICES (6 Cards) */}
        <section>
          <PillSectionHeader title="Our Commercial Termite Control Services" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              {
                title: "Office Spaces",
                desc: "Keep your workplace termite-free.",
                img: "/images/services/comm-serv-1.jpg",
              },
              {
                title: "Retail Spaces",
                desc: "Protect your retail business.",
                img: "/images/services/comm-serv-2.jpg",
              },
              {
                title: "Warehouses",
                desc: "Safeguard stored goods.",
                img: "/images/services/comm-serv-3.jpg",
              },
              {
                title: "Industrial Facilities",
                desc: "Ensure uninterrupted operations.",
                img: "/images/services/comm-serv-4.jpg",
              },
              {
                title: "Hotels & Hospitality",
                desc: "Maintain a premium experience.",
                img: "/images/services/comm-serv-5.jpg",
              },
              {
                title: "Commercial Buildings",
                desc: "Protect large commercial properties.",
                img: "/images/services/comm-serv-6.jpg",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#cde2c4] bg-[#f2faee] flex flex-col justify-between text-center p-2"
              >
                <h4 className="text-[12.5px] font-extrabold text-[#113d1b] mb-1.5">
                  {c.title}
                </h4>
                <div className="h-[80px] rounded-lg overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-[11px] text-[#28472e] leading-tight">
                  {c.desc}
                </p>
                <div className="mt-2">
                  <a
                    href="#explore"
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
                { icon: Settings, label: "Customized\nTreatment Plans" },
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
              alt="Office Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR COMMERCIAL TERMITE TREATMENT PROCESS (4 Steps) */}
        <section>
          <PillSectionHeader title="Our Commercial Termite Treatment Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                n: 1,
                title: "Inspection & Assessment",
                desc: "Evaluate the property and identify risk areas.",
              },
              {
                n: 2,
                title: "Customized Treatment Plan",
                desc: "Design a solution for your business needs.",
              },
              {
                n: 3,
                title: "Professional Treatment",
                desc: "Apply advanced treatment methods.",
              },
              {
                n: 4,
                title: "Follow-Up & Support",
                desc: "Ensure long-term protection.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#ecf7e7] border border-[#cde2c4] p-3 text-center"
              >
                <span className="w-6 h-6 rounded-full bg-[#196929] text-white font-extrabold text-[12px] inline-flex items-center justify-center mb-1">
                  {s.n}
                </span>
                <h4 className="text-[13px] font-extrabold text-[#113d1b]">
                  {s.title}
                </h4>
                <p className="mt-1 text-[11.5px] text-[#2c4932]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM 3 COLUMNS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white shadow-xs flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              What Our Clients Say
            </div>
            <div className="p-4 flex-1 flex items-center gap-3">
              <img
                src="/images/services/comm-avatar.jpg"
                alt="Rahul Mehta"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#186929] shrink-0"
              />
              <div className="text-[12px]">
                <p className="italic text-[#223d27] leading-snug">
                  "Excellent service! Our office remains termite-free for over
                  two years. Highly recommended!"
                </p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  – Rahul Mehta, Mumbai
                </p>
                <div className="text-[#f5b82e] text-[13px] mt-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FaqBox
              questions={[
                "How often should I get a commercial termite inspection?",
                "Is the treatment safe for employees and clients?",
                "What is the cost of termite control for commercial properties?",
                "How long does the treatment last?",
                "Do you provide a warranty?",
              ]}
            />
          </div>

          <div className="lg:col-span-3 rounded-xl bg-[#eaf6e5] border border-[#cde2c4] p-4 flex flex-col items-center justify-center text-center">
            <div className="w-9 h-9 rounded-full bg-[#186929] text-white flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-[15.5px] font-extrabold text-[#103d1a] leading-tight">
              Don't Let Termites
              <br />
              Harm Your Business!
            </h3>
            <p className="mt-1.5 text-[11.5px] text-[#28472e] font-medium">
              Get expert termite control for your commercial property.
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

export default CommercialTermitePage;
