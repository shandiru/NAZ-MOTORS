"use client";

import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function InfoCard({ icon, title, subtitle, body, cta, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      tabIndex={0}
      className="
        flex flex-col gap-4 md:gap-5 rounded-xl border py-6 md:py-5 text-center cursor-pointer
        transition-all duration-300 
        bg-[#F7F7F7] dark:bg-neutral-900 
        border-[#E6EAE7] dark:border-neutral-700 
        hover:shadow-[0_8px_24px_rgba(200,16,46,0.35)] 
        hover:ring-2 hover:ring-[#C8102E] hover:ring-offset-2
        focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2
      "
    >
      <div className="px-4 md:px-5">
        {/* ICON */}
        <div
          className="mx-auto mb-3 md:mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg 
                     bg-[#FBE9EB] dark:bg-[#3B0E13] 
                     text-[#C8102E] dark:text-[#FF6B6B]"
        >
          {icon}
        </div>

        {/* TITLE */}
        <div className="text-lg md:text-xl font-bold text-[#111827] dark:text-white">
          {title}
        </div>

        {/* SUBTITLE */}
        {subtitle && (
          <div className="text-xs md:text-sm text-[#4B5563] dark:text-gray-400">
            {subtitle}
          </div>
        )}
      </div>

      {/* BODY + CTA */}
      <div className="px-4 md:px-5 space-y-3">
        {body && (
          <p className="text-xs md:text-sm whitespace-pre-line text-[#111827] dark:text-gray-200">
            {body}
          </p>
        )}
        {cta}
      </div>
    </div>
  );
}

export default function ContactCards() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-12 md:py-14 lg:py-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {/* Call Us */}
          <InfoCard
            delay="0"
            icon={<FaPhone className="h-5 w-5 md:h-6 md:w-6" />}
            title="Call Us"
            subtitle="Speak directly with our team"
            body="0116 251 5961"
            cta={
              <a href="tel:01162515961">
                <button
                  className="h-9 rounded-md border px-3 text-xs md:text-sm font-medium 
                             transition-all duration-300 
                             border-[#E6EAE7] dark:border-neutral-700 
                             text-[#111827] dark:text-white 
                             bg-transparent 
                             hover:border-[#C8102E] hover:text-[#C8102E] dark:hover:text-[#FF6B6B] 
                             hover:shadow-[0_6px_18px_rgba(200,16,46,0.35)]
                             focus:border-[#C8102E] focus:text-[#C8102E] focus:shadow-[0_6px_18px_rgba(200,16,46,0.35)]
                "
                >
                  Call Now
                </button>
              </a>
            }
          />

          {/* Visit Us */}
          <InfoCard
            delay="150"
            icon={<FaMapMarkerAlt className="h-5 w-5 md:h-6 md:w-6" />}
            title="Visit Us"
            subtitle="Find us in Leicester"
            body={`Naz Motors Ltd\n80 Ravensbridge Drive\nLeicester LE4 0BX`}
            cta={
              <a
                href="https://www.google.com/maps/place/80+Ravensbridge+Dr,+Leicester/@52.645302,-1.142423,14z/data=!4m5!3m4!1s0x487760fba7418895:0xed69d527bfa6398f!8m2!3d52.6466316!4d-1.1449763?hl=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="h-9 rounded-md border px-3 text-xs md:text-sm font-medium 
                             transition-all duration-300 
                             border-[#E6EAE7] dark:border-neutral-700 
                             text-[#111827] dark:text-white 
                             bg-transparent 
                             hover:border-[#C8102E] hover:text-[#C8102E] dark:hover:text-[#FF6B6B] 
                             hover:shadow-[0_6px_18px_rgba(200,16,46,0.35)]
                             focus:border-[#C8102E] focus:text-[#C8102E] focus:shadow-[0_6px_18px_rgba(200,16,46,0.35)]
                "
                >
                  Get Directions
                </button>
              </a>
            }
          />

          {/* Opening Hours */}
          <InfoCard
            delay="300"
            icon={<FaClock className="h-5 w-5 md:h-6 md:w-6" />}
            title="Opening Hours"
            subtitle="We're here when you need us"
            body={`Mon – Sat: 09:00 – 18:00\nSun: Appointment Only`}
            cta={
              <span className="text-xs md:text-sm text-[#4B5563] dark:text-gray-400">
                No appointment needed on weekdays
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
