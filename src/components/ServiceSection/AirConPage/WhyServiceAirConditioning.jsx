"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceAirConditioning = () => {
  return (
    <section className="py-16 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-black dark:text-white">
              Why Service Your Air <br /> Conditioning?
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-[#333333] dark:text-[#CCCCCC]">
              Regular air conditioning maintenance ensures optimal performance,
              prevents costly repairs, and maintains healthy air quality in your
              vehicle cabin.
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
                  <FaCheckCircle className="w-5 h-5 text-[#B62025] dark:text-[#FF4B4B]" />
                  <span className="text-black dark:text-[#EEEEEE] font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Signs Box */}
            <div
              className="rounded-xl p-8 shadow-sm transition-all duration-300
                         bg-[#F8F8F8] dark:bg-[#111111]
                         border border-[#E5E5E5] dark:border-[#222222]"
            >
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Signs You Need Air-Con Service
              </h3>
              <ul className="space-y-4 text-[#333333] dark:text-[#CCCCCC]">
                {[
                  "Weak or warm air from vents",
                  "Unusual odours when AC is running",
                  "Strange noises from air conditioning",
                  "Excessive moisture or fogging",
                  "System hasn't been serviced in 2+ years",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-[#B62025] dark:bg-[#FF4B4B]" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gas Types */}
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
                  className="rounded-lg p-5 shadow-sm transition-all duration-300
                             bg-[#F8F8F8] dark:bg-[#111111]
                             border border-[#E5E5E5] dark:border-[#222222]"
                >
                  <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                    {gas.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#333333] dark:text-[#CCCCCC]">
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
