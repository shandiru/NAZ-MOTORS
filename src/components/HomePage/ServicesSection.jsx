"use client";

import React, { useEffect } from "react";
import {
  FaRecycle,
  FaCar,
  FaCogs,
  FaTools,
  FaTachometerAlt,
  FaSnowflake,
  FaWarehouse,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ icon, title, desc, bullets = [], href = "#" }) => (
  <div
    data-aos="fade-up"
    tabIndex={0}
    className="
      group flex flex-col h-full rounded-2xl border cursor-pointer
      border-[var(--brand-border)]
      bg-[var(--brand-bg)]
      text-[var(--brand-text)]
      shadow-sm transition-all duration-300
      hover:shadow-lg hover:border-[var(--brand-accent)]
      hover:ring-2 hover:ring-[var(--brand-accent)]
      hover:ring-offset-2 hover:ring-offset-[var(--brand-bgSoft)]
      hover:shadow-[var(--shadow-accent)]
      focus:ring-2 focus:ring-[var(--brand-accent)]
      focus:ring-offset-2 focus:ring-offset-[var(--brand-bgSoft)]
      active:ring-2 active:ring-[var(--brand-accent)]
    "
    onClick={() => (window.location.href = href)}
  >
    {/* Header */}
    <div className="px-6 pt-6 text-center">
      <div
        className="
          mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-4
          bg-[var(--brand-accentSoft)] text-[var(--brand-accent)]
        "
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2">{title}</div>
    </div>

    {/* Body */}
    <div className="px-6 flex-grow space-y-4">
      <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
        {desc}
      </p>

      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-xs flex items-center text-[var(--brand-muted)]"
            >
              <span className="w-1 h-1 rounded-full mr-2 flex-shrink-0 bg-[var(--brand-accent)]" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Footer */}
    <div className="px-6 pt-6 pb-6 mt-auto">
      <button
        className="
          inline-flex items-center justify-center w-full h-10 rounded-md gap-2 text-sm font-medium
          border border-[var(--brand-border)]
          bg-transparent text-[var(--brand-text)]
          transition-all duration-300
          hover:bg-[var(--brand-accent)] hover:text-white hover:border-[var(--brand-accent)]
          hover:shadow-[var(--hover-shadow)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]
          focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-bgSoft)]
        "
      >
        Learn More
        <FaArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });

    // 🌗 Handle dark/light mode without global CSS
    const updateTheme = () => {
      const html = document.documentElement;
      const section = document.querySelector("#services-section");
      if (!section) return;

      const dark = html.classList.contains("dark");
      const vars = dark
        ? {
            "--brand-bgSoft": "#0C0C0C",
            "--brand-bg": "#111111",
            "--brand-text": "#FFFFFF",
            "--brand-muted": "#CCCCCC",
            "--brand-border": "#333333",
            "--brand-accent": "#C8102E",
            "--brand-accentSoft": "rgba(200,16,46,0.2)",
            "--shadow-accent": "0 6px 20px rgba(200,16,46,0.4)",
            "--hover-shadow": "0 8px 25px rgba(200,16,46,0.4)",
          }
        : {
            "--brand-bgSoft": "#FFFFFF",
            "--brand-bg": "#FFFFFF",
            "--brand-text": "#000000",
            "--brand-muted": "#3B3B3B",
            "--brand-border": "#E5E5E5",
            "--brand-accent": "#C8102E",
            "--brand-accentSoft": "rgba(200,16,46,0.1)",
            "--shadow-accent": "0 6px 20px rgba(200,16,46,0.25)",
            "--hover-shadow": "0 8px 25px rgba(200,16,46,0.35)",
          };

      Object.entries(vars).forEach(([key, val]) =>
        section.style.setProperty(key, val)
      );
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-section"
      className="py-16 bg-[var(--brand-bgSoft)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down" id="service">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--brand-text)]">
            Our Professional Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-[var(--brand-muted)]">
            Expert automotive solutions under one roof — reliable, affordable, and environmentally responsible.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <Card
            icon={<FaRecycle className="h-6 w-6" />}
            title="Car Scrapping (ATF)"
            desc="We specialise in professional car scrapping, offering a hassle-free solution for disposing of old or unwanted vehicles. As an Authorised Treatment Facility (ATF), we recycle responsibly and provide free collection services."
            bullets={[
              "Authorised Treatment Facility",
              "Eco-friendly & sustainable",
              "Free vehicle collection",
              "Environmentally compliant",
            ]}
            href="/services/car-scrapping"
          />

          <Card
            icon={<FaCar className="h-6 w-6" />}
            title="MOT"
            desc="Dependable and efficient service to keep you and your vehicle safe. Our certified technicians ensure your car meets all safety and emission standards quickly and reliably."
            bullets={[
              "Certified MOT testers",
              "Fast & convenient service",
              "Transparent pricing",
              "Comprehensive inspection",
            ]}
            href="/services/mot"
          />

          <Card
            icon={<FaCogs className="h-6 w-6" />}
            title="Service"
            desc="Ensure your car performs at its best with our thorough and dependable servicing. We go beyond routine maintenance to deliver expert care customised to your vehicle’s needs."
            bullets={[
              "Personalised vehicle service",
              "Fast turnaround",
              "Premium components used",
              "Maintenance & repair expertise",
            ]}
            href="/services/service"
          />

          <Card
            icon={<FaTools className="h-6 w-6" />}
            title="Mechanical Repairs (All)"
            desc="Whatever the problem, our expert technicians are here to solve it. From regular servicing to complex mechanical repairs, we handle every challenge with precision and care."
            bullets={[
              "All major & minor repairs",
              "Engine & gearbox",
              "Suspension & brakes",
              "Specialist expertise",
            ]}
            href="/services/mechanical-repairs"
          />

          <Card
            icon={<FaTachometerAlt className="h-6 w-6" />}
            title="Tyres"
            desc="Top-notch service with unbeatable value! Choose from a wide selection of quality new and budget-friendly tyres, including balancing and alignment for safety and performance."
            bullets={[
              "New & budget tyres",
              "Wheel alignment & balancing",
              "Eco-friendly disposal",
              "Customer-centred approach",
            ]}
            href="/services/tyres"
          />

          <Card
            icon={<FaWarehouse className="h-6 w-6" />}
            title="All Second Hand Car Parts"
            desc="Looking for quality used car parts? With vast stock across Leicestershire, we’re confident we have what you need. If not, we’ll source it fast — with next-day delivery or in-house collection."
            bullets={[
              "Huge stock inventory",
              "Next-day delivery",
              "Friendly sales team",
              "Family-owned & customer-first",
            ]}
            href="/services/second-hand-parts"
          />

          <Card
            icon={<FaSnowflake className="h-6 w-6" />}
            title="Air-con Re-gas / Service"
            desc="Keep your cool with our professional air-con recharge and servicing. We restore optimal cooling performance quickly, with reliable diagnostics and eco-friendly practices."
            bullets={[
              "Air-con recharge",
              "Leak detection",
              "System diagnostics",
              "Quick turnaround",
            ]}
            href="/services/aircon"
          />
        </div>
      </div>
    </section>
  );
}
