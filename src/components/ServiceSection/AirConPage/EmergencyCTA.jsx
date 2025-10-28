"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#B62025",   // Naz Motors Red
  hover: "#7C1419",     // Darker hover red
  text: "#FFFFFF",      // White text
  outline: "#FFFFFF",   // White border for secondary button
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16 text-center transition-colors duration-300"
      style={{ backgroundColor: palette.primary, color: palette.text }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Keep Cool with Professional Air-Con Service
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Expert air conditioning services from qualified technicians using professional equipment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a href="tel:01162515961" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all shadow-md hover:scale-105"
              style={{
                backgroundColor: "#FFFFFF",
                color: palette.primary,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = palette.hover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFFFFF")
              }
            >
              <FaPhone className="h-5 w-5" />
              Call 01162515961
            </button>
          </a>

          {/* Book Air-Con Button */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-300"
            style={{
              borderColor: palette.outline,
              color: palette.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = palette.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = palette.text;
            }}
          >
            Book Air-Con Service
          </a>
        </div>
      </div>
    </section>
  );
}
