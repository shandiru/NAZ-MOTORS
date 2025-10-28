"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceAllSecond = () => {
  return (
    <section className="py-16 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-black dark:text-white">
              Why Choose Naz Motors <br /> for Used Car Parts?
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-[#333333] dark:text-[#CCCCCC]">
              At Naz Motors, we go beyond just selling used car parts — we provide trust, quality, 
              and a personal service that keeps your vehicle running smoothly. 
              With a vast inventory and a dedicated team, we make sure you always get the right part, 
              the first time.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Extensive range of parts",
                "Quick nationwide delivery",
                "Tested & quality assured components",
                "Friendly and helpful support team",
                "Affordable prices you can trust",
                "Fast sourcing for hard-to-find parts",
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
            {/* Info Box */}
            <div
              className="rounded-xl p-8 shadow-sm transition-all duration-300
                         bg-[#F8F8F8] dark:bg-[#111111]
                         border border-[#E5E5E5] dark:border-[#222222]"
            >
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Why Customers Trust Us
              </h3>
              <ul className="space-y-4 text-[#333333] dark:text-[#CCCCCC]">
                {[
                  "Family-owned and operated business",
                  "Decades of experience in the motor trade",
                  "Customer-centred service approach",
                  "Transparent pricing and honest advice",
                  "Reliable after-sales support and guidance",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-[#B62025] dark:bg-[#FF4B4B]" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Highlights */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Family-Owned Values",
                  desc: "As a family-run business, we bring honesty, integrity, and personal care to every interaction — you’re part of our community.",
                },
                {
                  title: "Customer-Centred Approach",
                  desc: "Our customers are at the heart of everything we do. We take time to understand your needs and deliver tailored solutions you can rely on.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 shadow-sm transition-all duration-300
                             bg-[#F8F8F8] dark:bg-[#111111]
                             border border-[#E5E5E5] dark:border-[#222222]"
                >
                  <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#333333] dark:text-[#CCCCCC]">
                    {item.desc}
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

export default WhyServiceAllSecond;
