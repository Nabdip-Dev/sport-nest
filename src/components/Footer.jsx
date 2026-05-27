"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#f8fcff] via-white to-[#edf7ff] pt-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* TOP CARD */}
        <div
          className="
            relative overflow-hidden rounded-[40px]
            border border-white/60
            bg-white/70
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            p-10 lg:p-14
            text-center lg:text-left
          "
        >

          {/* MINI DECOR */}
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-100 blur-3xl opacity-70" />

          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-100 blur-3xl opacity-70" />

          {/* GRID */}
          <div className="grid gap-14 border-b border-slate-200/70 pb-14 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}
            <div className="flex flex-col items-center lg:items-start">

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                ⚡ Premium Sports Booking
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
                Sport
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Nest
                </span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                Experience luxury sports facility booking with modern
                infrastructure, seamless scheduling, and premium venues
                across multiple sports categories.
              </p>

              {/* SOCIAL */}
              <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">

                <SocialIcon icon={<FaFacebookF />} />

                <SocialIcon icon={<FaInstagram />} />

                <SocialIcon icon={<FaTwitter />} />

                <SocialIcon icon={<FaYoutube />} />

              </div>

            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col items-center lg:items-start">

              <h3 className="text-xl font-bold text-slate-900">
                Quick Links
              </h3>

              <div className="mt-6 flex flex-col items-center gap-4 lg:items-start">

                <FooterLink href="/">Home</FooterLink>

                <FooterLink href="/facilities">
                  Facilities
                </FooterLink>

                <FooterLink href="/add-facility">
                  Add Facility
                </FooterLink>

                <FooterLink href="/about">
                  About Us
                </FooterLink>

                <FooterLink href="/contact">
                  Contact
                </FooterLink>

              </div>

            </div>

            {/* SPORTS */}
            <div className="flex flex-col items-center lg:items-start">

              <h3 className="text-xl font-bold text-slate-900">
                Popular Sports
              </h3>

              <div className="mt-6 flex flex-col gap-4 text-sm text-slate-700 w-full">

                <SportItem title="Football Turf" emoji="⚽" />

                <SportItem title="Cricket Ground" emoji="🏏" />

                <SportItem title="Basketball Court" emoji="🏀" />

                <SportItem title="Badminton Court" emoji="🏸" />

                <SportItem title="Tennis Court" emoji="🎾" />

              </div>

            </div>

            {/* CONTACT */}
            <div className="flex flex-col items-center lg:items-start">

              <h3 className="text-xl font-bold text-slate-900">
                Contact Info
              </h3>

              <div className="mt-6 flex flex-col gap-5 text-sm text-slate-700 items-center lg:items-start">

                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  text="Siliguri, West Bengal, India"
                />

                <ContactItem
                  icon={<FaPhoneAlt />}
                  text="+91 9876543210"
                />

                <ContactItem
                  icon={<FaEnvelope />}
                  text="support@sportnest.com"
                />

              </div>

              {/* NEWSLETTER */}
              <div className="mt-8 w-full max-w-sm">

                <p className="mb-3 text-sm font-semibold text-slate-900">
                  Subscribe Newsletter
                </p>

                <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-sm outline-none"
                  />

                  <button
                    className="
                      flex items-center justify-center
                      bg-gradient-to-r
                      from-cyan-500 to-blue-600
                      px-5 text-white
                    "
                  >
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center lg:text-left text-sm text-slate-500 md:flex-row">

            <p>
              © 2026 SportNest. Crafted with passion for sports lovers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                href="/privacy"
                className="transition hover:text-cyan-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-cyan-600"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/support"
                className="transition hover:text-cyan-600"
              >
                Support
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

/* SOCIAL ICON */

const SocialIcon = ({ icon }) => (
  <button
    className="
      flex h-12 w-12 items-center justify-center
      rounded-2xl border border-white/50
      bg-white/80 text-slate-700
      shadow-lg shadow-cyan-100/40
      backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1.5
      hover:scale-105
      hover:border-cyan-300
      hover:bg-cyan-50
      hover:text-cyan-600
    "
  >
    {icon}
  </button>
);

/* FOOTER LINK */

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="
      group flex items-center gap-2
      text-sm font-medium text-slate-600
      transition-all duration-300
      hover:translate-x-1
      hover:text-cyan-600
    "
  >
    <span
      className="
        h-1.5 w-1.5 rounded-full bg-cyan-400
        transition-all duration-300
        group-hover:w-3
      "
    />

    {children}
  </Link>
);

/* SPORT ITEM */

const SportItem = ({ title, emoji }) => (
  <div
    className="
      flex items-center justify-center gap-3 rounded-2xl
      border border-slate-100
      bg-white/70 px-4 py-3
      shadow-sm
      transition-all duration-300
      hover:-translate-y-1
      hover:border-cyan-200
      hover:shadow-lg hover:shadow-cyan-100/40
      w-full
    "
  >
    <span className="text-lg">{emoji}</span>

    <span className="font-medium">{title}</span>
  </div>
);

/* CONTACT ITEM */

const ContactItem = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-left">

    <div
      className="
        flex h-11 w-11 items-center justify-center
        rounded-2xl bg-gradient-to-br
        from-cyan-500 to-blue-600
        text-white shadow-lg
      "
    >
      {icon}
    </div>

    <p className="leading-7">{text}</p>

  </div>
);

export default Footer;