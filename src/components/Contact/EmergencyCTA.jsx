"use client";

import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const palette = {
  primary: "#C8102E",          // Naz Motors Red background
  fgOnPrimary: "#FFFFFF",      // White text on red
  secondaryBg: "#F4D6DA",      // Light red for call button
  secondaryText: "#8C0E1F",    // Deep red text on light red
  outline: "#FFFFFF",          // Outline color
};

export default function EmergencyCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          Need Immediate Assistance?
        </h2>

        <p
          data-aos="fade-up"
          className="text-xl mb-8 opacity-90"
        >
          Call us right away for urgent repairs, same-day appointments, or roadside support. 
          Naz Motors is here when you need us most.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="zoom-in"
        >
          {/* Call Now Button */}
          <a href="tel:01162515961" className="inline-block">
            <button
              className="
                inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold shadow
                transition-transform hover:scale-105 active:scale-105 focus:scale-105
              "
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call 0116 251 5961
            </button>
          </a>

          {/* Emergency Service Button */}
          <button
            onClick={() => window.open('tel:01162515961', '_self')}
            className="
              inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border
              transition duration-300 hover:bg-white hover:text-[#C8102E] 
              active:bg-white active:text-[#C8102E] focus:bg-white focus:text-[#C8102E]
            "
            style={{
              backgroundColor: "transparent",
              color: palette.fgOnPrimary,
              borderColor: palette.outline,
            }}
          >
            Emergency Service
          </button>
        </div>
      </div>
    </section>
  );
}
