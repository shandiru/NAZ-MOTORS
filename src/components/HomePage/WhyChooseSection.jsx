"use client";

import React, { useEffect } from "react";
import { FaClock, FaUsers, FaAward, FaShieldAlt, FaCarSide } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });

    // 🌗 Handle dark/light mode for inline variables
    const updateTheme = () => {
      const html = document.documentElement;
      const section = document.querySelector("#whychoose-section");
      if (!section) return;

      const dark = html.classList.contains("dark");
      const vars = dark
        ? {
            "--brand-bgSoft": "#0C0C0C",
            "--card-bg": "#111111",
            "--brand-text": "#FFFFFF",
            "--brand-muted": "#CCCCCC",
            "--brand-border": "#333333",
            "--brand-green": "#C8102E",
            "--brand-greenSoft": "rgba(200,16,46,0.2)",
            "--shadow-green": "0 6px 20px rgba(200,16,46,0.4)",
          }
        : {
            "--brand-bgSoft": "#FFFFFF",
            "--card-bg": "#FFFFFF",
            "--brand-text": "#000000",
            "--brand-muted": "#3B3B3B",
            "--brand-border": "#E5E5E5",
            "--brand-green": "#C8102E",
            "--brand-greenSoft": "rgba(200,16,46,0.1)",
            "--shadow-green": "0 6px 20px rgba(200,16,46,0.25)",
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
      id="whychoose-section"
      className="py-16 bg-[var(--brand-bgSoft)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--brand-text)]">
            Why Choose Naz Motors?
          </h2>
          <p className="text-lg text-[var(--brand-muted)] max-w-3xl mx-auto leading-relaxed">
            As a family-run business with over two decades of experience, Naz Motors has built a reputation
            on professionalism, transparency, and trust. Our expert team treats every vehicle with care,
            precision, and pride.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card
            icon={<FaClock className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Decades of Experience"
            text="Over 20 years of trusted automotive expertise"
          />
          <Card
            icon={<FaUsers className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Family-Owned"
            text="Friendly, honest service with personal care"
          />
          <Card
            icon={<FaAward className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Certified Technicians"
            text="Highly qualified mechanics and MOT testers"
          />
          <Card
            icon={<FaShieldAlt className="h-6 w-6 text-[var(--brand-green)]" />}
            title="All Makes & Models"
            text="Cars, commercial vehicles, and specialist repairs"
          />
          <Card
            icon={<FaCarSide className="h-6 w-6 text-[var(--brand-green)]" />}
            title="Customer-Focused"
            text="We go the extra mile to ensure your satisfaction"
          />
        </div>

        {/* Bottom Panel */}
        <div
          className="bg-[var(--card-bg)] rounded-lg p-8 text-center border border-[var(--brand-border)]"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--brand-text)]">
            Professional Service You Can Trust
          </h3>
          <p className="text-[var(--brand-muted)] leading-relaxed max-w-2xl mx-auto">
            From quick diagnostics to complex repairs, Naz Motors provides reliable,
            efficient, and affordable service using advanced tools and genuine parts.
            We’re proud to serve Leicester and the surrounding areas with integrity
            and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div
      data-aos="zoom-in"
      tabIndex={0}
      className="
        flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center cursor-pointer
        border-[var(--brand-border)] bg-[var(--card-bg)] transition-all duration-300
        hover:shadow-[var(--shadow-green)] hover:ring-2 hover:ring-[var(--brand-green)]
        hover:ring-offset-2 hover:ring-offset-[var(--brand-bgSoft)]
        active:shadow-[var(--shadow-green)] active:ring-2 active:ring-[var(--brand-green)]
        active:ring-offset-2 active:ring-offset-[var(--brand-bgSoft)]
        focus:shadow-[var(--shadow-green)] focus:ring-2 focus:ring-[var(--brand-green)]
        focus:ring-offset-2 focus:ring-offset-[var(--brand-bgSoft)]
      "
    >
      <div className="px-6 pt-6">
        <div className="mx-auto w-12 h-12 bg-[var(--brand-greenSoft)] rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-2 text-[var(--brand-text)]">{title}</h3>
        <p className="text-sm text-[var(--brand-muted)]">{text}</p>
      </div>
    </div>
  );
}
