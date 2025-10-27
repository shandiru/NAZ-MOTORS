"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceAirConditioning = () => {
  return (
    <section
      className="py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--aircon-section-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-[color:var(--aircon-heading)]">
              Why Service Your Air <br /> Conditioning?
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-[color:var(--aircon-muted)]">
              Regular air conditioning maintenance ensures optimal performance, prevents costly repairs,
              and maintains healthy air quality in your vehicle cabin.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Improved cabin comfort",
                "Better air quality",
                "Reduced fuel consumption",
                "Extended system life",
                "Prevents costly repairs",
                "Year-round comfort",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-[color:var(--aircon-check-icon)]" />
                  <span className="text-[color:var(--aircon-heading)]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Signs Box */}
            <div
              className="rounded-xl p-8 shadow-sm transition-colors duration-300"
              style={{
                backgroundColor: "var(--aircon-card-bg)",
                border: "1px solid var(--aircon-card-border)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[color:var(--aircon-heading)]">
                Signs You Need Air-Con Service
              </h3>
              <ul className="space-y-4 text-[color:var(--aircon-muted)]">
                {[
                  "Weak or warm air from vents",
                  "Unusual odours when AC is running",
                  "Strange noises from air conditioning",
                  "Excessive moisture or fogging",
                  "System hasn't been serviced in 2+ years",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-[color:var(--aircon-check-icon)]" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GAS TYPES */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "R1234YF",
                  desc: "The latest eco-friendly air con gas designed to keep your car cool while being kinder to the environment.",
                },
                {
                  title: "R134A",
                  desc: "A reliable air con gas used in many cars to deliver strong, consistent cooling.",
                },
              ].map((gas, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 shadow-sm transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--aircon-card-bg)",
                    border: "1px solid var(--aircon-card-border)",
                  }}
                >
                  <h4 className="text-lg font-bold mb-2 text-[color:var(--aircon-heading)]">
                    {gas.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[color:var(--aircon-muted)]">
                    {gas.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default WhyServiceAirConditioning;
