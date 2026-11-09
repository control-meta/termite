"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Home,
  MapPin,
  Headphones,
  Award,
  Users,
  Leaf,
  Handshake,
  ThumbsUp,
  Mail
} from "lucide-react";
import {
  WhatsAppIcon,
  AtoZPestLogo,
  ServiceNavbar,
  HeroQuoteForm,
  PillSectionHeader,
  CheckItem,
  FaqBox,
  SkylineBand
, SiteHeader, SiteFooter } from "./shared";

export function ResidentialTermitePage() {
  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        <SiteHeader active="services" />

      {/* HERO */}
      <section className="relative bg-[#eef5ea] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/residential-hero.jpg"
            alt="Residential Termite Control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf5] via-[#f7faf5]/90 to-transparent lg:w-[65%]" />
        </div>

        <div className="relative z-10 px-5 sm:px-7 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.08]">
              <span className="block text-[#0f5b24]">Residential</span>
              <span className="block text-[#d61f1f]">Termite Control</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16.5px] font-extrabold text-[#12331a] leading-snug">
              Protect Your Home from Termite Damage
              <br />
              with Expert Treatment Solutions
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
                <Leaf className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Safe &amp; Eco-Friendly
                  <br />
                  Treatment
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#bed0b9]" />
              <div className="flex flex-col items-center text-center flex-1">
                <Home className="w-7 h-7 text-[#166628] mb-1" />
                <span className="text-[11.5px] font-bold leading-tight">
                  Healthy Home
                  <br />
                  for Your Family
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
              title="Get a Free Inspection"
              thirdFieldPlaceholder="Your Location"
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
          <ThumbsUp className="w-7 h-7 text-[#186826]" />
          <div className="text-[12px] leading-tight">
            <span className="block font-extrabold text-[13.5px]">Experienced</span>
            <span className="text-[#2c4c32] font-semibold">Technicians</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Headphones className="w-7 h-7 text-[#186826]" />
          <span className="font-extrabold text-[13.5px]">24/7 Support</span>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="px-4 sm:px-6 py-4 space-y-4">
        {/* ABOUT + WHY IT'S IMPORTANT + HOME PHOTO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f4d20] leading-tight">
              About Our Residential Termite Control Services
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.45] text-[#223d27] font-medium">
              Termites can cause serious damage to your home and valuable
              belongings. Our expert team provides safe, effective and
              long-lasting termite control solutions for residential properties
              in Mumbai.
            </p>
            <a
              href="#about"
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
            <ul className="space-y-2">
              {[
                "Prevents structural damage",
                "Protects wooden furniture",
                "Maintains property value",
                "Keeps your family safe",
              ].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[190px] rounded-xl overflow-hidden shadow-xs">
            <img
              src="/images/services/residential-building.jpg"
              alt="Residential Villa"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR RESIDENTIAL TERMITE CONTROL SERVICES (6 Numbered Cards) */}
        <section>
          <PillSectionHeader title="Our Residential Termite Control Services" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              {
                n: 1,
                title: "Pre-Construction\nTermite Treatment",
                desc: "Prevent termites construction begins.",
                img: "/images/services/res-serv-1.jpg",
              },
              {
                n: 2,
                title: "Post-Construction\nTermite Treatment",
                desc: "Protect your home after construction.",
                img: "/images/services/res-serv-2.jpg",
              },
              {
                n: 3,
                title: "Existing Termite\nInfestation",
                desc: "Eliminate existing termite infestation.",
                img: "/images/services/res-serv-3.jpg",
              },
              {
                n: 4,
                title: "Wood & Furniture\nTermite Treatment",
                desc: "Protect valuable wood items and furniture.",
                img: "/images/services/res-serv-4.jpg",
              },
              {
                n: 5,
                title: "Termite Inspection\n& Assessment",
                desc: "Identify termite activity early.",
                img: "/images/services/res-serv-5.jpg",
              },
              {
                n: 6,
                title: "Customized\nTreatment Plan",
                desc: "Get a solution tailored to your home.",
                img: "/images/services/res-serv-6.jpg",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#ecf7e7] border border-[#cde2c4] p-2 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-[#196929] text-white font-extrabold text-[11px] inline-flex items-center justify-center mb-1">
                    {c.n}
                  </span>
                  <h4 className="text-[11.5px] font-extrabold text-[#113d1b] leading-tight whitespace-pre-line min-h-[28px]">
                    {c.title}
                  </h4>
                  <div className="my-1.5 h-[72px] rounded-md overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10.5px] text-[#28472e] leading-tight">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-2">
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 bg-[#2b8729] text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE A TO Z PEST SOLUTIONS BANNER */}
        <section className="rounded-xl overflow-hidden bg-[#125b22] text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 p-4 sm:p-5">
            <h2 className="text-[18px] font-extrabold leading-tight">
              Why Choose A to Z Pest Solutions?
            </h2>
            <p className="mt-1.5 text-[11.5px] text-white/90 leading-relaxed">
              We are committed to providing the best termite control services in
              Mumbai with professional expertise and customer-first approach.
            </p>
            <a
              href="#advantages"
              className="mt-2.5 inline-flex items-center gap-1 bg-white text-[#125b22] font-extrabold text-[11.5px] px-3.5 py-1 rounded-full"
            >
              <span>Our Advantages</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="lg:col-span-5 py-3 px-2 grid grid-cols-2 sm:grid-cols-4 gap-2 divide-x divide-white/20">
            {[
              { icon: ShieldCheck, label: "Experienced\nTermite Control\nSpecialists" },
              { icon: Home, label: "Safe & Effective\nTreatment Methods" },
              { icon: Handshake, label: "Transparent\nPricing" },
              { icon: Headphones, label: "Dedicated\nCustomer Support" },
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center px-1.5">
                  <Icon className="w-6 h-6 text-[#80e563] mb-1" />
                  <span className="text-[10.5px] font-semibold leading-tight whitespace-pre-line">
                    {feat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3 h-[145px] lg:h-full">
            <img
              src="/images/home/happy-family.jpg"
              alt="Happy Indian Family"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OUR TERMITE TREATMENT PROCESS (4 Cards with Bottom Photos) */}
        <section>
          <PillSectionHeader title="Our Termite Treatment Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                n: 1,
                title: "Inspection & Assessment",
                desc: "Identify termite activity in your home.",
                img: "/images/services/residential-step1.jpg",
              },
              {
                n: 2,
                title: "Customized Treatment Plan",
                desc: "Get a tailored solution for your home.",
                img: "/images/services/residential-step2.jpg",
              },
              {
                n: 3,
                title: "Professional Treatment",
                desc: "Apply advanced treatment methods.",
                img: "/images/services/residential-step3.jpg",
              },
              {
                n: 4,
                title: "Prevention & Follow-Up",
                desc: "Receive expert advice and ongoing support.",
                img: "/images/services/residential-step4.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-[#ecf7e7] border border-[#cde2c4] flex flex-col justify-between text-center"
              >
                <div className="p-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#196929] text-white font-extrabold text-[11px] inline-flex items-center justify-center mb-1">
                    {s.n}
                  </span>
                  <h4 className="text-[12.5px] font-extrabold text-[#113d1b]">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-[#28472e] mt-0.5">{s.desc}</p>
                </div>
                <div className="h-[52px] w-full">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM 3 COLUMNS: CUSTOMERS SAY, FAQ, MUMBAI COVERAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#cde0c5] bg-white flex flex-col">
            <div className="bg-[#186929] text-white font-extrabold text-[15px] px-4 py-2">
              What Our Customers Say
            </div>
            <div className="p-4 flex-1 flex items-center gap-3">
              <img
                src="/images/services/res-avatar.jpg"
                alt="Sneha Patel"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#186929] shrink-0"
              />
              <div className="text-[12px]">
                <p className="italic text-[#223d27] leading-snug">
                  "Excellent service! The team was professional and solved our
                  termite problem effectively."
                </p>
                <p className="mt-1.5 font-extrabold text-[#11381a]">
                  – Sneha Patel, Mumbai
                </p>
                <div className="text-[#f5b82e] text-[13px] mt-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FaqBox
              questions={[
                "What is residential termite control?",
                "How much does termite treatment cost?",
                "Is the treatment safe for children and pets?",
                "How long does the treatment last?",
                "Do you provide warranty?",
              ]}
            />
          </div>

          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#cde0c5] bg-[#eaf6e5] p-3 flex flex-col justify-between">
            <h3 className="text-[14.5px] font-extrabold text-[#0f4d20] leading-tight">
              Termite Control Services Across Mumbai
            </h3>
            <div className="my-2 grid grid-cols-12 gap-2 items-center">
              <div className="col-span-7 h-[115px] rounded-lg overflow-hidden">
                <img
                  src="/images/services/res-coverage.jpg"
                  alt="Mumbai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 space-y-1 text-[11px] font-bold text-[#143d1d]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2b8729] shrink-0" />
                  <span>Andheri</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2b8729] shrink-0" />
                  <span>Bandra</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2b8729] shrink-0" />
                  <span>Dadar</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2b8729] shrink-0" />
                  <span>Thane</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2b8729] shrink-0" />
                  <span>Navi Mumbai &amp; More...</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a
                href="#areas"
                className="inline-flex items-center gap-1 bg-[#2b8729] text-white text-[11px] font-bold px-3 py-1 rounded-full"
              >
                <span>View All Areas</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <SiteFooter />
      </div>
    </div>
  );
}

export default ResidentialTermitePage;
