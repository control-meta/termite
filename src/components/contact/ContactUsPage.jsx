"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Check,
  ShieldCheck,
  Calendar,
  User,
  Home,
  Building2,
  MapPin,
  Mail,
  MessageSquare,
  Clock,
  Settings,
  CheckCircle2,
} from "lucide-react";
import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.25-5.01-4.45-.15-.2-1.2-1.59-1.2-3.04 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.49.22.57.35.07.12.07.72-.17 1.4z" />
  </svg>
);

/* House + Termite Shield Graphic */
const HouseTermiteShieldGraphic = () => (
  <div className="flex items-center justify-center p-2 select-none">
    <svg width="150" height="130" viewBox="0 0 160 140" fill="none">
      {/* Soft Green Circle Halo */}
      <circle cx="80" cy="75" r="58" fill="#e3f4dc" />
      {/* Green House Silhouette */}
      <path
        d="M20 72L75 26L130 72"
        stroke="#278a28"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M34 68V122H116V68" fill="#3da331" />
      {/* Window Grid */}
      <rect x="48" y="78" width="22" height="24" fill="#ffffff" rx="2" />
      <line x1="59" y1="78" x2="59" y2="102" stroke="#3da331" strokeWidth="2.5" />
      <line x1="48" y1="90" x2="70" y2="90" stroke="#3da331" strokeWidth="2.5" />
      {/* Overlapping Protective Shield */}
      <path
        d="M110 54L142 66V94C142 116 128 130 110 137C92 130 78 116 78 94V66L110 54Z"
        fill="#196b27"
        stroke="#ffffff"
        strokeWidth="4"
      />
      {/* Termite Inside Shield */}
      <ellipse cx="110" cy="100" rx="5" ry="8" fill="#ffffff" />
      <circle cx="110" cy="88" r="3.5" fill="#ffffff" />
      <path
        d="M103 94L97 90M102 100L96 100M103 106L97 110M117 94L123 90M118 100L124 100M117 106L123 110"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Diagonal Slash Across Termite */}
      <line x1="94" y1="80" x2="126" y2="114" stroke="#ffffff" strokeWidth="3" />
    </svg>
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
  <li className="flex items-start gap-2 text-[12.5px] font-semibold text-[#1b3921] leading-[1.35]">
    <span className="w-4 h-4 rounded-full bg-[#369c27] text-white flex items-center justify-center shrink-0 mt-[1px]">
      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
    </span>
    <span>{text}</span>
  </li>
);

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "",
    serviceRequired: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#c4e1b8] text-[#13381c] font-sans antialiased selection:bg-[#19672b] selection:text-white px-2 py-2 sm:px-4 sm:py-4 flex justify-center">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#adcda0]">
        {/* 1. UNIFIED SITE HEADER */}
        <SiteHeader active="contact" />

      {/* 2. HERO BANNER */}
      <section className="relative bg-[#0f4d1e] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 px-5 sm:px-8 py-7 z-10">
            <p className="text-[12px] text-white/85 font-semibold mb-2 flex items-center gap-1.5">
              <Link href="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-[#a6f394]">Contact Us</span>
            </p>
            <h1 className="text-[32px] sm:text-[42px] font-black leading-tight tracking-tight">
              Contact Us
            </h1>
            <p className="mt-2.5 text-[14.5px] sm:text-[16px] text-white/95 font-medium max-w-[490px] leading-[1.4]">
              Get in touch with Termite Professionals for expert termite inspection, treatment, and guaranteed long-term protection solutions.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[220px] sm:h-[260px]">
            {/* Curved Lime Swoosh Divider */}
            <div
              className="hidden lg:block absolute inset-y-0 -left-10 w-24 bg-[#53b833] z-10"
              style={{
                clipPath: "polygon(65% 0, 100% 0, 35% 100%, 0% 100%)",
              }}
            />
            <img
              src="/images/contact/contact-hero.jpg"
              alt="Contact Termite Professionals"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* MAIN BODY CONTAINER */}
      <div className="px-4 sm:px-7 py-6 space-y-6">
        {/* 3. TOP SPLIT: GET IN TOUCH + HEAD OFFICE | FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <LineSectionHeading title="Get in Touch with Us" />
              <p className="text-[13px] text-[#223d27] font-medium leading-[1.45]">
                Have a question, need an urgent site inspection, or want to book
                a termite eradication service? Our pest control team is ready to assist you.
              </p>

              {/* 4 Contact Info Cards */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Card 1: Call Us */}
                <a
                  href="tel:+919220312345"
                  className="rounded-xl bg-[#f1f9ed] hover:bg-[#e4f3de] border border-[#cde0c5] p-3.5 text-center flex flex-col items-center transition shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#248428] group-hover:scale-105 text-white flex items-center justify-center mb-2 shadow-xs transition-transform">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="text-[13.5px] font-extrabold text-[#113d1b]">
                    Call Us
                  </h3>
                  <p className="mt-1 text-[11.5px] font-extrabold text-[#113d1b]">
                    +91 92203 12345
                  </p>
                  <span className="mt-0.5 text-[9.5px] text-[#3a5940] font-semibold">
                    Mon – Sun: 24/7 Available
                  </span>
                </a>

                {/* Card 2: WhatsApp Us */}
                <a
                  href="https://wa.me/919220312345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#f1f9ed] hover:bg-[#e4f3de] border border-[#cde0c5] p-3.5 text-center flex flex-col items-center transition shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#36a829] group-hover:scale-105 text-white flex items-center justify-center mb-2 shadow-xs transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[13.5px] font-extrabold text-[#113d1b]">
                    WhatsApp Us
                  </h3>
                  <p className="mt-1 text-[11.5px] font-extrabold text-[#113d1b]">
                    +91 92203 12345
                  </p>
                  <span className="mt-0.5 text-[9.5px] text-[#3a5940] font-semibold">
                    Instant Chat &amp; Booking
                  </span>
                </a>

                {/* Card 3: Email Us */}
                <a
                  href="mailto:info@termiteprofessionals.in"
                  className="rounded-xl bg-[#f1f9ed] hover:bg-[#e4f3de] border border-[#cde0c5] p-3.5 text-center flex flex-col items-center transition shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#196929] group-hover:scale-105 text-white flex items-center justify-center mb-2 shadow-xs transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-[13.5px] font-extrabold text-[#113d1b]">
                    Email Us
                  </h3>
                  <p className="mt-1 text-[10.5px] font-extrabold text-[#113d1b] break-all">
                    info@termiteprofessionals.in
                  </p>
                  <span className="mt-0.5 text-[9.5px] text-[#3a5940] font-semibold">
                    Reply within 2 hours
                  </span>
                </a>

                {/* Card 4: Our Office */}
                <div className="rounded-xl bg-[#f1f9ed] border border-[#cde0c5] p-3.5 text-center flex flex-col items-center shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#196929] text-white flex items-center justify-center mb-2 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-[13.5px] font-extrabold text-[#113d1b]">
                    Our Office
                  </h3>
                  <p className="mt-1 text-[11.5px] font-extrabold text-[#113d1b]">
                    Bangalore, India
                  </p>
                  <span className="mt-0.5 text-[9.5px] text-[#3a5940] font-semibold">
                    (Corporate HQ)
                  </span>
                </div>
              </div>
            </div>

            {/* Our Head Office Box */}
            <div className="rounded-xl bg-white border border-[#cde0c5] p-4.5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shadow-xs">
              <div className="sm:col-span-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#196929] shrink-0" />
                  <h3 className="text-[18px] font-extrabold text-[#0f4d20]">
                    Our Head Office
                  </h3>
                </div>
                <p className="mt-2 text-[14px] font-extrabold text-[#113d1b]">
                  Termite Professionals
                </p>
                <p className="mt-1 text-[12.5px] text-[#223d27] font-medium leading-[1.48]">
                  #123, 2nd Floor, 9th Main Road,
                  <br />
                  HSR Layout, Bangalore – 560102,
                  <br />
                  Karnataka, India.
                </p>
                <a
                  href="#map"
                  className="mt-4 inline-flex items-center gap-1.5 bg-[#155d24] hover:bg-[#0e451a] text-white text-[12px] font-bold px-4 py-2 rounded-full shadow-xs transition"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Reception Image with Wall Branding */}
              <div className="sm:col-span-6 h-[175px] rounded-xl overflow-hidden relative border border-[#d6e4cf]">
                <img
                  src="/images/contact/head-office.jpg"
                  alt="Termite Professionals Head Office Reception"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Book a Free Termite Inspection Form */}
          <div
            id="inspection-form"
            className="lg:col-span-5 rounded-2xl overflow-hidden bg-white border border-[#cde0c5] shadow-md sticky top-6"
          >
            <div className="bg-[#156326] text-white px-5 py-3.5 flex items-center justify-center gap-2.5">
              <Calendar className="w-5 h-5 text-[#a4f08f]" />
              <h2 className="text-[17.5px] font-extrabold">
                Book a Free Termite Inspection
              </h2>
            </div>

            <div className="p-5">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#e5f7e3] text-[#19672b] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-[18px] font-extrabold text-[#0e451a]">
                    Inspection Request Received!
                  </h3>
                  <p className="text-[12.5px] text-[#2d5236] max-w-sm mx-auto">
                    Thank you, <span className="font-bold">{formData.name}</span>. Our expert termite specialist will call you at <span className="font-bold">{formData.phone}</span> within 15 minutes to confirm your free inspection slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        location: "",
                        propertyType: "",
                        serviceRequired: "",
                        message: "",
                      });
                    }}
                    className="mt-3 text-[12px] font-bold text-[#19672b] hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[12.5px] text-[#223d27] font-medium mb-3.5 leading-snug">
                    Fill in your details below and our pest control team will get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex items-center gap-2.5 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <User className="w-4 h-4 text-[#18632b] shrink-0" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name *"
                        className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#5d7762]"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <Phone className="w-4 h-4 text-[#18632b] shrink-0" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Mobile Number *"
                        className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#5d7762]"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <Mail className="w-4 h-4 text-[#18632b] shrink-0" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email ID (Optional)"
                        className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#5d7762]"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <MapPin className="w-4 h-4 text-[#18632b] shrink-0" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Your Location (City / Area) *"
                        className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#5d7762]"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <div className="flex items-center gap-2.5 w-full">
                        <Home className="w-4 h-4 text-[#18632b] shrink-0" />
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent appearance-none"
                        >
                          <option value="">Property Type *</option>
                          <option value="apartment">Apartment / Flat</option>
                          <option value="villa">Independent House / Villa</option>
                          <option value="office">Commercial Office / Shop</option>
                          <option value="warehouse">Warehouse / Industrial</option>
                        </select>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
                    </div>

                    <div className="flex items-center justify-between gap-2 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <div className="flex items-center gap-2.5 w-full">
                        <Building2 className="w-4 h-4 text-[#18632b] shrink-0" />
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent appearance-none"
                        >
                          <option value="">Service Required *</option>
                          <option value="residential">Residential Termite Control</option>
                          <option value="commercial">Commercial Termite Control</option>
                          <option value="pre">Pre-Construction Termite Treatment</option>
                          <option value="post">Post-Construction Termite Treatment</option>
                          <option value="amc">Annual Maintenance Plan (AMC)</option>
                        </select>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-[#526b56] shrink-0" />
                    </div>

                    <div className="flex items-start gap-2.5 border border-[#d6e3d2] rounded-lg px-3.5 py-2 bg-[#fbfdfb] focus-within:border-[#18632b] focus-within:ring-1 focus-within:ring-[#18632b]">
                      <MessageSquare className="w-4 h-4 text-[#18632b] shrink-0 mt-0.5" />
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message (Optional)"
                        className="w-full text-[12.5px] font-medium text-[#1b3921] focus:outline-none bg-transparent placeholder:text-[#5d7762] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#156326] hover:bg-[#0e491b] text-white font-extrabold text-[14px] py-2.5 rounded-full shadow flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* 4. MIDDLE ROW: FIND US ON MAP | WHY CONTACT TERMITE PROFESSIONALS? */}
        <section
          id="map"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          {/* Left 5 Cols: Find Us on Map */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#196929]" />
              <h2 className="text-[18px] sm:text-[19px] font-extrabold text-[#0f4d20]">
                Find Us on Map
              </h2>
              <div className="h-[1px] bg-[#c5d9be] flex-1" />
            </div>

            {/* Styled Map Container with Pin Card */}
            <div className="h-[145px] rounded-xl overflow-hidden border border-[#cde0c5] relative bg-[#eef4ea] shadow-2xs flex items-center justify-center">
              {/* Simulated Street Grid Lines */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d6e4d0 1px, transparent 1px), linear-gradient(to bottom, #d6e4d0 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Green Park Blocks */}
              <div className="absolute top-2 left-4 w-20 h-10 bg-[#c5e8b7]/60 rounded" />
              <div className="absolute bottom-2 right-6 w-28 h-12 bg-[#b8e2a8]/70 rounded" />
              {/* Diagonal Road */}
              <div className="absolute inset-0 border-b-8 border-white/90 -rotate-12 scale-125" />

              {/* Map Pin Callout Card */}
              <div className="relative z-10 bg-white px-4 py-2.5 rounded-xl shadow-md border border-[#d5e3d1] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#e02424] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[13.5px] font-black text-[#113819]">
                    Termite Professionals
                  </span>
                  <span className="block text-[11px] font-semibold text-[#3b5e43]">
                    HSR Layout, Bangalore
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Why Contact Termite Professionals? */}
          <div className="lg:col-span-7">
            <LineSectionHeading title="Why Contact Termite Professionals?" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <ul className="sm:col-span-8 space-y-2">
                {[
                  "Free, thorough on-site termite inspection with moisture detection",
                  "Direct consultation with certified entomologists",
                  "Customized treatment methods with odorless, safe termiticides",
                  "100% transparent pricing with detailed inspection reports",
                  "Written warranty certificates with guaranteed zero-cost re-treatments",
                ].map((item, i) => (
                  <GreenBullet key={i} text={item} />
                ))}
              </ul>
              <div className="sm:col-span-4">
                <HouseTermiteShieldGraphic />
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR TERMITE CONTROL SERVICES (5-Icon Bar) */}
        <section className="pt-2">
          <div className="relative rounded-xl border border-[#cde0c5] bg-[#f4faef] pt-6 pb-4 px-4 shadow-2xs">
            <div className="absolute -top-3.5 left-5 bg-[#186828] text-white font-extrabold text-[13.5px] px-5 py-1 rounded-full shadow-xs">
              Our Termite Control Services
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#cfe2c8]">
              {[
                { icon: Home, label: "Residential\nTermite Control", href: "/services/residential" },
                { icon: Building2, label: "Commercial\nTermite Control", href: "/services/commercial" },
                { icon: Settings, label: "Pre-Construction\nTermite Treatment", href: "/services/pre-construction" },
                { icon: ShieldCheck, label: "Post-Construction\nTermite Treatment", href: "/services/post-construction" },
                { icon: Calendar, label: "Annual Maintenance\nTermite Service Plan", href: "/services/amc" },
              ].map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <Link
                    key={i}
                    href={srv.href}
                    className="flex flex-col items-center text-center px-2 pt-2 sm:pt-0 hover:opacity-90 transition group"
                  >
                    <Icon className="w-7 h-7 text-[#248428] group-hover:scale-110 mb-1.5 transition-transform" />
                    <span className="text-[11.5px] font-extrabold text-[#143d1d] leading-tight whitespace-pre-line group-hover:text-[#186828]">
                      {srv.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SERVICE AREAS ROW */}
        <section className="rounded-xl bg-white border border-[#cde0c5] p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3 max-w-[280px]">
            <MapPin className="w-7 h-7 text-[#186828] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[16.5px] font-extrabold text-[#0f4d20]">
                Service Areas
              </h3>
              <p className="text-[11.5px] text-[#223d27] font-medium leading-snug mt-0.5">
                We provide prompt, licensed termite control services across major cities in India.
              </p>
            </div>
          </div>

          {/* 6 City Landmark Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 flex-1 max-w-[700px]">
            {[
              {
                name: "Bangalore",
                href: "/locations/bangalore",
                img: "/images/home/city-bangalore.jpg",
              },
              {
                name: "Mumbai",
                href: "/locations/mumbai",
                img: "/images/home/city-mumbai.jpg",
              },
              {
                name: "Pune",
                href: "/locations/pune",
                img: "/images/home/city-pune.jpg",
              },
              {
                name: "Goa",
                href: "/locations/goa",
                img: "/images/home/city-goa.jpg",
              },
              {
                name: "Delhi",
                href: "/locations/delhi",
                img: "/images/home/city-delhi.jpg",
              },
              {
                name: "Noida",
                href: "/locations/noida",
                img: "/images/home/city-noida.jpg",
              },
            ].map((city, i) => (
              <Link
                key={i}
                href={city.href}
                className="rounded-lg overflow-hidden border border-[#cde0c5] bg-[#f4faef] text-center hover:opacity-95 transition group"
              >
                <div className="h-[48px] w-full overflow-hidden">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="bg-[#186828] text-white text-[11px] font-extrabold py-0.5">
                  {city.name}
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/locations/bangalore"
            className="border border-[#186828] text-[#124d20] hover:bg-[#f1f9ed] font-extrabold text-[12px] px-4 py-2.5 rounded-full flex items-center gap-1.5 transition"
          >
            <span>View All Locations →</span>
          </Link>
        </section>
      </div>

      {/* 7. PRE-FOOTER CTA SECTION */}
      <section className="mx-4 sm:mx-7 mb-2 bg-gradient-to-r from-[#0e4e1d] via-[#156327] to-[#19702d] text-white px-5 sm:px-7 py-4 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/15 border-2 border-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold leading-tight">
                Protect Your Property from Termites Today!
              </h3>
              <p className="text-[12px] text-white/90">
                Schedule a free termite inspection with Termite Professionals.
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

            <a
              href="#inspection-form"
              className="flex items-center gap-1.5 bg-gradient-to-b from-[#f8d748] to-[#e6b822] hover:from-[#eec830] hover:to-[#d8a815] text-[#1b2b12] font-extrabold text-[13px] px-4 py-2.5 rounded-full shadow transition"
            >
              <span>Book a Free Inspection</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. UNIFIED HOMEPAGE FOOTER */}
      <SiteFooter />
      </div>
    </div>
  );
}

export default ContactUsPage;

