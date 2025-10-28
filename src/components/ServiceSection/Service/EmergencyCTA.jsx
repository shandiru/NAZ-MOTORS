"use client";

import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#C8102E",        // Naz Motors Red
  fgOnPrimary: "#FFFFFF",    // White on red
  secondaryBg: "#FFB3B3",    // Light red button background
  secondaryText: "#3B0000",  // Dark text for secondary button
  outline: "#FFFFFF",        // White outline for transparent button
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-[#C8102E] dark:bg-[#9B0D24]"
      style={{ color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white dark:text-white">
          Book Your Service or MOT Today
        </h2>

        {/* Subheading */}
        <p className="text-xl mb-8 opacity-90 text-white dark:text-gray-100">
          Professional automotive services from qualified technicians with over
          50 years of experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a href="tel:01162515961" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#C8102E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = palette.secondaryBg;
                e.currentTarget.style.color = palette.secondaryText;
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call 0116 251 5961
            </button>
          </a>

          {/* Book MOT Button */}
          <a href="/contact" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: palette.fgOnPrimary,
                border: `1px solid ${palette.outline}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#C8102E";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = palette.fgOnPrimary;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book MOT Test
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
