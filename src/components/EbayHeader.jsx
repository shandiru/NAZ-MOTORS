// File: src/components/GarageNav.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function EbayHeader() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [svcOpenMobile, setSvcOpenMobile] = useState(false);

  const phoneNumber = "01162515961";
  const phoneDisplay = "0116 251 5961";
  const mapAddress = "https://goo.gl/maps/your-actual-link"; // Update with real link

  const NavLink = ({ href, children, className = "" }) => (
    <a
      href={href}
      className={`font-medium tracking-wide transition-colors duration-200 py-2 lg:px-3 rounded-md ${className} hover:text-[#B62025] dark:hover:text-[#FF4B4B]`}
    >
      {children}
    </a>
  );

  const ServiceLinks = ({ itemClass = "block px-4 py-3 text-sm" }) => (
    <>
      <a href="/services/mot" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>MOT</a>
      <a href="/services/car-scrapping" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Car Scrapping</a>
      <a href="/services/service" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Service</a>
      <a href="/services/mechanical-repairs" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Mechanical Repairs</a>
      <a href="/services/tyres" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Tyres</a>
      <a href="/services/all-second-hand-car-parts" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Used Parts</a>
      <a href="/services/aircon-re-gas-service" className={`${itemClass} hover:bg-[#B62025] hover:text-white`}>Aircon Service</a>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 shadow-xl bg-white dark:bg-black text-slate-800 dark:text-white border-b border-gray-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 z-50">
            <img
              src="/next.png"
              alt="nazmotors"
              className="h-18 w-auto object-contain"
            />
          </a>

          {/* DESKTOP NAV (Hidden < 1024px) */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink className="font-bold text-gray-600" href="/"><span className="font-bold text-gray-600">Home</span></NavLink>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
              <button className="flex items-center gap-1 font-medium px-3 py-2 hover:text-[#B62025] dark:hover:text-[#FF4B4B] transition-colors">
                <span className="font-bold text-gray-600">Services</span>
                <FaChevronDown className={`h-3 w-3 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
              </button>

              {svcOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg shadow-2xl overflow-hidden text-slate-800 dark:text-white">
                    <ServiceLinks />
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/contact"><span className="font-bold text-gray-600">Contact</span></NavLink>
            <NavLink  href="/car-sales"><span className="font-bold text-gray-600">Car Sales</span></NavLink>
            <a target="_blank" className="font-bold text-gray-600" href="https://www.ebay.co.uk/str/nextdaypartsltd?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=7zQt8k5DSfu&sssrc=3418065&ssuid=7zQt8k5DSfu&stype=1&widget_ver=artemis&media=WHATS_APP">Shop</a>
          </div>

          {/* RIGHT UTILITIES (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="text-[#B62025] dark:text-[#FF4B4B] font-bold flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <span>{phoneDisplay}</span>
            </a>
            <ThemeToggle />
          </div>

          {/* MOBILE TOGGLE (Visible < 1024px) */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-2xl focus:outline-none text-[#B62025] dark:text-[#FF4B4B]"
              aria-label="Toggle Menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-black border-t dark:border-white/10 ${
          open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          <a href="/" className="text-lg font-semibold border-b pb-2 dark:border-white/5">Home</a>
          
          {/* Mobile Services Accordion */}
          <div>
            <button 
              onClick={() => setSvcOpenMobile(!svcOpenMobile)}
              className="flex items-center justify-between w-full text-lg font-semibold border-b pb-2 dark:border-white/5"
            >
              <span>Services</span>
              <FaChevronDown className={`transition-transform ${svcOpenMobile ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all bg-gray-50 dark:bg-zinc-900/50 ${svcOpenMobile ? "max-h-96" : "max-h-0"}`}>
              <ServiceLinks itemClass="block px-6 py-3 text-base border-b border-gray-100 dark:border-white/5" />
            </div>
          </div>

          <a href="/contact" className="text-lg font-semibold border-b pb-2 dark:border-white/5">Contact</a>
          <a href="/car-sales" className="text-lg font-semibold border-b pb-2 dark:border-white/5">Car Sales</a>
          <a target="_blank" href="https://www.ebay.co.uk/str/nextdaypartsltd?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=7zQt8k5DSfu&sssrc=3418065&ssuid=7zQt8k5DSfu&stype=1&widget_ver=artemis&media=WHATS_APP" className="text-lg font-semibold border-b pb-2 dark:border-white/5">Shop</a>

          {/* Mobile Contact Info */}
          <div className="mt-6 space-y-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 p-4 rounded-xl bg-[#B62025] text-white">
              <FaPhoneAlt />
              <span className="font-bold">{phoneDisplay}</span>
            </a>
            <a href={mapAddress} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-zinc-800 text-sm">
              <FaMapMarkerAlt className="text-[#B62025] dark:text-[#FF4B4B] shrink-0" />
              <span>80 Ravensbridge Drive, Leicester, LE4 0BX</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}