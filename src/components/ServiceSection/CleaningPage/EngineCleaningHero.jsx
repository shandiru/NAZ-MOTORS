"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function EngineCleaningHero() {
  return (
    <section
      className="
        py-16 transition-colors duration-300 bg-gradient-to-b
        from-[var(--aircon-grad-top)] to-[var(--aircon-grad-bottom)]
        dark:from-[var(--aircon-grad-top-dark)] dark:to-[var(--aircon-grad-bottom-dark)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-0.5 text-xs font-medium mb-4"
            style={{
              backgroundColor: "var(--aircon-badge-bg)",
              color: "var(--aircon-badge-text)",
            }}
          >
            Engine Performance Specialists
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "var(--aircon-heading)" }}
          >
            Engine{" "}
            <span style={{ color: "var(--aircon-primary)" }}>
              Cleaning Services
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--aircon-muted)" }}
          >
            Professional carbon cleaning, DPF cleaning, and EGR valve services
            to restore engine performance, improve fuel efficiency, and reduce
            emissions. Advanced cleaning technology for modern diesel and petrol
            engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button (Primary) */}
            <a href="tel:01162515961" className="inline-block">
              <button
                className="
                  inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold
                  transition-all duration-300
                  bg-[var(--aircon-primary)] text-white
                  hover:shadow-[0_6px_20px_rgba(47,125,51,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aircon-primary)]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aircon-grad-top)]
                  dark:focus-visible:ring-offset-[var(--aircon-grad-top-dark)]
                "
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: 01162515961
              </button>
            </a>

            {/* Quote Button (Outline) */}
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold
                transition-all duration-300 border
                bg-[var(--aircon-button-bg)] text-[var(--aircon-heading)] border-[var(--aircon-outline)]
                hover:bg-[var(--aircon-grad-bottom)]
                hover:shadow-[0_6px_20px_rgba(47,125,51,0.35)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aircon-primary)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aircon-grad-top)]
                dark:focus-visible:ring-offset-[var(--aircon-grad-top-dark)]
                no-underline
              "
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
