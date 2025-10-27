"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function MotHero() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-gradient-to-b 
                 from-[#FAE8EA] to-[#FFFFFF]
                 dark:from-[#1A0004] dark:to-[#330009]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{
              backgroundColor: "#F5C7CB",
              color: "#7A0D1B",
            }}
          >
            Qualified Technicians
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6 text-[#111827] dark:text-white">
            Car Service &{" "}
            <span style={{ color: "#C8102E" }}>MOT Testing</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#4B5563] dark:text-gray-400">
            Trust <strong>Naz Motors</strong> to keep you and your vehicle safe. 
            Professional car servicing and MOT testing from certified motor technicians. 
            We ensure your car is roadworthy, reliable, and ready to perform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:01162515961" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-transform hover:scale-105 active:scale-105 focus:scale-105 shadow-sm"
                style={{
                  backgroundColor: "#C8102E",
                  color: "#FFFFFF",
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book MOT: 0116 251 5961
              </button>
            </a>

            {/* MOT Booking Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#C8102E",
                border: "1px solid #C8102E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C8102E";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(200,16,46,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#C8102E";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book Your MOT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
