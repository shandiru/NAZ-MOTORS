// File: src/components/GarageNav.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronDown, FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function GarageNav() {
  const brandGreen = "black";
  const hoverLite = "rgba(255,255,255,0.88)";
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [svcOpenMobile, setSvcOpenMobile] = useState(false);

  const phoneNumber = "01162515961";
  const phoneDisplay = "0116 251 5961";
  const mapAddress =
    "https://www.google.com/maps/place/80+Ravensbridge+Dr,+Leicester+LE4+0BX,+UK/@52.645302,-1.142423,4227m/data=!3m1!1e3!4m6!3m5!1s0x487760fc94056987:0xf8d8521c2c0f03ff!8m2!3d52.6454928!4d-1.1417053!16s%2Fg%2F11bw4182fq?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D";

  const NavLink = ({ href, children, className = "" }) => (
    <a
      href={href}
      className={`font-medium tracking-wide text-center transition-colors duration-200 block py-2 rounded ${className}`}
      style={{ color: "#FFFFFF" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverLite)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
    >
      {children}
    </a>
  );

  const ServiceLinks = ({ itemClass = "block px-4 py-2 text-sm text-center" }) => (
    <>
      <a href="/services/mot" className={`${itemClass} hover:bg-[#C8102E]`}>MOT</a>
      <a href="/services/car-scrapping" className={`${itemClass} hover:bg-[#C8102E]`}>Car Scrapping</a>
      <a href="/services/service" className={`${itemClass} hover:bg-[#C8102E]`}>Service</a>
      <a href="/services/mechanical-repairs" className={`${itemClass} hover:bg-[#C8102E]`}>Mechanical Repairs (All)</a>
      <a href="/services/tyres" className={`${itemClass} hover:bg-[#C8102E]`}>Tyres</a>
      <a href="/services/all-second-hand-car-parts" className={`${itemClass} hover:bg-[#C8102E]`}>All Second Hand Car Parts</a>
      <a href="/services/aircon-re-gas-service" className={`${itemClass} hover:bg-[#C8102E]`}>Aircon re-gas/service</a>
    </>
  );

  return (
    <nav
      className="sticky top-0 z-50 shadow-md dark:shadow-black/40"
      style={{ background: `linear-gradient(0deg, ${brandGreen}, ${brandGreen})`, color: "#FFFFFF" }}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-8">
        {/* TOP BAR */}
        <div className="flex h-14 sm:h-16 md:h-20 items-center gap-2">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo.png"
              alt="nazmotors"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain rounded-md bg-black/70 p-1 shadow-sm"
            />
          </a>

          {/* Desktop Nav (lg+) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-2 sm:gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>
             <NavLink href="/buydetail">BuyDetail</NavLink>
            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSvcOpen((prev) => !prev)}
                className="flex items-center gap-1 font-medium px-3 py-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                style={{ color: "#FFFFFF" }}
                aria-haspopup="menu"
                aria-expanded={svcOpen}
              >
                <span>Services</span>
                <FaChevronDown className={`h-4 w-4 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`} />
              </button>

              {svcOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md border border-white/20 shadow-xl overflow-hidden z-50"
                  style={{ backgroundColor: brandGreen, color: "#FFFFFF" }}
                  role="menu"
                >
                  <div className="py-2">
                    <ServiceLinks />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Utilities (lg+) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4 ml-auto">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-xs sm:text-sm bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span>{phoneDisplay}</span>
            </a>
            <a
              href={mapAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>80 Ravensbridge Drive
                Leicester
                LE4 0BX</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet Hamburger */}
          <div className="lg:hidden ml-auto">
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white/95 hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              onClick={() => setOpen((v) => !v)}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET PANEL */}
      <div
        className="lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-white/10"
        style={{ maxHeight: open ? "480px" : "0px", backgroundColor: brandGreen }}
      >
        <div className="px-4 py-4 flex flex-col items-center gap-3 text-center">
          <NavLink href="/" className="w-full">Home</NavLink>
          <NavLink href="/contact" className="w-full">Contact</NavLink>

          <button
            className="flex items-center justify-center gap-2 w-full text-center font-medium py-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            style={{ color: "#FFFFFF" }}
            onClick={() => setSvcOpenMobile((v) => !v)}
          >
            <span>Services</span>
            <FaChevronDown className={`h-4 w-4 transition-transform ${svcOpenMobile ? "rotate-180" : ""}`} />
          </button>

          {/* Service Submenu */}
          <div
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out w-full"
            style={{ maxHeight: svcOpenMobile ? "280px" : "0px" }}
          >
            <div className="flex flex-col py-1 text-white/95 items-center">
              <ServiceLinks itemClass="py-2 px-3 text-sm hover:bg-[#C8102E] rounded text-center w-full" />
            </div>
          </div>

          {/* Contact + ThemeToggle */}
          <div className="mt-4 pt-3 border-t border-white/15 w-full grid gap-2 text-sm">
            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
              <FaPhoneAlt className="h-4 w-4" />
              <span>{phoneDisplay}</span>
            </a>
            <a
              href={mapAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-md transition-colors"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>80 Ravensbridge Drive Leicester, LE4 0BX</span>
            </a>
            <div className="pt-1 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
